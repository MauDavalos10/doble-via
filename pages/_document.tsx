import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Empresa líder en soluciones de transporte y logística, ofreciendo servicios de calidad y confianza para el manejo de tu carga."
        />
        <meta
          name="keywords"
          content="transporte, logística, carga, servicios de transporte, Doble Vía"
        />
        <meta name="author" content="Doble Vía" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doblevia.com" />
        <meta
          property="og:title"
          content="Doble Vía - Soluciones de Transporte y Logística"
        />
        <meta
          property="og:description"
          content="Empresa líder en soluciones de transporte y logística, ofreciendo servicios de calidad y confianza para el manejo de tu carga."
        />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://doblevia.com" />
        <meta
          property="twitter:title"
          content="Doble Vía - Soluciones de Transporte y Logística"
        />
        <meta
          property="twitter:description"
          content="Empresa líder en soluciones de transporte y logística, ofreciendo servicios de calidad y confianza para el manejo de tu carga."
        />
        <meta property="twitter:image" content="/images/og-image.jpg" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="google-site-verification-code"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
