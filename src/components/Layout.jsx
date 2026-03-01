import Navbar from './Navbar';
import Footer from './Footer';
import WeaponsBackground from './WeaponsBackground';
import AIParticles from './AIParticles';
import NeuralNetworkBG from './NeuralNetworkBG';

export default function Layout({ children }) {
  return (
    <>
      <NeuralNetworkBG />
      <WeaponsBackground />
      <AIParticles />
      <header>
        <Navbar />
      </header>
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
