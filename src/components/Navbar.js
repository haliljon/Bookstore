import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="nav-bar">
      <h1 className="nav-brand">Bookstore CMS</h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id} className="nav-link">
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <button className="icon-button" type="button">
        <span className="material-icons primary-color">person</span>
      </button>
    </nav>
  );
};
export default Navbar;
