import { HoudiniClient } from '$hoody';
import { PUBLIC_API_TOKEN, PUBLIC_BASE_API } from '$utils/constant';

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
