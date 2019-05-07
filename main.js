(async function () {
    const axios = require('axios')

    const {
        PLUGIN_PROJECT_API,
        PLUGIN_DEPLOY_IMAGE,
        RANCHER_ACCESS_KEY,
        RANCHER_SECRET_KEY
    } = process.env
    const workloadInfo = await axios.get(PLUGIN_PROJECT_API, {
        auth: {
            username: RANCHER_ACCESS_KEY,
            password: RANCHER_SECRET_KEY
        }
    })

    workloadInfo.data.containers.forEach(element => element.image = PLUGIN_DEPLOY_IMAGE)

    const workloadInfoNew = await axios.put(PLUGIN_PROJECT_API, workloadInfo.data, {
        auth: {
            username: RANCHER_ACCESS_KEY,
            password: RANCHER_SECRET_KEY
        }
    })

    console.log(workloadInfoNew.data)
})()
