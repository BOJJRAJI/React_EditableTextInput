import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {showInput: true, text: ''}

  render() {
    const {showInput, text} = this.state
    console.log(showInput, text)
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          {showInput && (
            <div className="input-button-container">
              <input
                value={text}
                type="text"
                onChange={e => this.setState({text: e.target.value})}
                className="input"
              />
              <button
                className="button"
                onClick={() =>
                  this.setState(prevState => ({
                    showInput: !prevState.showInput,
                  }))
                }
                type="button"
              >
                Save
              </button>
            </div>
          )}

          {!showInput && (
            <div className="input-button-container">
              <p className="text">{text}</p>{' '}
              <button
                className="button"
                onClick={() =>
                  this.setState(prevState => ({
                    showInput: !prevState.showInput,
                  }))
                }
                type="button"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
