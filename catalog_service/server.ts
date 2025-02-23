import app from "./src/app";
import { logger } from "./src/utils";

const PORT = process.env.PORT || 9001;

export const StartServer = async () => {
  app.listen(PORT, () => {
    logger.info(`App is listening to ${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    logger.error(err);
    process.exit(1);
  });
};

StartServer().then(() => {
  logger.info("server is up");
});