import logo from './logo.svg';
import './App.css';
import ClusterInfo from './components/ClusterInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Otimização de Clusters em Nodejs</h1>
        <p>
          <b>front_rest: </b>reactjs<br />
          <b>api_rest: </b>nodejs
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <ClusterInfo />
      </header>
    </div>
  );
}

export default App;
