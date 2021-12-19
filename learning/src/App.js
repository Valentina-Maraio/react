import './App.css';

function App() {
  //incorporare espressioni in JSX
  //qui dichiariamo una variabile chiamata name e la utilizziamo all'interno 
  //di JSX tra le graffe.

  //ora includiamo il risultato della chiamata ad una funzione js,
  //formatName(iser), in un elemento <h1>

  //puoi usare JSX all'interno di espressioni if e cicli for

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}! </h1>;
    }
    return <h1>Hello, stranger.</h1>
  }

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName : "Peke",
    lastName : "Pekeña"
  };


  const name = "Valentina Maraio"
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name} </h1>
        <h1>Hello, {formatName(user)} </h1>
        <h2> {getGreeting} </h2>
      </header>
    </div>
  );
}

export default App;


//Dopo la compilazione, le espressioni JSX
//diventano normali chiamate a funzioni JS che producono
//oggetti JS.

