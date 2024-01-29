import logo from './logo.svg';
import './App.css';
import { Route, Routes, NavLink , Link } from 'react-router-dom';
import Home from './componets/home';
import Hello from './componets/hello';
import Support from './componets/support';
import About from './componets/about';
import { Maiheader } from './componets/maiheader';


//react router is used to link the components so to make it single page application and BrpowserRouter is used to link this path created by the route to browser .
// to create many routes we use routes
// single route is used for one path
// path and elemnet , when path is reached elemnet is rendered
// star - '*' is used  if a random page is enter thyat is not in  the website or other than routes
// for diffrent pages create the components and then link or type in element

// now a user need a nav to navigate not to write the page name so we use link in react (anchor in html)  to link the route to the button or any text
//NavLink is used to add a active class also to the links so we can know which is active or not
// home is a kind of parent of other routes as '/' came before every other route
// so we can do nested routing just enclose evry other router in the home router 
// but home page does not allow the child router to render so we need to use the the <Outlet /> in home to give the permission to rebder but when we click on child child page load with the home page that is written there
//to counter this we make a new component tha act a parent for the every child route and make home route in it default route so to make it default index is used instead of the path

// useNavigate hook used to navigate to diffrent route when clicked a button or somthing
// syntax -- const Variable_Name = useNavigate()
//it is a function so use bracte at end....
// to go back to previous page we use -1 in the navigate bracket like --> navigate(-1) and it go back to previous silde when ever clicked......



function App() {
  return (
    <div className=' text-center '  >
      <nav className='  flex gap-4 justify-around text-xl align-center  mb-[30px] py-2 bg-black text-white'>
        <h2>Aryan_Nemmen</h2>
        <ul className=' flex gap-4 justify-center align-center  text-xl '>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li><NavLink to="/about" >about</NavLink></li>
          <li><NavLink to="/support" >support</NavLink></li>
          <li><NavLink to="/hello" >hello</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Maiheader/>} >
          <Route index element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="*" element={<div>not fount</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
