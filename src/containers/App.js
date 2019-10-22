import React, { Component } from 'react';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';

class App extends Component {
  state = {
    persons: [{ id: 're', name: 'Rei', age: 58 }, { id: 're1', name: 'Cris', age: 55 }, { id: 'rein', name: 'Isa', age: 32 }],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true,
  };

  persons = [...this.state.persons];

  nameChangedHandler = (event, id) => {
    // console.log('Was clicked!');
    //  don't do this -> this.state.persons[0].name = 'Renato';
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    if (this.state.persons.length === 0) {
      this.setState({
        persons: this.persons,
      });
    }
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonHandler} />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
