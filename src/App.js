import './App.css';

const Mensaje = (props) => {
  return <p>{props.message}</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje message='Hola Mundo' />
    </div>
  );
}

export default App;
