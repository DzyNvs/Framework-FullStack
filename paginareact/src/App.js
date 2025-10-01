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
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const logoContainerStyle = {
    marginBottom: '2rem'
  };

  const logoStyle = {
    maxWidth: '150px',
    height: 'auto'
  };
  
  const buttonContainerStyle = {
    marginTop: '1.5rem'
  };

  return (
    
    <div style={themeStyles} className="text-center">
      <div style={logoContainerStyle}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png" 
          alt="Símbolo do Corinthians"
          style={logoStyle}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/000000/FFFFFF?text=SCCP'; }}
        />
      </div>
      
      <h1 className="display-4 fw-bold">André Luiz Anastácio Neves</h1>
      <p className="lead">Bem-vindo à nação Corinthiana!</p>

      <div style={buttonContainerStyle}>
        <Button className="btn btn-light btn-lg mx-2 px-4 rounded-pill" title="Entrar"/>
      
      
        <Button className="btn btn-outline-light btn-lg mx-2 px-4 rounded-pill" title="Sair"/>
       
       
      </div>
    </div>
  );
}

export default App;
