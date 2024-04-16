import pkg from "mongoose";
const { connection, connect } = pkg;

const createConnection = async (url) => {
  try {
    await connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    connection.once("open", () => {
      console.log(`Connected to MongoDB`);
    });

    connection.on("error", (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    return connection;
  } catch (err) {
    console.error(`Failed to connect to MongoDB: ${err}`);
    throw err;
  }
};

export default createConnection;
