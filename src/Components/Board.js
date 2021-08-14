import React from 'react';
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let index = [0, 1, 2];
    return (
      <div>
        {index.map((i, step) => {
          return (
            <div className="board-row" key={step}>
              {index.map((x, step2) => {
                return <span key={step * 3 + step2}>{this.renderSquare(step * 3 + step2)}</span>
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Board;