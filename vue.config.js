module.exports = {
  assetsDir: "static-vue",
  devServer: {
    proxy: {
      "/api.php": {
        target: "http://scaffoldingconstruction.mym35.com/",
      },
    },
  },
};
