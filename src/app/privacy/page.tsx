'use client';

const PrivacyPolicy = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full bg-brand-green py-16 lg:py-32">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-center text-3xl font-bold text-brand-cream lg:text-5xl">
            Sloane Privacy Policy
          </h1>
        </div>
      </div>
      <div className="bg-brand-cream py-16">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="grid grid-cols-1 gap-8">
            {privacyData.map((section, index) => (
              <div key={index} className="rounded-lg border-2 border-brand-green">
                <div className="bg-brand-green p-4 rounded-t-md">
                  <h2 className="mb-2 text-2xl font-semibold text-brand-cream">
                    {section.title}
                  </h2>
                </div>
                <div className="bg-brand-cream p-4 rounded-b-lg">
                  <p className="text-brand-green-dark" dangerouslySetInnerHTML={{ __html: section.content }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const privacyData = [
  {
    title: '1. Introduction',
    content:
      'Welcome to Sloane. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platform.',
  },
  {
    title: '2. Data Collection',
    content:
      'We may collect personal information such as your name, email address, phone number, and payment details when you register on our platform or subscribe to our services. We also collect data regarding your usage of the platform to improve our services.',
  },
  {
    title: '3. Use of Data',
    content:
      'We use the collected data to provide and improve our services, manage your account, process transactions, and communicate with you. We may also use the data for research and analysis to enhance our platform.',
  },
  {
    title: '4. Data Sharing',
    content:
      'We do not sell or trade your personal data. We may share your information with third-party service providers to perform tasks on our behalf, such as payment processing and customer support. These third parties are obligated to maintain the confidentiality and security of your information.',
  },
  {
    title: '5. Data Security',
    content:
      'We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.',
  },
  {
    title: '6. Your Rights',
    content:
      'You have the right to access, correct, or delete your personal data. You can also object to or restrict the processing of your data. To exercise these rights, please contact us at <span class="text-brand-green">support@sloane.biz</span>.',
  },
  {
    title: '7. Cookies',
    content:
      'We use cookies to enhance your experience on our platform. Cookies are small files stored on your device that help us understand how you interact with our site. You can manage your cookie preferences through your browser settings.',
  },
  {
    title: '8. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.',
  },
  {
    title: '9. Contact Us',
    content:
      'If you have any questions or concerns about this Privacy Policy, please contact us at <span class="text-brand-green"><a href="mailto:support@sloane.biz">support@sloane.biz</a></span>.',
  },
  {
    title: 'Effective Date',
    content:
      'This Privacy Policy is effective as of April 1st 2024.',
  },
];

export default PrivacyPolicy;
