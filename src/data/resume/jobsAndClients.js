const { technologies } = require('./technologies');
const R = require('ramda');
const { getArray } = require('./getArray');
const { range, thisYear } = require('./time');

const t = technologies;

const jobsAndClients = {
  'Freelancer': {
    slug: '/freelancer/',
    date: {
      start: '2016-06-01',
      end: null
    },
    img: '',
    link: 'https://alanmarcell.com',
    description: {
      'pt': 'Desenvolvi sistemas e sites para: Envio de SMS, Academias, E-commerce, Sistes Institucionais, entre outros.'
    },
    projects: [
      {
        name: 'Minesweeper Terminal',
        slug: '/alanmarcell/minesweeper-terminal/',
        img: 'tic-tac-toe-ai.jpg',
        isGame: true,
        years: range(2017, 2017),
        description: '',
        link: 'https://github.com/alanmarcell/minesweeper-terminal',
        technologies: [
          t.nodejs,
          t.js,
          t.vscode,
          t.eslint,
          t.babel
        ],
        clients: [
          {
            name: '',
            link: ''
          }
        ]
      },
    ]
  },
  'Budbuds.us': {
    slug: '/budbuds/',
    date: {
      start: '2017-04-18',
      end: '2018-03-17'
    },
    img: 'pol.png',
    link: 'http://budbuds.us/',
    needWhiteBg: true,
    description: `Aplicativo multiplataforma desenvolvido em React Native`,
    projects: [
      {
        name: 'Budbuds App',
        slug: '/app/',
        years: range(2017, 2018),
        description: '',
        link: null,
        clients: [
          {
            name: '',
            link: ''
          },
        ],
        technologies: [
          t.react,          
          t.html,
          t.css,
          t.js,
          t.postgres,
          t.rabbitmq,
        ]
      }
    ]
  },
};

const getAllProjectsTech = R.reduce((techs, project) => {
  return R.uniq((techs || []).concat(project.technologies))
    .filter(t => t);
});

const setTechnologies = R.assoc('technologies');

const concatProjectTechs = R.map(job => {
  const techs = getAllProjectsTech(job.technologies, job.projects);
  return setTechnologies(techs, job);
});

const getJobsAndClients = R.pipe(
  getArray,
  concatProjectTechs
);

const reduceProjectGames = R.reduce((games, project) =>
  project.isGame
    ? games.concat(project)
    : games);

const reduceJobGames = R.reduce((games, job) =>
  reduceProjectGames(games, job.projects)
  , []);

const getGames = R.pipe(
  getArray,
  reduceJobGames
);

module.exports = {
  jobsAndClients: getJobsAndClients(jobsAndClients),
  games: getGames(jobsAndClients)
};
