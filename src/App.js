import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Add, Home, List } from './pages';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/add',
      element: <Add/>
    },
    {
      path: '/list',
      element: <List/>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
