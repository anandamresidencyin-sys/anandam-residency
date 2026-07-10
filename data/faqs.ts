export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is the plot registration process?',
    answer:
      'Our registration process is simple and transparent. Once you select a plot, we provide all necessary documentation. Our legal team guides you through the process, ensuring clear title deed and smooth ownership transfer.',
  },
  {
    id: '2',
    question: 'Is bank loan facility available?',
    answer:
      'Yes, we have partnerships with major banks for easy loan facilities. Most customers can secure up to 80% of the plot value. Our finance team will assist you in the application process.',
  },
  {
    id: '3',
    question: 'What are the EMI options available?',
    answer:
      'We offer flexible payment plans with EMI options ranging from 12 months to 5 years. You can choose a plan that suits your budget. No hidden charges or processing fees.',
  },
  {
    id: '4',
    question: 'What is the possession timeline?',
    answer:
      'Possession is typically provided within 18-24 months from the date of booking. All projects are registered and approved by relevant authorities, ensuring timely delivery.',
  },
  {
    id: '5',
    question: 'Are there any hidden charges?',
    answer:
      'Absolutely not. We believe in complete transparency. All costs including registration, legal fees, and taxes are clearly mentioned in the agreement.',
  },
  {
    id: '6',
    question: 'Can I book a plot without a site visit?',
    answer:
      'While we encourage site visits, you can book a plot online. However, we recommend visiting the site to make an informed decision. Free site visit pickup can be arranged.',
  },
];
