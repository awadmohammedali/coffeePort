import Layout from "components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <title>Coffee Port</title>
        <meta
          name="description"
          content="Coffee Port is your destination for premium specialty coffee, curated blends, and rich café culture."
        />
        <link rel="canonical" href="https://www.coffeeport.com/" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Coffee Port" />
        <meta
          property="og:description"
          content="Explore the world of premium specialty coffee."
        />
        <meta
          property="og:image"
          content="https://www.coffeeport.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://www.coffeeport.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coffee Port" />
        <meta
          name="twitter:description"
          content="Explore the world of premium specialty coffee."
        />
        <meta
          name="twitter:image"
          content="https://www.coffeeport.com/images/twitter-image.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
