import './App.css';
import Button from './componentes/Button';

function App() {
  const themeStyles = {
    backgroundColor: '#101010',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    textAlign: 'center'
  };

  const logoStyle = {
    maxWidth: '150px',
    height: 'auto',
    marginBottom: '1rem'
  };

  const sectionStyle = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '1.5rem',
    backgroundColor: '#181818',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
    textAlign: 'left',
    lineHeight: '1.6'
  };

  const sectionTitle = {
    color: '#f1c40f',
    marginBottom: '1rem'
  };

  return (
    <div style={themeStyles}>
      {/* Logo */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png" 
        alt="Símbolo do Corinthians"
        style={logoStyle}
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src='https://placehold.co/150x150/000000/FFFFFF?text=SCCP'; 
        }}
      />

      {/* Cabeçalho */}
      <h1 className="display-4 fw-bold">André Luiz Anastácio Neves</h1>
      <p className="lead">Bem-vindo à nação Corinthiana!</p>

      {/* Botões */}
      <div style={{ margin: '1.5rem 0' }}>
        <Button className="btn btn-light btn-lg mx-2 px-4 rounded-pill" title="Entrar"/>
        <Button className="btn btn-outline-light btn-lg mx-2 px-4 rounded-pill" title="Sair"/>
      </div>

      {/* História */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>📖 História</h2>
        <p>
          O <strong>Sport Club Corinthians Paulista</strong> foi fundado em <strong>1º de setembro de 1910</strong> 
          por um grupo de operários do bairro do Bom Retiro, em São Paulo. 
          Desde o início, tornou-se o clube do povo, com uma ligação muito forte com as classes populares.
        </p>
        <p>
          O nome foi inspirado no time inglês <em>Corinthian Football Club</em>, que excursionava pelo Brasil na época.  
          Desde então, o Corinthians cresceu e se consolidou como um dos maiores clubes da América Latina.
        </p>
      </div>

      {/* Títulos */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>🏆 Títulos Importantes</h2>
        <ul>
          <li><strong>Campeonato Mundial de Clubes da FIFA:</strong> 2000, 2012</li>
          <li><strong>Copa Libertadores da América:</strong> 2012</li>
          <li><strong>Campeonato Brasileiro:</strong> 7 títulos (1990, 1998, 1999, 2005, 2011, 2015, 2017)</li>
          <li><strong>Copa do Brasil:</strong> 1995, 2002, 2009</li>
          <li><strong>Campeonato Paulista:</strong> mais de 30 conquistas</li>
        </ul>
      </div>

      {/* Acontecimentos */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>⚡ Acontecimentos Marcantes</h2>
        <p>
          🔥 Em 1977, o Corinthians conquistou o <strong>Campeonato Paulista</strong>, encerrando uma fila de 
          23 anos sem títulos, em uma das maiores festas da história do futebol brasileiro.
        </p>
        <p>
          🌍 Em 2012, o clube viveu seu auge internacional, vencendo a <strong>Copa Libertadores invicto </strong> 
           e, em seguida, derrotando o poderoso Chelsea na final do <strong>Mundial de Clubes da FIFA</strong>.
        </p>
        <p>
          🎶 A torcida do Corinthians é considerada uma das mais apaixonadas do mundo, sendo chamada de 
          <strong> "Fiel"</strong>, que apoia o time incondicionalmente em todos os momentos.
        </p>
      </div>
    </div>
  );
}

export default App;
