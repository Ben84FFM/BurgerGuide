import React from 'react';
import PolicyBackground from './DynamicBackground';


const Impress = () => {
  return (
<PolicyBackground>
  <div className="flex items-center justify-center ml-6 mr-6 opacity-90">
    <div className="container bg-white shadow-lg rounded-md mt-8 mb-8 sm:mt-20 p-4 sm:p-8 opacity-80px-8 inline-block max-w-2xl mx-auto my-auto">
      <h1 className="text-2xl font-bold mb-6">Imprint for Burger Guide</h1>

      <p className="mb-4"><strong>Effective Date:</strong> [12.03.2024]</p>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Information according to § 5 TMG</h2>
        <p>Your Name or Company Name<br />
          Street<br />
          Postal Code City</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Contact</h2>
        <p>Phone: [Your Phone Number]<br />
          Email: [Your Email Address]</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Responsible for content according to § 55 Abs. 2 RStV</h2>
        <p>Your Name or Company Name<br />
          Street<br />
          Postal Code City</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Liability for Content</h2>
        <p>As a service provider, we are responsible for our own content on these pages in accordance with § 7 Abs.1 TMG (German Telemedia Act) and general laws. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
        <p>Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of such legal violations, we will remove this content immediately.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Liability for Links</h2>
        <p>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.</p>
        <p>The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Copyright</h2>
        <p>The content and works created by the site operators on these pages are subject to German copyright law.</p>
        <p>The reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.</p>
      </div>
    </div>
  </div>
</PolicyBackground>
    
  );
};

export default Impress;