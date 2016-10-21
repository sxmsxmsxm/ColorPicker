import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ColorPickers from './components/ColorPicker'

class App extends Component {

	render() {
		return (
				<ColorPickers color={"#f00"}/>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))


