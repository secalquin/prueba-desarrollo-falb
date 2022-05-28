import globalConfig from "../config/globalConfig";
export default {
  servers: [
    {
      url: globalConfig.URL_SWAGGER,
      description: globalConfig.NODE_ENV,
    },
  ],
};
