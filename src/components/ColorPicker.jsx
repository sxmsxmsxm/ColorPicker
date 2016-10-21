import React,{Component} from 'react'
import ColorPicker from '../../dist/libs/ColorPicker/colorpicker'

class ColorPickers extends Component {
	

	render() {
		const {color} = this.props
		return (

			<div >
				<input onFocus={(ref)=>this.handleChangeValue()} onBlur={this.handleChangeValue.bind(this)} defaultValue={color}  ref="colorpicker" style={{width:"60px",height:"25px",border:"1px solid #ddd", borderRadius:"5px",padding:"3px, apx",backgroundColor:color}} />
			</div>
		)
	}

	handleChangeValue(ref){
		$(this.refs.colorpicker).ColorPicker({
			onChange: function (hsb, hex, rgb) {
				var $el = $( $(this).data('colorpicker').el);
				$el.css('backgroundColor', '#' + hex).val('#' + hex);
			}			
		});
  	}
}

export default ColorPickers