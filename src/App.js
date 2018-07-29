import React, { Component } from 'react';
import  Header from './components/Header';
import  Form from './components/Form';
import  List from './components/List';

class App extends Component {

  constructor() {
    super();
    this.addRate = this.addRate.bind(this);
    this.remove = this.remove.bind(this);
    this.state = {
      rates: {},
      results: {},
    }
  }

  componentWillMount()
  {
    fetch('https://exchangeratesapi.io/api/latest?base=USD').then((response) => {return response.json()}).then((response) => {
      this.setState({
        rates: response.rates
      });
    })
  }

  addRate(symbol) {
    let currency = symbol.toUpperCase();
    const rates = this.state.rates[currency];
    const results = {...this.state.results};
    if (rates) {
      results[currency] = rates;
      this.setState({ results });
    } else {
      return 'error';
    }
  }

  remove(symbol) {
    const results = {...this.state.results};
    results[symbol] = null;
    this.setState({results});
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <Header/>
          </div>
          <div className="card-body">
            <List  results={this.state.results} remove={this.remove} />
            <Form addRate={this.addRate} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
