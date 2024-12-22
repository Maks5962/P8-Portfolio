import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    captcha: '', // Réponse au captcha
  });

  const [captchaQuestion, setCaptchaQuestion] = useState({ question: '', answer: 0 });

  // Générer une question captcha aléatoire
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaQuestion({
      question: `Combien font ${num1} + ${num2} ?`,
      answer: num1 + num2,
    });
  };

  // Initialiser la question captcha
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  async function sendEmail() {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert('Email envoyé avec succès !');
        setFormData({ name: '', subject: '', message: '', captcha: '' });
        generateCaptcha(); // Régénérer une nouvelle question captcha
      } else {
        alert('Erreur lors de l\'envoi de l\'email.');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
      alert('Une erreur réseau est survenue.');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.captcha, 10) !== captchaQuestion.answer) {
      alert('Captcha incorrect, veuillez réessayer.');
      return;
    }
    sendEmail();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <footer className="footer">
        <div id="contact">
          <h2 className="contact__title">Contact</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Entrez votre nom et prénom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              className="subject"
              placeholder="Entrez l'objet du message"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              className="message"
              name="message"
              rows="7"
              placeholder="Écrivez votre message ici ..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="captcha">
              <label>{captchaQuestion.question}</label>
              <input
                type="text"
                name="captcha"
                className="captcha-input"
                placeholder="Votre réponse"
                value={formData.captcha}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="send">
              Envoyer <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>

        <div className="footer__copyright">
          <p>Maxence DELVINQUIER - 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
