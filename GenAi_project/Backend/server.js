require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()

async function startServer() {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT||3000}`);
        });
    }
    catch (err) {
        console.log("Database connection failed",err);
        process.exit(1)
    }
}

startServer()




