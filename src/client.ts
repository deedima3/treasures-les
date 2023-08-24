import { HoudiniClient } from '$hoody';

export default new HoudiniClient({
    url: import.meta.env.PUBLIC_BASE_API,
    fetchParams() {
        return {
            headers: {
                Authorization: `Bearer ${import.meta.env.PUBLIC_API_TOKEN}`,
            }
        }
    }
})
