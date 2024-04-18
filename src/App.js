
import './App.css';
import Appfilter from './components/app-filter/Appfilter';
import Appinfo from './components/app-info/Appinfo';
import Employersaddform from './components/employers-add-form/Employersaddform';
import Employerslist from './components/employers-list/Employerslist';
import Searchingpanel from './components/searching-panel/Searchingpanel';


function App() {

  const data = [
    {
      name:'Ivan',
      salary:1300,
      increase: false,
      id: 1
    },

    {
      name:'Mihail',
      salary:950,
      increase: true,
      id: 2
    },
    {
      name:'Maksim',
      salary:1200,
      increase: false,
      id: 3
    }
  ]
  return (
    <div className="App">
      <Appinfo/>

      <div className="search-panel">
        <Searchingpanel/>
        <Appfilter/>
      </div>

      <Employerslist data={data}/>
      <Employersaddform/>
    </div>
  );
}

export default App;
