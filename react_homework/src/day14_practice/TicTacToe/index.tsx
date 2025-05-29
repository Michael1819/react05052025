import React from "react";
import Solution from "./Solution";
import { useState, useEffect } from "react"

type Player = "X" | "O" | null
type Board = Player[]

export default function TicTacToe() { 
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X")
  const [winner, setWinner] = useState<Player>(null)
  const [gameOver, setGameOver] = useState(false)

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6], 
  ]

  function checkWinner(board: Board): Player {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }

  function checkDraw(board: Board): boolean {
    return board.every((cell) => cell !== null) && !checkWinner(board)
  }

  useEffect(() => {
    const gameWinner = checkWinner(board)
    const isDraw = checkDraw(board)

    if (gameWinner) {
      setWinner(gameWinner)
      setGameOver(true)
    } else if (isDraw) {
      setWinner(null)
      setGameOver(true)
    }
  }, [board])

  function handleCellClick(index: number) {
    if (board[index] || gameOver) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }

  function restartGame() {
    setBoard(Array(9).fill(null))
    setCurrentPlayer("X")
    setWinner(null)
    setGameOver(false)
  }

  function renderCell(index: number) {
    return (
      <button
        key={index}
        style={{ width: "60px", height: "60px", border: "1px solid black" }}
        onClick={() => handleCellClick(index)}
        disabled={board[index] !== null || gameOver}
      >
      {board[index]}
      </button>
    )
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: "0" }}>
        {Array.from({ length: 9 }, (_, index) => renderCell(index))}
      </div>

      <div>
        {winner ? <p>Winner: {winner}</p> : gameOver ? <p>{"It's a draw!"}</p> : <p>Current player: {currentPlayer}</p>}
      </div>

      <div>
        <button onClick={restartGame}>RESTART GAME</button>
      </div>
    </div>
  )
}
