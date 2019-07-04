import React,{ Component } from 'react';
import {connect} from 'react-redux';


const style = {
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  cell:{
    width: '30px',
    height: '30px'
  }

};



class ElementBattlefield extends React.Component {



      render() {
        return (
         <button className="ElementBattlefield" style={style.cell} onClick={ () => this.props.onClick()} >
           {this.props.value}
         </button>)
      }
    }




class  Battlefield extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          element: Array(9).fill(null),
          xIsNext: true

        }
        }

         handleClick(i) {
            const element = this.state.element.slice();
            if (calculateWinner(element) || element[i]) {

                return;
            }
            element[i] = this.state.xIsNext ? 'X' : 'O';
                this.setState({
                  element: element,
                  xIsNext: !this.state.xIsNext
                });


          }

      toElement(i) {
        return (
          <ElementBattlefield
            value={this.state.element[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }




    render() {
  return(
  <div>
    <div className="Battlefield-row" style={style.row}>
      <div> {this.toElement(0)}</div>
      <div>{this.toElement(1)} </div>
      <div>{this.toElement(2)} </div>
    </div>
    <div className="Battlefield-row" style={style.row}>
          <div> {this.toElement(3)} </div>
          <div>{ this.toElement(4)} </div>
          <div> {this.toElement(5)} </div>
    </div>
    <div className="Battlefield-row" style={style.row}>
          <div>  {this.toElement(6)} </div>
          <div>  {this.toElement(7)} </div>
          <div>  {this.toElement(8)} </div>
    </div>
  </div>
  );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      users: null
    };
  }
  render() {
  return (
  <Battlefield>
  </Battlefield>
  )
  }
  }

  function calculateWinner(element) {
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

        if (element[a] && element[a] === element[b] && element[a] === element[c]) {
            alert("победа");
          return element[a];
        }
      }
      return null;
    }


App.propTypes = {
  target: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  setCount: React.PropTypes.func.isRequired
};


export default connect(
  store => ({battletable: store.battletable}),
  dispatch => ({ setCount: (battletable) => dispatch({type:'INC', battletable})})
)(App);