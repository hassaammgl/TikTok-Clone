import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import cors from 'cors';
import bodyParser from 'body-parser';

// App config
const app = express();
const port = 4000 || process.env.PORT;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Orgin', "*"),
        res.setHeader('Access-Control-Allow-Headers', "*"),
        next()
})
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


// DB config
const connection_url = "mongodb://127.0.0.1:27017/TikTok";
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conected to DB');
}).catch((err) => {
    console.log(err);
})

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String
})

const tiktok = new mongoose.model("tiktok", tiktokSchema);

// api end points
app.get('/', (req, res) => {
    res.status(200).send('<h1>hello World!</h1>')
});

app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data)
})

app.get('/v2/posts', async (req, res) => {
    const dbVideos = await tiktok.find();
    res.status(200).json({
        success: true,
        dbVideos
    })
});


app.post('/v2/posts', async (req, res) => {
    const dbVideos = await tiktok.create(req.body)
    res.status(201).json({
        success: true,
        dbVideos
    })
});
// lisen
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

