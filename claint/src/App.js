
import { RouterProvider } from 'react-router-dom';
import router from '../src/Routing/Routing'
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
