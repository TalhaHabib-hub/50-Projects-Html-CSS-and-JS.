import Header from "./components/Header";
import Result from "./components/Result";
import Controller from "./components/Controllers";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {privacyActions} from './store/privacy'

function App() {
  let privacy = useSelector((store) => store.privacy)
  const funcDispatch = useDispatch();
  const handleReset = () => {
     funcDispatch(privacyActions.toggle())
  }
  return (
    <>
      <div className="p-5 text-center bg-body-tertiary rounded-4" style={{border:'3px solid black',margin:'34px'}}>
        {privacy === false && (
          <>
            <Header></Header>
            <Result></Result>
            <Controller></Controller>
          </>
        )}
        {privacy === true && <><h1>Talha has privatized the Counter!</h1>
          <h3><button className="btn btn-warning" onClick={handleReset}>reset!</button></h3></>
        }
      </div>
    </>
  );
}

export default App;
