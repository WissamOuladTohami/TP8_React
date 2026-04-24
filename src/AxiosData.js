import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="data-card axios-card">
        <h2>👩‍💻 Utilisateurs avec axios</h2>
        <p className="status-text">Chargement en cours...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="data-card axios-card">
        <h2>👩‍💻 Utilisateurs avec axios</h2>
        <p className="status-text error-text">Erreur : {error}</p>
      </section>
    );
  }

  return (
    <section className="data-card axios-card">
      <div className="card-head">
        <h2>👩‍💻 Utilisateurs avec axios</h2>
        <span className="card-chip">10 profils</span>
      </div>
      <p className="card-description">
        Requete HTTP avec Axios pour afficher les noms et emails des utilisateurs.
      </p>
      <ul className="data-list">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AxiosData;
