import { Routes, Route } from 'react-router-dom';
import Quiz from './components/quiz/Quiz';
import Results from './components/results/Results';
import Home from './components/home/Home';
import LogIn from './components/log-in/LogIn';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/log-in" element={<LogIn />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
    </>
  );
}
