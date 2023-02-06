import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ApplicationsPage from './pages/ApplicationsPage';
import CreateAccount from './components/CreateAccount';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
