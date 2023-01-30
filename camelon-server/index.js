import express from 'express';
const app = express();
import mysql from 'mysql';
import cors from 'cors';

app.use(cors());
app.use(express.json())


