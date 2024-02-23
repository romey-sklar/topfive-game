import React, { useState } from 'react';

import Card from '../components/Card'
import useDailyPuzzle from '../hooks/useDailyPuzzle'

const Game = () => {
  const dailyPuzzle = useDailyPuzzle();
  const [guesses, setGuesses] = useState(Array(5).fill('')); // Initialize with 5 empty guesses
  const [correctAnswers, setCorrectAnswers] = useState(Array(5).fill(false));

  const handleGuess = (guess, position) => {
    const updatedGuesses = [...guesses];
    updatedGuesses[position - 1] = guess;
    setGuesses(updatedGuesses);

    if (dailyPuzzle.answers[position - 1].toLowerCase() === guess.toLowerCase()) {
      const updatedCorrectAnswers = [...correctAnswers];
      updatedCorrectAnswers[position - 1] = true;
      setCorrectAnswers(updatedCorrectAnswers);
    }
  };

  if (!dailyPuzzle) {
    return <div>Loading puzzle...</div>;
  }

  return (
    <div>
      <h1>Top 5 {dailyPuzzle.category}</h1>
      <div>
        {dailyPuzzle.answers.map((answer, index) => (
          <Card
            key={index}
            position={index + 1}
            guess={guesses[index]}
            onGuess={handleGuess}
            isGuessedCorrectly={correctAnswers[index]}
            answer={answer}
          />
        ))}
      </div>
      <div>
        Correct Guesses: {correctAnswers.filter(Boolean).length}
      </div>
    </div>
  );
};

export default Game;