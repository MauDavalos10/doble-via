import { ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const toggleLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Link href="/" passHref>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Doble Vía"
                  width={50}
                  height={50}
                  style={{ marginRight: "10px" }}
                />
                <Typography variant="h6" component="div">
                  Doble Vía
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/" passHref>
              <Button color="inherit">{t("menu.home")}</Button>
            </Link>
            <Link href="/about" passHref>
              <Button color="inherit">{t("menu.about")}</Button>
            </Link>
            <Link href="/services" passHref>
              <Button color="inherit">{t("menu.services")}</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button color="inherit">{t("menu.contact")}</Button>
            </Link>
            <Button color="inherit" onClick={toggleLanguage}>
              {locale === "es" ? "EN" : "ES"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <main>{children}</main>

      <Box
        component="footer"
        sx={{ bgcolor: "primary.main", color: "white", py: 3, mt: "auto" }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} Doble Vía. {t("footer.rights")}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
