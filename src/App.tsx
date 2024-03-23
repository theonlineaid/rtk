
import './App.css'
import GetStudents from './components/crud/GetStudents'
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import CreateStudent from './components/crud/CreateStudent';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <GetStudents />
      },
      {
        path: "/create",
        element: <CreateStudent />
      }
    ]
  },
]);


function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
