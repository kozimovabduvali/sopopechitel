import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import AiSupport from "./pages/AiSupport";
import Beneficiaries from "./pages/Beneficiaries";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Navbar from "./components/layout/Navbar";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/aisupport" element={<AiSupport />} />
        <Route path="/beneficiaries" element={<Beneficiaries />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <section id="contact" className="mt-20 lg:mt-25 mb-20 max-w-330 mx-auto px-5">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
