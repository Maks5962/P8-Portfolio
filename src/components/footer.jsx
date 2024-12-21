import React from 'react';


const Footer = () => {

    
    return (
        <>
            <footer className="footer">
                <div id="contact">
                    <h2 className="contact__title">Contact</h2>
                    <form>
                        <input type="text" name="name" className="name" placeholder='Entrez votre nom et prénom'/>
                        <input type="text" name="subject" className='subject' placeholder="Entrez l'objet du message" />
                        <textarea className="message" name="message" rows="7" placeholder='Ecrivez votre message ici ...'></textarea>
                        <button className='send'>Envoyer <i className="fa-regular fa-paper-plane"></i></button>
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