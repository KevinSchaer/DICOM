import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Missing from './components/helper/Missing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="*" exact={true} element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
