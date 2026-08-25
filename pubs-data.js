/* ============================================================
   공용 논문 데이터 파일 (publications.html, index.html 둘 다 여기서 불러옵니다)
   새 논문을 추가할 때는 이 파일 하나만 수정하면 됩니다.
   배열의 첫 항목이 가장 최신 논문입니다 (index.html에는 앞 3개만 표시됨).

   각 필드 설명:
   - journal     : 저널 약칭. 아직 공개할 수 없으면 "" 로 둘 것
   - year        : 연도
   - status      : (선택) "Submitted" | "In revision" | "Accepted" 등. 정식 출판이면 ""
   - role        : "First author" | "Co-author" | "Corresponding author" 등
   - title       : 논문 제목
   - authors     : 저자 목록. 본인 이름은 <span class="me">Junsu Ha</span>로 감싸면 강조됨
   - journalFull : 정식 인용 표기 (마침표로 마무리)
   - note        : (선택) Cover feature 등
   - link        : DOI/논문 링크. 없으면 ""
   - toc         : TOC 이미지 경로. 없으면 ""
   ============================================================ */

const publications = [
  {
    journal: "",
    year: "2026",
    status: "Submitted",
    role: "Co-author",
    title: "Enthalpy-Buffered Cryoadsorption in MOFs for Suppressing Boil-Off Losses in LH₂ Transport",
    authors: 'Jaewoo Park, Minji Jung, <span class="me">Junsu Ha</span>, Jung Heum Yoon, Jonghyeok Park, Hoi Ri Moon*, Wonyoung Choe*, Hyunchul Oh*',
    journalFull: "<strong>2026</strong>, submitted.",
    note: "",
    link: "",
    toc: ""
  },
  {
    journal: "-",
    year: "2026",
    status: "In revision",
    role: "First author",
    title: "A Locally Flexible Kinetic Valve for Temperature-Programmed Guest Release in Metal-Organic Frameworks",
    authors: '<span class="me">Junsu Ha</span>, Minji Jung, Jaewoo Park, Shinyoung Kang, Mingyu Jeon, Jihyun Park, Jihan Kim,* Hyunchul Oh* and Hoi Ri Moon*',
    journalFull: "<strong>2026</strong>, in revision.",
    note: "",
    link: "",
    toc: ""
  },
  {
    journal: "Nat. Commun.",
    year: "2026",
    status: "Accepted",
    role: "Co-author",
    title: "MOF-assisted cryo-adsorption delivers near-liquid volumetric capacity and suppressed boil-off for LH₂ transport",
    authors: 'Jaewoo Park, <span class="me">Junsu Ha</span>, Hong Kyu Lee, Hyunlim Kim, Sungyeop Jung, Minji Jung, Taeung Park, Monica Jiménez-Ruiz, Margarita Russina, Hoi Ri Moon*, Jitae T. Park*, and Hyunchul Oh*',
    journalFull: "<em>Nat. Commun.</em> <strong>2026</strong>, accepted.",
    note: "",
    link: "",
    toc: ""
  },
  {
    journal: "J. Environ. Manage.",
    year: "2025",
    status: "",
    role: "First author",
    title: "Unraveling the adsorption mechanisms of cationic dyes on defective UiO-66: Insights from kinetics, isotherms, and spectroscopic analyses",
    authors: 'Jong-Soo Choi<sup>†</sup>, <span class="me">Junsu Ha</span><sup>†</sup>, Yelim Lee, Chang Min Park, Min Jang, Ahjeong Son, Hoi Ri Moon*, Yeomin Yoon* (<sup>†</sup>equally contributed)',
    journalFull: "<em>J. Environ. Manage.</em> <strong>2025</strong>, <em>393</em>, 127106.",
    note: "",
    link: "https://www.sciencedirect.com/science/article/pii/S0301479725030828?via%3Dihub",
    toc: ""
  },
  {
    journal: "Small",
    year: "2025",
    status: "",
    role: "Co-author",
    title: "Rational Pore Design in Multivariate Metal-Organic Frameworks for C₂H₆/C₂H₄ Separation",
    authors: 'Jihyun Park<sup>†</sup>, Kwang Hyun Oh<sup>†</sup>, Shinyoung Kang, <span class="me">Junsu Ha</span>, SeungJin Lee, Jihan Kim, Youn-Sang Bae*, and Hoi Ri Moon* (<sup>†</sup>equally contributed)',
    journalFull: "<em>Small</em> <strong>2025</strong>, <em>21</em>, 2500937.",
    note: "",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/smll.202500937",
    toc: "toc/toc-13.png"
  },
  {
    journal: "ACS Appl. Energy Mater.",
    year: "2023",
    status: "",
    role: "Co-author",
    title: "20 K H₂ Physisorption on Metal-Organic Frameworks with Enhanced Dormancy Compared to Liquid Hydrogen Storage",
    authors: 'Jaewoo Park, <span class="me">Junsu Ha</span>, Raeesh Muhammad, Hong Kyu Lee, Rafael Balderas-Xicohtencatl, Yongqiang Cheng, Anibal J. Ramirez-Cuesta, Barbara Streppel, Michael Hirscher,* Hoi Ri Moon* and Hyunchul Oh*',
    journalFull: "<em>ACS Appl. Energy Mater.</em> <strong>2023</strong>, <em>6</em>, 18, 9057&ndash;9064.",
    note: "",
    link: "https://doi.org/10.1021/acsaem.2c01907",
    toc: "toc/toc-12.jpg"
  },
  {
    journal: "Nanoscale Adv.",
    year: "2023",
    status: "",
    role: "First author",
    title: "Effect of Steric Hindrance on the Interfacial Connection of MOF-on-MOF Architectures",
    authors: '<span class="me">Junsu Ha</span><sup>†</sup>, Mingyu Jeon<sup>†</sup>, Jihyun Park, Jihan Kim,* and Hoi Ri Moon* (<sup>†</sup>equally contributed)',
    journalFull: "<em>Nanoscale Adv.</em> <strong>2023</strong>, <em>5</em>, 2111&ndash;2117.",
    note: "",
    link: "https://doi.org/10.1039/D2NA00790H",
    toc: "toc/toc-11.png"
  },
  {
    journal: "J. Vis. Exp.",
    year: "2023",
    status: "",
    role: "Co-author",
    title: "Synthesis of Single-Crystalline Core-Shell Metal-Organic Frameworks",
    authors: 'Jihyun Park, <span class="me">Junsu Ha</span>, and Hoi Ri Moon*',
    journalFull: "<em>J. Vis. Exp.</em> <strong>2023</strong>, <em>192</em>, e64978.",
    note: "",
    link: "https://dx.doi.org/10.3791/64978",
    toc: "toc/toc-10.png"
  },
  {
    journal: "ACS Appl. Mater. Interfaces",
    year: "2022",
    status: "",
    role: "First author",
    title: "Thermodynamic Separation of Hydrogen Isotopes using Hofmann-Type Metal&ndash;Organic Frameworks with High-Density Open Metal Sites",
    authors: '<span class="me">Junsu Ha</span>, Minji Jung, Jaewoo Park, Hyunchul Oh,* and Hoi Ri Moon*',
    journalFull: "<em>ACS Appl. Mater. Interfaces</em> <strong>2022</strong>, <em>14</em>, 27, 30946&ndash;30951.",
    note: "",
    link: "https://pubs.acs.org/doi/full/10.1021/acsami.2c07829",
    toc: "toc/toc-9.jpg"
  },
  {
    journal: "Bull. Jpn. Soc. Coord. Chem.",
    year: "2022",
    status: "",
    role: "First author",
    title: "Dynamic Variation of Responsive Metal-Organic Frameworks toward Specific Stimuli",
    authors: 'Hong Kyu Lee<sup>†</sup>, <span class="me">Junsu Ha</span><sup>†</sup>, Jihyun Park and Hoi Ri Moon* (<sup>†</sup>equally contributed)',
    journalFull: "<em>Bull. Jpn. Soc. Coord. Chem.</em> <strong>2022</strong>, <em>79</em>, 50&ndash;57.",
    note: "Award accounts",
    link: "https://doi.org/10.4019/bjscc.79.50",
    toc: ""
  },
  {
    journal: "Bull. Korean Chem. Soc.",
    year: "2021",
    status: "",
    role: "Corresponding author",
    title: "MOF-on-MOF Architectures: Applications in Separation, Catalysis, and Sensing",
    authors: 'Doo Hwan Hong, Hui Su Shim, <span class="me">Junsu Ha</span>,* and Hoi Ri Moon*',
    journalFull: "<em>Bull. Korean Chem. Soc.</em> <strong>2021</strong>, <em>42</em>, 956.",
    note: "",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1002/bkcs.12335",
    toc: "toc/toc-7.png"
  },
  {
    journal: "Mater. Chem. Front.",
    year: "2021",
    status: "",
    role: "First author",
    title: "Hydrogen separation and purification with MOF-based materials",
    authors: 'Dae-Woon Lim,*,<sup>†</sup>, <span class="me">Junsu Ha</span><sup>†</sup>, Yasaswini Oruganti, and Hoi Ri Moon* (<sup>†</sup>equally contributed)',
    journalFull: "<em>Mater. Chem. Front.</em> <strong>2021</strong>, <em>5</em>, 4022.",
    note: "",
    link: "https://pubs.rsc.org/en/content/articlelanding/2021/qm/d1qm00234a#!divAbstract",
    toc: "toc/toc-6.jpg"
  },
  {
    journal: "CrystEngComm",
    year: "2021",
    status: "",
    role: "First author",
    title: "Synthesis of MOF-on-MOF architectures in the context of interfacial lattice matching",
    authors: '<span class="me">Junsu Ha</span>, Hoi Ri Moon*',
    journalFull: "<em>CrystEngComm</em> <strong>2021</strong>, <em>23</em>, 2337.",
    note: "",
    link: "https://pubs.rsc.org/en/content/articlelanding/2021/ce/d0ce01883j#!divAbstract",
    toc: "toc/toc-5.jpg"
  },
  {
    journal: "Nano Res.",
    year: "2021",
    status: "",
    role: "Co-author",
    title: "Solid-State Phase Transformations toward a Metal&ndash;Organic Framework of 7-Connected Zn₄O Secondary Building Units",
    authors: 'Jaehui Kim, <span class="me">Junsu Ha</span>, Jae Hwa Lee,* and Hoi Ri Moon*',
    journalFull: "<em>Nano Res.</em> <strong>2021</strong>, <em>14</em>, 411.",
    note: "",
    link: "https://link.springer.com/article/10.1007/s12274-020-2873-y",
    toc: "toc/toc-4.png"
  },
  {
    journal: "J. Am. Chem. Soc.",
    year: "2020",
    status: "",
    role: "Co-author",
    title: "Specific Isotope-Responsive Breathing Transition in Flexible Metal-Organic Frameworks",
    authors: 'Jin Yeong Kim<sup>+</sup>, Jaewoo Park<sup>+</sup>, <span class="me">Junsu Ha</span>, Minji Jung, Dirk Wallacher, Alexandra Franz, Rafael Balderas-Xicohténcatl, Michael Hirscher, Sung Gu Kang, Jitae Park, In Hwan Oh,* Hoi Ri Moon,* and Hyunchul Oh* (<sup>+</sup>equally contributed)',
    journalFull: "<em>J. Am. Chem. Soc.</em> <strong>2020</strong>, <em>142</em>, 13278.",
    note: "Selected as a cover",
    link: "https://pubs.acs.org/doi/10.1021/jacs.0c04277",
    toc: "toc/toc-3.png"
  },
  {
    journal: "Inorg. Chem. Front.",
    year: "2020",
    status: "",
    role: "First author",
    title: "Alterations to Secondary Building Units of Metal&ndash;Organic Frameworks for the Development of New Functions",
    authors: '<span class="me">Junsu Ha</span>, Jae Hwa Lee,* and Hoi Ri Moon*',
    journalFull: "<em>Inorg. Chem. Front.</em> <strong>2020</strong>, <em>7</em>, 12.",
    note: "Invited Review Article",
    link: "https://pubs.rsc.org/en/content/articlelanding/2019/QI/C9QI01119F#!divAbstract",
    toc: "toc/toc-2.png"
  },
  {
    journal: "Nat. Commun.",
    year: "2019",
    status: "",
    role: "Co-author",
    title: "Computer-aided Discovery of Connected Metal-Organic Frameworks",
    authors: 'Ohmin Kwon<sup>+</sup>, Jin Yeong Kim<sup>+</sup>, Sungbin Park, Jae Hwa Lee, <span class="me">Junsu Ha</span>, Hyunsoo Park, Hoi Ri Moon,* and Jihan Kim* (<sup>+</sup>equally contributed)',
    journalFull: "<em>Nat. Commun.</em> <strong>2019</strong>, <em>10</em>, 3620.",
    note: "",
    link: "https://www.nature.com/articles/s41467-019-11629-4",
    toc: "toc/toc-1.png"
  }
];
