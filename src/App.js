import "./App.css";
import Pieces from "./components/Pieces";

function App() {
  function whiteScoreHandle() {
    // Click on black pieces
    console.log("Black piece clicked");
  }

  function blackScoreHandle() {
    // Click on white pieces
    console.log("White piece clicked");
  }
  return (
    <>
      <Pieces scoreHandle={whiteScoreHandle} color="black" />
      <Pieces scoreHandle={blackScoreHandle} color="white" />
    </>
  );
}

export default App;
