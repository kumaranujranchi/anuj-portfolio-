export const portfolioData = {
  profile: {
    name: "Anuj Kumar",
    initials: "AK",
    title: "Performance Marketer · Paid Media Specialist",
    avatar: "/anuj-portrait.jpg",
    aboutAvatar: "/anuj-about.jpg",
    tagline: "I turn ad spend into predictable revenue.",
    lead: "Performance marketer scaling brands profitably across Meta, Google, LinkedIn, TikTok & Bing.",
    location: "Gaya, India · Working with clients globally (remote)",
    yearsExperience: "15+",
    bio: [
      "I started in telecom and mobility marketing, where every campaign had to justify its budget, then spent years running growth for real estate, automotive and retail brands. That is where I learned to treat paid media as a system: tracking first, creative second, scale last.",
      "Today I work as an independent performance marketer, building and scaling paid media for brands that want growth they can forecast."
    ],
    quote: "“Every rupee should be accountable.”",
    industries: ["15+ years", "Real estate", "Automotive", "Mobility", "Telecom", "Retail"],
    social: {
      linkedin: "https://linkedin.com",
      x: "https://x.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      whatsapp: "https://wa.me",
      email: "mailto:anuj@example.com"
    }
  },

  kpis: [
    { label: 'ROAS', targetValue: 4.6, unit: 'x', delta: '+12.4%', pts: [3, 3.2, 3.1, 3.6, 3.9, 4.1, 4.6], formatDecimals: 1 },
    { label: 'CPA', targetValue: 18.4, prefix: '$', delta: '-38%', pts: [30, 28, 27, 24, 22, 20, 18], formatDecimals: 2 },
    { label: 'CTR', targetValue: 3.2, unit: '%', delta: '+0.8pt', pts: [2.1, 2.2, 2.5, 2.4, 2.8, 3.0, 3.2], formatDecimals: 1 },
    { label: 'REVENUE', targetValue: 182, prefix: '$', unit: 'K', delta: '+310%', pts: [20, 30, 44, 70, 96, 140, 182], formatDecimals: 0 }
  ],

  heroChart: {
    revenueSeries: [20, 26, 24, 38, 44, 58, 66, 84, 96, 118, 140, 176],
    spendSeries: [30, 32, 34, 36, 40, 42, 44, 46, 50, 52, 56, 58]
  },

  clients: [
    'UrbanEdge Living',
    'Apex Mobility',
    'Nova Retailers',
    'Velocity Auto',
    'LuxeAura D2C',
    'CloudScale Tech'
  ],

  stats: [
    { v: '₹50Cr+', l: 'Ad spend managed' },
    { v: '4.8x', l: 'Average ROAS' },
    { v: '-42%', l: 'Avg. CPA reduction' },
    { v: '320+', l: 'Campaigns launched' }
  ],

  platforms: [
    { g: 'Me', n: 'Meta Ads', lv: 95, sp: ['Advantage+', 'Catalog', 'Lead Gen'] },
    { g: 'G', n: 'Google Ads', lv: 95, sp: ['Search', 'PMax', 'Shopping', 'YouTube'] },
    { g: 'in', n: 'LinkedIn Ads', lv: 85, sp: ['ABM', 'Lead Gen Forms'] },
    { g: 'Tk', n: 'TikTok Ads', lv: 80, sp: ['Spark Ads', 'UGC creatives'] },
    { g: 'Bg', n: 'Microsoft (Bing)', lv: 75, sp: ['Search', 'Google import', 'Audience Network'] },
    { g: 'YT', n: 'YouTube', lv: 80, sp: ['Demand Gen', 'In-stream', 'Shorts'] },
    { g: 'Sc', n: 'Snapchat', lv: 60, sp: ['Story Ads', 'Lead forms'] },
    { g: 'Pi', n: 'Pinterest', lv: 60, sp: ['Shopping', 'Catalog'] },
    { g: 'Az', n: 'Amazon Ads', lv: 70, sp: ['Sponsored Products', 'Sponsored Brands'] },
    { g: 'Pg', n: 'Programmatic', lv: 65, sp: ['DV360', 'Retargeting'] }
  ],

  services: [
    {
      t: 'Paid Social Strategy & Management',
      o: 'Meta, TikTok and Pinterest funnels built to lower CPA as spend grows.',
      icon: 'M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4'
    },
    {
      t: 'Search & Shopping Campaigns',
      o: 'Capture high-intent demand on Google and Bing without paying for junk clicks.',
      icon: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3'
    },
    {
      t: 'B2B Lead Generation (LinkedIn & Google)',
      o: 'Qualified pipeline from the accounts you actually want, not form-fill noise.',
      icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.900M16 3.100a4 4 0 010 7.800'
    },
    {
      t: 'Creative Strategy & Ad Testing',
      o: 'A weekly testing system that finds winning hooks and retires tired ads.',
      icon: 'M12 2l10 5-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      t: 'Tracking, Pixel/CAPI & GA4 Setup',
      o: 'Clean, server-side data so platforms optimise on real conversions.',
      icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6'
    },
    {
      t: 'Account Audits & Scaling Roadmaps',
      o: 'A prioritised plan showing where spend leaks and where to scale next.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2zM9 14l2 2 4-4'
    }
  ],

  filterCategories: ['All', 'E-commerce', 'B2B', 'SaaS', 'Lead Gen', 'D2C'],

  caseStudies: [
    {
      id: 'ecommerce-d2c-scale',
      tags: ['E-commerce', 'D2C'],
      industry: 'E-commerce · D2C',
      plats: ['Meta', 'Google'],
      client: 'Aura Lifestyle Co.',
      challenge: 'Spend was rising but ROAS stalled at 1.8x, eroding bottom line margins.',
      result: 'Rebuilt around catalog segmentation and creative testing, reaching 4.6x.',
      metrics: [
        { k: 'ROAS', v: '1.8x → 4.6x' },
        { k: 'REVENUE', v: '+310% in 90 days' }
      ],
      b: 28,
      a: 92
    },
    {
      id: 'b2b-saas-pipeline',
      tags: ['B2B', 'SaaS', 'Lead Gen'],
      industry: 'B2B · SaaS',
      plats: ['LinkedIn', 'Google'],
      client: 'Synthetix AI',
      challenge: 'High cost per lead, low sales qualification rate, and wasted retargeting budget.',
      result: 'Account-based targeting and lead-form tuning cut cost per lead by 52%.',
      metrics: [
        { k: 'CPL', v: '-52%' },
        { k: 'SQL RATE', v: '+68%' }
      ],
      b: 90,
      a: 43
    },
    {
      id: 'real-estate-leadgen',
      tags: ['Lead Gen'],
      industry: 'Lead Gen · Real estate',
      plats: ['Meta', 'Google'],
      client: 'Skyline Residencies',
      challenge: 'High volume of unqualified inquiries with under 3% site-visit conversion.',
      result: 'Audience gating, custom quiz funnels, and verified WhatsApp follow-ups.',
      metrics: [
        { k: 'CPL', v: '-34%' },
        { k: 'SITE VISITS', v: '+140%' }
      ],
      b: 40,
      a: 80
    },
    {
      id: 'd2c-creative-engine',
      tags: ['D2C', 'E-commerce'],
      industry: 'D2C · Consumer',
      plats: ['TikTok', 'Meta'],
      client: 'Kinetics Apparel',
      challenge: 'Creative fatigue was driving CPA up 25% week-over-week.',
      result: 'Spark Ads and agile UGC testing built a repeatable high-converting creative pipeline.',
      metrics: [
        { k: 'CPA', v: '-45%' },
        { k: 'ROAS', v: '3.9x' }
      ],
      b: 85,
      a: 50
    }
  ],

  detailedCaseStudy: {
    client: 'Aura Lifestyle Co.',
    headline: 'From 1.8x to 4.6x ROAS in 90 days.',
    subtitle: 'How rebuilding the funnel, the creative system and the tracking turned stalled ad spend into a revenue engine.',
    meta: [
      { k: 'CLIENT', v: 'Aura Lifestyle Co.' },
      { k: 'INDUSTRY', v: 'E-commerce · D2C' },
      { k: 'PLATFORMS', v: 'Meta, Google' },
      { k: 'DURATION', v: '90 days' },
      { k: 'AD BUDGET', v: '₹25L / $30K / mo' }
    ],
    problems: [
      'Prospecting and retargeting audiences overlapped, so the same buyers were paid for twice.',
      'Creative refreshed monthly, so ad fatigue showed up as rising CPMs and declining click-through rates.',
      'Conversion tracking missed a share of purchases, so Meta & Google AI optimized on incomplete, noisy data.'
    ],
    strategy: [
      {
        n: '01',
        t: 'Fix the data first',
        d: 'Conversions API (CAPI), GA4 server-side measurement, and clean purchase event deduping before touching budgets.'
      },
      {
        n: '02',
        t: 'Separate the funnel',
        d: 'Strict 7-day exclusions between cold prospecting, warm engagement, and high-intent bottom-funnel catalog retargeting.'
      },
      {
        n: '03',
        t: 'Test creative weekly',
        d: 'A structured testing framework with 6 new concept hooks tested weekly against automated scale rules.'
      }
    ],
    creatives: [
      { name: 'UGC testimonial', fmt: 'VIDEO 9:16', ratio: '9 / 12', tag: 'Hook A' },
      { name: 'Offer carousel', fmt: 'CAROUSEL 1:1', ratio: '1 / 1', tag: 'Hook B' },
      { name: 'Product demo', fmt: 'VIDEO 4:5', ratio: '4 / 5', tag: 'Hook C' },
      { name: 'Founder story', fmt: 'VIDEO 9:16', ratio: '9 / 12', tag: 'Hook D' },
      { name: 'Catalog feed ad', fmt: 'STATIC 1:1', ratio: '1 / 1', tag: 'DPA' },
      { name: 'Search ad copy', fmt: 'RESPONSIVE SEARCH', ratio: '4 / 3', tag: 'Google' }
    ],
    kpis: [
      { k: 'ROAS', v: '1.8x → 4.6x', s: 'Blended, last 30 days vs. baseline' },
      { k: 'REVENUE', v: '+310%', s: 'Within 90 days of engagement' },
      { k: 'CPA', v: '-46%', s: 'Versus pre-engagement average' },
      { k: 'AD SPEND', v: '₹75L ($90K)', s: 'Scaled with healthy unit economics' }
    ],
    learnings: [
      {
        n: 'LEARNING 01',
        t: 'Tracking is a growth lever',
        d: 'Better conversion signals improved algorithm bidding accuracy before any creative or budget change was made.'
      },
      {
        n: 'LEARNING 02',
        t: 'Creative volume beats polish',
        d: 'Fast, structured UGC and hook iterations consistently outperform expensive studio shoots.'
      },
      {
        n: 'LEARNING 03',
        t: 'Scale in steps',
        d: '15-20% incremental budget increases every 72 hours held ROAS stable without triggering re-learning phase spikes.'
      }
    ],
    testimonial: {
      quote: "Anuj completely transformed our paid marketing. Within 90 days, we tripled our revenue while keeping our margins higher than ever. Every report gives clear numbers we can bank on.",
      name: "Rohan Varma",
      role: "Co-Founder & CEO, Aura Lifestyle",
      initials: "RV",
      metricLabel: "REVENUE",
      metricVal: "+310%",
      metricSub: "in 90 days"
    }
  },

  steps: [
    {
      n: '01',
      t: 'Audit',
      d: 'Tracking, structure, audiences and spend leaks reviewed before anything changes.',
      icon: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3'
    },
    {
      n: '02',
      t: 'Strategy',
      d: 'Funnel, budget split and targets set against your actual product margins.',
      icon: 'M12 22a10 10 0 100-20 10 10 0 000 20zM12 18a6 6 0 100-12 6 6 0 000 12zM12 14a2 2 0 100-4 2 2 0 000 4z'
    },
    {
      n: '03',
      t: 'Launch',
      d: 'Campaigns, creative and tracking go live together, cleanly and methodically.',
      icon: 'M4.500 16.500c-1.500 1.300-2 5-2 5s3.700-.5 5-2c.7-.8.7-2.100-.1-2.900a2.200 2.200 0 00-2.900-.1zM12 15l-3-3a22 22 0 012-4A12.900 12.900 0 0122 2c0 2.700-.8 7.500-6 11a22 22 0 01-4 2zM9 12H4s.6-3 2-4c1.600-1.100 5 0 5 0M12 15v5s3-.6 4-2c1.100-1.600 0-5 0-5'
    },
    {
      n: '04',
      t: 'Optimize',
      d: 'Weekly testing and budget shifts toward what returns, killing fatigue early.',
      icon: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6'
    },
    {
      n: '05',
      t: 'Scale',
      d: 'Spend rises in steps while CPA and ROAS stay strictly inside target bounds.',
      icon: 'M23 6l-9.500 9.500-5-5L1 18M17 6h6v6'
    }
  ],

  tools: [
    'GA4',
    'GTM',
    'Looker Studio',
    'Meta Business Suite',
    'Google Merchant Center',
    'HubSpot',
    'Shopify',
    'Triple Whale',
    'Supermetrics',
    'Hotjar',
    'Canva / Figma'
  ].map((n) => ({
    n,
    g: n.replace(/[^A-Za-z0-9 ]/g, '').split(' ').map((w) => w[0]).join('').slice(0, 2)
  })),

  testimonials: [
    {
      quote: "“Anuj took our Meta ad account from struggling at 1.8x ROAS to a steady 4.6x while we scaled spend 3x. His data hygiene and proactive testing are world-class.”",
      name: "Rohan Varma",
      role: "Founder, Aura Lifestyle Co.",
      ini: "RV",
      mk: "ROAS",
      mv: "4.6x"
    },
    {
      quote: "“The transparency and weekly reporting gave our executive board full confidence. Our cost per qualified lead fell by 52% in just two months.”",
      name: "Meera Sen",
      role: "VP Marketing, Synthetix AI",
      ini: "MS",
      mk: "CPL",
      mv: "-52%"
    },
    {
      quote: "“Unlike agencies that churn and burn, Anuj acts as a true growth partner. He understands unit economics, not just vanity impressions.”",
      name: "Aditya Nair",
      role: "Growth Director, Skyline Residencies",
      ini: "AN",
      mk: "REVENUE",
      mv: "+310%"
    }
  ],

  certifications: [
    'Google Ads Certified Professional',
    'Meta Certified Media Buying Professional',
    'LinkedIn Marketing Labs Certified',
    'TikTok Academy Certified Specialist',
    'Microsoft Advertising Certified'
  ],

  auditPoints: [
    'Tracking health check: pixel, Conversions API (CAPI) and GA4 events',
    'Wasted-spend and budget allocation leak review',
    'Creative and audience fatigue gap analysis',
    'A customized 90-day scaling roadmap with target ROAS and CPL benchmarks'
  ],

  slots: ['Tue 11:00 AM IST', 'Wed 3:30 PM IST', 'Fri 10:00 AM IST'],
  formChips: ['Meta', 'Google', 'LinkedIn', 'TikTok', 'Bing', 'Other']
};

