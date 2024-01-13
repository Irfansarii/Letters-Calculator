import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeSearchInput = event => {
    this.setState({count: event.target.value})
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1>Calculate the Letters you enter</h1>
          <lable htmlFor="letter">Enter the phrase</lable>
          <br/>
          <input
            type="text"
            id="letter"
            placeholder="Enter the phrase"
            className="searchInput"
            onChange={this.onChangeSearchInput}
          />
        </div>
        <br />
        <p type="button" className="button">
          No.of letters: {count.length}
        </p>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
