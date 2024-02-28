import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-cbb26a py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="footer-section">
          <h4 className="text-cbb26a text-lg font-bold">Impressum</h4>
          <p className="text-cbb26a">BurgerGuide</p>
          <p className="text-cbb26a">WBS WDG14</p>
          <p className="text-cbb26a">Email</p>
          <p className="text-cbb26a">Telefonnummer</p>
          {/* Weitere Impressum-Informationen hier */}
        </div>

        <div className="footer-section">
          <h4 className="text-cbb26a text-lg font-bold" >Copyright © {currentYear}</h4>
          <p className="text-cbb26a">Alle Rechte vorbehalten.</p>
        </div>

        <div className="footer-section">
          <h4 className="text-cbb26a">Datenschutz</h4>
          <p className="text-cbb26a">Datenschutzbestimmungen hier.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;