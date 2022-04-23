import React from "react";

// Show the pieces according to color

export default function Pieces(props) {
  const [score, setScore] = React.useState(0);
  const [pieces, setPieces] = React.useState({
    pawns: 8,
    knights: 2,
    rooks: 2,
    bishops: 2,
    queen: 1,
  });

  function handlePawns() {
    if (pieces.pawns > 0) {
      setScore((prev_score) => prev_score + 1);
      setPieces((prev_pieces) => {
        return {
          ...prev_pieces,
          pawns: prev_pieces.pawns - 1,
        };
      });
    }
}
    function handleKnights() {
        if (pieces.knights > 0) {
          setScore((prev_score) => prev_score + 3);
          setPieces((prev_pieces) => {
            return {
              ...prev_pieces,
              knights: prev_pieces.knights - 1,
            };
          });
        }
    }
    function handleRooks(){
        if (pieces.rooks > 0) {
          setScore((prev_score) => prev_score + 5);
          setPieces((prev_pieces) => {
            return {
              ...prev_pieces,
              rooks: prev_pieces.rooks - 1,
            };
          });
        }
    }

    function handleBishops(){

        if (pieces.bishops > 0) {
          setScore((prev_score) => prev_score + 3);
          setPieces((prev_pieces) => {
            return {
              ...prev_pieces,
              bishops: prev_pieces.bishops - 1,
            };
          });
        }
    }

    function handleQueen(){

        if (pieces.queen > 0) {
          setScore((prev_score) => prev_score + 9);
          setPieces((prev_pieces) => {
            return {
              ...prev_pieces,
              queen: prev_pieces.queen - 1,
            };
          });
        }
    }

  // Display pieces if sum of pieces > 0, otherwise 
  const pieces_sum = Object.values(pieces).reduce((a, b) => a + b);

  if (pieces_sum > 0) {
    return (
      <div className="flex justify-between align-center mx-1 my-1 bg-red-600">
        <button onClick={handlePawns}>
          <i class= {`${props.color==="white"?"fal-solid fal-chess-pawn fa-2x":"fa-solid fa-chess-pawn fa-2x"}`}></i>
        </button>
        <button onClick={handleKnights}>
          <i class="fa-solid fa-chess-knight fa-2x"></i>
        </button>
        <button onClick={handleRooks}>
          <i class="fas fa-chess-rook fa-2x"></i>
        </button>
        <button onClick={handleBishops}>
          <i class="fa-solid fa-chess-bishop fa-2x"></i>
        </button>
        <button onClick={handleQueen}>
          <i class="fas fa-chess-queen fa-2x"></i>
        </button>
        <h3>{`${props.color==="black"?"white":"black"} score is ${score}`}</h3>
      </div>
    );
  } else {
    if(pieces_sum===0 && props.color==="black" ){
        return alert("White won the game")
    }
    else{
        return alert("Black won the game")
    }
  }
}