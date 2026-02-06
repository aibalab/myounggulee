import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Professor from './pages/Professor';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Teaching from './pages/Teaching';
import CV from './pages/CV';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
