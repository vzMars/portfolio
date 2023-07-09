import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Links from './pages/Links';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';
import LinksLayout from './layouts/LinksLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route element={<LinksLayout />}>
          <Route path='links' element={<Links />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
