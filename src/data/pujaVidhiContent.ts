// Define smallest reusable units first

export type PujaSubSection = {
  title: string;
  mantras: string[];
};

export type PujaSection = {
  items: PujaSubSection[];
};

// Main content object (strongly typed)

export const PUJA_CONTENT: Record<string, PujaSection> = {
  sudhikaran: {
    items: [
      {
        title: "आचमन",
        mantras: [
          "ॐ केशवाय नमः ॐ नारायणाय नमः ॐ माधवाय नमः",
          "‘गोविन्दाय नमः’ कहकर होठ पोंछ लें और ‘हृषीकेशाय नमः’ बोलकर हाथ धो लें ।",
        ],
      },
      {
        title: "पवित्रीकरण",
        mantras: [
          "ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा । यः स्मरेत् पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः॥",
          "ॐ पुण्डरीकाक्षः पुनातु। ॐ पुण्डरीकाक्षः पुनातु। ॐ पुण्डरीकाक्षः पुनातु।",
        ],
      },
      {
        title: "आसन शुद्धि",
        mantras: [
          "ॐ पृथिवी त्वया धृता लोका देवि त्वं विष्णुना धृता । त्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥",
        ],
      },
      {
        title: "तिलक",
        mantras: [
          "चंदनस्य महत्पुण्यं पवित्रं पापनाशनं। आपदां हरते नित्यं लक्ष्मी तिष्ठति सर्वदा।।",
        ],
      },
    ],
  },

  sankalp: {
    items: [
      {
        title: "संकल्प मंत्र",
        mantras: [
          "ॐ विष्णुर्विष्णुर्विष्णुः...",
        ],
      },
    ],
  },
};