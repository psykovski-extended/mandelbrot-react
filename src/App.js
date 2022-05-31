import './App.css';
import SideBar from './components/SideBar';
import Mandelbrot from './components/mandelbrot/Mandelbrot';

function App() {
  return (
    <div className="App flex">
      <SideBar />
      <Mandelbrot />
    </div>
  );
}

export default App;
