import React from 'react';
import './App.css'
import { CardList } from './components/cardlist/card-list.component';
import { SearchBox } from './components/search-box/search-box.components'

class App extends React.Component {

  constructor() {
    super();
    this.state =
      {
        names: [],
        searchfeild: ''
      };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ names: user }))
  }


  render() {
    const { names, searchfeild } = this.state;
    const filrertednames = names.filter(nm =>
      nm.name.toLowerCase().includes(searchfeild.toLowerCase())

    )
    return (
      <div className="App">
        <h1><b>Monster Menulist</b></h1>
        <SearchBox
          placeholder="search.."
          handleChange={e => {
            this.setState({ searchfeild: e.target.value });
          }
          }
        />
        <CardList names={filrertednames}></CardList>
      </div>
    );
  }
}
export default App;
