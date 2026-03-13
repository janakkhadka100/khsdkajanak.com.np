export type ToolLandingMeta = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  whatItDoes: string;
  whoItsFor: string;
  benefits: string[];
  samplePrompt: string;
  sampleOutput: string;
  toolHref: string;
  relatedSlugs: string[];
  faqs: { question: string; answer: string }[];
  whoUses?: string[];
  codexLinks?: { title: string; href: string }[];
};

export const toolLandingSlugs = [
  "nepali-caption-generator",
  "formal-letter-writer",
  "speech-script-generator",
  "press-note-generator",
  "bio-writer",
  "tribute-writer",
  "project-proposal-helper",
  "janak-ai-chat",
  "astrology-guidance",
] as const;

export type ToolLandingSlug = (typeof toolLandingSlugs)[number];

const faqCaption = [
  { question: "Is the caption generator free?", answer: "Yes. The Nepali caption tool on this platform is free to use. Outputs are AI-generated and should be reviewed before posting." },
  { question: "Can I use the captions for business or events?", answer: "Yes. The tool is designed for events, tributes, announcements, and public posts. Always tailor the draft to your context." },
  { question: "Does it work in Nepali only?", answer: "The tool is tuned for Nepali. You can describe your context in English or Nepali; the generated captions will be in natural Nepali." },
];

const faqLetter = [
  { question: "What types of letters can I generate?", answer: "You can draft formal request letters, recommendation letters, permission letters, notices, invitations, and clarification letters in Nepali." },
  { question: "Are the letters legally binding?", answer: "No. The tool produces drafts for you to edit and use. For legally sensitive matters, consult a professional." },
  { question: "Can I use this for office or institutional use?", answer: "Yes. The tool follows formal Nepali office conventions. Replace placeholders with your details before submitting." },
];

const faqSpeech = [
  { question: "What events is the speech tool suitable for?", answer: "Programs, inaugurations, award functions, school and college events, and public addresses. You specify the event type and audience." },
  { question: "How long are the generated scripts?", answer: "You can suggest a duration (e.g. 3–5 minutes). The output is structured so you can trim or expand as needed." },
  { question: "Is the output in Nepali?", answer: "Yes. Scripts are generated in Nepali, suitable for stage delivery in Nepal." },
];

const faqPress = [
  { question: "Who can use the press note generator?", answer: "Organizations, event teams, media offices, and anyone who needs a clear Nepali press announcement or news-style release." },
  { question: "Does it include a headline?", answer: "Yes. The tool suggests a headline and lead, plus structured body paragraphs." },
  { question: "Can I edit the output?", answer: "Yes. All outputs are drafts. Edit facts, names, and dates before publishing." },
];

const faqBio = [
  { question: "Who is the bio writer for?", answer: "Artists, organizers, professionals, candidates, and public figures who need a short or medium Nepali profile for events, websites, or introductions." },
  { question: "Can I get different lengths?", answer: "Yes. You can request a short, medium, or detailed bio, plus a social-media-friendly version." },
  { question: "Will it invent achievements?", answer: "No. The tool expands only on the context and points you provide." },
];

const faqTribute = [
  { question: "What occasions are supported?", answer: "Condolences, congratulations, tributes to mentors or elders, and event thank-you messages. You describe the occasion and relationship." },
  { question: "Is the tone respectful?", answer: "Yes. The tool is tuned for dignified, sensitive Nepali suitable for public or semi-public use." },
  { question: "Do I get multiple options?", answer: "Yes. You typically receive 2–3 message options with slightly different angles or lengths." },
];

const faqProposal = [
  { question: "What kind of ideas can I expand?", answer: "Community projects, campaigns, events, social initiatives, and creative programs. You provide the idea; the tool structures it into a concept note." },
  { question: "Is the output in Nepali?", answer: "Yes. The project concept is generated in Nepali with clear sections: background, objective, activities, timeline, and impact." },
  { question: "Can I use this for funding applications?", answer: "The output is a structured concept that you can adapt. For formal applications, always align with the funder’s format and requirements." },
];

const faqChat = [
  { question: "What is Janak AI Chat?", answer: "An AI assistant inspired by Janak Khadka’s public work—filmmaker, strategist, writer. It helps with creativity, film, writing, Nepal, and soft life direction." },
  { question: "Is it the real Janak Khadka?", answer: "No. It is an AI tool. It does not give personal advice from Janak and cannot replace professional, legal, or medical guidance." },
  { question: "Can I ask in Nepali?", answer: "Yes. You can write in Nepali or English; responses can be in Nepali, English, or a mix as appropriate." },
];

const faqAstrology = [
  { question: "Is this real astrology?", answer: "The guidance is symbolic and reflective, not predictive. It is designed for reflection and gentle direction, not certainty about the future." },
  { question: "Do I need to share my full birth details?", answer: "Only date of birth is required. You can optionally add a focus area (e.g. work, relationships) for a more tailored note." },
  { question: "Is it free?", answer: "The basic guidance experience on this page is free. Deeper or premium reports may be offered separately in the future." },
];

export const toolLandings: Record<ToolLandingSlug, ToolLandingMeta> = {
  "nepali-caption-generator": {
    slug: "nepali-caption-generator",
    name: "Nepali Caption Generator",
    seoTitle: "Nepali Caption Generator – Free AI Tool for Posts & Events | Janak Khadka",
    seoDescription: "Generate strong Nepali captions for Facebook posts, events, tributes, and announcements. Free AI tool for the Nepali public.",
    primaryKeyword: "Nepali caption generator",
    secondaryKeywords: ["Facebook caption Nepali", "event caption", "tribute caption Nepal"],
    heroTitle: "Nepali Caption Generator",
    heroSubtitle: "Create clear, respectful Nepali captions for posts, events, tributes, and announcements in seconds. Free AI-assisted tool for the Nepali public.",
    whatItDoes: "You describe the type of post (event invite, tribute, thank-you, announcement) and any key points. The tool returns 2–3 caption options in natural Nepali that you can copy, edit, and use.",
    whoItsFor: "Social media users, event organizers, students, professionals, and anyone who needs a quick, dignified Nepali caption without staring at a blank screen.",
    benefits: [
      "Saves time on posts and event text",
      "Natural Nepali tone, not robotic",
      "Multiple options (short to medium length)",
      "Works for tributes, thanks, and formal notes",
      "No sign-up required; use and edit freely",
    ],
    samplePrompt: "Post type: शिक्षक दिवसको लागि धन्यवाद पोस्ट। Tone: सम्मानजनक। Key points: विद्यालयको सबै शिक्षकहरूलाई सम्मान।",
    sampleOutput: "१) आदरणिय शिक्षकहरू, तपाईंको समर्पण र सिकाइले हामीलाई मार्ग दर्शन गर्नुभयो। शिक्षक दिवसको अवसरमा हार्दिक धन्यवाद।\n२) शिक्षक दिवसमा हामी तपाईं सबैलाई याद गर्दछौं—तपाईंको समय र ज्ञानको लागि धन्यवाद।",
    toolHref: "/ai-tools#caption",
    relatedSlugs: ["formal-letter-writer", "tribute-writer", "speech-script-generator"],
    faqs: faqCaption,
  },
  "formal-letter-writer": {
    slug: "formal-letter-writer",
    name: "Formal Letter Desk",
    seoTitle: "Nepali Formal Letter Writer – Free AI Draft Tool | Janak Khadka",
    seoDescription: "Draft Nepali formal letters, requests, notices, and invitations for offices and institutions. Free AI tool for Nepal.",
    primaryKeyword: "Nepali formal letter generator",
    secondaryKeywords: ["office letter Nepali", "request letter Nepal", "formal letter draft"],
    heroTitle: "Formal Letter Desk",
    heroSubtitle: "Draft formal Nepali letters for offices, institutions, and public bodies. Request letters, notices, invitations, and clarifications—structured and ready to edit.",
    whatItDoes: "You choose the letter type (request, recommendation, notice, invitation, clarification), add recipient and subject, and optionally details. The tool produces a structured Nepali draft with placeholders for names and dates.",
    whoItsFor: "Students, job seekers, citizens dealing with offices, and anyone who needs a proper Nepali formal letter without knowing every convention by heart.",
    benefits: [
      "Follows formal Nepali office conventions",
      "Clear placeholders for names and dates",
      "Multiple letter types supported",
      "One draft in one go; edit and print",
      "No sign-up; use as often as you need",
    ],
    samplePrompt: "Letter type: अनुरोध पत्र। Recipient: वडा कार्यालय। Subject: नागरिकता प्रमाणपत्रको लागि अनुरोध।",
    sampleOutput: "मिति: [मिति]\nप्रति,\nवडा कार्यालय, [वडा नं.]\nविषय: नागरिकता प्रमाणपत्रको लागि अनुरोध।\n\nमहोदय,\nम [नाम], [ठेगाना], ले नागरिकता प्रमाणपत्र प्राप्त गर्न आवश्यकता रहेकोले यो अनुरोध पत्र पेश गर्दछु। कृपया सहयोग गर्नुहोस्।\n\nभवदीय,\n[हस्ताक्षर]\n[नाम]",
    toolHref: "/ai-tools#letter",
    relatedSlugs: ["nepali-caption-generator", "speech-script-generator", "press-note-generator"],
    faqs: faqLetter,
    whoUses: [
      "Students writing scholarship or leave applications",
      "Citizens submitting requests to ward or municipality offices",
      "Teachers and staff preparing official notices",
      "NGO workers communicating with government partners",
      "Community leaders documenting local decisions",
    ],
    codexLinks: [
      { title: "Language of Nepali formal letters", href: "/blog/language-of-nepali-formal-letters" },
      { title: "Everyday bureaucracy as civic practice", href: "/blog/everyday-bureaucracy-as-civic-practice" },
    ],
  },
  "speech-script-generator": {
    slug: "speech-script-generator",
    name: "Public Program Desk",
    seoTitle: "Nepali Speech & Program Script Generator – Free AI Tool | Janak Khadka",
    seoDescription: "Create stage-ready Nepali scripts for programs, events, and public addresses. Free AI speech writer for Nepal.",
    primaryKeyword: "Nepali speech writer",
    secondaryKeywords: ["program script Nepal", "event speech Nepali", "stage script generator"],
    heroTitle: "Public Program Desk",
    heroSubtitle: "Generate stage-ready Nepali scripts for programs, inaugurations, award functions, and public addresses. Describe your event; get a structured script to edit and deliver.",
    whatItDoes: "You enter the event type, audience, and optional duration or key points. The tool returns a structured script in Nepali with opening, main content, and closing—suitable for reading or adapting on stage.",
    whoItsFor: "Students, teachers, emcees, community leaders, and anyone who has to speak at an event and wants a strong first draft in Nepali.",
    benefits: [
      "Structured for stage delivery",
      "Clear opening, body, and closing",
      "Respectful Nepali tone",
      "Adaptable to length and theme",
      "No sign-up; use and edit freely",
    ],
    samplePrompt: "Event: उद्घाटन कार्यक्रम। Audience: विद्यार्थी र अभिभावक। Duration: ३–५ मिनेट।",
    sampleOutput: "उद्घाटन भाषण (संक्षिप्त)\n\nआदरणिय अतिथिहरू, शिक्षकहरू, अभिभावकहरू र साथी विद्यार्थीहरू,\nआज यो कार्यक्रमको उद्घाटन गर्दै म धेरै खुसी छु। यो कार्यक्रम सफल बनाउन सबैको सहयोग र उपस्थितिलाई हार्दिक धन्यवाद।\n[मुख्य बुँदाहरू यहाँ विस्तार गर्न सकिन्छ।]\nधन्यवाद।",
    toolHref: "/ai-tools#speech",
    relatedSlugs: ["formal-letter-writer", "tribute-writer", "press-note-generator"],
    faqs: faqSpeech,
    whoUses: [
      "School and college event organizers",
      "Emcees and hosts for public programs",
      "Teachers preparing formal remarks",
      "Community leaders speaking at local events",
      "Youth clubs running ceremonies and awards",
    ],
    codexLinks: [
      { title: "Speech structure in public programs", href: "/blog/speech-structure-in-public-programs" },
      { title: "Voice, tempo, and respect on stage", href: "/blog/voice-and-respect-on-stage" },
    ],
  },
  "press-note-generator": {
    slug: "press-note-generator",
    name: "Press Desk",
    seoTitle: "Nepali Press Note & Headline Generator – Free AI Tool | Janak Khadka",
    seoDescription: "Write Nepali press notes and news-style announcements for media and organizations. Free AI tool for Nepal.",
    primaryKeyword: "Nepali press release generator",
    secondaryKeywords: ["press note Nepal", "news announcement Nepali", "media release"],
    heroTitle: "Press Desk",
    heroSubtitle: "Draft Nepali press notes and news-style announcements for events, campaigns, and organizations. Headline, lead, and body in one place.",
    whatItDoes: "You provide the type of announcement, organization name, and key details. The tool generates a headline, short lead, and body paragraphs in formal-but-readable Nepali for media or public distribution.",
    whoItsFor: "PR teams, event organizers, NGOs, and anyone who needs a clear press release or public announcement in Nepali.",
    benefits: [
      "Headline and lead included",
      "Structured for media use",
      "Formal Nepali, not marketing fluff",
      "Easy to edit and share",
      "No sign-up required",
    ],
    samplePrompt: "Type: नयाँ कार्यक्रम घोषणा। Organization: सामुदायिक संस्था। Details: युवा फिल्म कार्यशाला, मिति र स्थान।",
    sampleOutput: "हेडलाइन: सामुदायिक संस्थाले युवा फिल्म कार्यशाला घोषणा गर्यो\n\nसामुदायिक संस्थाले आगामी महिनामा युवा फिल्म कार्यशाला सञ्चालन गर्ने घोषणा गरेको छ। कार्यशालामा [मिति] देखि [स्थान] मा सहभागिता खुल्ला रहनेछ।",
    toolHref: "/ai-tools#press",
    relatedSlugs: ["speech-script-generator", "formal-letter-writer", "bio-writer"],
    faqs: faqPress,
    whoUses: [
      "Local organizations announcing programs",
      "NGO and campaign communication teams",
      "Festival and event committees",
      "College unions and youth networks",
      "Community media and radio programs",
    ],
    codexLinks: [
      { title: "Press narrative frameworks", href: "/blog/press-narrative-frameworks" },
      { title: "Announcing programs without noise", href: "/blog/announcing-programs-without-noise" },
    ],
  },
  "bio-writer": {
    slug: "bio-writer",
    name: "Biography Desk",
    seoTitle: "Nepali Bio & Profile Writer – Free AI Tool | Janak Khadka",
    seoDescription: "Generate Nepali bios and profiles for artists, organizers, and public figures. Free AI profile writer for Nepal.",
    primaryKeyword: "Nepali profile writer",
    secondaryKeywords: ["bio generator Nepal", "artist profile Nepali", "public figure bio"],
    heroTitle: "Biography Desk",
    heroSubtitle: "Create clear, professional Nepali bios and profiles for artists, organizers, candidates, and public figures. Short or long—you choose.",
    whatItDoes: "You share the person’s name (optional), role, and context or achievements. The tool produces a short, medium, or detailed bio in Nepali, plus a social-media-friendly version.",
    whoItsFor: "Artists, community organizers, professionals, and candidates who need a polished Nepali profile for events, websites, or introductions.",
    benefits: [
      "Short, medium, and long options",
      "Social-media snippet included",
      "Respectful, confident tone",
      "No invented achievements",
      "Use and edit without sign-up",
    ],
    samplePrompt: "Name: राम। Role: समुदाय कलाकार। Context: ५ वर्ष अनुभव, स्थानिय थिएटर र सामुदायिक कार्यक्रम।",
    sampleOutput: "राम एक समुदाय कलाकार हुन् जसले थिएटर र सामुदायिक कार्यक्रमहरूमा पाँच वर्षको अनुभव बटुलिसकेका छन्। उनी स्थानिय मञ्च र सामाजिक पहलहरूसँग जोडिएका छन्।",
    toolHref: "/ai-tools#bio",
    relatedSlugs: ["tribute-writer", "press-note-generator", "project-proposal-helper"],
    faqs: faqBio,
    whoUses: [
      "Artists preparing festival or gallery bios",
      "Panelists and speakers sending profiles",
      "Candidates introducing themselves to communities",
      "Organizers writing about collaborators",
      "Students applying for programs and residencies",
    ],
    codexLinks: [
      { title: "Writing public biographies in Nepali", href: "/blog/writing-public-biographies-in-nepali" },
      { title: "Profiles as small civic narratives", href: "/blog/profiles-as-small-civic-narratives" },
    ],
  },
  "tribute-writer": {
    slug: "tribute-writer",
    name: "Tribute Desk",
    seoTitle: "Nepali Tribute, Congratulations & Condolence Writer – Free AI | Janak Khadka",
    seoDescription: "Draft sensitive Nepali messages for tributes, congratulations, and condolences. Free AI tool for the Nepali public.",
    primaryKeyword: "Nepali condolence message writer",
    secondaryKeywords: ["tribute message Nepal", "congratulations Nepali", "condolence caption"],
    heroTitle: "Tribute Desk",
    heroSubtitle: "Draft dignified Nepali messages for tributes, congratulations, and condolences. Share the occasion and context; receive 2–3 options to use or adapt.",
    whatItDoes: "You describe the occasion (condolence, congratulations, tribute to a mentor, thank-you) and optionally the relationship and tone. The tool returns 2–3 message options in sensitive, respectful Nepali.",
    whoItsFor: "Anyone who needs a thoughtful Nepali message for a difficult or joyful moment—without sounding generic or unsure.",
    benefits: [
      "Sensitive, dignified language",
      "Multiple options per request",
      "Suitable for posts or speeches",
      "Relationship-aware tone",
      "Free; no sign-up",
    ],
    samplePrompt: "Occasion: शिक्षकको निधनमा श्रद्धाञ्जली। Relationship: विद्यार्थी। Tone: आदरपूर्ण, संक्षिप्त।",
    sampleOutput: "हाम्रा आदरणिय शिक्षकको असामयिक निधनले हामीलाई गहिरो दुःख दिएको छ। उहाँले दिएको ज्ञान र स्नेह याद गर्दै श्रद्धाञ्जली अर्पण गर्दछौं।",
    toolHref: "/ai-tools#tribute",
    relatedSlugs: ["nepali-caption-generator", "speech-script-generator", "bio-writer"],
    faqs: faqTribute,
    whoUses: [
      "Students and alumni writing to teachers and elders",
      "Families preparing public condolence messages",
      "Organizers thanking supporters and partners",
      "Institutions offering congratulations or recognition",
      "Community groups marking losses and milestones",
    ],
    codexLinks: [
      { title: "Language of tribute and condolence", href: "/blog/language-of-tribute-and-condolence" },
      { title: "Public emotion in Nepali writing", href: "/blog/public-emotion-in-nepali-writing" },
    ],
  },
  "project-proposal-helper": {
    slug: "project-proposal-helper",
    name: "Project Proposal & Idea Expander",
    seoTitle: "Nepali Project Proposal & Idea Expander – Free AI Tool | Janak Khadka",
    seoDescription: "Turn rough ideas into structured Nepali project or campaign concepts. Free AI proposal helper for Nepal.",
    primaryKeyword: "Nepali project proposal helper",
    secondaryKeywords: ["campaign concept Nepal", "project concept note", "idea expander"],
    heroTitle: "Project Proposal & Idea Expander",
    heroSubtitle: "Turn a rough idea into a structured project or campaign concept in Nepali. Background, objective, activities, timeline, and impact—in one draft.",
    whatItDoes: "You describe your idea, goal, and audience. The tool expands it into a clear concept note in Nepali with sections: background, objective, key activities, approximate timeline, and expected impact.",
    whoItsFor: "Community organizers, campaigners, and anyone who has an idea but needs a structured first draft to share with partners or funders.",
    benefits: [
      "Structured concept in Nepali",
      "Clear sections for background and goal",
      "Actionable activity and timeline ideas",
      "No budget or legal claims",
      "Free; edit and reuse",
    ],
    samplePrompt: "Idea: युवा फिल्म कार्यशाला। Context: स्थानिय विद्यार्थीहरूलाई कथा र छोटो फिल्म सिकाउने। Goal: २० जना लाई १० दिन।",
    sampleOutput: "पृष्ठभूमि: युवा फिल्म कार्यशाला स्थानिय विद्यार्थीहरूलाई कथा र छोटो फिल्म निर्माणको बुनियाद सिकाउन लागि रचना गरिएको हो।\nउद्देश्य: २० जना प्रतिभागीलाई १० दिनको अवधिमा ह्यान्ड्स-ऑन प्रशिक्षण दिइने।\nमुख्य क्रियाकलाप: [...]",
    toolHref: "/ai-tools#proposal",
    relatedSlugs: ["bio-writer", "speech-script-generator", "press-note-generator"],
    faqs: faqProposal,
  },
  "janak-ai-chat": {
    slug: "janak-ai-chat",
    name: "Janak AI Chat",
    seoTitle: "Janak AI Chat – Film, Strategy & Nepal Ideas | Janak Khadka",
    seoDescription: "Talk to an AI inspired by Janak Khadka. Get help with film, creativity, writing, Nepal, and soft life direction. Free and AI-assisted.",
    primaryKeyword: "Janak AI chat",
    secondaryKeywords: ["Nepal film AI", "creative writing assistant Nepal", "Janak Khadka AI"],
    heroTitle: "Janak AI Chat",
    heroSubtitle: "An AI assistant inspired by Janak Khadka’s public work—filmmaker, strategist, writer. Ask about films, creativity, writing, Nepal, and gentle life direction. Responses are AI-generated, not personal advice.",
    whatItDoes: "You ask a question in Nepali or English. The AI responds in a grounded, thoughtful style—aligned with themes of film, strategy, public messaging, and Nepal—without giving medical, legal, or financial certainty.",
    whoItsFor: "Anyone curious about storytelling, film, strategy, or life direction and wants a reflective, respectful conversation in Nepali or English.",
    benefits: [
      "Conversational and thoughtful",
      "Film, creativity, and Nepal focus",
      "Nepali and English supported",
      "Clear AI disclaimer",
      "Free; use as often as you like",
    ],
    samplePrompt: "मेरो सानो फिल्म परियोजनाको लागि कुन किसिमको कथा संरचना राम्रो हुन्छ?",
    sampleOutput: "सानो फिल्मको लागि एउटा साधारण तर स्पष्ट संरचना राम्रो हुन्छ: सुरुवातमा दर्शकलाई संसार र पात्रसँग परिचय, बीचमा एक समस्या वा टर्निंग पोइन्ट, र अन्त्यमा एउटा सन्तोषजनक वा सोच्न लाउने समापन।",
    toolHref: "/ai-tools#janak-chat",
    relatedSlugs: ["astrology-guidance", "project-proposal-helper", "nepali-caption-generator"],
    faqs: faqChat,
  },
  "astrology-guidance": {
    slug: "astrology-guidance",
    name: "Astrology & Guidance",
    seoTitle: "Nepali Astrology & Guidance – Reflective AI Experience | Janak Khadka",
    seoDescription: "A gentle, reflective astrology and guidance experience. Share your date of birth for a short symbolic note—no predictions, no certainty. Premium consultations available.",
    primaryKeyword: "Nepali astrology AI",
    secondaryKeywords: ["rashifal Nepal", "guidance Nepal", "reflective astrology"],
    heroTitle: "Astrology & Guidance",
    heroSubtitle: "A quiet corner for reflection, not prediction. Share your date of birth and optional focus; receive a short, symbolic guidance note in Nepali. For deeper work, explore membership or consultation.",
    whatItDoes: "You enter your date of birth and optionally a focus area (work, relationships, decisions). The tool returns a brief, symbolic reflection in Nepali—inspiring and non-claiming. It does not predict the future or give medical or financial advice.",
    whoItsFor: "Anyone who likes a moment of reflection framed in symbolic or astrological language, without needing hard predictions or certainty.",
    benefits: [
      "Symbolic, reflective tone",
      "Brief note in Nepali",
      "No fear-based language",
      "Optional focus area",
      "Path to premium consultation",
    ],
    samplePrompt: "DOB: 1995-05-15。 Focus: काम र दिशा।",
    sampleOutput: "तपाईंको जन्ममिति र चिन्तनले संकेत गर्छ कि यो समय सृजनात्मकता र दिशा खोज्नको लागि अनुकूल छ। छोटो लक्ष्यहरू बनाउनुहोस् र एक एक गरी अगाडि बढ्नुहोस्। यो केवल प्रतिबिम्ब हो—निर्णय तपाईंको।",
    toolHref: "/astrology",
    relatedSlugs: ["janak-ai-chat", "tribute-writer", "nepali-caption-generator"],
    faqs: faqAstrology,
  },
};

export function getToolLandingBySlug(slug: string): ToolLandingMeta | null {
  if (toolLandingSlugs.includes(slug as ToolLandingSlug)) {
    return toolLandings[slug as ToolLandingSlug];
  }
  return null;
}
