import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => { this.setState({ value: this.props.player }) }}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'a'
    };
  }

  renderSquare(i) {
    return <Square player={i}/>;
  }

  render() {
    const status = 'Next player: ' + this.state.player;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.state.player)}
          {this.renderSquare(this.state.player)}
          {this.renderSquare(this.state.player)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.player)}
          {this.renderSquare(this.state.player)}
          {this.renderSquare(this.state.player)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.player)}
          {this.renderSquare(this.state.player)}
          {this.renderSquare(this.state.player)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

