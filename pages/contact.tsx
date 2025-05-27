import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
    <Container maxWidth="md">
      <Box sx={{ my: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {t("contact.title")}
        </Typography>
        <Typography
          variant="h6"
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
                label={t("contact.form.name")}
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label={t("contact.form.email")}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label={t("contact.form.subject")}
                name="subject"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label={t("contact.form.message")}
                name="message"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" size="large" fullWidth>
                {t("contact.form.submit")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};
