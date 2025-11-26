import React, { useEffect } from 'react'

const PolicyPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])


  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 text-sm leading-relaxed bg-white rounded-2xl shadow-lg my-10">
    <div className="flex flex-col items-center mb-6">
      <img src="/assets/images/logo/login.png" alt="Lorio Logo" className="h-16 w-auto mb-2" />
      <h1 className="text-2xl font-bold text-purple-800 mb-2">Privacy Policy</h1>
    </div>
    <ul className="list-disc ml-6 mb-4">
      <li>
        This Privacy Notice describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
      </li>
      <li>
        Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.
      </li>
    </ul>

    {/* About Lorio Section */}
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 mb-6 border border-purple-100">
      <h2 className="text-xl font-bold text-purple-800 mb-3">About Lorio Mobile App</h2>
      <p className="mb-4 font-semibold text-purple-900">Revolutionize Your Truck Business. Drive More Profit. Less Chaos.</p>
      
      <p className="mb-4">
        Lorio is a mobile application designed specifically for truck owners and transporters in India. Our app helps you digitize and manage your entire fleet business right from your smartphone — eliminating paper registers, scattered spreadsheets, and WhatsApp-based management. Track every truck, trip, driver, and rupee through one simple mobile dashboard.
      </p>

      <div className="bg-white rounded-lg p-5 shadow-sm">
        <p className="font-bold text-purple-800 mb-3 text-center">What Our Mobile App Offers</p>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">📍</span>
            <div><strong className="text-purple-700">Trip Management</strong> – Plan, track, and analyze every trip in real-time from your phone</div>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">👤</span>
            <div><strong className="text-purple-700">Driver Management</strong> – Monitor driver performance, attendance, and process payments on-the-go</div>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">💰</span>
            <div><strong className="text-purple-700">Profit & Expense Reports</strong> – View real-time profit insights per truck instantly</div>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">🔧</span>
            <div><strong className="text-purple-700">Maintenance & Service Alerts</strong> – Get push notifications so you never miss a service deadline</div>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">📄</span>
            <div><strong className="text-purple-700">Document Management</strong> – Store and access all documents digitally with automatic expiry alerts</div>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">🛞</span>
            <div><strong className="text-purple-700">Tyre Management</strong> – Track tyre history, performance, and costs from anywhere</div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-700 mt-4 text-center">
        <strong>Available for Android & iOS</strong> – Manage your entire transport business from your mobile device, anytime, anywhere.
      </p>
    </div>

    <div className="bg-purple-50 rounded-xl p-4 mb-6">
      <h2 className="font-bold text-purple-700 mb-2">TABLE OF CONTENTS</h2>
      <ul className="list-decimal ml-6">
        <li>WHAT INFORMATION DO WE COLLECT?</li>
        <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
        <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
        <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
        <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
        <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
        <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
        <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
        <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
        <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
        <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
      </ul>
    </div>
    <div className="space-y-8">
      {/* 1st clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p className="font-semibold">Personal information you disclose to us</p>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <p className="mt-2"><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
        <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
        <p className="font-semibold mt-2">Information automatically collected</p>
        <p>
          We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. Like many businesses, we also collect information through cookies and similar technologies.
        </p>
      </div>
      {/* 2nd clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p className="font-semibold">Our intellectual property</p>
        <p>
          In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
        </p>
        <p>
          We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
        </p>
      </div>
      {/* 3rd clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p className="font-semibold">We may need to share your personal information in the following situations:</p>
        <p>
          By using the Services, you represent and warrant that:
        </p>
        <ul className="list-disc ml-6">
          <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li>Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
          <li>Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.</li>
        </ul>
      </div>
      {/* 4th clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
        </p>
        <p>
          We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
        </p>
        <p>
          Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
        </p>
      </div>
      {/* 5th clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
        <p>
          If you are accessing our Services from outside, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information.
        </p>
      </div>
      {/* 6th clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
        </p>
      </div>
      {/* 7th clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p>
          We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
        </p>
      </div>
      {/* 8th clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>
          Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section below.
        </p>
        <p>
          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
        </p>
        <p className="font-semibold">Account Information</p>
        <p>
          If you would at any time like to review or change the information in your account or terminate your account, you can: Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
        </p>
      </div>
      {/* 9th clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">9. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p>
          We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
        </p>
      </div>
      {/* 10th clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>
          If you have questions or comments about this notice, you may contact us by post at:
        </p>
        <p>
          Lorio<br />
          5th Floor, Currency Tower, Raipur, Chhattisgarh 492001 India<br />
          Phone: +91 8518041111<br />
          Email: support@lorio.in
        </p>
      </div>
      {/* 11th clause */}
      <div>
        <h2 className="font-bold text-purple-700 mb-2">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
        </p>
      </div>
    </div>
  </div>
  )
}

export default PolicyPage