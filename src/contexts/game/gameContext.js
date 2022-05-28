import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const gameContext = createContext([]);

export const GameProvider = gameContext.Provider;
export const GameConsumer = gameContext.Consumer;
export default gameContext;

export const initialGameData = {
  guesses: [],
  todaysLake: "Sawbill"
}

export const gameReducer = (state = initialGameData, action) => {

  switch (action.type) {

    case 'SET_GUESSES':

      const updatedGuesses = state.guesses.slice();
      updatedGuesses.push({
        text: action.payload,
        id: uuidv4()
      })

      return {
        ...state,
        guesses: updatedGuesses
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}