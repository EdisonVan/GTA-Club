// 处理接口的自定义配置
const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/api/**/*.action", {
      // 将以api开头和.action结尾的请求都带领到本地的4000端口
      target: "http://localhost:4000",
      pathRewrite(path) {
        // 修改请求的path
        return path.replace("/api", "/").replace(".action", ".json"); 
        // 将api去掉，然后将action替换为json
      }
    })
  );
};
