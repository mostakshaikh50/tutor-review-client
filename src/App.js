import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div>
      <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router ={router}></RouterProvider>
    </div>
    </div>
  );
}

export default App;
