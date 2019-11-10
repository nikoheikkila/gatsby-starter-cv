module.exports = {
  siteTitle: `Hi, I'm Niko ☕`,
  siteDescription: 'My CV',
  keyWords: ['developer', 'curriculum'],
  authorName: 'Niko Heikkilä',
  githubUsername: 'nikoheikkila',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `
  ...and I make world a better place with well-crafted software.
  Take a look at my work, read my blog, and get in touch.
  `,
  skills: [
    {
      name: 'DevOps Culture',
      level: 85
    },
    {
      name: 'Team Leadership',
      level: 95
    },
    {
      name: 'Continuous Integration & Delivery',
      level: 80
    },
    {
      name: 'Software Architecture & Design',
      level: 88
    },
    {
      name: 'Effective Communication',
      level: 82
    },
  ],
  education: [
    {
      institute: 'University of Jyväskylä',
      degree: 'Master of Science',
      begin: '2014',
      end: '2016'
    },
    {
      institute: 'Centria University of Applied Sciences',
      degree: 'Bachelor of Engineering',
      begin: '2007',
      end: '2012'
    }
  ],
  jobs: [
    {
      company: "Paytrail",
      begin: {
        month: 'Nov',
        year: '2016'
      },
      occupation: "Lead Developer",
      description: `
      Leading a highly skilled development team focused on building modern Laravel
      microservices to provide a platform for online payments and merchant services.
      `
    }, {
      company: "University of Jyväskylä",
      begin: {
        month: 'Jan',
        year: '2016'
      },
      occupation: "Technical Lead",
      description: `
      Lead a development project aiming to provide a gamified e-learning platform
      built with Flask, Docker, and Angular for university students and teachers.
      `
    }, {
      company: 'Elisa',
      begin: {
        month: 'Sep',
        year: '2011'
      },
      occupation: "Service Specialist",
      description: `
      Troubleshooting and fault ticketing of Mobile-, ISP-, xDSL-, IPTV- &
      nPVR-services. Additionally, job involved product reselling and customer
      relationships management concerning Elisa and Saunalahti products.
      `
    },
    {
      company: 'Centria University of Applied Sciences',
      begin: {
        month: 'Oct',
        year: '2010'
      },
      occupation: "Guest Lecturer",
      description: `
      Lectured about advanced PHP and Zend Framework software development.
      `
    },
    {
      company: 'Centria University of Applied Sciences',
      begin: {
        month: 'Jun',
        year: '2010'
      },
      occupation: "System Designer (Internship)",
      description: `
      Created a requirement specifications for StepIT project which was Web 2.0 community portal aimed for collaboration between university alumni and employers.
      `
    },
    {
      company: 'Centria University of Applied Sciences',
      begin: {
        month: 'May',
        year: '2009'
      },
      occupation: "Software Developer (Internship)",
      description: `
      PHP and Zend Framework platform development for open source MassIdea.org platform coordinated by Laurea University of Applied Sciences.
      `
    },
  ],
  social: {
    devto: "https://dev.to/nikoheikkila",
    mastodon: "https://mastodon.technology/@nikoheikkila",
    linkedin: "https://www.linkedin.com/in/nikoheikkila",
    github: "https://github.com/nikoheikkila",
    telegram: "https://t.me/nikoheikkila",
    email: "yo@nikoheikkila.fi"
  },
  siteUrl: 'https://cv.nikoheikkila.fi',
  pathPrefix: '',
  siteCover: '/images/mechanical.jpg',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Top',
      url: '/',
    },
  ]
}