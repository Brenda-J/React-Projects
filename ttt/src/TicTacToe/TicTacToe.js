import React, { useState } from 'react';
import "./TicTacToe.css";

const TicTacToe = () => {
    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill("")); // cells = array of 9 empty strings
    const [winner, setWinner] = useState();

    const checkWinner = (squares) => {       // winning combinations
        let pairs = {
            horizontal: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            vertical: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ]
        }

        for (let pair in pairs) {           // pair = key; pairs[pair] same as key[val]
            pairs[pair].forEach((pattern) => {      // iterating over values of keys which is a 2d array
                if (
                    squares[pattern[0]] === "" ||
                    squares[pattern[1]] === "" ||
                    squares[pattern[2]] === ""
                ) {
                    // do nothing
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]]);
                }
            })
        }
    }

    const handleClick = (num) => {
        if (cells[num] !== "") {
            alert("Already taken");
            return;
        }
        let squares = [...cells];   // squares = array of the cells
        if (turn === "X") {
            squares[num] = "X";     // square at this index (num) set to X
            setTurn("O");
        } else {
            squares[num] = "O";
            setTurn("X");
        }

        setCells(squares);      // setting state with changed cell
        checkWinner(squares);
    };

    const handleReset = () => {
        setWinner(null);
        setCells(Array(9).fill(""));
    }

    const Cell = ({ num, winner }) => {     // pass in index & if there is a winner
        if (!winner) {
            return <td onClick={() => handleClick(num)}>{cells[num]}</td>
        } else {
            return <td>{cells[num]}</td>
        }
    };

    return (
        <div className="entire-container">
            <div className="title">Tic Tac Toe</div>
            <div className="container">
                {winner && (
                    <>
                        <p>{winner} is the winner!</p>
                        <button onClick={() => handleReset()}>Play Again</button>
                    </>
                )}
                <br/>
                Turn: {turn}
                <table>
                    <tbody>
                        <tr>
                            <Cell num={0} winner={winner}/>
                            <Cell num={1} winner={winner}/>
                            <Cell num={2} winner={winner}/>
                        </tr>
                        <tr>
                            <Cell num={3} winner={winner}/>
                            <Cell num={4} winner={winner}/>
                            <Cell num={5} winner={winner}/>
                        </tr>
                        <tr>
                            <Cell num={6} winner={winner}/>
                            <Cell num={7} winner={winner}/>
                            <Cell num={8} winner={winner}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TicTacToe
