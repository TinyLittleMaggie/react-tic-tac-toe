import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Card(props) {
  return (
    <div className="card">
      {props.value}
    </div>
  );
}

class Dropdown extends React.Component {
  render() {
    return (
      <div>
        <label>Pick a product: </label>
        <select value={this.props.value} onChange={(event) => this.props.onClick(event)}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(event) {
    return (
      <div className="form">
        <Dropdown
          value={this.state.value}
          onClick={(event) => this.handleChange(event)}
        />
        <Card value={this.state.value}/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);

