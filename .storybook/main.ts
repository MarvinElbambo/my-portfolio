import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["..\\public"],
  webpackFinal: async (webpackConfig) => {
    if (webpackConfig.resolve && webpackConfig.resolve.alias) {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        components: path.resolve(__dirname, "../src/components"),
        storybook: path.resolve(__dirname, "../.storybook"),
        styles: path.resolve(__dirname, "../src/styles"),
      };
    }

    if (webpackConfig?.module?.rules) {
      // This modifies the existing image rule to exclude .svg files
      // since you want to handle those files with @svgr/webpack
      const imageRule = webpackConfig.module.rules.find((rule) =>
        rule?.["test"]?.test(".svg")
      );
      if (imageRule) {
        imageRule["exclude"] = /\.svg$/;
      }

      // Configure .svg files to be loaded with @svgr/webpack
      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    return webpackConfig;
  },
};
export default config;
