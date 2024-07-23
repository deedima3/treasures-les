import { google } from 'googleapis';
import {
  GOOGLE_TYPE,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_PRIVATE_KEY_ID,
  GOOGLE_PROJECT_ID,
  GOOGLE_UNIVERSE_DOMAIN,
  GOOGLE_SPREADSHEET_ID,
  GOOGLE_SPREADSHEET_RANGE,
} from '$env/static/private';
import { getFormattedDateTime } from '$utils/utils.js';

export async function _insertDataToGsheet(email: string) {
  const auth = await google.auth.getClient({
    projectId: GOOGLE_PROJECT_ID,
    credentials: {
      "type": GOOGLE_TYPE,
      "project_id": GOOGLE_PROJECT_ID,
      "private_key_id": GOOGLE_PRIVATE_KEY_ID,
      "private_key": GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      "client_email": GOOGLE_CLIENT_EMAIL,
      "universe_domain": GOOGLE_UNIVERSE_DOMAIN,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const gsheets = google.sheets({ version: "v4", auth: auth });
  const response = await gsheets.spreadsheets.values.append({
    auth: auth,
    spreadsheetId: GOOGLE_SPREADSHEET_ID,
    range: GOOGLE_SPREADSHEET_RANGE,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          email, getFormattedDateTime('Asia/Makassar'),
        ],

      ]
    }
  })
  return response;
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    let email = data.get('email') as string | null;

    if (!email) {
      return 400;
    }

    _insertDataToGsheet(email)
      .then((response) => {
        return response.status;
      })
      .catch((error) => {
        return error.response?.status;
      });
  }
};
