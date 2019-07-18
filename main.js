(async function () {
    const axios = require('axios')

    const {
        PLUGIN_PROJECT_API,
        PLUGIN_ACCESS_KEY,
        PLUGIN_SECRET_KEY,
        PLUGIN_DEPLOY_IMAGE
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
        console.error(err)
    }
})()
