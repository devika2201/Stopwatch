import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({timer: 0, isTimerRunning: false})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  renderSeconds = () => {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1>Stopwatch</h1>
          <div className="card-element">
            <div className="timer-element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer"
              />
              <p className="para">Timer</p>
            </div>
            <h1>{time}</h1>
            <div className="button-container">
              <button
                type="button"
                className="button1"
                onClick={this.onClickStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button2"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button3"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
