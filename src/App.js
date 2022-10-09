import './App.css';

function App() {
  const title = 'My First Blog'
  const likes = 230
  const scores = [90,80,78,65,99]
  const person = {name:'reza', level:12}
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } time</p>
        <p>{ 'my blog' }</p>
        <p>{ 10 }</p>
        <p>{ [1,2,3,4,5,6] }</p>
        <p>{ scores[4] }</p>
        <p>{ Math.random() * 120 }</p>
      </div>
    </div>
  );
}

export default App;
