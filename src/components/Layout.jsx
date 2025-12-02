import Navbar from './Navbar';
import Footer from './Footer';
import WeaponsBackground from './WeaponsBackground';
import AIParticles from './AIParticles';

export default function Layout({ children }) {
  return (
    <>
      <WeaponsBackground />
      <AIParticles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
