import { Hero } from "./components/Hero";
import GlobalStyle from "./components/style/GlobalStyles";
import { AnimationCart } from "./components/AnimationCart";
import { LocalAnimationCart } from "./components/LocalAnimationCart";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";



function App() {
  return (
    <>
      <GlobalStyle />
      <Hero></Hero>
      <AnimationCart></AnimationCart>
      <LocalAnimationCart></LocalAnimationCart>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
