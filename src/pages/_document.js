import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id-ID">
      <Head> 
         <link rel="manifest" href="/manifest.json" />
         <meta name="theme-color" content="#007bff" />
         <link rel="apple-touch-icon" href="/logo-192.png" />
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
