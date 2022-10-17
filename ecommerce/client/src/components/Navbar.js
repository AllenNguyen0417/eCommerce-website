import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">
          Logo
        </a>
        <a href="/" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users">Account</Link>
          </li>
        </ul>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/users">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
