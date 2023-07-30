interface InfoProps {
  name: string;
  school: string;
  degree: string;
  contact: string;
  location: string;
  skills: string[];
  linkedin: string;
  github: string;
}

interface workProps {
  company: string;
  location: string;
  duration: string;
  title: { title: string; duration: string }[];
  description: string[];
}

export const info: InfoProps = {
  name: 'Amanda Saenz',
  school: 'Texas A&M University - CC',
  degree: 'Bachelor of Science in Computer Science',
  contact: 'amanda.blakely7@gmail.com',
  location: 'Colorado Springs, CO',
  skills: [
    'React',
    'Typescript',
    'HTML5',
    'CSS3',
    'Figma',
    'Adobe XD',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Maxon Zbrush',
    'Autodesk Maya',
    'Blender',
    'Keyshot',
  ],
  linkedin: 'https://www.linkedin.com/in/amandasnoww/',
  github: 'https://github.com/amandasaenz',
};

export const work: workProps[] = [
  {
    company: 'Kidrobot',
    location: 'remote',
    duration: 'June 2019 - present',
    title: [
      { title: 'Head of Digital Sculpt', duration: `April '22 - present` },
      { title: 'Senior Digital Sculptor', duration: `July '22 - April '22` },
      { title: 'Digital Sculptor', duration: `June '19 - July '20` },
    ],
    description: [
      'Communicate with development team',
      'Sculpt Vinyl toys within Pixologic Zbrush',
      'Design and concept plush for Kidrobot’s Yummy World',
      'Create renders for solicitation using Keyshot',
      'Collaborate with licensors such as Disney, Sanrio, Nickelodeon, and more',
    ],
  },
];
