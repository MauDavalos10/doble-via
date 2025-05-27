import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
    <Container maxWidth="lg">
      <Box sx={{ my: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {t("services.title")}
        </Typography>
        <Typography
          variant="h6"
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
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};
