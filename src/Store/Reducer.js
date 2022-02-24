import { calculateWinner } from "./utility";

export const initialState = {
  board: Array(9).fill(null),
  isXNext: true,
  move: 0,
  endOfGame: false,
  winner: null,
  winingPos: null,
};

export const addMove = (id) => ({ type: "move", tileId: id });

export const restart = () => ({ type: "restart" });

export const changePlayer = (player) => ({
  type: "change_staring_player",
  changeTo: player,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case "move":
      const boardUpdate = state.board.slice();
      const id = action.tileId;

      if (boardUpdate[id] !== null) {
        return state;
      }

      boardUpdate[id] = state.isXNext ? "X" : "O";

      const [winner, position] = calculateWinner(boardUpdate);

      if (winner) {
        return {
          ...state,
          board: boardUpdate,
          isXNext: !state.isXNext,
          move: state.move + 1,
          endOfGame: true,
          winner: winner,
          winingPos: position,
        };
      } else if (state.move === 8) {
        return {
          ...state,
          board: boardUpdate,
          isXNext: !state.isXNext,
          move: state.move + 1,
          endOfGame: true,
        };
      } else {
        return {
          ...state,
          board: boardUpdate,
          isXNext: !state.isXNext,
          move: state.move + 1,
        };
      }

    case "restart":
      return initialState;

    case "change_staring_player":
      if (state.move !== 0) {
        return state;
      }

      if (action.changeTo === "X" && state.isXNext === false) {
        return { ...state, isXNext: !state.isXNext };
      }

      if (action.changeTo === "O" && state.isXNext === true) {
        return { ...state, isXNext: !state.isXNext };
      }

      return state;

    default:
      throw new Error();
  }
};
