import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
      user: process.env.BREVO_EMAIL,
      pass: process.env.BREVO_API_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: 'mdelvinquier@gmail.com',
      to: 'maxence.delvinquier@climatep.fr', // L'adresse qui recevra les e-mails
      subject: `Message de ${name}`,
      text: `Objet du massage : ${subject} \n\nMessage :\n${message}`,
    });

    res.status(200).json({ success: true, message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'email.' });
  }
}
