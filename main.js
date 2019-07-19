(async function () {
    const axios = require('axios')

    const {
        PLUGIN_PROJECT_API,
        PLUGIN_DEPLOY_IMAGE,
        RANCHER_ACCESS_KEY,
        RANCHER_SECRET_KEY
    } = process.env

    try {
        const workloadInfo = await axios.get(PLUGIN_PROJECT_API, {
            auth: {
                username: PLUGIN_ACCESS_KEY,
                password: PLUGIN_SECRET_KEY
            }
        })
        workloadInfo.data.containers.forEach(element => element.image = PLUGIN_DEPLOY_IMAGE)
        const workloadInfoNew = await axios.put(PLUGIN_PROJECT_API, workloadInfo.data, {
            auth: {
                username: PLUGIN_ACCESS_KEY,
                password: PLUGIN_SECRET_KEY
            }
        })
        console.log(workloadInfoNew.data)
    } catch (err) {
        setTimeout(() => {
            throw new Error("exited in code 1") // process.exit(1) 也可以
        })
    }
    
})()
