import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Utilisez votre fournisseur de messagerie
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'maxence.delvinquier@climatep.fr', // Adresse email où les messages doivent être envoyés
      subject: `Message de ${name}`,
      text: `De : ${email}\n\nMessage :\n${message}`,
    });

    res.status(200).json({ success: true, message: 'Email envoyé !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'email.' });
  }
}
