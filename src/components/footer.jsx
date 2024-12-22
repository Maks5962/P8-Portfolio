import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

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
        setFormData({ name: '', subject: '', message: '' }); // Réinitialiser le formulaire
      } else {
        alert('Erreur lors de l\'envoi de l\'email.');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
      alert('Une erreur réseau est survenue.');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
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
