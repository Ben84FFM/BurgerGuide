import React from 'react';
import PolicyBackground from './DynamicBackground';

const Impress = () => {
  return (
    <PolicyBackground>
    <div className="container max-w-2xl mx-auto bg-white shadow-lg rounded-md mt-10 sm:mt-20 p-4 sm:p-8 opacity-80px-8">
  <h1 className="text-3xl font-bold mb-6">Impressum für Burger Guide</h1>

  <p className="mb-4"><strong>Stand:</strong> [Datum der letzten Aktualisierung]</p>

  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
    <p>Ihr Name oder Firmenname<br />
      Straße<br />
      PLZ Ort</p>
  </div>

  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">Kontakt</h2>
    <p>Telefon: [Ihre Telefonnummer]<br />
      E-Mail: [Ihre E-Mail-Adresse]</p>
  </div>

  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
    <p>Ihr Name oder Firmenname<br />
      Straße<br />
      PLZ Ort</p>
  </div>

  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">Haftung für Inhalte</h2>
    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
  </div>

  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">Haftung für Links</h2>
    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
    <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-2">Urheberrecht</h2>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
    <p>Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
  </div>
</div>
    </PolicyBackground>
  );
};

export default Impress;