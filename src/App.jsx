import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import SignUpForm from './views/SignUpForm';
import Profile from './views/Profile';
import Feed from './views/Feed';
import { AppProvider } from './context/AppContext';
import './styles/global.css';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <main className="page-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
