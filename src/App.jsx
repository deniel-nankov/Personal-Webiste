import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import fxCarryData from './assets/fx_carry_analysis.json';
import rlData from './assets/quantitative_rl_strategies.json';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import NotebookViewer from './components/NotebookViewer';
import ScrollToTop from './components/ScrollToTop'; // We'll create this helper

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Experience />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis/fx-carry" element={<NotebookViewer notebookData={fxCarryData} title="FX Carry Trade Analysis" />} />
          <Route path="/analysis/rl-strategies" element={<NotebookViewer notebookData={rlData} title="Quantitative RL Strategies" />} />        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
