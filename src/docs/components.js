export default {
  components: {
    schemas: {
      name: {
        type: "string", // data type
        description: "Name of commune", // desc
        example: "Cerrillos", // example of an id
      },
      Response: {
        type: "object",
        properties: {
          local_nombre: {
            type: "string",
            description: "Name of the farm",
            example: "SALCOBRAND",
          },
          local_direccion: {
            type: "string",
            description: "Street address of the farm",
            example: "JOSE PEDRO ALESSANDRI 3430",
          },
          local_telefono: {
            type: "string",
            description: "The status of the todo",
            example: "false",
          },
          local_lat: {
            type: "string",
            description: "Farm latitude",
            example: "-33.485628",
          },
          local_lng: {
            type: "string",
            description: "Farm longitude",
            example: "-70.599306",
          },
        },
      },
    },
  },
};
