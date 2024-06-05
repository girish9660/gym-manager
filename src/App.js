import './App.css';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';



function App() {
  const navigate = useNavigate();
  const onClickNavigate = (path) => {
    console.log('path', path);
    navigate(path);
  };
  return (
      <div >
        <nav className="app-navigation">
          <ul className="app-nav-list"> 
            <li><a onClick={() => onClickNavigate('/')}>Login</a></li>
            <li><a onClick={() => onClickNavigate('/sign-up')}>Signup</a></li>
            <li><a onClick={() => onClickNavigate('/profile')}>Profile</a></li>
          </ul>
        </nav>

       <main>
        <AppRouter />
       </main>
       </div>
  );
}

export default App;

/**
 * 
 * 1. When login page lands, user name and password should be admin
 * 2. once both are admins, navigate to home page
 * 3. in home page, you should have three links, i. list of customers, ii. edit customer details, iii. archive customer details.
 * 4. when i click, i should go to that page
 */
