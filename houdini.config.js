/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "https://api-ap-southeast-2.hygraph.com/v2/clk6jjqg7002d01uof08914ij/master"
    },
    "plugins": {
        "houdini-svelte": {}
    },
    "scalars" : {
        DateTime: {
            type: 'DateTime',
            marshal(val) {
                return val.toISOString()
            },
            unmarshal(val) {
                return new Date(val)
            },
        }
    }
}

export default config
