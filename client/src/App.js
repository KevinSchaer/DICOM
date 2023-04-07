import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Help from './components/Help';
import Missing from './components/helper/Missing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/hilfe" element={<Help />} />
        <Route path="*" exact={true} element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
