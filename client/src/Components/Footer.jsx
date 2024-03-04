import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-black text-cbb26a py-8">
  <div className="container mx-auto flex flex-wrap justify-center lg:justify-between">
    <div className="footer-section mb-4 lg:mb-0">
      <h4 className="text-cbb26a text-lg font-bold mb-2">Impressum</h4>
      <p className="text-cbb26a mb-1">BurgerGuide</p>
      <p className="text-cbb26a mb-1">WBS WDG14</p>
      <p className="text-cbb26a mb-1">Email</p>
      <p className="text-cbb26a mb-1">Telefonnummer</p>
      {/* Weitere Impressum-Informationen hier */}
    </div>

    <div className="footer-section mb-4 lg:mb-0">
      <h4 className="text-cbb26a text-lg font-bold mb-2" >Copyright © {currentYear}</h4>
      <p className="text-cbb26a mb-1">Alle Rechte vorbehalten.</p>
    </div>

    <div className="footer-section">
      <h4 className="text-cbb26a mb-2">Datenschutz</h4>
      <p className="text-cbb26a mb-1">Datenschutzbestimmungen hier.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;