export default {
  get: {
    tags: [""],
    description: "GET Pharmacies By Commune Name",
    operationId: "getPharmaciesByCommuneName",
    parameters: [
      {
        name: "name",
        in: "path",
        schema: {
          $ref: "#/components/schemas/name",
        },
        required: true,
        description: "Commune name",
      },
    ],
    responses: {
      200: {
        description: "Farm were obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Response",
            },
          },
        },
      },
    },
  },
};
