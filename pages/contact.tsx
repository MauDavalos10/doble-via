import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";

export default function Contact() {
  const { t } = useTranslation("common");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <>
      <Head>
        <title>
          Contacto | Doble Vía - Soluciones de Transporte y Logística
        </title>
        <meta
          name="description"
          content="Contáctanos para obtener más información sobre nuestros servicios de transporte y logística. Estamos aquí para ayudarte con tus necesidades de negocio."
        />
        <meta
          property="og:title"
          content="Contacto | Doble Vía - Soluciones de Transporte y Logística"
        />
        <meta
          property="og:description"
          content="Contáctanos para obtener más información sobre nuestros servicios de transporte y logística. Estamos aquí para ayudarte con tus necesidades de negocio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doblevia.com/contact" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://doblevia.com/contact" />
      </Head>

      <Container maxWidth="md">
        <Box sx={{ my: 8 }}>
          <Typography variant="h1" component="h1" gutterBottom align="center">
            {t("contact.title")}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            align="center"
          >
            {t("contact.subtitle")}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nombre"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Asunto" name="subject" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Mensaje"
                  name="message"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Enviar Mensaje
                </Button>
              </Grid>
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
