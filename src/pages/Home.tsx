import React from "react";
import { useTranslation } from "react-i18next";
import HeaderFrame from "../components/HeaderFrame";
import BodyFrame from "../components/BodyFrame";
import FooterFrame from "../components/FooterFrame";
import { Helmet } from "react-helmet-async";

const baseUrl = "https://pick-a-face.netlify.app";

interface HomeProps {
  lang: "en" | "ko";
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <>
      <Helmet>
        {/* language */}
        <html lang={i18n.language} data-lang={i18n.language} />

        {/* basic SEO */}
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        {/* canonical */}
        <link
          rel="canonical"
          href={lang === "en" ? baseUrl : `${baseUrl}/${i18n.language}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta
          property="og:url"
          content={lang === "en" ? baseUrl : `${baseUrl}/${i18n.language}`}
        />
      </Helmet>

      <HeaderFrame />
      <BodyFrame />
      <FooterFrame />
    </>
  );
};

export default Home;
