import React from "react"
import PropTypes from "prop-types"
import { ChromePicker } from "react-color";

class Colorpicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selector: props.selector
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (color) => {
    document.body.style.background = color.hex;
    let elem = document.querySelector('#'+this.state.selector)

    elem.value = color.hex;
  }

  render() {
    return (
      <React.Fragment>
        <ChromePicker color={this.props.color} onChange={this.handleChange} />
      </React.Fragment>
    )
  }
}

Colorpicker.propTypes = {};

export default Colorpicker