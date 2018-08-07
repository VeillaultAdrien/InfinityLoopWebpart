## InfinityLoop-webpart

A SharePoint component to generate graph and schema for project using svg images.
This is project is made with the SharePoint Framerock, ReactJs and sp-client-custom-fields Library (https://oliviercc.github.io/sp-client-custom-fields).

For more informations about the SharePoint Frameorck see the official documentation : https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview

### Preview :
![Image](./InfinityLoopPreview.png?raw=true)

### Building the code

```bash
git clone https://github.com/VeillaultAdrien/InfinityLoopWebpart.git
npm i
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

```gulp clean
gulp test
gulp serve
gulp bundle
gulp package-solution
```

### License
This project is under the MIT License.
