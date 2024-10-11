import { Routes, Route } from 'react-router-dom';
import Quiz from './pages/quiz/Quiz';
import Results from './pages/results/Results';
import Home from './pages/home/Home';
import LogIn from './pages/log-in/LogIn';
import SignUp from './pages/sign-up/SignUp';
import CreateAccount from './pages/create-account/CreateAccount';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </>
  );
}
