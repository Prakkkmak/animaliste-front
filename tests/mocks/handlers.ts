// https://mswjs.io/docs/getting-started/mocks/rest-api
import { rest } from "msw";

const BASE_URL = process.env.VUE_APP_BASE_URL;

export const handlers = [
  // Handles a POST /login request

  rest.post(`${BASE_URL}/users/login`, (req, res, ctx) => {
    const body = req.body as { mail: String; password: String };
    console.log(body);
    console.log(body.mail === "mail@test.fr" && body.password === "12345678");
    if (body.mail === "mail@test.fr" && body.password === "12345678") {
      console.log("a");
      return res(
        // Respond with a 200 status code
        ctx.status(202),
        ctx.text("token1234")
      );
    }
    return res(ctx.status(404));
  }),

  rest.post(`${BASE_URL}/users/register`, (req, res, ctx) => {
    return res(
      // Respond with a 202 status code
      ctx.status(202),
      ctx.json({ data: "token456" })
    );
  }),
];
