import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Landing } from './components/page/Landing';
import { Home } from './pages/home';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Landing>
              <Home />
            </Landing>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
