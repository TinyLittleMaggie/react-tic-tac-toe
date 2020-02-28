import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Card(props) {
  return (
    <div className="card">
      <h2>{props.data.productFamily.name}</h2>
      <p>{props.data.cpType.desc}</p>
      <p>Finished: {props.data.finished.text}</p>
      <p>Review date: {props.data.review_month + " " + props.data.review_day}</p>
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
        </select>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'coconut',
      data: [
        {
          cpType: {desc: "I am a description!", fontColor: "purple", pillBg: "white", borderColor: "purple"},
          finished: {text: "Needs Review", bgColor: "red"},
          id: 36,
          productFamily: {id: 86, name: "coconut"},
          review_day: "28",
          review_month: "Feb"
        },
        {
          cpType: {desc: "I am a different description!", fontColor: "purple", pillBg: "white", borderColor: "purple"},
          finished: {text: "Finished", bgColor: "red"},
          id: 37,
          productFamily: {id: 86, name: "lime"},
          review_day: "2",
          review_month: "Mar"
        },
        {
          cpType: {desc: "I am the best grapefruit!", fontColor: "purple", pillBg: "white", borderColor: "purple"},
          finished: {text: "Needs Review", bgColor: "red"},
          id: 38,
          productFamily: {id: 86, name: "grapefruit"},
          review_day: "30",
          review_month: "Jan"
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selection: event.target.value});
  }

  chooseData(selection) {
    const data = this.state.data.slice();
    for (let i = 0; i < data.length; i++) {
      if (data[i].productFamily.name === selection) {
        return data[i];
      }
    }
  }

  render(event) {
    return (
      <div className="form">
        <Dropdown
          value={this.state.selection}
          onClick={(event) => this.handleChange(event)}
        />
        <Card data={this.chooseData(this.state.selection)}/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);

