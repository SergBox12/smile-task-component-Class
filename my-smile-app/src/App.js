import MainPage from './components/classComponents/mainPage';
import {useSmileStore} from './store/smile-store';
import {useWinnerStore} from './store/winner-store';
import './App.css';

function App() {

  const smilesData = {
    trollFace: {
      img: useSmileStore((state) => state.trollFaceImg),
      score: useSmileStore((state) => state.trollFaceScore),
      increaseScore: useSmileStore((state) => state.increaseScoreTrollFace),
      removeScore: useSmileStore((state) => state.removeScoreTrollFace),
    },
    trollFaceShout: {
      img: useSmileStore((state) => state.trollFaceShoutImg),
      score: useSmileStore((state) => state.trollFaceShoutScore),
      increaseScore: useSmileStore((state) => state.increaseScoreTrollFaceShout),
      removeScore: useSmileStore((state) => state.removeScoreTrollFaceShout),
    },
    trollFaceFuck: {
      img: useSmileStore((state) => state.trollFaceFuckImg),
      score: useSmileStore((state) => state.trollFaceFuckScore),
      increaseScore: useSmileStore((state) => state.increaseScoreTrollFaceFuck),
      removeScore: useSmileStore((state) => state.removeScoreTrollFaceFuck),
    }
  }

  const winnerData = {
    winner: useWinnerStore((state) => state.winner),
    updateWinner: useWinnerStore((state) => state.updateWinner)
  }
 

  return (
    <div className="App">
      <MainPage smiles = {smilesData} winner = {winnerData}/>
    </div>
  );
}

export default App;
