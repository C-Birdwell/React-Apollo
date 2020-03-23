import React from 'react'

export class InputText extends React.Component {
  constructor(...props) {
    super(...props)
    this.state = { isActive: false }
    this.inputRefs = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.inputRefs.current.focus()
  }

  render() {
    const { value, onChange, placeholder, secure = false } = this.props
    const { isActive } = this.state
    return (
      <div
        className={`input-container${value && ' val'}${isActive ? ' active' : ''}`}
        onClick={this.focusTextInput}
      >
        <div className="label">{value && <p>{secure ? 'Password' : value}</p>}</div>
        <div className="col-1" />
        <div className="col-4 input-wrapper">
          <input
            type={secure ? 'password' : 'text'}
            value={value}
            onChange={val => onChange(val.target.value)}
            placeholder={placeholder}
            ref={this.inputRefs}
            onFocus={() => this.setState({ isActive: true })}
            onBlur={() => this.setState({ isActive: false })}
          />
        </div>
      </div>
    )
  }
}

export class InputTextArea extends React.Component {
  constructor(...props) {
    super(...props)
    this.state = { isActive: false }
    this.inputRefs = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.inputRefs.current.focus()
  }

  render() {
    const { value, onChange, placeholder, rows } = this.props
    const { isActive } = this.state
    return (
      <div
        className={`input-container${value && ' val'}${isActive ? ' active' : ''}`}
        onClick={this.focusTextInput}
      >
        <div className="label">{value && <p>{value}</p>}</div>
        <div className="col-1" />
        <div className="col-4 input-wrapper">
          <textarea
            rows={rows ? rows : 4}
            type="text"
            value={value}
            onChange={val => onChange(val.target.value)}
            placeholder={placeholder}
            ref={this.inputRefs}
            onFocus={() => this.setState({ isActive: true })}
            onBlur={() => this.setState({ isActive: false })}
          />
        </div>
      </div>
    )
  }
}
