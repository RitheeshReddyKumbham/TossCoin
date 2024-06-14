import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    alter: 'Toss Result',
  }

  coinToss = () => {
    let image = ''
    let alter = ''
    this.setState(prevState => ({total: prevState.total + 1}))
    const num = Math.floor(Math.random() * 2)
    if (num === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      image = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      alter = 'heads'
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      image = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      alter = 'tails'
    }
    this.setState({image})
    this.setState({alter})
  }

  render() {
    const {total, heads, tails, image, alter} = this.state
    return (
      <div className="main">
        <div className="toss">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="img" src={image} alt={alter} />
          <button className="button" onClick={this.coinToss} type="button">
            Toss Coin
          </button>
          <div className="counts">
            <p className="total">Total: {total}</p>
            <p className="total">Heads: {heads}</p>
            <p className="total">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
