export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  URL_CURRENT: process.env.URL_CURRENT || "http://localhost",
  URL_SWAGGER:
    "http://localhost:8081" || `${process.URL_CURRENT}:${process.env.PORT}`,
  PORT: process.env.PORT || 8080,
  URL_SERVICE:
    process.env.URL_SERVICE ||
    "https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7",
  REDIS_HOST: process.env.REDIS_HOST || "localhost",
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_TIME: process.env.REDIS_TIME || 200,
};
