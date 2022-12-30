import express from "express";
import { nfh, gh } from "./lib/errors";
import authRouter from "./routers/auth.router";

const app = express();

app.use(express.json());
app.get("/ping", (req: express.Request, res: express.Response) =>
  res.json({ message: "alive" })
);
app.use("/auth", authRouter);
app.use(nfh);
app.use(gh);

export default app;
