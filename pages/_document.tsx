import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* SEO Meta Tags */}
        <meta name="description" content="Abhishek Hegde | Full Stack & Frontend Developer Portfolio – Real-time dashboards, UI/UX redesigns, trading systems & more." />
        <meta name="keywords" content="Abhishek Hegde, Full Stack Engineer, Master's graduate with 4+ years of experience." />
        <meta name="author" content="Abhishek Hegde" />

        {/* Open Graph / LinkedIn / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:title" content="Abhishek Hegde | Full Stack Engineer" />
        <meta property="og:description" content="Real-time dashboards, UI/UX, animation-rich components, and full-stack creativity – explore my portfolio!" />
        <meta property="og:image" content="https://yourdomain.com/og-preview.png" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourdomain.com/" />
        <meta name="twitter:title" content="Abhishek Hegde | Portfolio" />
        <meta name="twitter:description" content="Explore my creative dev work – full-stack, UI/UX, trading systems and more!" />
        <meta name="twitter:image" content="https://yourdomain.com/og-preview.png" />
      </Head>
  
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
