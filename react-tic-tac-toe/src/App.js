import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Player from './component/Player'
import Board from './component/Board'
import Square  from './component/Square'
function App() {
  return (
    // <h1>react tic tac toe</h1>
    
    <div>
      <Header />
      <Player whichPlayer='X'/>
      <Player whichPlayer='O' />
      <Board />
    </div>
    
  
  );
}

export default App;
