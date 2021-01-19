const path = require("path");
const resolve = (dir) => path.resolve(__dirname, "..", dir);
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "../")
    });
    config.resolve.alias = {
      "@": resolve("src"), // 这样配置后 @ 可以指向 src 目录
    }

    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   loader: require.resolve("babel-loader"),
    //   options: {
    //     presets: [["react-app", { flow: false, typescript: true }]]
    //   }
    // });
    // config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};
