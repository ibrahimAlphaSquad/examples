import './App.css';
// import TypeWriterEffect from './TypeWriterEffect'
import D3BarChart from './D3BarChart';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        {/* <section className='TypeWriterEffect'>
          <TypeWriterEffect typingSpeed={50} text="Hello, world! This is the typewriter effect. Hello, world! This is the typewriter effect. Hello, world! This is the typewriter effect.Hello, world! This is the typewriter effect. Hello, world! This is the typewriter effect. Hello, world! This is the typewriter effect.Hello, world! This is the typewriter effect. Hello, world! This is the typewriter effect." />
        </section> */}
        <section className='d3BarChart'>
          <D3BarChart />
        </section>
      </main>
    </div>
  );
}

export default App;
