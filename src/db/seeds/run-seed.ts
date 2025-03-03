import devData from "../data/test-data";
import seed from "./seed";
import db from "../connection";

const runSeed = async (): Promise<void> => {
  try {
    await seed(devData);
  } catch (error) {
    console.error("Error during seed:", error);
  } finally {
    await db.end();
  }
};

runSeed();
