import { createContext } from 'react'
// import { v4 as uuidv4 } from 'uuid';

const gameContext = createContext([]);

export const GameProvider = gameContext.Provider;
export const GameConsumer = gameContext.Consumer;
export default gameContext;

export const initialGameData = {
  guesses: [
    {guessed: false, name: "", distance: {mi: null, km: null}, bearing: null},
    {guessed: false, name: "", distance: {mi: null, km: null}, bearing: null},
    {guessed: false, name: "", distance: {mi: null, km: null}, bearing: null},
    {guessed: false, name: "", distance: {mi: null, km: null}, bearing: null},
    {guessed: false, name: "", distance: {mi: null, km: null}, bearing: null}
  ],
  todaysLake: "Saganaga"
}

export const gameReducer = (state = initialGameData, action) => {

  switch (action.type) {

    case 'SET_GUESS':

      const maxGuesses = state.guesses.length;
      let currentGuessIndex = 0;
      for(let i=0; i<maxGuesses; i++) {
        if(!state.guesses[i].guessed) {
          currentGuessIndex = i;
          break;
        }
      }

      const updatedGuesses = state.guesses.slice();
      updatedGuesses[currentGuessIndex] = {
        guessed: true,
        name: action.payload.name,
        distance: action.payload.distance,
        bearing: action.payload.bearing
      }

      return {
        ...state,
        guesses: updatedGuesses
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}