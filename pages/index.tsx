import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Doble Vía - Soluciones de Transporte y Logística</title>
        <meta
          name="description"
          content="Bienvenido a Doble Vía, tu socio confiable en soluciones de transporte y logística. Ofrecemos servicios de calidad y confianza para el manejo de tu carga."
        />
        <meta
          property="og:title"
          content="Doble Vía - Soluciones de Transporte y Logística"
        />
        <meta
          property="og:description"
          content="Bienvenido a Doble Vía, tu socio confiable en soluciones de transporte y logística. Ofrecemos servicios de calidad y confianza para el manejo de tu carga."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doblevia.com" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://doblevia.com" />
      </Head>

      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ my: 8, textAlign: "center" }}>
          <Typography variant="h1" component="h1" gutterBottom>
            {t("home.hero.title")}
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            {t("home.hero.subtitle")}
          </Typography>
        </Box>

        {/* Services Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {t("home.services.title")}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`/images/service-${item}.jpg`}
                    alt={t(`home.services.item${item}.title`)}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {t(`home.services.item${item}.title`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`home.services.item${item}.description`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* About Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {t("home.about.title")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("home.about.description")}
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};
