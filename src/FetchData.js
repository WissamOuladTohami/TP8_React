import { useState, useEffect } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur reseau');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="data-card fetch-card">
        <h2>📰 Articles avec fetch()</h2>
        <p className="status-text">Chargement en cours...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="data-card fetch-card">
        <h2>📰 Articles avec fetch()</h2>
        <p className="status-text error-text">Erreur : {error}</p>
      </section>
    );
  }

  return (
    <section className="data-card fetch-card">
      <div className="card-head">
        <h2>📰 Articles avec fetch()</h2>
        <span className="card-chip">5 titres</span>
      </div>
      <p className="card-description">
        Recuperation des articles depuis JSONPlaceholder avec l'API native du navigateur.
      </p>
      <ul className="data-list">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default FetchData;
