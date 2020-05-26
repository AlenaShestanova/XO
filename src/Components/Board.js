import React from 'react'
import Square from './Square'

export default function Board() {
    const [arrSquare, setArrSquare] = React.useState({
        squares: Array(9).fill(null),
        xIsNext: true
    });

    function handleClick(i) {
        const squares = arrSquare.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return

        }
        squares[i] = arrSquare.xIsNext ? 'X' : 'O'
        setArrSquare({
            squares: squares, xIsNext: !arrSquare.xIsNext
        })
    }

    function renderSquare(i) {
        return <Square value={arrSquare.squares[i]} onClick={() => handleClick(i)}/>;
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(arrSquare.squares);
    let status;
    if (winner) {
        status = 'Победитель: ' + winner;
    } else {
        status = 'Следующий игрок: ' + (arrSquare.xIsNext ? 'X' : 'O');
    }
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

