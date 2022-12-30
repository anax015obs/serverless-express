import app from "./src";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, ".env.development"),
});

app.listen(3000, () => {
  console.log(`development server listening on port 3000`);
});
