import { app } from "./app";

const port: number = 3001;

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
