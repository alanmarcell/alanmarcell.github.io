const { technologies } = require('./technologies');
const R = require('ramda');
const { getArray } = require('./getArray');
const { range, thisYear } = require('./time');

const t = technologies;

const jobsAndClients = {
  'Freelancer': {
    slug: '/freelancer/',
    date: {
      start: '2007-02-01',
      end: null
    },
    img: '',
    link: 'https://angeloocana.com',
    description: {
      'pt': 'Desenvolvi sistemas e sites para: Envio de SMS, Academias, E-commerce, Sistes Institucionais, entre outros.'
    },
    projects: [
      {
        name: 'Tic Tac Toe AI',
        slug: '/angeloocana/tic-tac-toe-ai/',
        img: 'tic-tac-toe-ai.jpg',
        isGame: true,
        years: range(2017, 2017),
        description: '',
        link: 'https://tic-tac-toe-ai.surge.sh',
        technologies: [
          t.react,
          t.gatsby,
          t.graphql,
          t.styledComponents,
          t.nodejs,
          t.html,
          t.css,
          t.js,
          t.vscode,
          t.jest,
          t.eslint,
          t.babel,
          t.surge
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
  'POL': {
    slug: '/pol/',
    date: {
      start: '2011-04-18',
      end: '2015-03-17'
    },
    img: 'pol.png',
    link: 'http://pol.com.br',
    needWhiteBg: true,
    description: `POL (Prêmios Online), plataforma de e-commerce para resgate de produtos / serviços através da pontuação adquirida na apuração das metas e resultados. Integração com parceiros B2W, Magazine Luiza, Walmart, Casas Bahia, FastShop, entre outros.
        
        Criação de Engine de busca utilizando Lucene.
        
        Principais Tecnologias: MVC, API, Jquery, Ajax, .NET 4.0 / 4.5 utilizando linguagem C#, Entity Framework, Migrations, UnitTest, Lucene, StructureMap, WebForms
        Principais Metodologias: Domain Driven Design, Test Driven Development, Scrum
        Banco de Dados: SQL Server (Gerenciamento, Criação de Querys, Stored Procedures, Functions, Views e Jobs)`,
    projects: [
      {
        name: 'POL',
        slug: '/pol-premios-online/',
        years: range(2011, 2015),
        description: '',
        link: null,
        clients: [
          {
            name: 'B2W',
            link: ''
          },
        ],
        technologies: [
          t.cSharp,
          t.html,
          t.css,
          t.js,
          t.jquery,
          t.netMvc,
          t.postgres,
          t.webForms,
          t.wcf,
          t.sqlServer,
          t.visualStudio,
          t.lucene,
          t.rabbitmq,
          t.structureMap,
          t.entityFramework
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
