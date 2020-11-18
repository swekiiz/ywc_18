import "./styles/App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TextHeader from "./components/TextHeader";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <TextHeader />
      <Content />
    </div>
  );
};

export default App;
