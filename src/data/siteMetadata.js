const resume = require('./resume');
const languages = require('./languages');

module.exports = {
  siteUrl: 'https://alanmarcell.github.io/',
  author: {
    name: 'Alan Marcell',
    homeCity: 'Barueri',
    email: 'alanmarcell@live.com',
    defaultLink: 'https://github.com/alanmarcell'
  },
  creator: {
    name: 'Ângelo Ocanã',
    homeCity: 'Ottawa',
    email: 'angeloocana@gmail.com',
    defaultLink: 'https://github.com/angeloocana'
  },
  sourceCodeLink: 'https://github.com/angeloocana/angeloocana',
  menu: [
    {label: 'home', slug: '/'},
    {label: 'posts', slug: '/blog/'},
    {label: 'tags', slug: '/tags/'},
    {label: 'about', slug: '/about/'},
    {
      label: 'resume', 
      slug: '/resume/',
      items: [
        {label: 'resume.technologies', slug: '/resume/technologies/'},
        {label: 'resume.jobsAndClients', slug: '/resume/jobsAndClients/'},
        {label: 'resume.educations', slug: '/resume/education'},
        {label: 'resume.languages', slug: '/resume/languages'}
      ]
    },
    {label: 'sourceCode', link: 'https://github.com/angeloocana/angeloocana'},
    {label: 'contact', slug: '/contact/'}
  ],  
  languages,
  resume,
  contact: [
    {
      type: 'email',
      value: 'alanmarcell@live.com',
      link: 'mailto:alanmarcell@live.com'
    },
    {
      type: 'phone',
      value: '+55 11 98466-7478',
      country: 'br',
      link: 'tel:+55 11 98466-7478'
    }
  ]
};
