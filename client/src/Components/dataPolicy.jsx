import React from 'react';
import PolicyBackground from './DynamicBackground';


  


const PrivacyPolicy = () => {
  return (
<PolicyBackground>
  <div className="flex items-center justify-center opacity-90">
    <div className="container bg-white shadow-lg rounded-md mt-8 mb-8 sm:mt-20 p-4 sm:p-8 opacity-80px-8 inline-block max-w-2xl mx-auto my-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Burger Guide</h1>

      <p className="mb-4"><strong>Effective Date:</strong> [12.03.2024]</p>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
        <p>
          Welcome to Burger Guide! This privacy policy explains how we collect, use, store, and protect information. By using Burger Guide, you agree to the terms of this policy.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">2. What Data We Collect</h2>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">2.1 User Data:</h3>
          <p>Burger Guide may collect personally identifiable information such as your username, email address, and other relevant details to enhance your use of the application.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">2.2 Location Data:</h3>
          <p>To provide you with relevant information about local burger restaurants, Burger Guide may access your location. However, this is done only with your explicit consent.</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">3. How We Use Data</h2>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">3.1 Application Improvement:</h3>
          <p>We use collected data to enhance the Burger Guide application, provide personalized recommendations, and optimize the user experience.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">3.2 Communication:</h3>
          <p>We may use your email address to send you relevant updates, news, and promotional messages related to Burger Guide. You can unsubscribe at any time.</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">4. Data Privacy and Security</h2>
        <p>We implement reasonable security measures to protect your data from unauthorized access, loss, misuse, or alteration. We do not share your data with third parties unless required by law or with your explicit consent.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">5. Changes to the Privacy Policy</h2>
        <p>Burger Guide may update this privacy policy from time to time. The latest version will be published on the website, and continued use of the application after changes will be considered as acceptance of the updated terms.</p>
      </div>
    </div>
  </div>
</PolicyBackground>
  );
};

export default PrivacyPolicy;