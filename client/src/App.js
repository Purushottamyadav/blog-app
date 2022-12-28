
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import AddBlog from "./components/AddBook";
import Blogs from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";
import Protected from './components/protected';






function App() {
  return (
    
   <div className='app'>
   <BrowserRouter>
   <Routes>
          <Route  path='/' element={<Login/>}></Route>
          <Route  path='/register' element={<Register/>}></Route>
          <Route path="/home" element={<Protected><Home /></Protected>} exact />
          <Route path="/add" element={<Protected><AddBlog /></Protected>} exact />
          <Route path="/blogs" element={<Blogs />} exact />
          <Route path="/blogs/:id" element={<BookDetail />} exact />

    
  
    </Routes>
   </BrowserRouter>
   
   </div>
  );
}

export default App;
