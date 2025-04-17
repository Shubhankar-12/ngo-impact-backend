import { app } from "./app";

const PORT = process.env.PORT;

app.listen(PORT, listener);
console.log("Server started");

function listener() {
  setTimeout(() => {
    const message = `WeDoGood-Backend Server is listening on PORT ${PORT}`;
    console.log(message);
  }, 500);
}
