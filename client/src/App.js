import { useEffect, useState } from "react";
import './css/App.css';

// https://dev.to/salarc123/how-to-connect-a-react-frontend-with-a-nodejs-express-backend-50i9

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(res => setData(res.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
