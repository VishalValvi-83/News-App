import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path : "*",
    element: <h1>Page Not Found</h1>,
  }
]);


root.render(<RouterProvider router={router}/>);

