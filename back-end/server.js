const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;  // Puoi scegliere la porta che preferisci
require('dotenv').config();

// Middleware per consentire la comunicazione con il front-end
app.use(express.json());

// Configura il trasportatore Nodemailer (sostituisci con le tue informazioni)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Definisci la rotta per l'invio delle email
app.post('/invia-email', (req, res) => {
  const { email, oggetto, testo } = req.body;
  if (testo.length > 1000) {
    return res.status(400).json({ error: 'Il messaggio supera la lunghezza massima consentita.' });
  }

  // Rimuovi i caratteri speciali dal testo utilizzando una regex
  const testoPulito = testo.replace(/[^\w\s.,!?'"()]+/g, '');
  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: oggetto,
    text: testoPulito,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Errore durante l\'invio dell\'email:', error);
      return res.status(500).json({ error: 'Errore durante l\'invio dell\'email.' });
    }
    
    res.status(200).json({ message: 'Email inviata con successo', response: info.response });

  });
});

// Avvia il server sulla porta specificata
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});