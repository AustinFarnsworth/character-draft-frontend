import "./App.css";

import DraftDatabase from "./api/draftApi";
import {useEffect} from "react";

function App() {
  // useEffect(() => {
  //   const apiCall = async () => {
  //     let res = await DraftDatabase.get("/character");

  //     console.log(res.data);
  //   };

  //   apiCall();
  // }, []);

  const searchFunction = (e) => {
    e.preventDefault();

    DraftDatabase.get("/character");
  };

  return (
    <div className="App">
      <h3>Movie Character Draft</h3>
    </div>
  );
}

export default App;
