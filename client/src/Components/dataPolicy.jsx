import React from 'react';
import PolicyBackground from './DynamicBackground';


  


const PrivacyPolicy = () => {
  return (
    <PolicyBackground>
    <div className="container max-w-2xl mx-auto bg-white shadow-lg rounded-md mt-10 sm:mt-20 p-4 sm:p-8 opacity-80px-8">
      <h1 className="text-3xl font-bold mb-6">Datenschutzrichtlinie für Burger Guide</h1>

      <p className="mb-4"><strong>Stand:</strong> [Datum der letzten Aktualisierung]</p>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">1. Einleitung</h2>
        <p>
          Willkommen beim Burger Guide! Diese Datenschutzrichtlinie erläutert, wie wir Informationen sammeln, verwenden, speichern und schützen. Indem Sie den Burger Guide nutzen, stimmen Sie den Bedingungen dieser Richtlinie zu.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">2. Welche Daten wir sammeln</h2>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">2.1 Nutzerdaten:</h3>
          <p>Der Burger Guide kann personenbezogene Daten wie Ihren Benutzernamen, Ihre E-Mail-Adresse und andere relevante Informationen sammeln, um Ihre Nutzung der Anwendung zu verbessern.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">2.2 Standortdaten:</h3>
          <p>Um Ihnen relevante Informationen zu lokalen Burger-Restaurants bereitzustellen, kann der Burger Guide auf Ihren Standort zugreifen. Dies geschieht jedoch nur mit Ihrer ausdrücklichen Zustimmung.</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">3. Wie wir Daten verwenden</h2>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">3.1 Verbesserung der Anwendung:</h3>
          <p>Wir verwenden die gesammelten Daten, um die Burger Guide-Anwendung zu verbessern, personalisierte Empfehlungen bereitzustellen und die Benutzererfahrung zu optimieren.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">3.2 Kommunikation:</h3>
          <p>Wir können Ihre E-Mail-Adresse verwenden, um Ihnen relevante Updates, Neuigkeiten und Werbemitteilungen im Zusammenhang mit dem Burger Guide zuzusenden. Sie können sich jederzeit abmelden.</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">4. Datenschutz und Sicherheit</h2>
        <p>Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Verlust, Missbrauch oder Änderung zu schützen. Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben oder Sie stimmen ausdrücklich zu.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">5. Änderungen an der Datenschutzrichtlinie</h2>
        <p>Der Burger Guide kann diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Die neueste Version wird auf der Website veröffentlicht, und die Fortsetzung der Nutzung der Anwendung nach Änderungen gilt als Zustimmung zu den aktualisierten Bedingungen.</p>
      </div>
    </div>
    </PolicyBackground>
  );
};

export default PrivacyPolicy;