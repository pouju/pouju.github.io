export const profile = {
  name: 'Juho Pousi',
  title: 'Full-stack engineer at Reaktor',
  intro: [
    'I build web applications for clients and like solving meaningful business problems with software. I pick up new domains and technologies quickly, and I care about building things people can trust.',
    "Lately I've been most interested in AI-assisted development, maps and GIS, information security, cloud, and the business side of software.",
  ],
  links: [
    { label: 'GitHub', url: 'https://github.com/pouju' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/juhopousi' },
  ],
};

export const work = [
  {
    role: 'Full-stack engineer',
    org: 'Reaktor',
    period: '2023–',
    text: [
      'I build and run web applications for clients, mostly long-lived production systems. I work on all of it: the user interface, the backend and its integrations, and the AWS and Kubernetes infrastructure underneath, along with the pipelines that deploy it. Keeping it secure, accessible and running in production is part of my job.',
      "The other half is consulting. Helping decide what to build means learning the client's domain properly, and I pick it up as I go. I also facilitate team sessions, review code and help new people get started.",
    ],
  },
  { role: 'Summer trainee', org: 'Reaktor', period: '2022', text: [] },
  { role: 'Smaller development jobs', org: null, period: 'During studies', text: [] },
];

export const skills = [
  { area: 'Languages', items: ['TypeScript', 'SQL'] },
  { area: 'Frontend', items: ['React', 'Next.js', 'CSS'] },
  { area: 'Backend', items: ['Node.js', 'Next.js', 'Express', 'serverless on AWS Lambda'] },
  { area: 'Data', items: ['PostgreSQL', 'Aurora Serverless', 'Oracle'] },
  {
    area: 'Cloud and infrastructure',
    items: [
      'AWS',
      'Kubernetes (EKS)',
      'Docker',
      'infrastructure as code (AWS CDK, Terraform, SST/Pulumi)',
      'GitOps',
      'CI/CD',
      'monitoring and alerting',
    ],
  },
  { area: 'Security and auth', items: ['TLS certificates and PKI', 'OAuth 2.0 / OIDC', 'SAML', 'Cognito'] },
  { area: 'Integrations', items: ['REST, SOAP and other system integrations'] },
  { area: 'Testing', items: ['unit, integration and end-to-end'] },
  { area: 'Also', items: ['agentic AI development', 'LLM features in apps', 'web maps and spatial data'] },
];

export const education = [
  {
    degree: 'Master of Science (Technology)',
    school: 'Aalto University',
    year: '2024',
    detail: 'Computer, Communication and Information Sciences, major in Security and Cloud Computing.',
    thesis: {
      title: 'Migration from on-premise to public cloud',
      lang: 'en',
      links: [{ label: 'Aaltodoc', url: 'https://aaltodoc.aalto.fi/items/9f12e94a-31ac-4b6d-a650-ce6adeefbb5d' }],
    },
  },
  {
    degree: 'Bachelor of Science (Technology)',
    school: 'Aalto University',
    year: '2022',
    detail: 'Computer Science, minor in Industrial Engineering and Management.',
    thesis: {
      title: 'Lisätyn todellisuuden navigointisovellusten käytettävyys sisätilanavigoinnissa',
      lang: 'fi',
      links: [
        { label: 'Aaltodoc', url: 'https://aaltodoc.aalto.fi/items/5a824cc3-f00b-47fb-b7d5-d6ddaa2b82b8' },
        { label: 'PDF', url: 'https://drive.google.com/file/d/1wvvgaYpQ2vUID9CCB0-5O52EUtZpsyAJ/view' },
      ],
    },
  },
];

export const outsideWork =
  'I orienteer, run and go to the gym. Orienteering is also where Ratamestari came from.';
