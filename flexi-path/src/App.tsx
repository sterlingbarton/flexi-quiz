import { Routes, Route } from 'react-router-dom';
// import Home from './components/home/Home';
// import Results from './components/results/Results';

// since quiz will be rendered inside Home component,
// there will be no quiz component import until v2 possibly

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" /* element={<Home />} */ />
        <Route path="/quiz" />
        <Route path="/results" /* element={<Results />} */ />
      </Routes>
    </>
  );
}
