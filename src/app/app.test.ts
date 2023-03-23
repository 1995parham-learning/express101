import request from "supertest";
import { app } from "./app";

describe("POST /api/replace", () => {
  it("Foo replaced by Bar", async () => {
    return request(app)
      .post("/api/replace")
      .send({ name: "Foo" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res: request.Response) => {
        expect(res.body).toMatchObject({
          name: "Bar",
        });
      });
  });
});
