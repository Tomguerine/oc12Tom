import './Header.css';
import logo from '../assets/logo.png'; // remplace avec le bon chemin si besoin

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="SportSee logo" className="logo-img" />
      </div>
      <nav>
        <ul className="nav-menu">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Profil</a></li>
          <li><a href="#">Réglage</a></li>
          <li><a href="#">Communauté</a></li>
        </ul>
      </nav>
    </header>
  );
}
