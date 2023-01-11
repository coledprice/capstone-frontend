import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Catch } from "./Catch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catch" element={<Catch />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
