import '../node_modules/bootstrap/scss/bootstrap.scss';
import SymmetricalDiv from './SymmetricalDiv';
import svgLogo from './SVG_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <SymmetricalDiv className='rounded-circle d-flex flex-column align-items-center bg-danger'>
          <strong >A title</strong>
          <span>A description</span>
          <img className='my-3' src={svgLogo} />
          <a href="#">A Link</a>
      </SymmetricalDiv>
      </header>
    </div>
  );
};

export default App;
