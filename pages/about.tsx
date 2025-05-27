import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>
          Sobre Nosotros | Doble Vía - Soluciones de Transporte y Logística
        </title>
        <meta
          name="description"
          content="Conoce más sobre Doble Vía, nuestra historia, misión, visión y valores. Somos una empresa comprometida con la excelencia en el transporte y la logística."
        />
        <meta
          property="og:title"
          content="Sobre Nosotros | Doble Vía - Soluciones de Transporte y Logística"
        />
        <meta
          property="og:description"
          content="Conoce más sobre Doble Vía, nuestra historia, misión, visión y valores. Somos una empresa comprometida con la excelencia en el transporte y la logística."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doblevia.com/about" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://doblevia.com/about" />
      </Head>

      <Container maxWidth="lg">
        <Box sx={{ my: 8 }}>
          <Typography variant="h1" component="h1" gutterBottom align="center">
            {t("about.title")}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            align="center"
          >
            {t("about.subtitle")}
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h2" gutterBottom>
                  {t("about.mission.title")}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t("about.mission.description")}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h2" gutterBottom>
                  {t("about.vision.title")}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t("about.vision.description")}
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h2" gutterBottom align="center">
              {t("about.values.title")}
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {[1, 2, 3, 4].map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item}>
                  <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                    <Typography variant="h3" gutterBottom>
                      {t(`about.values.item${item}.title`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`about.values.item${item}.description`)}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
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
