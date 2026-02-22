import { Routes, Route } from "react-router-dom";
import { lazy } from 'react';
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
// import Home from "./components/pages/home";
// import About from "./components/pages/About";
const About = lazy(() => import('./components/pages/About'));
const Home = lazy(() => import('./components/pages/home'));





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
           <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
