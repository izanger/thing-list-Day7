import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Thing.css'
import Actions from './Actions'

class Thing extends Component {
  componentDidMount() {
    if (!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }

  updateName = (ev) => {
    const { thing, saveThing } = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

  blurOnEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
  }

  changeChecked = (ev) => {
    const { thing, saveThing } = this.props
    thing.checked = !thing.checked
    saveThing(thing)
  }

  changeDate = (ev) => {
    const { thing, saveThing } = this.props
    thing.dueDate = ev.target.value
    saveThing(thing)
  }

  render() {
    const { thing, removeThing} = this.props

    return (
      <li className="Thing">
        <input type="checkbox" value="on" onChange={this.changeChecked} checked={thing.checked} />
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input}
          />
          <Actions thing={thing} removeThing={removeThing} />
        </div>
        <div className="details">
          <form>
            Due date: 
            <input className="date" type="date" name="due date" onChange={this.changeDate} value={thing.dueDate}/>
          </form>
        </div>
      </li>
    )
  }
}

export default Thing