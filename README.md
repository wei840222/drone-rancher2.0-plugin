# drone-rancher2.0-plugin

```
pipeline:
    deploy-on-rancher:
        image: hazel910159/drone-deploy-plugin:v3
        project_api: {your project API endpoint}
        secrets: [{Your rancher access key NAME}, {Your rancher secret key NAME}]
        access_key: ${Your rancher access key NAME}
        secret_key: ${Your rancher access key NAME}
```