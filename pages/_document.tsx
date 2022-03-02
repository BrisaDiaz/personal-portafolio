import Document, { Html, Head, Main, NextScript } from "next/document";
import { env } from "env";
import { schemaData } from "schemaData";
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-us">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="/icon-256x256.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />

          <meta
            property="og:title"
            content="Brisa Díaz | Web Developer & Frontend Development Specialist 👩‍💻"
          />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="/org.png" />
          <meta property="og:url" content={env.NEXT_PUBLIC_SITE_URL} />
          <meta property="og:site_name" content={env.NEXT_PUBLIC_SITE_NAME} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:description"
            content="I'm enthusiastic web developer, passionate about learning innovative technologies and digital-product development."
          />
          <meta
            name="twitter:card"
            content="I'm enthusiastic web developer, passionate about learning innovative technologies and digital-product development."
          />
          <meta
            property="twitter:title"
            content="Brisa Díaz | Web Developer & Frontend Specialist 👩‍💻"
          />
          <meta property="twitter:image" content="/org.png" />
          <meta property="witter:site" content={env.NEXT_PUBLIC_SITE_URL} />
          <meta name="twitter:creator" content="Brisa Díaz" />
          <meta name="author" content="Brisa Díaz" />
          <meta
            name="twitter:image:alt"
            content="Brisa Díaz frontend developer"
          />

          <meta
            name="description"
            content="I'm enthusiastic web developer width  2 years of experience and accumulated  knowledge on the development of websites and fullstack  applications."
          />
          <meta
            name="keywords"
            content="brisa diaz,web developer,frontend developer,fullstack developer,front end developer,front-end developer,frontend engineer,full stack developer,full-stack developer,app,application,experience,projects,work,testing,knowledge,application,ability,personal,stack,working,project,projects,team,skills,SEO,web apps,web applications,specialist,web development,software,brisa diaz portfolio,portfolio,frontend developer portfolio,javascript,typescript,react,next.js,node.js,graphql"
            key="titleKeywords"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaData),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
