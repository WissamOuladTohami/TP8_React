import './App.css';
import FetchData from './FetchData';
import AxiosData from './AxiosData';

function App() {
  return (
    <main className="App">
      <section className="hero">
        <p className="hero-badge">✨ React + API Playground ✨</p>
        <h1>TP - Consommer une API avec React 🌈</h1>
        <p className="hero-text">
          Deux facons de recuperer des donnees en React: <strong>fetch()</strong> et
          <strong> axios</strong>, avec une interface plus vivante, coloree et animee.
        </p>
      </section>

      <section className="cards-grid">
        <FetchData />
        <AxiosData />
      </section>
    </main>
  );
}

export default App;
