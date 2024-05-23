// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getButtonText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  getMode = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'dark-mode-container' : 'light-mode-container'
  }

  getHeading = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'dark-heading' : 'light-heading'
  }

  render() {
    const buttonText = this.getButtonText()
    const mode = this.getMode()
    const heading = this.getHeading()

    return (
      <div className="bg-container">
        <div className={mode}>
          <h1 className={heading}>Click To Change Mode </h1>
          <button onClick={this.onChangeMode} className="btn">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
