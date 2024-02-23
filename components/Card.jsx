import Number from '../components/Number'

const Card = ({ position, guess, onGuess, isGuessedCorrectly, answer }) => {
  return (
    <div className={`card ${isGuessedCorrectly ? 'guessed-correctly' : ''}`}>
      <Number position={position} />
      {isGuessedCorrectly ? (
        <div className='correct-answer'>{answer}</div>
      ) : (
          <input
            type="text"
            value={guess}
            onChange={(e) => onGuess(e.target.value, position)}
          />
        )}
    </div>
  );
};


export default Card;