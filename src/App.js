
import './App.css';

const App = () => {
  const name = null;

  return (
    <div className="App">
      <h1>Hello </h1>
      {name ? (
        <>
          <h1>Welcome {name}</h1>
        </>
      ) : (
        <>
          <h1>no name</h1>
          <h2>please login</h2>
        </>
      )}
    </div>
  );
}

export default App;
