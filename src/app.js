import express from "express";
import "dotenv/config";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import swaggerDocuments from "./docs";
import routes from "./config/routes";

const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocuments));

//Routes
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`PORT: ${port}`);
});
