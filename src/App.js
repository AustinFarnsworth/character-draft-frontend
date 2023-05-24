import "./App.css";
import axios from "axios";
import draftDatabase from "./api/draftApi";
import {useEffect} from "react";

function App() {
  // const ApiCall = () => {
  //   useEffect(() => {
  //     draftDatabase
  //       .get("/character")
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  // };

  // ApiCall();

  useEffect(() => {
    const apicall = async () => {
      const response = await axios.get("http://localhost:3005/draft/character");

      console.log(response.data);
    };

    apicall();
  }, []);

  return (
    <div className="App">
      <h3>Movie Character Draft</h3>
    </div>
  );
}

export default App;
