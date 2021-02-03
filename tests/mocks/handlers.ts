// https://mswjs.io/docs/getting-started/mocks/rest-api
import { rest } from "msw";

const BASE_URL = process.env.VUE_APP_BASE_URL;

export const handlers = [
  // Handles a POST /login request

  rest.post(`${BASE_URL}/users/login`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(202)
    );
  }),

  rest.post(`${BASE_URL}/users/register`, (req, res, ctx) => {
    console.log(JSON.stringify(req));
    return res(
      // Respond with a 200 status code
      ctx.status(202),
      ctx.json("token456")
    );
  }),
];
