// Smallest reusable unit

export type PujaSubSection = {
  title: string;
  mantra: string;
  description?: string; // optional
};

export type PujaSection = {
  items: PujaSubSection[];
};

// Strongly typed content object

export const PUJA_CONTENT: Record<string, PujaSection> = {
  sudhikaran: {
    items: [
      {
        title: "आचमन",
        mantra:
          "ॐ केशवाय नमः ॐ नारायणाय नमः ॐ माधवाय नमः",
        description:
          "‘गोविन्दाय नमः’ कहकर होठ पोंछ लें और ‘हृषीकेशाय नमः’ बोलकर हाथ धो लें ।",
      },
      {
        title: "पवित्रीकरण",
        mantra:
          "ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा । यः स्मरेत् पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः॥",
      },
      {
        title: "आसन शुद्धि",
        mantra:
          "ॐ पृथिवी त्वया धृता लोका देवि त्वं विष्णुना धृता । त्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥",
      },
      {
        title: "तिलक",
        mantra:
          "चंदनस्य महत्पुण्यं पवित्रं पापनाशनं। आपदां हरते नित्यं लक्ष्मी तिष्ठति सर्वदा।।",
      },
    ],
  },

  sankalp: {
    items: [
      {
        title: "संकल्प मंत्र",
        mantra: "ॐ विष्णुर्विष्णुर्विष्णुः...",
      },
    ],
  },
} as const;

export type PujaSectionId = keyof typeof PUJA_CONTENT;