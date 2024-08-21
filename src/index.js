import express from "express"
import dotenv from "dotenv"
import axios from "axios"

const app = express()
app.use(express.json())
dotenv.config()

app.post("/api/apiURL", async (req, res) => {
    
    const {apiURL} = req.body;

    if (apiURL) {

        const {data} = await axios.get(apiURL)

        return res.status(200).json({
            data
        })
    }
    else {
        return res
          .status(400)
          .json({ message: "API URL is missing or has an invalid format" });
    }
    
})

app.listen(process.env.PORT, () => {
    console.log(`Application is listening on ${process.env.PORT} port`)
})