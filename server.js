const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
// const chalk = require("chalk"); // chalk在高版本中采用了esm

(async () => {
  const { default: _chalk } = await import("chalk");
  console.log(_chalk.bgHex('#1A4D2E').dim('正在通过自定义服务启动Next\n'))
})();


const trickstormProxy = createProxyMiddleware({
  target: "https://httpfwd.dev1.n2games.cn/api",
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    "^/trickstorm/api": "", // 移除目标URL中的前缀
  },
});

const colorBANGProxy = createProxyMiddleware({
  target: "https://hkapi.limelightgame.com",
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    "^/colorBANG/api": "", // 移除目标URL中的前缀
  },
});

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use("/trickstorm/api", trickstormProxy);
    server.use("/colorBANG/api", colorBANGProxy);

    server.all("*", (req, res) => {
      handle(req, res);
    });

    server.listen(port, async (err) => {
      if (err) {
        throw err;
      }
      const { default: _chalk } = await import("chalk");
      console.log(
        _chalk.bgHex("#03AED2").dim("\nYour Application is running on > ") +
          _chalk.bgHex("#FEEFAD").bold("http://localhost:" + port + " \n")
      );
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
