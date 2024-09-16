import styles from "./page.module.css";
import Footer from "./home/footer";
import Features from "./home/features";
import Header from "./home/header";
import Section from "./home/section";
import DisplayMobile from "./home/display-mobile";
import Magnify from "./components/Magnify";
import DisplayCarousel from "./home/display-carousel";
import DisplayFAQ from "./home/display-faq";
import { Container } from "./containers/display-container";
import Gallery from "./components/Gallery";
import Slide from "./home/display-slide";

export default function Home() {
  const images = [
    { url: 'https://framerusercontent.com/images/syG1Lx8V7godxgeio5OukDhEkks.webp', alt: 'Accent Lighting' },
    { url: 'https://framerusercontent.com/images/ETVoKRP6J6fm6muP2Xs7J4WWKzU.webp', alt: 'Gameday Lighting' },
    { url: 'https://framerusercontent.com/images/2tuUvfSINeF9nvtfJpAHgJnhHK8.webp', alt: 'Security' },
    { url: 'https://via.placeholder.com/300x200', alt: 'Holiday Lighting' },
  ];
  return (
    <main className={styles.main}>
      <Container>
        <Header />
        <Section
          title="Shop by use case"
          subtitle="Illuminate your"
          colorSub="Residential or Commericial"
          secondSub="Property for every occassion!"
          titleColor="hsl(210, 100%, 50%)"
          subtitleColor="hsl(210, 100%, 50%)"
          bgColor="rgba(0, 0, 0, 0.05)"
          fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        />
        <Gallery images={images} />
        <Slide />
        <DisplayMobile />
        <Section
          title="Why choose Relight?"
          subtitle="A"
          colorSub="delightful experience"
          secondSub="for you and your community"
          titleColor="hsl(210, 100%, 50%)"
          subtitleColor="hsl(210, 100%, 50%)"
          bgColor="rgba(0, 0, 0, 0.05)"
          fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
          margin='3rem 0 0 0'

        />
        <Features />

        <Section
          title="Hidden in plain site"
          subtitle="With our new"
          colorSub="track systems"
          secondSub="your lights are well hiden"
          titleColor="hsl(210, 100%, 50%)"
          subtitleColor="hsl(210, 100%, 50%)"
          bgColor="rgba(0, 0, 0, 0.05)"
          fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        />
        <Magnify />
        <Section
          title="Expert Installation"
          subtitle="Our team of"
          colorSub="experienced & licensed"
          secondSub="technitions will install your lights"
          fithSub="careful & quick"
          titleColor="hsl(210, 100%, 50%)"
          subtitleColor="hsl(210, 100%, 50%)"
          bgColor="rgba(0, 0, 0, 0.05)"
          fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
          margin="2rem 0"
        />
        <DisplayCarousel />
        <DisplayFAQ />
        <Footer />
      </Container>
    </main>
  );
}
