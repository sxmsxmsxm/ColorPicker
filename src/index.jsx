import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ColorPickerDemo from './components/ColorPicker'

const changeColorValue = (color) => {
	alert(color)
}

class ColorPicker extends Component {
	propTypes: {
    	color: React.PropTypes.string.isRequired
	}

	render() {
		return (
			<ColorPickerDemo color={"#f00"} changeColorValue={changeColorValue}/>
		)
	}
}
ReactDOM.render(
	<ColorPicker color={"#f00"}  changeColorValue={changeColorValue}/>,
	document.getElementById('root')
)



