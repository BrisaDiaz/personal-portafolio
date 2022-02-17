export const TECHS = [
  {
    name: "Javascript",
    logoName: "javascript",
    category: "language",
    image: "/techs/javascript.svg",
    resource_url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    logoName: "typescript",
    category: "language",
    image: "/techs/typescript.svg",
    resource_url: "https://www.typescriptlang.org",
  },
  {
    name: "HTML",
    logoName: "html",
    category: "frontend",
    image: "/techs/html.svg",
    resource_url: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    name: "CSS",
    logoName: "css",
    category: "frontend",
    image: "/techs/css.svg",
    resource_url: "https://developer.mozilla.org/es/docs/Web/CSS",
  },

  {
    name: "React",
    logoName: "react",
    category: "frontend",
    image: "/techs/react.svg",
    resource_url: "https://es.reactjs.org/docs/getting-started.html",
  },

  {
    name: "Next.js",
    logoName: "next-js",
    category: "frontend",
    image: "/techs/next-js.svg",
    resource_url: "https://nextjs.org/docs/getting-started",
  },

  {
    name: "Material-UI",
    logoName: "material-ui",
    category: "frontend",
    image: "/techs/material-ui.svg",
    resource_url: "https://mui.com/",
  },
  {
    name: "Styled Components",
    logoName: "styled-components",
    category: "frontend",
    image: "/techs/styled-components.svg",
    resource_url: "https://styled-components.com/",
  },
  {
    name: "Tailwind",
    logoName: "tailwind",
    category: "frontend",
    image: "/techs/tailwind.svg",
    resource_url: "https://tailwindcss.com",
  },

  {
    name: "Apollo GraphQL",
    logoName: "apollo",
    category: "backend",
    image: "/techs/graphql.svg",
    resource_url: "https://www.apollographql.com/docs/react",
  },
  {
    name: "Node.js",
    logoName: "node",
    category: "backend",
    image: "/techs/nodejs.svg",
    resource_url: "https://nodejs.org/es/docs",
  },
  {
    name: "Express",
    logoName: "express",
    category: "backend",
    image: "/techs/express.svg",
    resource_url: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    logoName: "mongodb",
    category: "backend",
    image: "/techs/mongodb.svg",
    resource_url: "https://docs.mongodb.com",
  },
  {
    name: "Mongoose",
    logoName: "mongoose",
    category: "backend",
    image: "/techs/mongoose.svg",
    resource_url: "https://mongoosejs.com/",
  },
  {
    name: "PostgreSQL",
    logoName: "postgresql",
    category: "backend",
    image: "/techs/postgresql.svg",
    resource_url: "https://www.postgresql.org/docs",
  },
  {
    name: "Prisma",
    logoName: "prisma",
    category: "backend",
    image: "/techs/prisma-3.svg",
    resource_url: "https://www.prisma.io/docs",
  },

  {
    name: "React Testing",
    logoName: "react-testing-library",
    category: "testing",
    image: "/techs/react-testing-library.svg",
    resource_url:
      "https://testing-library.com/docs/react-testing-library/intro/",
  },
  {
    name: "Jest",
    logoName: "jest",
    category: "testing",
    image: "/techs/jest.svg",
    resource_url: "https://jestjs.io/docs/getting-started",
  },
  {
    name: "Cypress",
    logoName: "cypress",
    category: "testing",
    image: "/techs/cypress.svg",
    resource_url: "https://docs.cypress.io",
  },
  {
    name: "Socket.io",
    logoName: "socket-io",
    category: "other",
    image: "/techs/socket-io.svg",
    resource_url: "https://socket.io/docs/v4",
  },
  {
    name: "Next Auth",
    logoName: "next-auth",
    category: "other",
    image: "/techs/next-auth.svg",
    resource_url: "https://next-auth.js.org/",
  },

  {
    name: "Cloudinary",
    logoName: "cloudinary",
    category: "other",
    image: "/techs/cloudinary.svg",
    resource_url: "https://cloudinary.com/documentation",
  },
  {
    name: "Nodemailer ",
    logoName: "nodemailer",
    category: "other",
    image: "/techs/nodemailer.svg",
    resource_url: "https://nodemailer.com/about",
  },

  {
    name: "Git",
    logoName: "git",
    category: "other",
    image: "/techs/git.svg",
    resource_url: "https://git-scm.com/doc",
  },
];
export const PROJECTS = [
  {
    id: 4,
    slug: "personal_portfolio",
    title: "Portfolio",
    subtitle: "Fully optimized website",
    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644975406/proyects/image_-df_ddkb9k.webp",
        alt: "portfolio logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_north_west,h_500,w_1150/v1644974927/proyects/about-min_dxeisu.webp",
        alt: "about me screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_north_west,h_500,w_1150/v1644974928/proyects/projects-min_iwlllt.webp",
        alt: "projects screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_north_west,h_500,w_1150/v1644974930/proyects/technologies-min_ldxfvo.webp",
        alt: "technology stack screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_north_west,h_500,w_1150/v1644974929/proyects/project-min_dpa9fn.webp",
        alt: "individual project screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_north_west,h_500,w_1150/v1644974931/proyects/contact-min_j5shla.webp",
        alt: "contact screen",
      },
    ],
    summary: "Accessible, SEO and performance optimized static website.",

    language: "Typescript",
    technologies: {
      frontend: ["next.js", "css"],

      hosting: "Netlify",
    },

    source_code: "https://github.com/BrisaDiaz/personal-portfolio.git",
    demo: "https://brisa-diaz.netlify.app",
  },
  {
    id: 4,
    slug: "hotel_booking_app",
    title: "hotel booking app",
    subtitle: "End-to-end type safety SPA ",
    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642998067/proyects/target_2_aqjj3g.webp",
        alt: "hotel booking app logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_fill,h_500,w_1200/v1642707470/proyects/screencapture-localhost-3000-search-2022-01-15-16_48_25-min_1_gedd9m.webp",
        alt: "search and filter hotels screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707488/proyects/Captura_de_pantalla_2022-01-20_155932-min_y0xpcg.webp",
        alt: "hotel image gallery",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707501/proyects/screencapture-localhost-3000-room-1-2022-01-16-15_57_18-min_1_pq2is5.webp",
        alt: "hotel room details and reservation form",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707491/proyects/screencapture-localhost-3000-admin-hotel-2022-01-16-16_00_02-min_1_g7qilp.webp",
        alt: "hotel rooms management admin screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707462/proyects/screencapture-localhost-3000-admin-hotel-bookings-2022-01-16-16_03_29-min_1_e1pbmy.webp",
        alt: "hotel bookings management admin screen",
      },
    ],
    summary:
      "Application for the administration and request of hotel rooms with updated information on the availability of rooms.",
    features: [
      "Responsive layout.",
      "End to end typed code.",
      "File management from server enabled.",
      "Images upload to cloudinary.",
      "Advance Image optimization.",
      "Client end server side authentication methods.",
      "Protected routes.",
      "Session persistence.",
      "Pagination, filtering, sorting and keyword searching of hotels.",
      "Real-time search suggestions.",
      "SSR and ISR.",
      "SSR cache-control headers.",
      "Dynamic layouts.",
      "Full guest, hotels, rooms and bookings management system.",
      "Multi hotels and admins support.",
      "Real time form validation.",
      "Push notifications",
      "Request supported : GET, PUT, POST.",
      "Database seed with: default hotel and application data .",
    ],
    language: "Typescript",
    technologies: {
      frontend: ["next.js", "apollo client", "material-IU", "react-hook-form"],
      backend: [
        "apollo server",
        "postgreSQL",
        "nexus",
        "prisma",
        "cloudinary",
        "json JWT",
      ],
      hosting: "vercel",
    },
    testingUser: {
      email: "admin@hotelBooker.com",
      password: "admin",
    },
    source_code: "https://github.com/BrisaDiaz/hotel_booker_app",
    demo: "https://hotel-booker-app.vercel.app/signin",
  },
  {
    id: 3,
    slug: "wikifit_app",
    title: "wikifit app",
    subtitle: "Progressive web App",
    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642998067/proyects/target_r60diw.webp",
        alt: "wikifit app logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361152/proyects/wki-2-min_x0zsph.webp",
        alt: "login screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361150/proyects/wiki-1-min_jf6jpm.webp",
        alt: "search recipe and store in collection screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361144/proyects/wki-3-min_xc4vrl.webp",
        alt: "ideal caloric and nutrients intake calculator",
      },
    ],

    summary:
      "Application created to search for recipes and calculate nutritional requirements adjusted to the profile and diet of users.",
    features: [
      "Progressive web app.",
      "Keyboard accessibility.",
      "Responsive layout.",
      "Pagination, filtering, sorting and keyword searching.",
      "Display of collection label on recipes already stored by the user.",
      "Reusable and tested components.",
      "End to end tests.",
      "Implementation of SSR and SSR combined with CSR.",
      "Full tested ARM , macros and meal size calculators with results visualization.",
      "Recipes and collections management system.",
      "Pages with meta data.",
      "Real time form validation.",
      "Loading indicators.",
      "Implementation of third party API's.",
      "Protected routes.",
      "Social sign-in.",
      "Server and client side authentication methods.",
      "Request supported : GET, PUT, POST,DELETE.",
    ],
    language: "javascript",
    technologies: {
      frontend: [
        "next.js",
        "next auth",
        "next-pwa",
        "tailwind",
        "react-hook-form",
      ],
      backend: ["postgreSQL", "prisma"],
      testing: ["react testing library", "jest", "cypress"],
      hosting: "vercel",
    },
    testingUser: {
      email: "admin@email.com",
      password: "admin",
    },
    source_code: "https://github.com/BrisaDiaz/fitness-wiki-nextjs-app",
    demo: "https://fitness-wiki-nextjs-app.vercel.app",
  },
  {
    id: 2,
    slug: "delivery_app",
    title: "delivery app",
    subtitle: "With real time notifications SPA",

    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1643991147/burger_rgepyv.webp",
        alt: "delivery app logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361165/proyects/burger-2-min_oatxvw.webp",
        alt: "call to action hero slider",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361146/proyects/burger-1-min_qu6v2e.webp",
        alt: "search on menu and add to cart screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642716729/proyects/screencapture-fast-food-delivery-app-herokuapp-2022-01-20-16_59_51-min_rdnaaz.webp",
        alt: "orders management  admin screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361139/proyects/burger-3-min_y4eorf.webp",
        alt: "load a new product admin screen",
      },
    ],
    summary:
      "Application created for the management of the menu online and real-time monitoring of the status of orders.",
    language: "javascript",
    features: [
      "Some unit tests implementation.",
      "Lazy Load components and code splitting.",
      "Products and orders section skeletons.",
      "Loading modal and loading form indicators.",
      "Complete authentication system width signup/email validation/login/ forgot password support.",
      "Access to Public and Private routes base on roles.",
      "Functional contact section with form validation.",
      "Shopping cart.",
      "Editable user profile.",
      "Products and orders section with sorter, filter and search bar.",
      "URL able to storage the user search pagination.",
      "Real time order notifications and state visualization.",
      "Users, categories, orders and products management system.",
      "Authentication using Json Web Tokens.",
      "Account validation and functional contact form.",
      "Access to api endpoints and methods base on authentication and permissions.",
      "Media storage using cloudinary service.",
      "Request supported : GET, PUT, POST, DELETE.",
      "Database seed with: default categories, roles and admin and moderator users.",
    ],
    technologies: {
      frontend: [
        "react",
        "react-router-dom",
        "styled-components",
        "react-hook-form",
        "socket.io-client",
        "swiper",
      ],
      backend: [
        "node.js",
        "express",
        "mongodDB",
        "mongoose",
        "cloudinary",
        "oAuth2",
        "nodemailer",
        "socket.io",
        "jsonJWT",
      ],
      hosting: "heroku",
    },

    testingUser: {
      email: " moderator@localhost.com",
      password: "moderator",
    },
    source_code: "https://github.com/BrisaDiaz/Mern-stack-delivery-app",
    demo: "https://fast-food-delivery-app.herokuapp.com",
  },
  {
    id: 1,
    slug: "photographer_portfolio",
    title: "photographer portfolio",
    subtitle: "Modern and interactive website",

    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642998071/proyects/target_3_jhisbz.webp",
        alt: "photographer portfolio logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707844/proyects/screencapture-127-0-0-1-5500-Fotographer-web-page-index-html-2022-01-18-18_06_05_k77cnh.webp",
        alt: "website hero banner",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707974/proyects/photograph-2_a5jauh.webp",
        alt: "portfolio gallery section",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707495/proyects/photograph-3-min_xzau6f.webp",
        alt: "achievements counters and testimonials slider sections",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707468/proyects/screencapture-127-0-0-1-5500-Fotographer-web-page-contacto-contact-html-2022-01-18-18_06_26-min_pixtgh.webp",
        alt: "contact screen",
      },
    ],

    summary: "Modern and interactive web portfolio of photographic services.",
    language: "javascript",
    technologies: {
      frontend: ["vanilla javascript", "css", "html"],
      hosting: "github pages",
    },
    features: [
      `Modularized javaScript code.`,
      `Responsive layout.`,
      `Projects gallery with hover effect and animated zoom modal.`,
      `On scroll animations.`,
      `Auto-played slider with clients testimonials.`,
      `Skill progress bars.`,
      `Counters of Achievements.`,
      `Drop-down FAQ list.`,
      `Animated menu nav.`,
      `Form validation.`,
      `Smooth scroll to top button.`,
    ],
    source_code: "https://github.com/BrisaDiaz/Photographer_web_page",
    demo: "https://brisadiaz.github.io/Photographer_web_page",
  },
];
export const SKILLS = [
  "Strong proficiency in JavaScript and DOM manipulation.",
  "Experience in creating responsive and user friendly UI implementations.",
  "Experience integrating Typescript in a medium size project.",
  "Experience consuming and creating RESTful/GraphQL API's.",
  "Experience with Unit Testing and End to End testing.",
  "Experience implementing rendering techniques like SSG, SSR and ISR.",
  "Knowledge  and experience  applying SEO optimization and accessibility.",
  "Ability to translate business logic into code.",
];
