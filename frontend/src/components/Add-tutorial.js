import React, { Component } from 'react'
import TutorialDataService from '../services/Tutorial'

export default class AddTutorial extends Component {
  constructor (props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.saveTutorial = this.saveTutorial.bind(this)
    this.newTutorial = this.newTutorial.bind(this)
    this.state = {
      id: null,
      title: '',
      description: '',
      published: '',
      submitted: false
    }
  }

  onChangeTitle (e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDescription (e) {
    this.setState({
      description: e.target.value
    })
  }

  saveTutorial () {
    var data = {
      title: this.state.title,
      description: this.state.description
    }

    TutorialDataService.create(data).then(response => {
      this.setState({
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
        published: response.data.published,
        submitted: true
      })
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }

  newTutorial () {
    this.setState({
      id: null,
      title: '',
      description: '',
      published: false,
      submitted: false
    })
  }

  render () {
    return (
      <div>
        {this.state.submitted ? (
          <div>
            <h4>Tus cargas exitosas</h4>
            <button onClick={this.newTutorial}>add</button>
          </div>
        ) : (
          <div>
            <div>
              <input
                type='text'
                id='title'
                name='title'
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
            </div>
            <div>
              <input
                type='text'
                id='description'
                name='description'
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
            <button onClick={this.saveTutorial}>Enviar</button>
          </div>
        )}
      </div>
    )
  }
}