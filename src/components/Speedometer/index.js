import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="para">
          Speed is {speed}mph
        </h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="button1" onClick={this.accelerate}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
