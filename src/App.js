import React, {Component} from 'react';
import Article from './Article';
import Titre from './Titre';

class App extends Component {
  state = {
    compteur: 0
  };

  decremente = () => {
    this.setState({
      compteur: this.state.compteur - 1
    });
  };

  incremente = () => {
    this.setState({
      compteur: this.state.compteur + 1
    });
  };

  render(){
    let condition = this.state.compteur >= 2 ? (<Article />) : (<Titre />);
    return (
      <div className="App">
        <p>{this.state.compteur}</p>
        <button onClick={this.incremente}>Incrémente</button> <button onClick={this.decremente}>Décrémente</button>
        {condition}
      </div>
    );
  };
};

export default App;