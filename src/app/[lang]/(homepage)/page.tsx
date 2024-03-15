import Footer from "@/components/footer";
import Header from "@/components/header";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { TLocale } from "@/types/locale";
import "@splidejs/react-splide/css";
import Contacts from "./_components/contacts";
import HeroStart from "./_components/hero-start";
import Portfolio from "./_components/portfolio";
import Services from "./_components/services";
import Teams from "./_components/teams";

interface HomePageProps {
  params: {
    lang: TLocale;
  };
}
export default async function HomePage({ params: { lang } }: HomePageProps) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} />
      <main>
        <HeroStart lang={lang} />
        <Services dict={dict} />
        <Portfolio dict={dict} />
        {/* <Clients /> */}
        <Teams dict={dict} />
        <Contacts dict={dict} />
        {/* <MyWow /> */}
      </main>
      <Footer dict={dict} />
    </>
  );
}
