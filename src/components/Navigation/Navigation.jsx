import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Nav from './Navigation.styles';

const Navigation = () => {
  return (
    <Nav>
      <NavLink
        exact
        to={routes.home}
        className="navLink"
        activeClassName="navLink--active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.moviesPage}
        className="navLink"
        activeClassName="navLink--active"
      >
        Movies
      </NavLink>
    </Nav>
  );
};

export default Navigation;
