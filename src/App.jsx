import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import fxCarryData from './assets/fx_carry_analysis.json';
import rlData from './assets/quantitative_rl_strategies.json';
import verdadData from './assets/verdad_case_study.json';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import NotebookViewer from './components/NotebookViewer';
import ScrollToTop from './components/ScrollToTop'; // We'll create this helper
import { ThemeProvider } from './context/ThemeContext';

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Experience />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis/fx-carry" element={<NotebookViewer notebookData={fxCarryData} title="FX Carry Trade Analysis" />} />
            <Route path="/analysis/rl-strategies" element={<NotebookViewer notebookData={rlData} title="Quantitative RL Strategies" />} />
            <Route path="/analysis/verdad-case-study" element={<NotebookViewer notebookData={verdadData} title="Verdad Case Study" />} />        </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
