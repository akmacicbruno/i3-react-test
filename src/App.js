import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/404/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/i3-react-test/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
