import logo from './logo.svg';
import './App.css';
import {PlayArea} from './Components/PlayArea/PlayArea.js'
import {Game} from './Components/Game/Game.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/*Learn React*/}
        </a>
        <h1 className="text-3xl font-bold underline">
          Free Solo
        </h1>
        {/*Menu*/}
      {Game()}
        {/*History?*/}
        {/*PlayArea*/}
          {/*Board*/}
          {/*{HUD}*/}
            {/*{Controls}*/}
            {/*Cards*/}
              {/*WildButton*/}
              {/*{ColorIcon()}*/}
              {/*WeightDirection*/}
              {/*HT2*/}
            {/*Controls2*/}
      </header>
    </div>
  );
}

// function ColorIcon(){
//   return(
//     <p>
//       Hello World
//     </p>
//     );
// }

export default App;
