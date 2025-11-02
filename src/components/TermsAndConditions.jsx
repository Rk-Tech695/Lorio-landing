import React, { useEffect } from 'react'

const TermsAndConditions = () => {
useEffect(() => {
  window.scrollTo(0, 0);
},[])


  return (
     <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 text-sm leading-relaxed bg-white rounded-2xl shadow-lg my-10">
    <h1 className="text-2xl font-bold text-purple-800 mb-6">Service Limitation Agreement</h1>
    <p className="mb-4">This Service Limitation Agreement (“Agreement”) is entered into by and between RK Innovations Private Limited (“Company”, “Lorio”, “We”, “Us”, or “Our”), the provider of the Lorio fleet management platform, and the Customer (“You”, “Your”, or “User”). This Agreement governs the scope, usage, responsibilities, and limitations of the Lorio software and related services (“Service”).</p>
    <p className="mb-4">By using the Service, You acknowledge that You have read, understood, and agreed to this Agreement.</p>
    <hr className="my-4" />
    <h2 className="font-bold text-purple-700 mt-6 mb-2">1. DEFINITIONS</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Service: The fleet management software platform “Lorio” and its mobile/web applications.</li>
      <li>Customer Data: All data and information entered or uploaded by You, including but not limited to vehicle, driver, trip, and expense records.</li>
      <li>Authorized User: Any person authorized by You to access the Service under Your account.</li>
      <li>Subscription Fees: The fees payable by You for access to the Service.</li>
      <li>Trial Period: A limited duration during which You may use the Service with restricted features.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">2. SCOPE OF SERVICE</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Lorio provides tools to assist fleet operators with:
        <ul className="list-disc ml-6">
          <li>Trip planning, expense entry, and settlement</li>
          <li>Driver management (salary, verification, performance tracking)</li>
          <li>Document storage and verification via available government portals</li>
          <li>Reports and analytics for operational visibility</li>
        </ul>
      </li>
      <li>The Service is provided “as is” and “as available”. Lorio does not guarantee uninterrupted or error-free access at all times.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">3. SERVICE AVAILABILITY & LIMITATIONS</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Availability – Lorio will use commercially reasonable efforts to make the Service available 24x7, except during:
        <ul className="list-disc ml-6">
          <li>Scheduled maintenance (with prior notice where possible)</li>
          <li>Emergency technical issues requiring urgent attention</li>
          <li>Events beyond reasonable control (force majeure: natural disasters, strikes, government actions, internet outages, etc.)</li>
        </ul>
      </li>
      <li>Third-Party Data – Verification services (e.g., RC, license, Aadhaar) depend on external government databases. Lorio does not guarantee accuracy, completeness, or uninterrupted access to such third-party data.</li>
      <li>Network & Device Dependency – The Service relies on mobile networks, GPS devices, and internet connectivity. Lorio is not responsible for performance issues due to poor connectivity, device malfunction, or third-party service failures.</li>
      <li>Feature Limitations – Certain features may be restricted depending on subscription plan, region, or regulatory changes.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">4. CUSTOMER RESPONSIBILITIES</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Provide accurate and updated information while using the Service.</li>
      <li>Ensure that all Authorized Users follow this Agreement.</li>
      <li>Keep login credentials confidential and secure.</li>
      <li>Use the Service only for lawful fleet management purposes and not for fraudulent or unauthorized use.</li>
      <li>Ensure compliance with applicable laws, including transport regulations, tax filings, and labor laws.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">5. DATA SECURITY & PRIVACY</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Ownership of Data
        <ul className="list-disc ml-6">
          <li>All Customer Data (vehicle details, driver records, financial entries, documents, etc.) remains the sole property of the Customer.</li>
          <li>Lorio will never sell, rent, or commercially exploit Customer Data without explicit consent.</li>
        </ul>
      </li>
      <li>Data Storage & Encryption
        <ul className="list-disc ml-6">
          <li>Customer Data is stored on secure servers with industry-standard encryption (AES-256 for data at rest and SSL/TLS for data in transit).</li>
          <li>Sensitive personal data (Aadhaar, license, PAN, etc.) is masked or tokenized where possible.</li>
        </ul>
      </li>
      <li>Access Control
        <ul className="list-disc ml-6">
          <li>Access to Customer Data is restricted to authorized personnel on a need-to-know basis.</li>
          <li>Multi-factor authentication and secure credential policies are implemented for internal systems.</li>
          <li>Customers are responsible for maintaining the confidentiality of their login credentials.</li>
        </ul>
      </li>
      <li>Backup & Recovery
        <ul className="list-disc ml-6">
          <li>Regular automated backups are taken to ensure business continuity.</li>
          <li>In case of accidental deletion or system failure, recovery mechanisms are in place with reasonable restoration timelines.</li>
        </ul>
      </li>
      <li>Data Sharing with Third Parties
        <ul className="list-disc ml-6">
          <li>Lorio may use trusted third-party service providers (e.g., cloud hosting, payment gateways, government APIs) strictly for providing the Service.</li>
          <li>Such providers are contractually obligated to maintain equivalent data protection standards.</li>
          <li>Lorio is not liable for inaccuracies or downtime in third-party data sources (e.g., transport department portals).</li>
        </ul>
      </li>
      <li>Data Retention & Deletion
        <ul className="list-disc ml-6">
          <li>Customer Data is retained only for as long as necessary to provide the Service or as required by law.</li>
          <li>Upon termination of the subscription, Customer Data will be retained for a limited period (e.g., 30–60 days) for recovery purposes, after which it will be permanently deleted.</li>
          <li>Customers may request data export before termination.</li>
        </ul>
      </li>
      <li>Security Breach Protocol
        <ul className="list-disc ml-6">
          <li>In the unlikely event of a data breach, Lorio will:
            <ul className="list-disc ml-6">
              <li>Promptly investigate the incident.</li>
              <li>Notify affected Customers within a reasonable time.</li>
              <li>Take corrective actions to prevent recurrence.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Limitations
        <ul className="list-disc ml-6">
          <li>While Lorio uses industry-standard safeguards, no digital system is 100% secure.</li>
          <li>Lorio is not responsible for breaches caused by:
            <ul className="list-disc ml-6">
              <li>Weak passwords, credential sharing, or negligence by the Customer.</li>
              <li>Infected devices, malware, or insecure networks used by the Customer.</li>
              <li>Third-party attacks beyond reasonable preventive controls.</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">6. DATA SHARING & USE OF COLLECTIVE DATA</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Customer Data Privacy
        <ul className="list-disc ml-6">
          <li>All Customer Data entered into Lorio is private to the Customer and will not be disclosed to other Customers or third parties in an identifiable manner.</li>
        </ul>
      </li>
      <li>Use of Aggregated & Anonymized Data
        <ul className="list-disc ml-6">
          <li>Lorio may collect, combine, and anonymize data from multiple Customers (e.g., trip costs, route performance, fuel trends, driver performance benchmarks) to create aggregated datasets.</li>
          <li>Such aggregated and de-identified data may be used by Lorio for:
            <ul className="list-disc ml-6">
              <li>Improving software performance and features.</li>
              <li>Developing predictive analytics and AI-driven tools (e.g., trip cost forecasts, preventive maintenance alerts, driver efficiency scoring).</li>
              <li>Market research, industry benchmarking, and insights reporting.</li>
              <li>New product features, services, and business models.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Machine Learning & Artificial Intelligence
        <ul className="list-disc ml-6">
          <li>Lorio may use anonymized collective data to train machine learning models, improve artificial intelligence algorithms, and generate predictive recommendations for Customers.</li>
          <li>Individual Customer identities, financial records, or confidential business details will never be exposed in such models.</li>
        </ul>
      </li>
      <li>Third-Party Research & Partnerships
        <ul className="list-disc ml-6">
          <li>Lorio may collaborate with technology partners, research institutions, or analytics providers for the development of AI/ML-based features.</li>
          <li>Any such collaboration will ensure that no personally identifiable information (PII) or confidential Customer Data is shared without explicit consent.</li>
        </ul>
      </li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">7. PAYMENT & SUBSCRIPTION</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Access to the Service requires timely payment of Subscription Fees.</li>
      <li>Fees are charged per truck/unit as per the chosen plan.</li>
      <li>Non-payment may lead to suspension or termination of Service.</li>
      <li>All fees are non-refundable except as required under applicable law.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">8. LIABILITY LIMITATIONS</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To the maximum extent permitted by law, Lorio’s liability to You shall not exceed the Subscription Fees paid by You in the preceding three (3) months.</li>
      <li>Lorio shall not be liable for:
        <ul className="list-disc ml-6">
          <li>Indirect, incidental, or consequential damages (loss of profits, goodwill, business interruption).</li>
          <li>Errors or omissions in reports generated from inaccurate Customer Data.</li>
          <li>Operational losses due to reliance on third-party services or integrations.</li>
        </ul>
      </li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">9. TRIAL, SUSPENSION & TERMINATION</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Trial Period – Customers may be provided limited trial access to evaluate the Service. Trial data may be deleted after expiration unless converted to a paid plan.</li>
      <li>Suspension – Lorio may suspend Your access if:
        <ul className="list-disc ml-6">
          <li>Subscription Fees are unpaid, or</li>
          <li>Terms of this Agreement are violated.</li>
        </ul>
      </li>
      <li>Termination by Customer – You may terminate Your subscription anytime by providing notice through the platform or email.</li>
      <li>Termination by Lorio – Lorio may terminate access for misuse, fraud, or breach of this Agreement.</li>
      <li>Data Retention – Upon termination, Customer Data will be retained for a limited period (e.g., 30–60 days) before permanent deletion.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">10. INTELLECTUAL PROPERTY</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>The Service, software code, design, and trademarks are the exclusive property of Lorio.</li>
      <li>This Agreement grants You only a limited, non-transferable, non-exclusive right to use the Service.</li>
      <li>You shall not copy, reverse-engineer, resell, or redistribute the Service without prior written consent.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">11. INDEMNITY</h2>
    <p className="mb-4">You agree to indemnify and hold harmless Lorio and its affiliates from any claims, damages, or liabilities arising out of:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Misuse of the Service,</li>
      <li>Violation of laws, or</li>
      <li>Breach of this Agreement.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">12. GOVERNING LAW & DISPUTE RESOLUTION</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>This Agreement shall be governed by and construed under the laws of India.</li>
      <li>Any disputes shall be subject to the exclusive jurisdiction of the courts in Raipur, Chhattisgarh, unless otherwise mutually agreed.</li>
    </ul>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">13. MODIFICATIONS</h2>
    <p className="mb-4">Lorio may update this Agreement from time to time. Updates will be notified via the app, website, or email. Continued use of the Service after such updates constitutes acceptance.</p>
    <h2 className="font-bold text-purple-700 mt-6 mb-2">14. ACCEPTANCE</h2>
    <p>By using Lorio, You confirm that You have read, understood, and agreed to this Service Limitation Agreement.</p>
  </div>
  )
}

export default TermsAndConditions