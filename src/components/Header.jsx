import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ toggleTheme, theme }) => (
  <header className="header border-strict">
    <div className="logo">ОЛЕКСАНДР.dev</div>
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>ПРО МЕНЕ</NavLink>
      <NavLink to="/my-city" className={({ isActive }) => isActive ? 'active-link' : ''}>МІСТО</NavLink>
      <NavLink to="/my-future" className={({ isActive }) => isActive ? 'active-link' : ''}>МАЙБУТНЄ</NavLink>
    </nav>
    <button className="theme-btn border-strict" onClick={toggleTheme}>
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  </header>
);
export default Header;