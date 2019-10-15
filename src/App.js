import './App.css';

import React, { Component } from 'react';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Rei', age: 58 }, { name: 'Cris', age: 55 }, { name: 'Isa', age: 32 }],
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    //  don't do this -> this.state.persons[0].name = 'Renato';
    this.setState({
      persons: [{ name: newName, age: 58 }, { name: 'Cris', age: 55 }, { name: 'Isa', age: 33 }],
    });
  };

  nameNameHandler = event => {
    // console.log('Was clicked!');
    //  don't do this -> this.state.persons[0].name = 'Renato';
    this.setState({
      persons: [{ name: 'Rei', age: 58 }, { name: event.target.value, age: 55 }, { name: 'Isa', age: 32 }],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really work!</p>
        <p>Attention => the arrow function syntax is not recommended</p>
        <button style={style} onClick={() => this.switchNameHandler('Renato')}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Rei!')}
          changed={this.nameNameHandler}
        >
          My hobbies is ride
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // old fashion
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "Hi, I'm a React App!!!"));
  }
}

export default App;
