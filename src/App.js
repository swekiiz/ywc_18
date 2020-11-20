import "./styles/App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TextHeader from "./components/TextHeader";
import Content from "./components/Content";

/*
 *  for API test
 */

import { api } from "./components/api_test";

const App = () => {
  return (
    <div className="app">
      <Header list={api.provinces} />
      <Navbar />
      <TextHeader />
      <Content
        provinces={api.provinces}
        priceRange={api.priceRange}
        categories={api.categories}
      />
    </div>
  );
};

export default App;
