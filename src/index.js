import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = {
  cpType: {desc: "New Monitor", fontColor: "purple", pillBg: "white", borderColor: "purple"},
  finished: {text: "Needs Review", bgColor: "red"},
  id: 36,
  productFamily: {id: 86, name: "SWIMMING GOGGLE"},
  review_day: "28",
  review_month: "Feb",
  status: {text: "N/A", bgColor: "red"}
};

function Card(props) {
  return (
    <div className="card">
      I am a card.
    </div>
  );
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <label>Pick a product: </label>
        <select value={this.state.value} onChange={this.handleChange}>
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
  render() {
    return (
      <div className="form">
        <Dropdown />
        <Card />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);

