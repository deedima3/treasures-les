import { env } from '$env/dynamic/private';

export async function _insertDataToGsheet(email: string) {
  const response = await fetch(`${env.VITE_BACKEND_BASE_URL}/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });
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
        return response.status
      })
      .catch((error) => {
        return error.response?.status || 500;
      });
  }
};
