import React, {Component} from 'react';

class Gameinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {isReverseHistory: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleJumpTo(move) {
    this.props.handleJump(move);
  }

  handleClick() {
    this.setState(prevState => ({
      isReverseHistory: !prevState.isReverseHistory
    }));
  }

  render() {
    const history = this.props.history;
    const moves = history.map((step, move) => {
      const desc = move ?
        `Player ${step.player} to ${calculatePosition(step.position)}. Go to move #${move}.` :
        'Go to game start';
      return (
        <li key={move}>
          <button className={(move === this.props.stepNumber) ? 'bold' : ''}
                  onClick={() => this.handleJumpTo(move)}>{desc}</button>
        </li>
      );
    });
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game-info">
        <button onClick={this.handleClick}>
          History direction: {this.state.isReverseHistory ? 'reverse' : 'forward'}
        </button>
        <div>{status}</div>
        <div><ol>{this.state.isReverseHistory ? moves.reverse() : moves }</ol></div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function calculatePosition(moves) {
  let row;
  let col;
  if (moves > 2 && moves < 6) {
    row = 2;
  } else {
    (moves > 5) ? row = 3 : row = 1
  }
  if (moves === 0 || moves === 3 || moves === 6) {
    col = 1;
  } else (moves === 1 || moves === 4 || moves === 7) ? col = 2 : col = 3;
  return `row: ${row}, col: ${col}`;
}

export default Gameinfo;