import Game from '../components/Game'
import useDailyPuzzle from '../hooks/useDailyPuzzle'

export default function Home() {
  const dailyPuzzle = useDailyPuzzle();

  console.log(dailyPuzzle)

  return (
    <div className="container">
      <Game />
    </div>
  )
}
