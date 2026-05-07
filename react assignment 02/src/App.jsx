import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Profile />
      <Contact />
      <AboutUs />
    </div>
  );
};

export default App;