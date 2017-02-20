import React, { Component, PropTypes } from 'react'

/**
Set up an Input component that can take arbitrary props.
This allows you to pass whatever handlers you need (e.g. onChange, onKeyDown, etc.)
*/
function Input({ ...rest }) {
  return (
    <input {...rest} />
  )
}

/*
Create a form component that own the state of all your inputs.
*/
export default class Form extends Component {
  constructor() {
    super()

    /**
    Add keys to your state object that correspond to your input names. This is where you will
    track the latest input values.
    */
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      // ...etc.
    }
  }

  render() {
    return (
      <div>
        {/* Map over your input names, creating an Input component for each name. */}
        {Object.keys(this.state).map((name, i) => {
          return <Input key={i} onChange={(e) => this.setState({[name]: e.target.value})} />
        })}

        <button onClick={someAjaxFn}>submit</button>
      </div>
    )
  }
}
