import getFarmacias from "./get-farmacias";

export default {
  paths: {
    "/api/v1/communes/{name}": {
      ...getFarmacias,
    },
  },
};
