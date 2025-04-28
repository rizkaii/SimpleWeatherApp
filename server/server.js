const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Mengaktifkan CORS agar frontend bisa mengakses backend dari port yang berbeda

const API_KEY = 'afc25cd713036b28410bb21f7b837419'; // Ganti dengan API key Anda yang benar

// Route untuk mengambil data cuaca
app.get('/weather', async (req, res) => {
  const { city } = req.query; // Mendapatkan nama kota dari query string

  if (!city) {
    return res.status(400).json({ message: 'Nama kota tidak boleh kosong' });
  }

  try {
    // Memanggil OpenWeather API dengan axios
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Menggunakan satuan suhu dalam Celsius
      },
    });

    res.json(response.data); // Mengirimkan data cuaca ke frontend
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ message: 'Gagal mengambil data cuaca' });
  }
});

// Menjalankan server di port 5000
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
