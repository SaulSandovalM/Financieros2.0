import React, { Component } from 'react'
import TutorialDataService from '../services/Tutorial'

export default class Tutorial extends Component {
  constructor (props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.getTutorial = this.getTutorial.bind(this)
    this.updatePublished = this.updatePublished.bind(this)
    this.updateTutorial = this.updateTutorial.bind(this)
    this.deleteTutorial = this.deleteTutorial.bind(this)
    this.state = {
      currentTutorial: {
        id: null,
        title: '',
        description: '',
        published: false
      },
      message: ''
    }
  }

  componentDidMount () {
    this.getTutorial(this.props.match.params.id)
  }

  onChangeTitle (e) {
    const title = e.target.value
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        title: title
      }
    }))
  }

  onChangeDescription (e) {
    const description = e.target.value
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }))
  }

  getTutorial (id) {
    TutorialDataService.get(id).then(response => {
      this.setState({
        currentTutorial: response.data
      })
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }

  updatePublished (status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status
    }

    TutorialDataService.update(this.state.currentTutorial.id, data).then(response => {
      this.setState(prevState => ({
        currentTutorial: {
          ...prevState.currentTutorial,
          published: status
        }
      }))
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }

  updateTutorial () {
    console.log('Entre a update')
    TutorialDataService.update(this.state.currentTutorial.id, this.state.currentTutorial).then(response => {
      console.log(response.data)
      this.setState({
        message: 'Se ha actualizado'
      })
    }).catch(e => {
      console.log(e)
    })
  }

  deleteTutorial () {
    TutorialDataService.delete(this.state.currentTutorial.id).then(response => {
      console.log(response.data)
      this.props.history.push('/tutorials')
    }).catch(e => {
      console.log(e)
    })
  }

  render () {
    const { currentTutorial } = this.state

    return (
      <div>
        {currentTutorial ? (
          <div>
            <h4>Tutorial</h4>
            <form>
              <div>
                <input
                  type='text'
                  id='title'
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div>
                <input
                  type='text'
                  id='description'
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div>
                <label>
                  <strong>Status</strong>
                </label>
                {currentTutorial.published ? 'Publicado' : 'Pendiente'}
              </div>
            </form>
            {currentTutorial.published ? (
              <button onClick={() => this.updatePublished(false)}>UnPublish</button>
            ) : (
              <button onClick={() => this.updatePublished(true)}>Publish</button>
            )}
            <button onClick={() => this.deleteTutorial()}>Delete</button>
            <button type='submit' onClick={() => this.updateTutorial()}>Update</button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor presiona un tutorial</p>
          </div>
        )}
      </div>
    )
  }
}
