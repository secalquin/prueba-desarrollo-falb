import supertest from "supertest";
import app from "../app";

const api = supertest(app);

test("Validando si la respuesta es JSON", () => {
  api
    .get("/api/v1/commune/santiago")
    .expect(200)
    .expect("Content-Type", /json/);
});
