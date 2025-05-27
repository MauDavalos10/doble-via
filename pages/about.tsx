import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {t("about.title")}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          align="center"
        >
          {t("about.subtitle")}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                {t("about.mission.title")}
              </Typography>
              <Typography variant="body1" paragraph>
                {t("about.mission.description")}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                {t("about.vision.title")}
              </Typography>
              <Typography variant="body1" paragraph>
                {t("about.vision.description")}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            {t("about.values.title")}
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h6" gutterBottom>
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
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};
