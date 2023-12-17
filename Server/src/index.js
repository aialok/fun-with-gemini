import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import apiRoutes from "./routes/index.js";




const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use("/api", apiRoutes);

const ServerAndDatabase = async () => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    })

    // GeminiProVision();

}



ServerAndDatabase();