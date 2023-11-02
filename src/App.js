// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/HomePage/HomePage'
import AccountPage from "./pages/AccountPage/AccountPage";
import Footer from "./components/Footer/Footer";
import NestedItem from "./components/ProductInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="px-3">
      <Routes>
        <Route exact path="/" Component={Home} />
          <Route path="/:title" Component={NestedItem} />
        <Route exact path="/loginform" Component={AccountPage} />
      </Routes> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
