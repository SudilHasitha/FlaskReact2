import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import {useState} from 'react';



const App = () => {
  const [word,setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word)
  }

  return (
    <div>
      <Header/>
      <Search word={word} setWord={setWord} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
