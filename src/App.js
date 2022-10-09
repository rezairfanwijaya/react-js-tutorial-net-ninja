import './App.css';

function App() {
  const title = 'My First Blog'
  const likes = 230
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} time</p>
      </div>
    </div>
  );
}

export default App;
