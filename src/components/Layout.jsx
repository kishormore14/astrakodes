import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className="weapons-background">
        <img src="/images/trishul.png" className="weapon weapon-1" alt="Trishul" />
        <img src="/images/chakra.png" className="weapon weapon-2" alt="Sudarshan Chakra" />
        <img src="/images/gada.png" className="weapon weapon-3" alt="Gada" />
        <img src="/images/trishul.png" className="weapon weapon-4" alt="Trishul" />
        <img src="/images/chakra.png" className="weapon weapon-5" alt="Sudarshan Chakra" />
        <img src="/images/gada.png" className="weapon weapon-6" alt="Gada" />
      </div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
