import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './router';

import 'styles/global.scss';

function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter>
        <Routes>
          {routes.map(({ key, path, component }) => (
            <Route key={key} path={path} element={component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
