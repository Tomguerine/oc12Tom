import Header from './Header.jsx';
import './NotFound.css';

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="not-found">
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <a href="/user/12">Retourner sur la page d'accueil</a>
      </div>
    </div>
  );
}
