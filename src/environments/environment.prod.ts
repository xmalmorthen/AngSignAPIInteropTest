export const environment = {
  production: true,
  apis: {
    signAPIInterop: {
      endPoint: `https://api-firmaelectronica.azurewebsites.net/index.php`,
      apiPrefix: `api`,
      apiVersion: `v1`
    }
  },
  sandbox: {
    signAPIInterop: {
      endPoint: `https://api-firmaelectronica.azurewebsites.net/assets/js/sandbox.js`
    }
  }
};
