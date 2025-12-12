import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export default function HomeLayout({ children }) {
  return (
    <main className="scroll-smooth">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
