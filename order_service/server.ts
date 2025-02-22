import app from "./src/app";

const PORT = process.env.PORT || 9000;

export const StartServer = async () => {
  app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    console.log(err);
    process.exit(1);
  });
};

StartServer().then(() => {
  console.log("server is up");
});