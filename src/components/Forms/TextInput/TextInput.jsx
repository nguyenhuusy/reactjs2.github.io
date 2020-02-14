import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { label, name, value, onChange, error } = this.props;

    return(
      <div className="form-field">
        <label className="form-label">{ label }</label>
        <input 
          className="form-input" 
          type="text" 
          name={ name } 
          value={ value || '' }
          onChange={ onChange } 
        />
        {error && <span>{ error }</span>}
      </div>
    )
  }
}

export default TextInput;