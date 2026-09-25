import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItem";
import { useSelector } from "react-redux";
import Loader from "../components/loader";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div className="app-shell">
      <Header />
      <FetchItems />
      <div className="app-content">
        {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
