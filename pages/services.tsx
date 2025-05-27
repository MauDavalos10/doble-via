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

export default function Services() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>
          Servicios | Doble Vía - Soluciones de Transporte y Logística
        </title>
        <meta
          name="description"
          content="Descubre nuestra gama completa de servicios de transporte y logística. Ofrecemos soluciones personalizadas para cada necesidad de tu negocio."
        />
        <meta
          property="og:title"
          content="Servicios | Doble Vía - Soluciones de Transporte y Logística"
        />
        <meta
          property="og:description"
          content="Descubre nuestra gama completa de servicios de transporte y logística. Ofrecemos soluciones personalizadas para cada necesidad de tu negocio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doblevia.com/services" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://doblevia.com/services" />
      </Head>

      <Container maxWidth="lg">
        <Box sx={{ my: 8 }}>
          <Typography variant="h1" component="h1" gutterBottom align="center">
            {t("services.title")}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            align="center"
          >
            {t("services.subtitle")}
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`/images/service-${item}.jpg`}
                    alt={t(`services.items.item${item}.title`)}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {t(`services.items.item${item}.title`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`services.items.item${item}.description`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
