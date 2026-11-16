export interface HeritagePart {
  id: number;
  partNumber: number;
  title: string;
  subtitle: string;
  hindiTitle: string;
  hindiSubtitle: string;
  marathiTitle: string;
  marathiSubtitle: string;
  depthLevel: string;
  elevationMeters: string;
  category: 'exterior' | 'mandapa' | 'sanctum' | 'heritage';
  image: string;
  // Language-specific voice narration links (mp3 files)
  audioEnglish: string;
  audioHindi: string;
  audioMarathi: string;
  audioSrc: string;
  duration: string;
  durationSec: number;
  overview: string;
  hindiOverview: string;
  marathiOverview: string;
  architecturalFeatures: string[];
  archaeologicalInsights: string;
  audioTranscript: string;
  hindiAudioTranscript: string;
  marathiAudioTranscript: string;
  coordinatesOnMap: {
    x: number;
    y: number;
    label: string;
  };
}

export const PATALESHWAR_PARTS: HeritagePart[] = [
  {
    id: 1,
    partNumber: 1,
    title: "Part 1 — The Entrance",
    subtitle: "Where Modern Pune Meets Ancient History",
    hindiTitle: "भाग १ — मुख्य प्रवेशद्वार",
    hindiSubtitle: "जहां आधुनिक पुणे प्राचीन इतिहास से मिलता है",
    marathiTitle: "भाग १ — मुख्य प्रवेशद्वार",
    marathiSubtitle: "आधुनिक पुणे आणि प्राचीन इतिहासाचा संगम",
    depthLevel: "Surface Descent",
    elevationMeters: "0.0m to -3.5m",
    category: "exterior",
    image: "/im1.jpg",
    audioEnglish: "/part1_english.mp3",
    audioHindi: "/part1_hindi.mp3",
    audioMarathi: "/part1_marathi.mp3",
    audioSrc: "/part1_hindi.mp3",
    duration: "02:15",
    durationSec: 135,
    overview: "Located in the bustling heart of Shivajinagar along Jangali Maharaj Road, the entrance to Pataleshwar is an unexpected subterranean threshold. Unlike freestanding stone temples built upward toward the sky, Pataleshwar was carved downwards into the living volcanic basalt crust of the Deccan Plateau during the 8th century CE under the Rashtrakuta Dynasty.",
    hindiOverview: "जंगली महाराज रोड, शिवाजीनगर के व्यस्त केंद्र में स्थित, पातालेश्वर का प्रवेश द्वार एक अद्भुत भूमिगत देहरी है। आकाश की ओर ऊपर उठने वाले सामान्य मंदिरों के विपरीत, पातालेश्वर को ८वीं शताब्दी में राष्ट्रकूट राजवंश के अधीन दक्कन के पठार की अखंड ज्वालामुखीय बेसाल्ट चट्टान में नीचे की ओर तराशा गया था।",
    marathiOverview: "जंगली महाराज रस्त्यावरील गजबजलेल्या शिवाजीनगर परिसरात पाताळेश्वराचे प्रवेशद्वार एका शांत, भूमिगत विश्वात घेऊन जाते. आकाशाकडे उभारलेल्या इतर मंदिरांप्रमाणे न बांधता, पाताळेश्वर ८व्या शतकात राष्ट्रकूट राजवटीत सलग काळ्या बेसाल्ट पाषाणात वरून खाली खोदून साकारले गेले.",
    architecturalFeatures: [
      "Sunken monolithic cut stepping down from Pune's urban street level",
      "Sheer perimeter basalt quarry walls acting as acoustic shields against city noise",
      "Ancient banyan trees rooted directly into vertical rock fissures",
      "Massive downward flight of monolithic stone steps hewn from bedrock"
    ],
    archaeologicalInsights: "Pataleshwar ('God of the Underworld' / Lord Shiva in the nether realm) was conceived during the same epoch as the world-renowned Kailasa Temple at Ellora. The Rashtrakuta stonecutters began by excavating a vast rectangular pit into uniform amygdaloidal basalt before shaping pavilions from the remaining rock mass.",
    audioTranscript: "Welcome to Part One of the Pataleshwar Heritage Audio Guide. As you stand at the edge of Jangali Maharaj Road, the noise of contemporary Pune begins to fade. Look downward: before you lies a massive quarry carved directly out of solid volcanic basalt more than 1,200 years ago. You are descending into the realm of Pataleshwar, Shiva as the Lord of the Subterranean World.",
    hindiAudioTranscript: "पातालेश्वर हेरिटेज ऑडियो गाइड के भाग एक में आपका स्वागत है। जैसे ही आप जंगली महाराज रोड से नीचे की ओर देखते हैं, आधुनिक पुणे का शोर शांत होने लगता है। आपके सामने १,२०० साल से भी पहले ठोस बेसाल्ट चट्टान से तराशी गई विशाल खदान है। आप पातालेश्वर अर्थात पाताल के स्वामी शिव के पावन क्षेत्र में उतर रहे हैं।",
    marathiAudioTranscript: "पाताळेश्वर हेरिटेज ऑडिओ मार्गदर्शकाच्या पहिल्या भागात आपले स्वागत आहे. जंगली महाराज रस्त्यावरून पायऱ्या उतरताना पुणे शहराचा गजबजाट हळूहळू शांत होतो. आपल्या समोर १,२०० हून अधिक वर्षांपूर्वी सलग बेसाल्ट पाषाणात कोरलेली भव्य रचना आहे. आपण पाताळाचे अधिपती भगवान शंकराच्या पवित्र दालनात प्रवेश करत आहात.",
    coordinatesOnMap: { x: 50, y: 88, label: "Entrance Staircase" }
  },
  {
    id: 2,
    partNumber: 2,
    title: "Part 2 — The Courtyard",
    subtitle: "A Sacred Space Carved Out of Rock",
    hindiTitle: "भाग २ — खुला प्रांगण",
    hindiSubtitle: "चट्टान को काटकर बनाया गया एक पवित्र प्रांगण",
    marathiTitle: "भाग २ — खुले प्रांगण",
    marathiSubtitle: "खडकातून कोरलेले पवित्र प्रांगण",
    depthLevel: "Excavated Pit",
    elevationMeters: "-4.5m to -5.8m",
    category: "exterior",
    image: "/im2.jpg",
    audioEnglish: "/part2_english.mp3",
    audioHindi: "/part2_hindi.mp3",
    audioMarathi: "/part2_marathi.mp3",
    audioSrc: "/part2_hindi.mp3",
    duration: "02:40",
    durationSec: 160,
    overview: "Stepping into the great sunken courtyard reveals the colossal scale of rock removal required before temple carving could begin. Thousands of tons of dense Deccan trap basalt were laboriously chipped away by hand using iron picks, wedges, and heavy hammers to create a tranquil sanctuary isolated from the sun and heat.",
    hindiOverview: "विशाल भूमिगत प्रांगण में कदम रखते ही यह स्पष्ट हो जाता है कि मंदिर की नक्काशी शुरू करने से पहले कितनी भारी मात्रा में चट्टान हटाई गई होगी। हजारों टन ठोस बेसाल्ट पत्थर को हाथ की छेनी और हथौड़ों से तराश कर धूप और गर्मी से मुक्त यह शांत तीर्थ बनाया गया।",
    marathiOverview: "भव्य खुल्या प्रांगणात उतरल्यावर समजते की मूळ मंदिर कोरण्यापूर्वी किती अथांग पाषाण खोदून बाहेर काढला गेला. हजारो टन काळा बेसाल्ट दगड हातातील लोखंडी पहारी व हातोड्यांनी फोडून ऊन व उष्णतेपासून मुक्त अशी ही शांत भूमी तयार केली गेली.",
    architecturalFeatures: [
      "Rectangular excavated sunken court measuring roughly 50 meters by 40 meters",
      "Vertical quarry faces bearing ancient wedge-splitting groove channels",
      "Natural thermal regulation keeping the courtyard significantly cooler than ground level",
      "Perimeter stone plinths prepared for circumambulatory movement (Pradakshina)"
    ],
    archaeologicalInsights: "Geologists estimate that over 6,000 metric tons of basalt were excised from this pit alone. The technique mirrors that of 8th-century Rashtrakuta master engineers, who first isolated core blocks destined to become the Nandi Mandapa and cave facade while clearing the courtyard perimeter.",
    audioTranscript: "You are now standing in the sunken open courtyard of Pataleshwar. Notice the immediate drop in ambient temperature: the sheer basalt walls create a natural microclimate, shielding the sacred enclosure from harsh tropical sunlight. Every square foot of stone under your feet is intact continental bedrock.",
    hindiAudioTranscript: "अब आप पातालेश्वर के खुले प्रांगण में खड़े हैं। यहाँ के तापमान में सुखद गिरावट पर ध्यान दें: सीधी बेसाल्ट दीवारें एक प्राकृतिक वातावरण बनाती हैं जो तेज धूप को रोकती हैं। आपके पैरों के नीचे का प्रत्येक पत्थर मूल अखंड चट्टान का हिस्सा है।",
    marathiAudioTranscript: "आपण आता पाताळेश्वराच्या विस्तीर्ण प्रांगणात उभे आहात. बाहेरील तापमानापेक्षा इथली थंडावा लगेच जाणवतो. उभ्या कातळ भिंती नैसर्गिक सावली देतात आणि पायाखालील प्रत्येक दगड मूळ सह्याद्रीच्या बेसाल्ट खडकाचा सलग भाग आहे.",
    coordinatesOnMap: { x: 50, y: 70, label: "Excavated Courtyard" }
  },
  {
    id: 3,
    partNumber: 3,
    title: "Part 3 — Nandi Mandapa",
    subtitle: "The Circular Pavilion and the Sacred Nandi",
    hindiTitle: "भाग ३ — नंदी मंडप",
    hindiSubtitle: "गोलाकार छत्र मंडप और पवित्र नंदी",
    marathiTitle: "भाग ३ — नंदी मंडप",
    marathiSubtitle: "गोलाकार छत्र आणि पवित्र नंदी बैल",
    depthLevel: "Central Courtyard Focal Point",
    elevationMeters: "-5.0m",
    category: "mandapa",
    image: "/im3.jpg",
    audioEnglish: "/part3_english.mp3",
    audioHindi: "/part3_hindi.mp3",
    audioMarathi: "/part3_marathi.mp3",
    audioSrc: "/part3_hindi.mp3",
    duration: "03:10",
    durationSec: 190,
    overview: "The jewel of Pataleshwar is its freestanding monolithic circular Nandi Mandapa. Rising in the center of the courtyard, this circular stone pavilion features an umbrella-like canopy resting upon twelve massive square stone pillars, sheltering a polished basalt statue of Nandi, Lord Shiva's divine vahana (mount).",
    hindiOverview: "पातालेश्वर का सबसे अनूठा आकर्षण इसका गोलाकार एकाश्म नंदी मंडप है। प्रांगण के मध्य में स्थित यह मंडप बारह भारी चौकोर पाषाण खंभों पर टिकी छतरीनुमा छत जैसा है, जिसके नीचे भगवान शिव के वाहन नंदी की आकर्षक मूर्ति विराजमान है।",
    marathiOverview: "पाताळेश्वराचे सर्वात मोठे वैशिष्ट्य म्हणजे येथील एकाश्म गोलाकार नंदी मंडप. प्रांगणाच्या मध्यभागी उभारलेला हा मंडप बारा भव्य चौकोनी पाषाणी स्तंभांवर तोललेल्या छत्रासारखा आहे, ज्यामध्ये भगवान शिवाचे वाहन नंदीची देखणी मूर्ती विराजमान आहे.",
    architecturalFeatures: [
      "Twelve heavy square stone pillars arrayed along a circular perimeter",
      "Central circular aperture (oculus) in the ribbed ceiling permitting natural sky illumination",
      "Single monolithic entity: roof, pillars, and raised plinth were carved from a single continuous boulder",
      "Monolithic seated Nandi bull facing directly toward the inner Shiva Linga"
    ],
    archaeologicalInsights: "Circular rock-cut Nandi Mandapas are exceptionally rare across western Indian cave architecture. The Pataleshwar canopy design is believed to replicate ancient wooden umbrella structures (chhatras) translated into indestructible stone by Rashtrakuta sculptors.",
    audioTranscript: "Pause before the circular Nandi Mandapa. Notice that this pavilion was not built from individual stone blocks stacked together: it was freed from the rock by carving away everything surrounding it. The central opening in the umbrella roof channels daylight onto the seated Nandi, whose faithful gaze never leaves the inner sanctum.",
    hindiAudioTranscript: "इस गोलाकार नंदी मंडप को ध्यान से देखें। यह अलग-अलग पत्थरों को जोड़कर नहीं बनाया गया, बल्कि आसपास की चट्टान को तराश कर इसे अखंड रूप में मुक्त किया गया है। छतरी के केंद्र का खुला छिद्र ठीक नंदी पर प्राकृतिक प्रकाश डालता है, जिनकी दृष्टि सदैव मुख्य गर्भगृह की ओर रहती है।",
    marathiAudioTranscript: "या गोलाकार नंदी मंडपासमोर क्षणभर थांबा. हा मंडप जोडणी करून तयार केलेला नाही, तर आजूबाजूचा खडक तासून अखंडपणे कोरला आहे. छताच्या मध्यभागी असलेले गोलाकार छिद्र नंदीवर थेट सूर्यप्रकाश पाडते, ज्याचे डोळे मुख्य गाभाऱ्यातील शिवलिंगाकडे खिळलेले आहेत.",
    coordinatesOnMap: { x: 50, y: 53, label: "Circular Nandi Mandapa" }
  },
  {
    id: 4,
    partNumber: 4,
    title: "Part 4 — The Cave Entrance",
    subtitle: "Stepping Into the Ancient World",
    hindiTitle: "भाग ४ — गुफा मुखद्वार",
    hindiSubtitle: "प्राचीन विश्व में प्रवेश",
    marathiTitle: "भाग ४ — गुहा मुखद्वार",
    marathiSubtitle: "प्राचीन विश्वात प्रवेश",
    depthLevel: "Cave Facade Line",
    elevationMeters: "-5.8m",
    category: "mandapa",
    image: "/im4.jpg",
    audioEnglish: "/part4_english.mp3",
    audioHindi: "/part4_hindi.mp3",
    audioMarathi: "/part4_marathi.mp3",
    audioSrc: "/part4_hindi.mp3",
    duration: "02:20",
    durationSec: 140,
    overview: "Passing beyond the Nandi Mandapa brings you to the broad, open front facade of the main subterranean cave. An expansive colonnade of square-section basalt pillars spans the entrance, offering a wide, welcoming threshold that smoothly transitions visitors from the sunlit courtyard into the shaded sanctuary.",
    hindiOverview: "नंदी मंडप के आगे मुख्य भूमिगत गुफा का खुला विशाल मुखद्वार है। चौकोर बेसाल्ट खंभों की एक भव्य पंक्ति प्रवेश द्वार पर फैली है, जो धूप वाले खुले प्रांगण से शांत छायादार मंदिर में सहज प्रवेश कराती है।",
    marathiOverview: "नंदी मंडप ओलांडल्यावर आपण मुख्य गुहेच्या भव्य प्रवेशद्वारापाशी येतो. चौकोनी बेसाल्ट खांबांची विस्तीर्ण रांग या प्रवेशद्वारावर दिसते, जी उन्हात तापलेल्या प्रांगणातून सावलीत असलेल्या शीतल गाभाऱ्यात स्वागत करते.",
    architecturalFeatures: [
      "Colonnaded frontal screen cut straight into the eastern basalt cliff face",
      "Massive overhanging rock dripline protecting the interior from monsoon deluge",
      "Low stone threshold plinth separating the dusty courtyard from consecrated stone floors",
      "Carved relief medallions and floral motifs begun on the outer lintels"
    ],
    archaeologicalInsights: "The cave facade was oriented precisely along the east-west axis. During specific solar transitions, the early morning sun illuminates the exterior colonnade and casts long, solemn geometric shadows into the interior halls.",
    audioTranscript: "As you approach the cave threshold, note the transition in light and sound. The monolithic lintel above forms a natural stone cornice designed to deflect rainwater away from the pillared hall. Step carefully over the raised stone threshold into the cool twilight of the Sabha Mandapa.",
    hindiAudioTranscript: "जैसे ही आप गुफा के प्रवेश द्वार पर पहुँचते हैं, प्रकाश और ध्वनियों में आए परिवर्तन को महसूस करें। ऊपर की अखंड पाषाण छत बारिश के पानी को अंदर आने से रोकती है। पाषाण देहरी पार कर सभा मंडप के शांत वातावरण में प्रवेश करें।",
    marathiAudioTranscript: "गुहेच्या उंबरठ्यावर येताच प्रकाशाचा आणि शांततेचा बदल जाणवतो. वरील अखंड कातळ पावसाचे पाणी थेट आत येण्यापासून रोखतो. दगडी उंबरठा ओलांडून सभा मंडपाच्या पवित्र सावलीत पाऊल ठेवा.",
    coordinatesOnMap: { x: 50, y: 40, label: "Cave Facade" }
  },
  {
    id: 5,
    partNumber: 5,
    title: "Part 5 — The Pillared Hall",
    subtitle: "The Sabha Mandapa and Its Stone Pillars",
    hindiTitle: "भाग ५ — स्तंभों का विशाल दालान",
    hindiSubtitle: "सभा मंडप और उसके भव्य पाषाण स्तंभ",
    marathiTitle: "भाग ५ — स्तंभांचे दालन",
    marathiSubtitle: "सभा मंडप आणि भव्य पाषाणी खांब",
    depthLevel: "Subterranean Assembly Hall",
    elevationMeters: "-6.2m",
    category: "mandapa",
    image: "/im5.jpg",
    audioEnglish: "/part5_english.mp3",
    audioHindi: "/part5_hindi.mp3",
    audioMarathi: "/part5_marathi.mp3",
    audioSrc: "/part5_hindi.mp3",
    duration: "03:00",
    durationSec: 180,
    overview: "Inside the cave lies the grand Sabha Mandapa (Assembly Hall), supported by multiple rows of monumental rock-cut pillars. Each massive column features a robust square base, an octagonal middle section, and flared bracket capitals supporting the weight of the immense basalt hill above.",
    hindiOverview: "गुफा के भीतर भव्य सभा मंडप है, जो चट्टान से तराशे गए खंभों की पंक्तियों पर टिका है। प्रत्येक विशाल स्तंभ का आधार चौकोर, मध्य भाग अष्टकोणीय और शीर्ष ब्रैकेटनुमा है, जो ऊपर स्थित विशाल पहाड़ी के वजन को बिना किसी सहारे के संभाले हुए है।",
    marathiOverview: "गुहेच्या आत भव्य सभा मंडप आहे, जो अखंड पाषाणात कोरलेल्या खांबांच्या रांगांवर आधारलेला आहे. प्रत्येक भक्कम खांबाचा तळ चौकोनी, मध्यभाग अष्टकोनी आणि वर नक्षीदार ब्रॅकेट आहेत, जे वरच्या अजस्र खडकाचा भार पेलतात.",
    architecturalFeatures: [
      "A vast grid of over 20 square and octagonal basalt stone pillars",
      "Flared bracket capitals carved with pot-and-foliage (kalasha) and padma motifs",
      "Smoothly dressed rock ceiling exhibiting remarkable geometric plane precision",
      "Acoustic resonance that amplifies low-frequency chanting and Vedic recitations"
    ],
    archaeologicalInsights: "The proportions of the Sabha Mandapa follow strict Silpa Sastra canons of ancient Indian temple architecture. The massive pillars are intentionally over-engineered to support hundreds of tons of solid rock overburden without requiring mortar or keystones.",
    audioTranscript: "Look around this colossal pillared assembly hall. Each pillar was carved top-down: stonecutters started at the ceiling line and carefully sculpted downward to the floor. The rhythm of these columns creates a sense of infinite stone pathways leading into the sacred depths.",
    hindiAudioTranscript: "इस विशाल स्तंभित सभा मंडप को चारों ओर देखें। हर खंभा ऊपर से नीचे की ओर तराशा गया था: शिल्पकारों ने छत से शुरुआत की और फर्श तक नक्काशी की। इन खंभों की कतारें एक रहस्यमयी पाषाण मार्ग की रचना करती हैं।",
    marathiAudioTranscript: "या अथांग स्तंभांच्या दालनात फेरफटका मारा. प्रत्येक खांब छताकडून जमिनीकडे वरून खाली कोरला गेला आहे. या खांबांची सुबक रचना अंतर्मनात शांततेची अनुभूती निर्माण करते.",
    coordinatesOnMap: { x: 50, y: 28, label: "Pillared Sabha Mandapa" }
  },
  {
    id: 6,
    partNumber: 6,
    title: "Part 6 — The Inner Nandi",
    subtitle: "A Second Sacred View Inside the Hall",
    hindiTitle: "भाग ६ — आंतरिक नंदी दर्शन",
    hindiSubtitle: "मंडप के भीतर से दूसरा पावन दृश्य",
    marathiTitle: "भाग ६ — अंतर्गत नंदी",
    marathiSubtitle: "दालनातील दुसरे पवित्र दर्शन",
    depthLevel: "Central Axial Corridor",
    elevationMeters: "-6.4m",
    category: "mandapa",
    image: "/im6.jpg",
    audioEnglish: "/part6_english.mp3",
    audioHindi: "/part6_hindi.mp3",
    audioMarathi: "/part6_marathi.mp3",
    audioSrc: "/part6_hindi.mp3",
    duration: "02:05",
    durationSec: 125,
    overview: "Standing inside the central aisle of the Sabha Mandapa provides a breathtaking bidirectional vista: looking backward frames the sun-drenched outer Nandi pavilion through a majestic colonnade of dark basalt pillars, while looking forward gazes into the darkened sanctum vestibule.",
    hindiOverview: "सभा मंडप के केंद्रीय गलियारे में खड़े होने पर एक विहंगम दृश्य दिखाई देता है: पीछे मुड़कर देखने पर खंभों के बीच से धूप में चमकता नंदी मंडप किसी जीवित चित्र जैसा दिखता है, जबकि आगे देखने पर पावन गर्भगृह का साक्षात दर्शन होता है।",
    marathiOverview: "सभा मंडपाच्या मध्यभागी उभे राहिल्यास एक अद्वितीय दृश्य दिसते: मागे वळून पाहिल्यास काळ्या स्तंभांच्या चौकटीतून बाहेरील सूर्यप्रकाशात न्हाऊन निघालेला नंदी मंडप दिसतो, तर पुढे शांत व पवित्र गर्भगृह नजरेस पडते.",
    architecturalFeatures: [
      "Exact axial alignment connecting outer Nandi, inner hall corridor, and central sanctum",
      "Dual perspective: framing exterior daylight against subterranean twilight",
      "Secondary carved pedestals and stone resting platforms for devotees",
      "Chiseled drainage channel on the stone floor to escort ceremonial lustration waters"
    ],
    archaeologicalInsights: "In classical Shaivite temple design, unobstructed sightlines (darshan) between Nandi and Shiva are sacred. Pataleshwar's architects achieved millimeter precision through solid rock, ensuring the gaze remains unbroken across both outdoor and subterranean spaces.",
    audioTranscript: "Turn around and look back toward the entrance. Through the symmetrical rows of dark basalt pillars, you can see the sunlit circular Nandi Mandapa gleaming outside like a framed painting. This intentional play of deep shadow and radiant light is a hallmark of Rashtrakuta rock architecture.",
    hindiAudioTranscript: "पीछे मुड़कर प्रवेश द्वार की ओर देखें। बेसाल्ट खंभों की सममित पंक्तियों के बीच से बाहर का धूप से सराबोर नंदी मंडप एक फ्रेम में जड़े चित्र की तरह चमकता है। प्रकाश और छाया का यह अद्भुत संतुलन राष्ट्रकूट वास्तुकला की विशेष पहचान है।",
    marathiAudioTranscript: "मागे वळून प्रवेशद्वाराकडे पाहा. काळ्या पाषाण खांबांच्या रांगेमधून बाहेरील गोलाकार नंदी मंडप एखाद्या चित्रासारखा चमकतो. अंधार आणि प्रकाशाचा हा अप्रतिम खेळ राष्ट्रकूट स्थापत्यकलेचे वैभव दर्शवतो.",
    coordinatesOnMap: { x: 50, y: 22, label: "Inner Axial View" }
  },
  {
    id: 7,
    partNumber: 7,
    title: "Part 7 — The Main Sanctum",
    subtitle: "The Sacred Shiva Linga of Pataleshwar",
    hindiTitle: "भाग ७ — मुख्य गर्भगृह",
    hindiSubtitle: "पातालेश्वर का पवित्र शिवलिंग",
    marathiTitle: "भाग ७ — मुख्य गर्भगृह",
    marathiSubtitle: "पाताळेश्वराचे पवित्र शिवलिंग",
    depthLevel: "Deepest Sanctum Sanctorum",
    elevationMeters: "-7.2m",
    category: "sanctum",
    image: "/im7.jpg",
    audioEnglish: "/part7_english.mp3",
    audioHindi: "/part7_hindi.mp3",
    audioMarathi: "/part7_marathi.mp3",
    audioSrc: "/part7_hindi.mp3",
    duration: "03:15",
    durationSec: 195,
    overview: "At the heart of the complex lies the sanctum sanctorum (Garbhagriha), enshrining a powerful black stone Shiva Linga resting upon an ancient monolithic yoni-pitha. Anointed daily with milk, water, bilva leaves, and fresh marigold flowers, this subterranean sanctum remains an active living place of worship for over a millennium.",
    hindiOverview: "परिसर के हृदय में मुख्य गर्भगृह स्थित है, जहाँ अखंड योनि-पीठ पर स्थापित काले पत्थर का पवित्र शिवलिंग सुशोभित है। दूध, जल, बेलपत्र और ताजे गेंदे के फूलों से नित्य पूजित यह भूमिगत गर्भगृह एक सहस्राब्दी से अधिक समय से जीवित उपासना स्थल रहा है।",
    marathiOverview: "मंदिराच्या मध्यवर्ती गाभाऱ्यात अखंड पाषाणात कोरलेले भगवान महादेवाचे पवित्र शिवलिंग आहे. गेली बाराशे वर्षे दररोज अभिषेक, बिल्वपत्रे आणि फुलांनी येथे पूजाअर्चना अविरत सुरू आहे. हे एक जागृत आणि जिवंत देवस्थान आहे.",
    architecturalFeatures: [
      "Square rock-cut sanctum chamber carved into the deepest basalt layer",
      "Smoothly polished black basalt Shiva Linga centered in the bedrock chamber",
      "Continuous stone water channel (snana-droni) draining holy offerings northward",
      "Brass oil lamps (samai/diya) casting flickering golden reflections upon ancient basalt walls"
    ],
    archaeologicalInsights: "Unlike many abandoned rock-cut caves, Pataleshwar has maintained living temple rituals without interruption. The stone shows centuries of devotional lustration, giving the basalt sanctum walls an extraordinary dark patina that glows under butter-lamp light.",
    audioTranscript: "You now stand before the sacred Garbhagriha. Here, deep beneath the surface of the earth, rests the Shiva Linga of Pataleshwar. The air carries the scent of fresh marigold flowers, camphor, and damp ancient stone. For twelve centuries, pilgrims have whispered prayers in this serene underground sanctum.",
    hindiAudioTranscript: "अब आप पवित्र गर्भगृह के समक्ष हैं। पृथ्वी की सतह से गहराई में यहाँ पातालेश्वर शिवलिंग स्थापित है। वातावरण में ताजे फूलों, कपूर और प्राचीन पाषाण की सुगंध फैली है। बारह सदियों से भक्त इस शांत भूमिगत धाम में श्रद्धा अर्पित करते आ रहे हैं।",
    marathiAudioTranscript: "आपण आता मुख्य गर्भगृहापुढे उभे आहात. जमिनीखाली सात मीटर खोल अंतरावर पाताळेश्वराचे पवित्र शिवलिंग विराजमान आहे. कापूर, धूप आणि फुलांच्या सुगंधाने भारलेले हे पवित्र दालन शतकानुशतके भाविकांना आत्मिक शांती देत आले आहे.",
    coordinatesOnMap: { x: 50, y: 10, label: "Main Shiva Garbhagriha" }
  },
  {
    id: 8,
    partNumber: 8,
    title: "Part 8 — The Three Sanctums",
    subtitle: "The Triple-Shrine Layout and Unfinished Carvings",
    hindiTitle: "भाग ८ — त्रिमूर्ति त्रि-गर्भगृह",
    hindiSubtitle: "तीन देवालयों का विन्यास और अधूरी नक्काशी",
    marathiTitle: "भाग ८ — त्रिमूर्ती त्रि-गर्भगृह",
    marathiSubtitle: "तीन देवळांची रचना आणि अपूर्ण शिल्पे",
    depthLevel: "Western Rock Face Shrines",
    elevationMeters: "-7.0m",
    category: "sanctum",
    image: "/im8.jpg",
    audioEnglish: "/part8_english.mp3",
    audioHindi: "/part8_hindi.mp3",
    audioMarathi: "/part8_marathi.mp3",
    audioSrc: "/part8_hindi.mp3",
    duration: "02:30",
    durationSec: 150,
    overview: "Flanking the central Shiva sanctum are two additional rock-cut shrines, completing a triple-sanctum (trikuta) configuration. Dedicated to deities such as Ganesha, Parvati, and Kartikeya, the door jambs feature elaborate relief carvings depicting guardian dvarapalas, river goddesses, and ornamental torana arches.",
    hindiOverview: "केंद्रीय शिव गर्भगृह के दोनों ओर दो अन्य चट्टान-उत्कीर्ण मंदिर हैं, जो एक त्रि-गर्भगृह (त्रिकूट) योजना बनाते हैं। गणेश, पार्वती और कार्तिकेय जैसे देवताओं को समर्पित इन द्वारों पर द्वारपालों, नदी देवियों और सुंदर तोरणों की नक्काशी उकेरी गई है।",
    marathiOverview: "मुख्य गाभाऱ्याच्या दोन्ही बाजूला आणखी दोन देवळे कोरलेली आहेत, ज्यामुळे ही रचना 'त्रिकूट' बनते. गणपती, माता पार्वती आणि कार्तिकेय यांच्या उपासनेसाठी तयार केलेल्या या दरवाजांवर द्वारपाल आणि तोरणांची सुंदर शिल्पे कोरलेली आढळतात.",
    architecturalFeatures: [
      "Three separate cellas carved side by side into the rear rock wall",
      "Elaborate rock-cut door jambs with multiple decorative fascia moldings",
      "Carved dvarapala guardian figures standing vigil beside the shrine doorways",
      "Partially realized friezes indicating the sequence of sculptural detailing"
    ],
    archaeologicalInsights: "The trikuta layout is characteristic of advanced 8th-century temple designs also observed in Chalukyan and early Rashtrakuta works. The unfinished state of several outer carvings offers archaeologists an invaluable freeze-frame of ancient sculpting workflows.",
    audioTranscript: "Observe the three sanctum doorways carved in a row along the rear rock wall. Notice the transition between finished ornamental lintels and rough chisel rough-outs. Ancient sculptors carved the structural doorway first, followed by rough blockouts, and finally delicate ornamental filigree.",
    hindiAudioTranscript: "पीछे की चट्टानी दीवार पर एक पंक्ति में बने तीनों मंदिर द्वारों को देखें। पूर्ण नक्काशीदार तोरणों और आधी-अधूरी छेनी की नक्काशी के बीच के अंतर को पहचानें। शिल्पकार पहले मुख्य द्वार का ढांचा बनाते थे, फिर मूर्तियाँ और अंत में बारीक नक्काशी करते थे।",
    marathiAudioTranscript: "मागील कातळ भिंतीवर एका रांगेत कोरलेली तीन गर्भगृहे पाहा. पूर्ण नक्षीकाम आणि अर्धवट राहिलेली छणीची कामे यातला फरक येथे स्पष्ट दिसतो. आधी मूळ चौकट आणि मग त्यावर बारीक नक्षीकाम अशी प्राचीन कामाची पद्धत होती.",
    coordinatesOnMap: { x: 30, y: 12, label: "Triple Sanctum Shrines" }
  },
  {
    id: 9,
    partNumber: 9,
    title: "Part 9 — The Unfinished Rock-Cut Work",
    subtitle: "Reading the Marks Left by Ancient Craftspeople",
    hindiTitle: "भाग ९ — अधूरा पाषाण शिल्प",
    hindiSubtitle: "प्राचीन शिल्पकारों द्वारा छोड़े गए औज़ारों के निशानों का अध्ययन",
    marathiTitle: "भाग ९ — अपूर्ण पाषाणकाम",
    marathiSubtitle: "प्राचीन कारागिरांच्या छणीच्या खुणांचे वाचन",
    depthLevel: "Eastern Flank Rock Face",
    elevationMeters: "-6.0m",
    category: "heritage",
    image: "/im9.jpg",
    audioEnglish: "/part9_english.mp3",
    audioHindi: "/part9_hindi.mp3",
    audioMarathi: "/part9_marathi.mp3",
    audioSrc: "/part9_hindi.mp3",
    duration: "02:45",
    durationSec: 165,
    overview: "The northern and eastern perimeter of Pataleshwar reveals abrupt terminations where carving halted abruptly in the late 8th century. Visible pick marks, wooden wedge insertion slots, and half-hewn columns preserve an irreplaceable open-air textbook of ancient Indian rock engineering.",
    hindiOverview: "पातालेश्वर की उत्तरी और पूर्वी परिधि पर वे स्थान दिखाई देते हैं जहां ८वीं शताब्दी के अंत में नक्काशी अचानक रुक गई थी। कुदाल के निशान, लकड़ी की खूंटियां ठोकने के छेद और आधे तराशे गए खंभे प्राचीन भारतीय पाषाण अभियांत्रिकी का खुला पाठ प्रस्तुत करते हैं।",
    marathiOverview: "पाताळेश्वराच्या पूर्व आणि उत्तर बाजूस ८व्या शतकात अचानक थांबलेले पाषाणकाम दिसते. पहारीचे ओरखडे, लाकडी पाचर ठोकण्यासाठी केलेल्या खाचा आणि अर्धवट तासलेले खांब प्राचीन भारतीय पाषाण तंत्रज्ञानाची जिवंत कार्यशाळा दाखवतात.",
    architecturalFeatures: [
      "Parallel strike lines made by iron pickaxes and point chisels",
      "Rectangular mortises where dried wooden wedges were soaked with water to split basalt blocks",
      "Partially shaped column blanks revealing top-down sculpting methodology",
      "Natural geological fault lines in the basalt that likely halted construction"
    ],
    archaeologicalInsights: "Why was Pataleshwar left unfinished? Archaeological consensus suggests that the discovery of a structural basalt fracture (seen in the rear rock face) combined with political shifts or military campaigns during the reign of Rashtrakuta King Krishna I led the builders to consecrate the finished central sanctum and halt further expansion.",
    audioTranscript: "Look closely at the rough stone walls on the eastern perimeter. Here you can see the actual stroke marks made by stonecutters 1,200 years ago. When a natural fissure was encountered in the basalt bedrock, the artisans wisely halted work rather than risk cave collapse, preserving their master techniques for us to study today.",
    hindiAudioTranscript: "पूर्वी दीवार के खुरदुरे पत्थरों को ध्यान से देखें। यहाँ १,२०० वर्ष पूर्व शिल्पकारों द्वारा छेनी के प्रहार के साक्षात निशान हैं। जब चट्टान में एक प्राकृतिक दरार मिली, तो कारीगरों ने गुफा धंसने के जोखिम से बचने के लिए आगे का काम रोक दिया।",
    marathiAudioTranscript: "पूर्वेकडील भिंतीवर जरा बारकाईने पाहा. बाराशे वर्षांपूर्वी कारागिरांनी मारलेले घाव आजही जसेच्या तसे आहेत. खडकात नैसर्गिक भेग आढळल्यामुळे संभाव्य धोका टाळण्यासाठी काम थांबवले गेले आणि ही शिल्पकला इतिहासाचा ठेवा बनून राहिली.",
    coordinatesOnMap: { x: 75, y: 30, label: "Unfinished Basalt Wall" }
  },
  {
    id: 10,
    partNumber: 10,
    title: "Part 10 — The Water Features and Heritage Preservation",
    subtitle: "Protecting the Details for Future Generations",
    hindiTitle: "भाग १० — जल संचयन एवं धरोहर संरक्षण",
    hindiSubtitle: "आने वाली पीढ़ियों के लिए इतिहास का संरक्षण",
    marathiTitle: "भाग १० — जल व्यवस्था आणि वारसा संवर्धन",
    marathiSubtitle: "पुढील पिढ्यांसाठी इतिहासाचे जतन",
    depthLevel: "Courtyard Runoff Cistern & Perimeter",
    elevationMeters: "-7.5m lowest cistern",
    category: "heritage",
    image: "/im10.jpg",
    audioEnglish: "/part10_english.mp3",
    audioHindi: "/part10_hindi.mp3",
    audioMarathi: "/part10_marathi.mp3",
    audioSrc: "/part10_hindi.mp3",
    duration: "02:50",
    durationSec: 170,
    overview: "Being excavated into a deep subterranean pit, Pataleshwar required an ingenious hydraulic drainage and rainwater harvesting system to avoid flooding during Pune's torrential monsoon seasons. Today, the monument is meticulously protected by the Archaeological Survey of India (ASI) as a Monument of National Importance.",
    hindiOverview: "एक गहरे भूमिगत गर्त में खुदा होने के कारण, पुणे के भारी मानसून में जलभराव से बचने के लिए पातालेश्वर में जल निकासी और वर्षा जल संचयन की अत्यंत चतुर व्यवस्था की गई थी। आज यह स्मारक भारतीय पुरातत्व सर्वेक्षण (ASI) द्वारा राष्ट्रीय महत्व के स्मारक के रूप में संरक्षित है।",
    marathiOverview: "खोल जमिनीत कोरलेले असल्याने पावसाळ्यात पाणी साचू नये म्हणून पाताळेश्वरात पावसाचे पाणी वाहून नेण्यासाठी आणि साठवण्यासाठी दगडी चर व टाक्यांची कल्पक योजना केली गेली. आज हे ठिकाण भारतीय पुरातत्व सर्वेक्षण (ASI) द्वारे राष्ट्रीय स्मारक म्हणून संरक्षित आहे.",
    architecturalFeatures: [
      "Rock-cut drainage channels cut into courtyard pavers to redirect rainwater runoff",
      "Deep subterranean stone catchment cisterns storing freshwater throughout dry months",
      "ASI heritage conservation perimeter, ecological buffer zone, and information plaques",
      "Micro-vibration monitoring to protect the 1,200-year-old basalt from urban vehicular traffic"
    ],
    archaeologicalInsights: "The ancient engineers calculated groundwater percolation rates so accurately that the main sanctum has never experienced structural waterlogging in twelve centuries. Ongoing conservation focuses on gentle chemical descaling, biological lichen control, and seismic stability.",
    audioTranscript: "We conclude our journey at the rock-cut water features. In an excavated underground temple, water management was a matter of survival. Ancient Rashtrakuta builders carved channels that diverted monsoon torrents into deep cisterns. Today, protected by the Archaeological Survey of India, Pataleshwar stands proud as Pune's oldest living architectural wonder.",
    hindiAudioTranscript: "हम अपनी यात्रा जल प्रबंधन प्रणाली पर समाप्त करते हैं। भूमिगत मंदिर में पानी का उचित निकास जीवन-मरण का प्रश्न था। राष्ट्रकूट निर्माताओं ने ऐसी नालियां बनाईं जो वर्षा के जल को गहरी टंकियों में मोड़ देती थीं। आज भारतीय पुरातत्व सर्वेक्षण द्वारा संरक्षित पातालेश्वर पुणे का सबसे प्राचीन जीवित वास्तुशिल्प आश्चर्य है।",
    marathiAudioTranscript: "आपल्या या प्रवासाचा समारोप येथील प्राचीन जल व्यवस्थेने होतो. जमिनीत खोल कोरलेल्या मंदिरात पाणी साचू न देणे हे अत्यावश्यक होते. राष्ट्रकूट कारागिरांनी कोरलेले हे चर पावसाचे पाणी टाक्यांकडे वळवतात. आज भारतीय पुरातत्व खात्याच्या संरक्षणाखाली पाताळेश्वर पुण्याचा अभिमान म्हणून उभे आहे.",
    coordinatesOnMap: { x: 78, y: 65, label: "Rainwater Cistern System" }
  }
];

export function getPartAudioUrl(part: HeritagePart, lang: 'en' | 'hi' | 'mr'): string {
  if (lang === 'hi') {
    return part.audioHindi || `/part${part.partNumber}_hindi.mp3`;
  }
  if (lang === 'mr') {
    return part.audioMarathi || `/part${part.partNumber}_marathi.mp3`;
  }
  return part.audioEnglish || `/part${part.partNumber}_english.mp3`;
}

export const HERITAGE_METRICS = [
  { label: "Historical Epoch", value: "8th Century CE", detail: "Rashtrakuta Dynasty" },
  { label: "Geological Medium", value: "Deccan Basalt", detail: "Single Monolithic Bedrock" },
  { label: "Excavated Depth", value: "7.5 Meters", detail: "Sunken Subterranean Pit" },
  { label: "Heritage Status", value: "ASI Monument", detail: "National Importance #N-MH-M1" }
];
