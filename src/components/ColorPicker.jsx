import React,{Component} from 'react'
import ColorPicker from '../../dist/libs/ColorPicker/colorpicker'

class ColorPickers extends Component {
	handleChangeValue(){
		console.log($(this.refs.colorpicker).css("width"))
		$(this.refs.colorpicker).ColorPicker({

			onChange: function (hsb, hex, rgb) {
				console.log("Ecc")
				var $el = $( $(this).data('colorpicker').el );
				
				$el.css('backgroundColor', '#' + hex).val('#' + hex);
				
			}
		});

  	}
	render() {
		//console.log (this.props)
		const {color,changeColorValue} = this.props
		return (
			<div >
				<input onFocus={(ref)=>this.handleChangeValue()} onBlur={(e)=>changeColorValue(e.target.value)} defaultValue={color} className="test" ref="colorpicker" style={{width:"60px",height:"25px",border:"1px solid #ddd", borderRadius:"5px",padding:"3px, apx",backgroundColor:color}} />
			</div>
		)
	}
}

export default ColorPickers