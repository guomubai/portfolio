const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.linkedin.com/in/erickjgarcia/',
  title: 'EG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Erick Garcia',
  role: 'Full Stack Developer',
  description:
    'I am a Full Stack Developer with a background in financial operations and international relations. I speak English, Español and 中文. JavaScript is my new language obsession.',
  resume: 'https://drive.google.com/file/d/1vV3U024MmBnJVVtQL6w1cq76ePRIDflG/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/erickjgarcia/',
    github: 'https://github.com/guomubai',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'VLCM Lead Scanner',
    description:
      'This is an app for trade shows and exhibitions that allows people to gather leads with a QR code scan. I wrote and implemented the code for the WR portion.',
    stack: ['React', 'Express', 'Node', 'MongoDB', 'React Native'],
    sourceCode: 'https://github.com/guomubai/VLCMLeadScanner'
    // livePreview: 'https://github.com',
  },
  {
    name: 'Dragonfly Wellness Patient Portal',
    description:
      'THe new patient portal for Dragonfly Pharmacy patients. I worked on the pharmacy orders managemenet page, which includes pickup/delivery ticket printing and a QR scan for customer loyalty points. *Must be a patient with a Utah Medical Cannabis card to register',
    stack: ['NextJS', 'TypeScript', 'React','TailwindCSS', 'AWS Amplify', ],
    // sourceCode: 'https://github.com',
    livePreview: 'https://dragonfly-patient.vercel.app/login',
  },

  {
    name: 'Street Fighter Clicky Game',
    description:
      'A simple clicking game that was built using the React framework. I had a lof of fun with the simple retro design. ',
    stack: ['React', 'JavaScript', 'CSS', 'Yarn'],
    sourceCode: 'https://github.com/guomubai/clicky-game',
    livePreview: 'https://zen-panini-b81a95.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'MongoDB',
  'Firebase',
  'MySQL',
  'GraphQL',
  'Amazon Web Services',
  'Git',
  'jQuery',
  'Ajax',
  'Node.js',
  'NPM',
  'Yarn',
  'Salesforce'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'erickjgarcia@gmail.com',
}

export { header, about, projects, skills, contact }
