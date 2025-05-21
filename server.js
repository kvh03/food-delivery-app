import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app config
const app=express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
app.use(cors())

app.use("/images", express.static(path.join(__dirname, 'assets')));

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
// app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
    console.log(req.method)
})

app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
});

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


// import express from "express";
// import path from 'path';
// import { fileURLToPath } from 'url';
// import cors from "cors"
// import foodRouter from "./routes/foodRoute.js"
// import userRouter from "./routes/userRoute.js"
// import cartRouter from "./routes/cartRoute.js"

// const app = express();
// const port = process.env.PORT || 4000;

// // Define __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Serve the assets folder for images
// app.use("/images", express.static(path.join(__dirname, 'assets')));

// // Other routes
// app.use("/api/food", foodRouter);
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);

// // Static assets for frontend
// app.use(express.static(path.join(__dirname, 'frontend', 'build')));
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
// });

// app.listen(port, () => {
//     console.log(`Server started on http://localhost:${port}`);
// });
