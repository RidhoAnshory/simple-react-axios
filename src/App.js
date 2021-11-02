import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList';
import PersonListPost from './PersonListPost';
import PersonListDelete from './PersonListDelete';

function App() {
  return (
    <div>
      <PersonList></PersonList>
      <PersonListPost></PersonListPost>
      <PersonListDelete></PersonListDelete>
    </div>
    
    
  );
}

export default App;
