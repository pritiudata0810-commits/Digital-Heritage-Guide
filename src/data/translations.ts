export type SupportedLanguage = 'en' | 'hi' | 'mr';

export interface TranslationStrings {
  brandTitle: string;
  projectTagline: string;
  navHome: string;
  navCaveLevels: string;
  navArchitecture: string;
  btnAudioTour: string;
  heroMonument: string;
  heroEpoch: string;
  heroDynasty: string;
  heroLocation: string;
  heroHeadline: string;
  heroHeadlineSub: string;
  heroDescription: string;
  btnStartTour: string;
  btnViewLevels: string;
  nowPlaying: string;
  btnStopAudio: string;
  metricEpochLabel: string;
  metricEpochVal: string;
  metricEpochSub: string;
  metricBedrockLabel: string;
  metricBedrockVal: string;
  metricBedrockSub: string;
  metricDepthLabel: string;
  metricDepthVal: string;
  metricDepthSub: string;
  metricLevelsLabel: string;
  metricLevelsVal: string;
  metricLevelsSub: string;
  levelsBadge: string;
  levelsTitle: string;
  levelsSubtitle: string;
  btnStartAudio: string;
  btnDetails: string;
  archBadge: string;
  archTitle: string;
  archSubtitle: string;
  arch1Title: string;
  arch1Desc: string;
  arch2Title: string;
  arch2Desc: string;
  arch3Title: string;
  arch3Desc: string;
  footerTitle: string;
  footerAsi: string;
  roadmapBadge: string;
  roadmapTitle: string;
  roadmapSubtitle: string;
  roadmapViewPath: string;
  roadmapViewGrid: string;
  clickToOpen: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationStrings> = {
  en: {
    brandTitle: "Anveshan",
    projectTagline: "Your Digital Heritage Guide",
    navHome: "Home",
    navCaveLevels: "Cave Levels",
    navArchitecture: "Architecture",
    btnAudioTour: "Audio Tour",
    heroMonument: "Pataleshwar Caves",
    heroEpoch: "8th Century CE",
    heroDynasty: "Rashtrakuta Dynasty",
    heroLocation: "Shivajinagar, Pune",
    heroHeadline: "Anveshan",
    heroHeadlineSub: "Your Digital Heritage Guide",
    heroDescription: "Carved downwards into solid volcanic basalt bedrock over 1,200 years ago, Pataleshwar is Pune's oldest monolithic rock-cut cave temple. Explore all 10 distinct levels with audio narration and architectural insights.",
    btnStartTour: "Start Audio Tour",
    btnViewLevels: "View Cave Levels",
    nowPlaying: "Now Playing",
    btnStopAudio: "Stop Audio",
    metricEpochLabel: "Epoch",
    metricEpochVal: "8th Century CE",
    metricEpochSub: "Rashtrakuta",
    metricBedrockLabel: "Bedrock",
    metricBedrockVal: "Deccan Basalt",
    metricBedrockSub: "Monolithic Rock",
    metricDepthLabel: "Depth",
    metricDepthVal: "7.5 Meters",
    metricDepthSub: "Sunken Pit",
    metricLevelsLabel: "Levels",
    metricLevelsVal: "10 Parts",
    metricLevelsSub: "Audio & Photos",
    levelsBadge: "Architectural Levels",
    levelsTitle: "Cave Levels",
    levelsSubtitle: "Click Start Audio to listen, or click Details to view high-resolution photography and historical insights.",
    btnStartAudio: "Start Audio",
    btnDetails: "Details",
    archBadge: "Monolithic Engineering",
    archTitle: "Architecture",
    archSubtitle: "How ancient stonecutters excavated a monolithic temple downwards from living basalt bedrock.",
    arch1Title: "Top-Down Excavation",
    arch1Desc: "Unlike traditional masonry built from the ground up, Pataleshwar was carved downwards. Stonecutters started at the surface, sculpted the stone ceiling first, then carved the pillars and finished with the floor.",
    arch2Title: "Massive Basalt Columns",
    arch2Desc: "The Sabha Mandapa is supported by over 20 monolithic square pillars. Each column was carved directly from the bedrock mass without joints, cement, or mortar, bearing hundreds of tons of stone hill above.",
    arch3Title: "Ancient Tool Marks",
    arch3Desc: "Visible pick strikes, point chisel grooves, and water-wedge splitting slots on the eastern wall preserve a rare freeze-frame of ancient Indian stone engineering techniques from 1,200 years ago.",
    footerTitle: "Anveshan: Your Digital Heritage Guide · Pataleshwar Caves, Pune",
    footerAsi: "Monument of National Importance protected by the Archaeological Survey of India (ASI).",
    roadmapBadge: "Subterranean Roadmap",
    roadmapTitle: "Cave Journey Roadmap",
    roadmapSubtitle: "Follow the 10-stage excavation path from surface entrance down to sacred rock sanctums. Click any part to open detailed info.",
    roadmapViewPath: "Roadmap Path",
    roadmapViewGrid: "Grid View",
    clickToOpen: "Click to open detailed info"
  },
  hi: {
    brandTitle: "अन्वेषण",
    projectTagline: "आपकी डिजिटल हेरिटेज गाइड",
    navHome: "होम",
    navCaveLevels: "गुफा स्तर",
    navArchitecture: "वास्तुकला",
    btnAudioTour: "ऑडियो टूर",
    heroMonument: "पातालेश्वर गुफाएं",
    heroEpoch: "८वीं शताब्दी ईस्वी",
    heroDynasty: "राष्ट्रकूट राजवंश",
    heroLocation: "शिवाजीनगर, पुणे",
    heroHeadline: "अन्वेषण",
    heroHeadlineSub: "आपकी डिजिटल हेरिटेज गाइड",
    heroDescription: "१,२०० से अधिक वर्ष पूर्व ठोस ज्वालामुखीय बेसाल्ट चट्टान को ऊपर से नीचे की ओर तराश कर बनाया गया, पातालेश्वर पुणे का सबसे प्राचीन एकाश्म शैल-उत्कीर्ण गुफा मंदिर है। ऑडियो मार्गदर्शन और स्थापत्य विवरण के साथ सभी १० स्तरों का अन्वेषण करें।",
    btnStartTour: "ऑडियो टूर शुरू करें",
    btnViewLevels: "गुफा स्तर देखें",
    nowPlaying: "अब बज रहा है",
    btnStopAudio: "ऑडियो रोकें",
    metricEpochLabel: "काल",
    metricEpochVal: "८वीं शताब्दी ई.",
    metricEpochSub: "राष्ट्रकूट काल",
    metricBedrockLabel: "चट्टान",
    metricBedrockVal: "दक्कन बेसाल्ट",
    metricBedrockSub: "अखंड पाषाण",
    metricDepthLabel: "गहराई",
    metricDepthVal: "७.५ मीटर",
    metricDepthSub: "भूमिगत गर्त",
    metricLevelsLabel: "स्तर",
    metricLevelsVal: "१० भाग",
    metricLevelsSub: "ऑडियो और चित्र",
    levelsBadge: "स्थापत्य स्तर",
    levelsTitle: "गुफा के १० स्तर",
    levelsSubtitle: "विस्तृत जानकारी देखने के लिए किसी भी भाग पर क्लिक करें।",
    btnStartAudio: "ऑडियो शुरू करें",
    btnDetails: "विवरण",
    archBadge: "एकाश्म स्थापत्य अभियांत्रिकी",
    archTitle: "वास्तुकला एवं शिल्पकला",
    archSubtitle: "प्राचीन शिल्पकारों ने कैसे जीवित बेसाल्ट चट्टान को ऊपर से नीचे की ओर तराश कर इस भव्य मंदिर का निर्माण किया।",
    arch1Title: "ऊपर से नीचे की ओर नक्काशी",
    arch1Desc: "पारंपरिक भवनों के विपरीत जो नीचे से ऊपर बनाए जाते हैं, पातालेश्वर को ऊपर से नीचे खोदा गया। शिल्पकारों ने धरातल से शुरू कर पहले छत तराशी, फिर खंभे और अंत में फर्श बनाया।",
    arch2Title: "विशाल बेसाल्ट स्तंभ",
    arch2Desc: "सभा मंडप २० से अधिक भारी चौकोर पाषाण खंभों पर टिका है। प्रत्येक स्तंभ बिना किसी जोड़ या गारे के सीधे चट्टान से तराशा गया है, जो ऊपर सैकड़ों टन भारी पहाड़ी का भार वहन करता है।",
    arch3Title: "प्राचीन औज़ारों के निशान",
    arch3Desc: "पूर्वी दीवार पर दिखाई देने वाले लोहे की कुदालों, नुकीली छेनी के निशान और लकड़ी की खूंटियों के खांचे १,२०० वर्ष प्राचीन भारतीय पाषाण तराशने की तकनीकों का साक्षात प्रमाण हैं।",
    footerTitle: "अन्वेषण: आपकी डिजिटल हेरिटेज गाइड · पातालेश्वर गुफाएं, पुणे",
    footerAsi: "भारतीय पुरातत्व सर्वेक्षण (ASI) द्वारा संरक्षित राष्ट्रीय महत्व का स्मारक।",
    roadmapBadge: "भूमिगत रोडमैप",
    roadmapTitle: "गुफा यात्रा रोडमैप",
    roadmapSubtitle: "सतह से गर्भगृह तक १० चरणों का उत्खनन पथ। विस्तृत जानकारी देखने के लिए किसी भी भाग पर क्लिक करें।",
    roadmapViewPath: "रोडमैप पथ",
    roadmapViewGrid: "ग्रिड दृश्य",
    clickToOpen: "विस्तृत जानकारी के लिए क्लिक करें"
  },
  mr: {
    brandTitle: "अन्वेषण",
    projectTagline: "तुमचा डिजिटल वारसा मार्गदर्शक",
    navHome: "मुख्यपृष्ठ",
    navCaveLevels: "गुहा स्तर",
    navArchitecture: "स्थापत्य",
    btnAudioTour: "ऑडिओ टूर",
    heroMonument: "पाताळेश्वर लेणी",
    heroEpoch: "८वे शतक इसवी सन",
    heroDynasty: "राष्ट्रकूट राजवंश",
    heroLocation: "शिवाजीनगर, पुणे",
    heroHeadline: "अन्वेषण",
    heroHeadlineSub: "तुमचा डिजिटल वारसा मार्गदर्शक",
    heroDescription: "१,२०० हून अधिक वर्षांपूर्वी सलग काळ्या बेसाल्ट खडकात खाली खोदून कोरलेले, पाताळेश्वर हे पुण्यातील सर्वात प्राचीन एकाश्म लेणी मंदिर आहे. ऑडिओ कथन आणि स्थापत्य अभ्यासासह सर्व १० स्तरांची सफर करा.",
    btnStartTour: "ऑडिओ टूर सुरू करा",
    btnViewLevels: "गुहा स्तर पहा",
    nowPlaying: "आता वाजत आहे",
    btnStopAudio: "ऑडिओ थांबवा",
    metricEpochLabel: "काळ",
    metricEpochVal: "८वे शतक",
    metricEpochSub: "राष्ट्रकूट घराणे",
    metricBedrockLabel: "खडक",
    metricBedrockVal: "दख्खन बेसाल्ट",
    metricBedrockSub: "सलग काळा पाषाण",
    metricDepthLabel: "खोली",
    metricDepthVal: "७.५ मीटर",
    metricDepthSub: "जमिनीखाली खोदलेले",
    metricLevelsLabel: "स्तर",
    metricLevelsVal: "१० भाग",
    metricLevelsSub: "ऑडिओ आणि चित्रे",
    levelsBadge: "स्थापत्य स्तर",
    levelsTitle: "पाताळेश्वराचे १० भाग",
    levelsSubtitle: "सविस्तर माहिती पाहण्यासाठी कोणत्याही भागावर क्लिक करा.",
    btnStartAudio: "ऑडिओ सुरू करा",
    btnDetails: "सविस्तर",
    archBadge: "एकाश्म पाषाण स्थापत्य",
    archTitle: "स्थापत्य आणि शिल्पकला",
    archSubtitle: "प्राचीन कारागिरांनी सलग बेसाल्ट खडकात वरून खाली खोदून हे भव्य मंदिर कसे साकारले.",
    arch1Title: "वरून खाली उत्खनन पद्धत",
    arch1Desc: "पारंपरिक मंदिरांप्रमाणे खाली पाया रचण्याऐवजी, पाताळेश्वर वरून खाली कोरले गेले. कारागिरांनी जमिनीच्या थरापासून सुरुवात करून आधी छत कोरले, मग खांब आणि शेवटी अखंड फरशी तयार केली.",
    arch2Title: "भव्य बेसाल्ट पाषाण स्तंभ",
    arch2Desc: "सभा मंडप २० हून अधिक चौकोनी दगडी खांबांवर तोललेला आहे. कोणताही जोड किंवा चुना न वापरता हे खांब मूळ खडकातूनच कोरलेले आहेत, जे वरच्या प्रचंड टेकडीचा भार पेलतात.",
    arch3Title: "प्राचीन छणीचे ओरखडे व खुणा",
    arch3Desc: "पूर्वेकडील भिंतीवर आजही दिसणाऱ्या लोखंडी पहारीच्या व छणीच्या खुणा तसेच लाकडी पाचर ठोकण्यासाठी केलेल्या खोबण्या १,२०० वर्षांपूर्वीच्या प्राचीन तंत्रज्ञानाचा जिवंत पुरावा आहेत.",
    footerTitle: "अन्वेषण: तुमचा डिजिटल वारसा मार्गदर्शक · पाताळेश्वर लेणी, पुणे",
    footerAsi: "भारतीय पुरातत्व सर्वेक्षण (ASI) द्वारे संरक्षित राष्ट्रीय महत्त्वाचे स्मारक.",
    roadmapBadge: "भूमिगत वारसा रोडमॅप",
    roadmapTitle: "गुहा प्रवास रोडमॅप",
    roadmapSubtitle: "जमिनीपासून ते पवित्र गर्भगृहापर्यंतचा १० टप्प्यांचा मार्ग. सविस्तर माहिती पाहण्यासाठी कोणत्याही भागावर क्लिक करा.",
    roadmapViewPath: "रोडमॅप मार्ग",
    roadmapViewGrid: "ग्रिड दृश्य",
    clickToOpen: "सविस्तर माहितीसाठी क्लिक करा"
  }
};
