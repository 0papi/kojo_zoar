import useTheme from "next-theme";
import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import Layout from "./components/shared/Layout";
import Projects from "./components/main/Projects";
import Contact from "./components/main/Contact";
import Footer from "./components/main/Footer";
import Skills from "./components/main/Skills";
import Container from "./components/shared/Container";
import styles from "./styles/Container.module.css";

function App() {
  const { theme } = useTheme();

  const returnClassNames =
    theme === "light" ? `${styles.all_light}` : `${styles.all_dark}`;
  return (
    <Container className={returnClassNames}>
      <Layout>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </Container>
  );
}

export default App;
