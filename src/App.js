import "./App.css";
import draftDatabase from "./api/draftApi";
import {useEffect} from "react";

function App() {
  const ApiCall = () => {
    useEffect(() => {
      draftDatabase
        .get("/character")
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  };

  ApiCall();

  return (
    <div className="App">
      <h3>Movie Character Draft</h3>
    </div>
  );
}

export default App;
