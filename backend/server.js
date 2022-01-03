const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./config/database");
const connectDatabase = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
