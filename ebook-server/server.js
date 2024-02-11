import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import booksRouter from './routes/books';
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/search_book', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use('/api/books', booksRouter);

mongoose.connect('mongodb://localhost:27017/login_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
