import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link}>
      Home
    </NavLink>

    <NavLink to="/contacts" exact className={s.link}>
      Contacts
    </NavLink>
    <NavLink to="/login" exact className={s.link}>
      Login
    </NavLink>
    <NavLink to="/register" exact className={s.link}>
      Register
    </NavLink>
  </nav>
);

export default Navigation;
