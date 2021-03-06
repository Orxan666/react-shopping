import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BaseRouter from './DomRoutes/BaseRouter';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <BaseRouter/>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
