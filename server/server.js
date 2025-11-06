require('dotenv').config(); // Load environment variables from .env
const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; // Use 8000 as a default

// This is our test endpoint for Sprint 1
app.get('/api/test', (req, res) => {
  res.json({ message: "FROM SERVER YO" });
});


app.get('/api/movies/popular', async (req, res)=> {
  try{
    const TMDB_V3_KEY = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_V3_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);

    res.json(response.data);

  } catch (error){
    console.error("Error fetching from TMDB: ", error.message);
    res.status(500).json({ message: 'Error fetching popular movies' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});