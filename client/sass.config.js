module.exports = {
  webpack: (config, _) => {
    const oneOfRule = config.module.rules.find((rule) =>
      Array.isArray(rule.oneOf)
    );
    if (oneOfRule) {
      const cssModuleRule = {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      };
      oneOfRule.oneOf.unshift(cssModuleRule);
    }
    return config;
  },
};
