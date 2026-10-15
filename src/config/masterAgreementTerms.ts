export interface SlaRow {
  category: string;
  responseTarget: string;
  nextStepTarget: string;
}

export interface MasterClause {
  number: string;
  heading?: string;
  body: string | string[];
  isHighlighted?: boolean;
}

export interface AgreementSectionV2 {
  id: string;
  sectionNumber: number;
  title: string;
  clauses: MasterClause[];
  slaTable?: SlaRow[];
}

export const MASTER_AGREEMENT_SECTIONS_V2: AgreementSectionV2[] = [
  {
    id: 'section-1',
    sectionNumber: 1,
    title: '1. PARTIES AND AGREEMENT STRUCTURE',
    clauses: [
      {
        number: '1.1',
        body: 'This Master Services Agreement (the "Agreement") is entered into by OTTOBON PROFESSIONAL SERVICES PRIVATE LIMITED, a company incorporated under the laws of India and operating under the brand "sBLOOM" (the "Service Provider"), and the customer identified on the cover page (the "Customer"). Each is a "Party" and together the "Parties". Complete the legal particulars before signing.'
      },
      {
        number: '1.2',
        body: 'The Agreement consists of these master terms, each service annexure selected and signed or otherwise expressly accepted in writing, and any signed Statement of Work / Commercial Schedule ("SOW"). The master terms apply unless a selected annexure expressly varies a specific provision for that service. A variation must identify the clause varied. The following order of precedence applies: (1) signed change order, but only for the change it expressly addresses; (2) signed SOW / commercial schedule; (3) selected service annexure; and (4) these master terms.'
      }
    ]
  },
  {
    id: 'section-2',
    sectionNumber: 2,
    title: '2. DEFINITIONS',
    clauses: [
      { number: '2.1', heading: '"Business Day"', body: 'Monday to Friday, excluding public holidays applicable in Andhra Pradesh, India.' },
      { number: '2.2', heading: '"Customer Materials"', body: 'Materials, data, instructions, logos, images, copy, credentials and other items supplied or made available by the Customer.' },
      { number: '2.3', heading: '"Deliverables"', body: 'The specific outputs expressly described in a signed SOW or selected annexure.' },
      { number: '2.4', heading: '"Services"', body: 'Only the services selected in a signed SOW or annexure.' },
      { number: '2.5', heading: '"Confidential Information"', body: 'Non-public business, technical, financial, personal, operational or commercial information disclosed by or on behalf of a Party.' },
      { number: '2.6', heading: '"Third-Party Services"', body: 'Platforms, hosting, domains, advertising networks, software, plugins, stock assets and other products controlled by third parties.' },
      { number: '2.7', heading: '"Change Order"', body: 'A written variation to scope, fees, timeline, assumptions or deliverables approved by authorised representatives of both Parties.' }
    ]
  },
  {
    id: 'section-3',
    sectionNumber: 3,
    title: '3. ENGAGEMENT, SCOPE AND CHANGE CONTROL',
    clauses: [
      { number: '3.1', body: 'The Service Provider will perform only the Services and Deliverables stated in the selected annexures/SOW. Any service not expressly included is excluded and may be separately quoted.' },
      { number: '3.2', body: 'A Change Order must describe the requested change, price impact, timeline impact and any changed assumptions. Neither Party is required to proceed with changed work until both Parties approve the Change Order in writing. Email approval from the designated authorised contacts may be used where the SOW expressly permits it.' },
      { number: '3.3', body: 'If a master term conflicts with a service annexure, the annexure controls only for the specific service and only to the extent of the expressly identified conflict. No annexure silently overrides the liability, privacy or IP terms.' },
      { number: '3.4', body: 'The Service Provider may use qualified employees, contractors and subcontractors to deliver Services, remaining responsible for their performance under this Agreement. Any subcontractor with access to personal data or Confidential Information must be bound by appropriate confidentiality and data-protection obligations.' },
      { number: '3.5', body: 'The Service Provider does not control third-party platforms or their algorithms, policies, availability, pricing, approvals, account suspensions or outages. Such events do not by themselves constitute a breach by the Service Provider, provided it uses reasonable care in performing its own obligations and notifies the Customer where reasonably practicable.' }
    ]
  },
  {
    id: 'section-4',
    sectionNumber: 4,
    title: '4. TERM, RENEWAL AND TERMINATION',
    clauses: [
      { number: '4.1', body: 'This Agreement begins on the Effective Date and continues for an initial term of twelve (12) months, unless the cover page or a signed SOW specifies a different term. The term of each service may be stated in its annexure.' },
      { number: '4.2', body: 'After the initial term, the Agreement renews for successive twelve (12) month periods unless either Party gives at least thirty (30) days\' written notice before the end of the then-current term. The Parties may specify non-renewal dates or a different renewal model in the SOW.' },
      { number: '4.3', body: 'Either Party may terminate this Agreement or a selected service for convenience by giving thirty (30) days\' written notice. Services continue during the notice period, and applicable fees remain payable for that period, unless the Parties agree otherwise in writing. If a minimum commitment or early termination fee is intended, it must be stated clearly in the signed SOW and reviewed for enforceability.' },
      { number: '4.4', body: 'Either Party may terminate for material breach if the other Party fails to cure the breach within fifteen (15) days after receiving written notice that reasonably describes the breach. A Party may terminate immediately by written notice if the other Party becomes insolvent, is wound up, or is subject to an analogous formal insolvency event, to the extent permitted by law.' },
      { number: '4.5', body: 'The Service Provider may suspend affected Services on reasonable notice where the Customer\'s acts, missing approvals, missing access, unlawful instructions, platform restrictions or overdue payments prevent safe or lawful delivery. For overdue invoices, suspension may occur if payment remains overdue for more than seven (7) Business Days after the due date, subject to written notice where reasonably practicable.' },
      { number: '4.6', body: 'On termination: (a) fees for Services performed through the effective termination date and fees applicable to the notice period become payable; (b) approved, non-cancellable third-party commitments incurred for the Customer are payable; (c) after all undisputed overdue amounts are paid, the Service Provider will provide completed paid Deliverables and reasonable handover assistance as set out in the SOW; and (d) each Party will return or securely delete the other Party\'s Confidential Information on request, subject to legal retention duties and routine backup limitations.' },
      { number: '4.7', body: 'Prepaid fees for periods after termination will be reconciled as stated in the SOW. Unless the SOW states otherwise, fees for Services already performed, committed third-party costs and the notice period are not refundable.' }
    ]
  },
  {
    id: 'section-5',
    sectionNumber: 5,
    title: '5. FEES, INVOICING, TAXES AND PAYMENT',
    clauses: [
      { number: '5.1', body: 'Fees, billing basis, included quantities, due dates and expenses are specified in the applicable signed SOW/annexure. Unless stated otherwise, fees exclude GST and other applicable taxes.' },
      { number: '5.2', body: 'The Service Provider will invoice monthly in advance on or around the first day of each service month, unless the SOW specifies milestone or other billing. Invoices are payable within five (5) Business Days of the invoice date ("Net 5") unless a different due date is expressly stated in the SOW.' },
      { number: '5.3', isHighlighted: true, body: 'Advertising spend is separate from agency management fees and must be funded directly by the Customer to the platform or prepaid to the Service Provider only if expressly agreed in writing. No ad spend or budget increase may be committed without the Customer\'s written approval. The Customer is responsible for maintaining valid billing details and sufficient approved funds.' },
      { number: '5.4', body: 'Overdue undisputed amounts may attract simple interest at 1.5% per month, calculated proportionately for the period of delay, or the maximum lawful rate if lower. Interest will not be compounded unless expressly agreed in writing and confirmed lawful by counsel.' },
      { number: '5.5', body: 'The Customer must notify the Service Provider in writing of a genuine invoice dispute within seven (7) days of receipt, identifying the disputed amount and reasons. The Customer must pay undisputed amounts by the due date, and the Parties will work in good faith to resolve the dispute.' },
      { number: '5.6', body: 'Any price change during a fixed service term requires the Customer\'s written acceptance, except for changes in taxes or statutory charges imposed by law. A proposed renewal price may be notified at least thirty (30) days before renewal. If the Customer does not accept a proposed increase, either Party may elect not to renew the affected service by written notice before the renewal date.' },
      { number: '5.7', body: 'Unless expressly included, excluded costs may include domains, hosting, paid media spend, premium plugins, software licences, stock assets, SMS/WhatsApp charges, email services, API usage, travel, on-site production, third-party integrations and other out-of-pocket expenses. These must be disclosed and approved in writing before commitment.' },
      { number: '5.8', body: 'The Service Provider acts as an independent contractor. Any tax withholding required by law must be made and reported by the Customer in accordance with applicable law, and the Customer will provide the relevant certificates. No blanket exclusion of statutory withholding obligations applies.' }
    ]
  },
  {
    id: 'section-6',
    sectionNumber: 6,
    title: '6. CUSTOMER RESPONSIBILITIES AND DEPENDENCIES',
    clauses: [
      {
        number: '6.1',
        body: [
          '• The Customer will provide accurate, lawful and complete information, materials, access, approvals, instructions and a designated decision-maker in a timely manner.',
          '• The Customer is responsible for ensuring it has rights, licences, consents and permissions for Customer Materials and for the accuracy of factual, professional, product, service and medical claims supplied or approved by it.',
          '• The Customer will retain ownership and control of its accounts wherever platform rules permit, and will provide delegated access rather than sharing personal passwords where possible. The Customer will enable appropriate multi-factor authentication.',
          '• The Customer will review drafts, calendars, ads, website materials and other items within two (2) Business Days or the period stated in the SOW. Delayed feedback, content, access or approvals will extend timelines reasonably and may require rescheduling.',
          '• The Customer will promptly notify the Service Provider of account restrictions, security incidents, material business changes, incorrect information or complaints relevant to the Services.',
          '• The Customer is responsible for final approval of content, offers, pricing, professional credentials, legal disclaimers, regulated-industry claims and publication of materials on its behalf.',
          '• If the Customer fails to provide a dependency, the Service Provider will notify the Customer where reasonably practicable. The Service Provider is not responsible for delay or non-performance to the extent caused by the missing dependency. Additional work caused by repeated changes, incomplete materials or rework may require an approved Change Order.'
        ]
      }
    ]
  },
  {
    id: 'section-7',
    sectionNumber: 7,
    title: '7. DELIVERY, REVIEW, REVISIONS AND ACCEPTANCE',
    clauses: [
      { number: '7.1', body: 'Deliverables, quantities, formats, timelines, reporting cadence and exclusions are those in the selected annexure/SOW. Any indicative date is subject to timely Customer cooperation and third-party dependencies.' },
      { number: '7.2', isHighlighted: true, body: 'Unless an annexure states otherwise, each creative or other discrete Deliverable includes up to three (3) reasonable revision rounds, provided the revisions remain within the approved brief. A revision round is one consolidated set of Customer feedback. New directions, new concepts, scope changes or additional rounds may be separately charged after written approval.' },
      { number: '7.3', body: 'The Customer will review a submitted Deliverable within five (5) Business Days and either approve it or provide a written, reasonably detailed list of material deviations from the agreed specifications. The Service Provider will address confirmed deviations within a reasonable period. If the Customer does not respond within that period, the Deliverable may be treated as accepted for project scheduling and invoicing purposes, but this does not waive latent defects, statutory rights or an express warranty.' },
      { number: '7.4', body: 'For website projects, the Customer will conduct user acceptance testing (UAT) within the period stated in the SOW. The Customer must identify material failures against agreed specifications; preferences or new features not included in the specification are Change Requests.' },
      { number: '7.5', body: 'Social media and advertising performance depends on factors outside the Service Provider\'s control. Reports will use the data reasonably available from the relevant platforms and analytics tools. The Service Provider does not warrant the accuracy or uninterrupted availability of third-party analytics.' }
    ]
  },
  {
    id: 'section-8',
    sectionNumber: 8,
    title: '8. SERVICE LEVEL AND SUPPORT',
    clauses: [
      {
        number: '8.1',
        body: 'Support hours are Monday to Friday, 10:00 AM to 7:00 PM IST, excluding applicable public holidays, unless the SOW states otherwise. Requests should be submitted through the designated project email or official project channel. Response and resolution targets are service targets, not guarantees; they exclude delays caused by Customer dependencies, third-party platforms, force majeure and issues outside the agreed scope. No 24/7 monitoring is included unless expressly purchased.'
      }
    ],
    slaTable: [
      {
        category: 'Critical: managed website unavailable or material security concern attributable to managed work',
        responseTarget: 'Within 4 Business Hours during support hours',
        nextStepTarget: 'Work to diagnose promptly; target mitigation/resolution within 2 Business Days where reasonably practicable'
      },
      {
        category: 'High: campaign/account issue materially affecting delivery',
        responseTarget: 'Within 1 Business Day',
        nextStepTarget: 'Provide action plan and estimated next steps'
      },
      {
        category: 'Normal: content change, routine request or non-critical defect',
        responseTarget: 'Within 1 Business Day',
        nextStepTarget: 'Typically 3–5 Business Days depending on complexity and approvals'
      }
    ]
  },
  {
    id: 'section-9',
    sectionNumber: 9,
    title: '9. INTELLECTUAL PROPERTY AND LICENCES',
    clauses: [
      { number: '9.1', body: 'Each Party retains ownership of intellectual property it owned or developed independently before this engagement ("Background IP"). The Customer retains rights in its logos, brand assets, content, data and other materials it supplies.' },
      { number: '9.2', body: 'Subject to full payment of all fees due for the relevant Deliverable, the Customer receives ownership of the final bespoke Deliverables specifically created for it under the SOW, to the extent those rights can lawfully be assigned. If assignment is not legally available, the Service Provider grants the Customer a perpetual, worldwide, royalty-free licence to use, reproduce, modify and display the Deliverable for the Customer\'s business.' },
      { number: '9.3', body: 'The Service Provider retains all rights in Background IP, reusable tools, templates, frameworks, processes, generic know-how, prompts, methods, software, source code not expressly commissioned for transfer, and improvements of general application. To the extent embedded in a paid Deliverable, the Service Provider grants the Customer a non-exclusive, perpetual licence to use that embedded Background IP solely as necessary to use the Deliverable for its intended business purpose.' },
      { number: '9.4', body: 'Third-party materials and software remain subject to their respective licence terms. The Service Provider does not transfer rights it does not own. Any source-code transfer, editable files, premium licences or third-party assignments must be expressly listed in the SOW.' },
      { number: '9.5', body: 'The Customer grants the Service Provider a limited, non-exclusive licence to use Customer Materials solely to perform the Services during the term and for any agreed handover or recordkeeping period.' },
      { number: '9.6', body: 'The Service Provider may identify the Customer as a client and display non-confidential work samples in its portfolio only if the Customer has not opted out in writing. The Service Provider must not publish confidential, patient-identifiable, sensitive or non-public materials without specific prior written consent. A written withdrawal will stop future promotional use within a reasonable period; already printed materials and lawful archival records need not be recalled.' },
      { number: '9.7', body: 'Upon termination and payment of undisputed outstanding dues, the Service Provider will provide available completed paid Deliverables and cooperate in reasonable transfer of access it controls. Third-party accounts should be held in the Customer\'s name where practicable. Handover does not include proprietary internal tools or unpaid work.' }
    ]
  },
  {
    id: 'section-10',
    sectionNumber: 10,
    title: '10. CONFIDENTIALITY',
    clauses: [
      { number: '10.1', body: 'Each Party will use the other Party\'s Confidential Information only for this Agreement, protect it with at least reasonable care, and disclose it only to personnel, professional advisers and approved subcontractors who need to know and are bound by confidentiality duties, or where disclosure is required by law.' },
      { number: '10.2', body: 'Confidential Information excludes information that the receiving Party can demonstrate is public without breach, already lawfully known, independently developed without use of the information, or lawfully received from a third party without confidentiality restriction.' },
      { number: '10.3', body: 'If disclosure is legally required, the receiving Party will, where legally permitted, give prompt notice and disclose only what is required.' },
      { number: '10.4', body: 'Confidentiality obligations continue for three (3) years after termination. Trade secrets remain protected for as long as they qualify as trade secrets under applicable law. Personal data remains subject to applicable data-protection obligations for the legally required period.' }
    ]
  },
  {
    id: 'section-11',
    sectionNumber: 11,
    title: '11. DATA PROTECTION, SECURITY AND INCIDENTS',
    clauses: [
      { number: '11.1', body: 'Each Party will comply with applicable Indian data-protection and privacy laws, including the Digital Personal Data Protection Act, 2023, to the extent in force and applicable, and rules/notifications made under it. The Parties will document any additional role-specific obligations where the Services involve personal data.' },
      { number: '11.2', body: 'The Customer will determine and communicate the lawful purposes for personal data collected through its business, website, forms, advertisements and patient/customer enquiry channels, and will ensure that required notices, consents and permissions are obtained. The Service Provider will process personal data only on documented instructions and only as needed to perform the Services, unless applicable law requires otherwise.' },
      { number: '11.3', body: 'The Service Provider will implement reasonable technical and organisational safeguards appropriate to the nature of data it handles, restrict access to authorised personnel, and require relevant subcontractors to protect data. Neither Party should provide sensitive personal data unless necessary and agreed in writing.' },
      { number: '11.4', body: 'A Party becoming aware of a confirmed security incident affecting personal data processed under this Agreement will notify the other Party without undue delay, provide reasonably available details, cooperate in investigation and mitigation, and make legally required notifications allocated to it by law.' },
      { number: '11.5', body: 'On termination or written request, the Service Provider will return or delete Customer personal data within thirty (30) days, except where retention is required by law, needed to establish or defend legal claims, or present in routine backups not reasonably accessible for immediate deletion. Any retained data remains protected and will be deleted in accordance with the applicable retention cycle.' },
      { number: '11.6', body: 'The Service Provider will not sell Customer personal data or use it for unrelated purposes. Any use of analytics, tracking pixels, cookies, CRM tools, messaging systems or third-party processors must be disclosed as appropriate, and the Customer remains responsible for ensuring its notices and consents cover its chosen tools and uses.' }
    ]
  },
  {
    id: 'section-12',
    sectionNumber: 12,
    title: '12. WARRANTIES, DISCLAIMERS AND REGULATED CONTENT',
    clauses: [
      { number: '12.1', body: 'Each Party warrants that it has authority to enter into this Agreement. The Service Provider will perform Services with reasonable skill, care and diligence and will use reasonable efforts to make Deliverables materially conform to the agreed written specifications.' },
      { number: '12.2', body: 'Unless an annexure states otherwise, the Customer must notify the Service Provider in writing of a material defect in a Deliverable within thirty (30) days after acceptance. The Service Provider\'s primary obligation is to correct or re-perform the affected non-conforming work within a reasonable time. This warranty does not cover third-party changes, Customer modifications, misuse, unsupported systems or matters outside the agreed scope.' },
      { number: '12.3', isHighlighted: true, body: 'No specific search ranking, traffic, lead volume, engagement, sales, admission, patient volume, revenue or advertising cost-per-result is guaranteed. Results depend on budget, competition, audience response, platform policies, seasonality and other variables.' },
      { number: '12.4', body: 'The Customer is responsible for the accuracy, legality and substantiation of its business, education, healthcare, professional, product, service and promotional claims. The Customer must approve such claims before publication. For healthcare work, the Customer is responsible for medical accuracy, professional credentials, required consents for patient images/testimonials, and compliance with applicable medical-professional, advertising and privacy rules. The Service Provider may refuse or pause content it reasonably believes is unlawful, misleading, unsafe or contrary to platform policy.' },
      { number: '12.5', body: 'Except for express warranties in this Agreement and to the maximum extent permitted by law, no other warranties are given. Nothing excludes a warranty or liability that cannot lawfully be excluded.' }
    ]
  },
  {
    id: 'section-13',
    sectionNumber: 13,
    title: '13. LIABILITY AND INDEMNIFICATION',
    clauses: [
      { number: '13.1', body: 'To the maximum extent permitted by law, neither Party will be liable to the other for indirect or consequential loss, loss of profits, anticipated savings, business opportunity or goodwill, except to the extent such loss forms part of a third-party claim covered by an indemnity or cannot lawfully be excluded.' },
      { number: '13.2', isHighlighted: true, body: 'Subject to Clause 13.3, each Party\'s total aggregate liability arising out of or in connection with this Agreement will not exceed the fees paid or payable under the affected SOW during the six (6) months immediately preceding the event giving rise to the claim. If the engagement has lasted less than six months, the cap will be the fees paid or payable for that shorter period, plus any committed fees for the remainder of the then-current month.' },
      { number: '13.3', body: 'Nothing in this Agreement limits liability for fraud, wilful misconduct, death or personal injury to the extent caused by negligence where liability cannot be limited, deliberate misuse of the other Party\'s IP, or any other liability that cannot lawfully be excluded or limited. Any separate cap or exclusion for confidentiality, data protection or indemnity claims must be expressly negotiated in the SOW and reviewed by counsel.' },
      { number: '13.4', body: 'The Customer will indemnify the Service Provider against third-party claims to the extent arising from Customer Materials supplied without necessary rights, unlawful or misleading claims approved by the Customer, or the Customer\'s material breach of applicable law or this Agreement. The indemnity does not apply to the extent the claim was caused by the Service Provider\'s negligence, wilful misconduct, unauthorised modification or breach.' },
      { number: '13.5', body: 'The Service Provider will indemnify the Customer against a third-party claim that a bespoke Deliverable created solely by the Service Provider under the SOW infringes that third party\'s intellectual property rights, excluding claims arising from Customer Materials, Customer instructions, modifications by others, combinations not supplied by the Service Provider, or third-party materials used under their own licence. The Service Provider may procure rights, modify/replace the affected item, or refund the fee paid for the affected Deliverable if those options are commercially reasonable.' },
      { number: '13.6', body: 'A Party seeking indemnity must give prompt written notice, allow the indemnifying Party reasonable control of defence and settlement, and provide reasonable cooperation at the indemnifying Party\'s cost. No settlement may impose admission, payment or continuing obligations on the indemnified Party without its written consent, not to be unreasonably withheld.' }
    ]
  },
  {
    id: 'section-14',
    sectionNumber: 14,
    title: '14. NON-SOLICITATION',
    clauses: [
      { number: '14.1', body: 'During the term and for twelve (12) months after termination, neither Party will knowingly solicit for employment a person who is then employed or engaged by the other Party and who materially worked on the Services, without prior written consent. This does not prohibit general job advertisements, unsolicited applications, or hiring a person who approaches independently without targeted solicitation. The Parties should obtain legal advice on the scope and enforceability of this clause under applicable law.' }
    ]
  },
  {
    id: 'section-15',
    sectionNumber: 15,
    title: '15. FORCE MAJEURE',
    clauses: [
      { number: '15.1', body: 'Neither Party is liable for delay or failure caused by events beyond its reasonable control, including natural disasters, war, civil unrest, government action, widespread utility or internet failure, epidemic, strikes not limited to the affected Party, or third-party platform outages or policy changes. The affected Party will notify the other where reasonably practicable and use reasonable efforts to mitigate the impact. If the event materially prevents performance for more than sixty (60) consecutive days, either Party may terminate the affected Services by written notice; fees for Services already performed and approved non-cancellable commitments remain payable.' }
    ]
  },
  {
    id: 'section-16',
    sectionNumber: 16,
    title: '16. NOTICES AND COMMUNICATIONS',
    clauses: [
      { number: '16.1', body: 'Formal notices of breach, termination, non-renewal, indemnity claims or legal disputes must be in writing and delivered by email to the notice addresses on the cover page, with delivery/receipt confirmation, or by registered post/courier to the addresses stated there. A notice is deemed received when delivery is confirmed, or on the next Business Day after successful email delivery if no delivery failure is received. Routine project approvals may be given through the agreed project email or official communication channel. Each Party must promptly notify the other of any change in notice details.' }
    ]
  },
  {
    id: 'section-17',
    sectionNumber: 17,
    title: '17. DISPUTE RESOLUTION AND GOVERNING LAW',
    clauses: [
      { number: '17.1', body: 'The Parties will first attempt in good faith to resolve any dispute through discussions between authorised representatives for thirty (30) days after written notice of the dispute. Either Party may seek urgent interim or injunctive relief from a court of competent jurisdiction. This Agreement is governed by the laws of India. Subject to applicable law, courts of competent jurisdiction at Visakhapatnam, Andhra Pradesh, will have exclusive jurisdiction over disputes arising out of or in connection with this Agreement.' }
    ]
  },
  {
    id: 'section-18',
    sectionNumber: 18,
    title: '18. GENERAL PROVISIONS',
    clauses: [
      { number: '18.1', heading: 'Entire Agreement', body: 'This Agreement and selected annexures/SOWs constitute the entire agreement on the subject and supersede prior proposals and discussions on the same subject, without extinguishing accrued payment obligations.' },
      { number: '18.2', heading: 'Amendments and waiver', body: 'Amendments must be in writing and signed or expressly approved by authorised representatives of both Parties. A waiver is effective only in writing and only for the matter specified.' },
      { number: '18.3', heading: 'Assignment', body: 'Neither Party may assign this Agreement without the other Party\'s prior written consent, not to be unreasonably withheld, except to an affiliate or successor in a merger or sale of substantially all relevant business assets, subject to written notice and the assignee\'s assumption of obligations.' },
      { number: '18.4', heading: 'Severability', body: 'If a provision is held invalid or unenforceable, it will be modified to the minimum extent necessary and the remaining provisions will continue.' },
      { number: '18.5', heading: 'Independent contractor', body: 'Nothing creates a partnership, joint venture, employment, fiduciary or general agency relationship between the Parties.' },
      { number: '18.6', heading: 'Electronic execution', body: 'Counterparts and electronic signatures may be used to the extent recognised by applicable law. Each signatory confirms that they are authorised to bind the relevant Party.' },
      { number: '18.7', heading: 'Survival', body: 'Clauses concerning accrued payment obligations, IP, confidentiality, data protection, liability, indemnity, dispute resolution and any other provisions intended by their nature to survive will continue after termination.' }
    ]
  }
];

// Alias for backwards compatibility
export const MASTER_AGREEMENT_SECTIONS = MASTER_AGREEMENT_SECTIONS_V2;
