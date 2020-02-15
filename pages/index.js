import React from 'react'
import * as superagent from 'superagent'
import { baseURl } from '../config';

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    // const hostname = req ? `${req.protocol}://${req.get('Host')}` : '';
    // const baseUrl = `${hostname}/api/`;
    if (req) {
      const { db } = req
      const list = await db.collection('Registrations').find().sort({ createdAt: -1 })
        .toArray()
      return { list }
    }

    const { list } = await superagent.get(baseURl)
      .then(res => res.body)
    return { list }
  }

  constructor () {
    super()
    this.state = { formData: { email: '', name: '', phone: '', type: '', count: 0 } }
  }

  setForm (prop) {
    return ev => {
      const state = this.state || {}
      const formData = state.formData || {}
      this.setState(Object.assign({}, state, {
        formData: Object.assign({}, formData, {
          [prop]: ev.target.value
        })
      }));
    }
  }

  isFormInvalid () {
    const state = this.state || {}
    const formData = state.formData || {}
    return !formData.email || !formData.name || !formData.phone || !formData.type || !formData.count
  }

  remove (_id) {
    return ev => {
      superagent.del(`${baseURl}/${_id}`)
        .then(() => {
          const state = this.state || {}
          const list = this.state.list || this.props.list || []
          this.setState(Object.assign({}, state, {
            list: list.filter(registration => registration._id !== _id)
          }))
        })
        .catch(error => console.error(error.stack))
    }
  }

  add () {
    return ev => {
      ev.preventDefault()
      const state = this.state || {}
      const formData = state.formData || {}
      this.setState(Object.assign({}, this.state, {
        formData: { email: '', name: '', phone: '', type: '', count: 0 }
      }))

      superagent.post(baseURl, formData)
        .then(res => {
          const state = this.state || {}
          const list = this.state.list || this.props.list || []
          debugger;
          this.setState(Object.assign({}, state, {
            list: [res.body.registration].concat(list)
          }))
        })
        .catch(error => console.error(error.stack))
    }
  }

  render () {
    const list = this.state.list || this.props.list
    const { formData } = this.state
    console.log(this.props.query)
    return (
      <div id="container">
      <h1>
        New Book
      </h1>
      <div id="input-registration">
        <form onSubmit={this.add()}>
          <input
            type="text"
            onChange={this.setForm('name')}
            value={formData.name}
            placeholder="Name" />
          <input
            type="text"
            onChange={this.setForm('email')}
            value={formData.email}
            placeholder="Email" />
          <input
            type="text"
            onChange={this.setForm('phone')}
            value={formData.phone}
            placeholder="Phone" />
          <input
            type="text"
            onChange={this.setForm('type')}
            value={formData.type}
            placeholder="Ticket Type" />
          <input
            type="text"
            onChange={this.setForm('count')}
            value={formData.count}
            placeholder="Count" />
          <button disabled={this.isFormInvalid()}>Add</button>
        </form>
      </div>
        <h1>
          Registrations
        </h1>
        <div id="registrations">
          {list.length > 0 
          && <ul>
            {
              list.map(registration => (
                <div key={registration._id}>
                  <span className="remove" onClick={this.remove(registration._id)}>
                    &times;
                  </span>&nbsp;
                  <span className="description">
                    <i>{registration.name}</i> by {registration.email}
                  </span>
                  <span className="phone">{registration.phone}</span>
                  <span className="type">{registration.type}</span>
                  <span className="count">{registration.count}</span>
                </div>
              ))
            }
          </ul>}
        </div>
        <style jsx>{`
          div {
            font-family: 'Helvetica', 'sans-serif';
          }
          #container {
            width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          h1 {
            color: #ccbc1d;
          }
          button {
            background-color: #ff257b;
            color: #ffffff;
            font-weight: bold;
            border: 0px;
            border-radius: 2px;
            padding: 5px;
            padding-left: 8px;
            padding-right: 8px;
            margin: 5px;
          }
          input {
            padding: 5px;
            border: 0px;
            background-color: #f0f0f0;
            margin: 5px;
          }
          .description {
            position: relative;
            top: -0.2em;
          }
          .remove {
            cursor: pointer;
            color: #ff257b;
            font-size: 1.5em;
          }
        `}</style>
      </div>
    )
  }
}
