const homePageData = [
  {
    id: "hero",
    headline:
      "COURT REPORTING Focused Expertise to Support You Every Step of the Way",
    description:
      "Your trusted partner for expert court reporting and legal support services across the country.",
    cta_text: "Learn More",
    cta_link: "/expertise",
    image: "example.png",
  },
  {
    id: "experience",
    headline: "Decades of Experience. One Trusted Team.",
    subHeadline:
      "Delivering Solutions to Court Reporting Firms Across the U.S.",
    description:
      "Delivering Solutions to Court Reporting Firms Across the U.S. Backed by over 50 years of leadership and expertise in the court reporting industry, The Varallo Group combines a rich legacy, unwavering commitment, and forward-thinking innovation to empower and support your firm every step of the way.",
    image: "example.png",
    features: {
      title: "What Sets Us Apart",
      text: "Our handpicked team draws from decades of experience, delivering service with precision and professionalism. Think of us as a trusted extension of your team, dedicated to driving results together.",
      items: [
        {
          icon: "example.png",
          title: "Expertise Driven",
          text: "Our team of certified court reporters brings years of experience to every deposition and hearing.",
        },
        {
          icon: "example.png",
          title: "State of the Art Technology",
          text: "We utilize the latest tools and platforms to deliver accurate transcripts and seamless remote services.",
        },
        {
          icon: "example.png",
          title: "People First",
          text: "We are dedicated to building long-term relationships through exceptional client service and support.",
          cta_text: null,
          cta_link: null,
        },
      ],
    },
  },
  {
    id: "solutions",
    headline: "Smart Support. Smart Solutions.",
    description: [
      "Our team is the heart of The Varallo Group. They bring dedication, professionalism, and integrity to everything they do. I’m constantly inspired by their commitment to our clients and to each other. It's a privilege to work alongside such talented people who take real pride in delivering excellence every single day.",
      "At The Varallo Group, our services are built to simplify, strengthen, and scale your operations. Whether you're a court reporting firm, a professional organization, or an individual, our expertise meets your needs right where you are and right when you need it.",
    ],
    cta_text: "Get Started",
    cta_link: "/get-started",
    cards: [
      {
        title: "TVG Management",
        desc: "Comprehensive agency management support focused on optimizing your day-to-day operations.",
        image: "smart-1.jpg",
        link: "/services/tvg-management",
      },
      {
        title: "TVG Reporting",
        desc: "Our nationwide network of court reporters and legal videographers is ready to support your firm wherever you need.",
        image: "smart-2.jpg",
        link: "/services/tvg-reporting",
      },
      {
        title: "TVG Stream",
        desc: "Cutting-edge trial presentation and event A/V, with detail-focused on-site support.",
        image: "smart-3.jpg",
        link: "/services/tvg-stream",
      },
      {
        title: "TVG Books",
        desc: "Bookkeeping support services for court reporting and other professional industries.",
        image: "smart-4.jpg",
        link: "/services/tvg-books",
      },
      {
        title: "TVG Connect",
        desc: "Focused management services built for professional associations and organizations.",
        image: "smart-6.jpg",
        link: "/services/tvg-connect",
      },
      {
        title: "TVG Verify",
        desc: "Let us ensure your hiring is secure with reliable background screening and compliance checks, powered by SmartHire.",
        image: "smart-8.jpg",
        link: "/services/tvg-verify",
      },
    ],
  },
  {
    id: "performance",
    headline: "Experience That Performs. Support You Deserve.",
    description:
      "For court reporting firms that value reliability, accuracy, and confidentiality, our team delivers more than just services; we deliver peace of mind.",
    image: "example.png",
    service_tags: [{
        text: "Decades of expertise, led by Nancy Varallo. Teacher. Mentor. Industry Leader.", cta_text: "Learn More", cta_link: "/services",
        text: "Precision in every word. Because in law, details matter.", cta_text: "Learn More", cta_link: "/services"
    }],
    metrics: [
      { value: "24+", label: "Years of Experience" },
      { value: "2.5M+", label: "Pages Produced" },
    ]
  },
  {
    id: "capabilities",
    blocks: [
      {
        headline: "Nationwide Reach. Local Expertise.",
        description: "Trusted with skilled professionals across all 50 states, we offer personalized court reporting and legal services backed by decades of regional expertise.",
        image: "example.png",
        cta_text: "Learn More",
        cta_link: "/locations",
      },
      {
        headline: "One Team. Multiple Solutions.",
        description: "From court reporting coverage to administrative and business support, our team offers a comprehensive range of services customized to meet your firm’s unique needs.",
        image: "example.png",
        cta_text: "Learn More",
        cta_link: "/solutions",
      },
      {
        headline: "Tech Driven. People Focused.",
        description: "We combine advanced technology with genuine human insight to deliver efficient, secure, and attentive support. Because behind every service is a team that truly cares.",
        image: "example.png",
        cta_text: "Learn More",
        cta_link: "/technology",
      },
    ],
  },
  {
    id: "testimonials",
    headline: "Why Our Clients Choose Us Again & Again",
    cards: [
  {
    name: "Michael Scire",
    role: "Florida Court Reporters Association",
    text: "“Such a great experience working with The Varallo Group. I cannot say enough wonderful things about each of you. You are all professional, helpful, efficient, and respectful. You all jumped right in and often offered help when I didn’t realize I needed it. The conference ran seamlessly. Thank you from the bottom of my heart.”",
    image: "https://i.pravatar.cc/60?img=1",
  },
  {
    name: "Ray Catuogno, Jr.",
    role: "Real Time Court Reporting",
    text: "“I don’t get an opportunity to say it often enough, but I really appreciate the effort and hard work that everyone puts into making my business operations run smoothly. My work to establish the business was done long ago, and now it’s everyone else’s work that continues to make the business a success. So thanks for the big things that are a pain to do, and thanks for the little things that don’t get as much notice but are just as important.”",
    image: "https://i.pravatar.cc/60?img=2",
  },
  {
    name: "Pam Owen",
    role: "BOSS Reporters",
    text: "“I am so appreciative of what you have taught me and for all of your efforts. I am very pleased with the progress we’ve made together and grateful for your positivity and eagerness to get ‘all the ducks in a row.’ I am optimistic and very excited about the future, and know I am lucky to have found you.”",
    image: "https://i.pravatar.cc/60?img=3",
  },
  {
    name: "Mary Beth Johnson",
    role: "Community College of Allegheny County",
    text: "“May I begin by thanking you for a lifetime of work on behalf of Steno reporting. Your brilliance in creating A to Z and Basic Training saved our profession. As a result of your initiative, we now teach students from Oregon to Atlanta. You had vision, and I am grateful for your foresight.”",
    image: "https://i.pravatar.cc/60?img=1",
  },
  {
    name: "Michael Lewis",
    role: "Discovery Legal Services",
    text: "“Working with The Varallo Group and Cedar Bushong has been an excellent experience. Their team handled our website development with precision, creating a site that truly reflects our brand and meets our needs. Beyond the initial development, their ongoing support has been invaluable. They are consistently responsive and supportive, addressing any issues promptly and helping us adapt our site as our business evolves. We couldn’t be happier with their dedication and commitment to our success. Highly recommend!”",
    image: "https://i.pravatar.cc/60?img=2",
  },
],
  },
];
