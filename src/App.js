
import './App.css';
import { LoginPage } from './pages/LoginPage';
function App() {
  return (
    <div>
      
      <nav className= "app-navigation">
       <ul className= "app-nav-list">
        <li>Login</li>
        <li>Profile</li>
        <li>Settings</li>
       </ul>
      </nav>

      <LoginPage/>
    </div>
  );
}

export default App;
