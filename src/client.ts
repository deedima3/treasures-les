import { PUBLIC_API_TOKEN, PUBLIC_BASE_API } from '$env/static/public';
import { HoudiniClient } from '$hoody';

export default new HoudiniClient({
    url: PUBLIC_BASE_API,
    fetchParams() {
        return {
            headers: {
                Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
            }
        }
    }
})
