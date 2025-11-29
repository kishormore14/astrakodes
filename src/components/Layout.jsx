import Navbar from './Navbar';
import Footer from './Footer';
import WeaponsBackground from './WeaponsBackground';

export default function Layout({ children }) {
  return (
    <>
      <WeaponsBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
