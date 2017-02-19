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

export default class Form extends Component {
  constructor() {
    super()

    /**
    Add keys to your state object that correspond to your input names. This is where you will
    track the latest input values.
    */
    this.state = {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        // ...etc.
      }
    }
  }

  saveData() {
    const { form } = this.state // Will have all your updated form data

    // Persist your data however you like...
    fetch('/your-api', {
      body: JSON.stringify(form)
      // ...and so on
    })
  }

  render() {
    const { form } = this.state

    return (
      <div>
        {/* Map over your input names, creating an Input component for each one.*/}
        {Object.keys(form).map((name, i) => {
          return <Input key={i} onChange={(e) => this.setState({[name]: e.target.value})} />
        })}

        <button onClick={saveData}>submit</button>
      </div>
    )
  }
}
