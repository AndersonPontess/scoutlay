const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/games', async (req, res) => {
  try {
    const apiKey = process.env.FOOTBALL_DATA_API_KEY;
    const resp = await axios.get('https://api.football-data.org/v4/matches', {
      headers: { 'X-Auth-Token': apiKey }
    });
    res.json(resp.data);
  } catch (err) {
    console.error(err.message);
    res.json({ matches: [], error: 'Erro ao buscar jogos' });
  }
});

app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
