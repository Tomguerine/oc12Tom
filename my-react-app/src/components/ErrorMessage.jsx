import Header from './Header.jsx';
import './ErrorMessage.css';

export default function ErrorMessage({ message }) {
  return (
    <div>
      <Header />
      <div className="error-message">
        <h2>Oups ! Une erreur est survenue.</h2>
        <p>{message}</p>
        <a href="/user/12">Retourner à l'accueil</a>
      </div>
    </div>
  );
}
