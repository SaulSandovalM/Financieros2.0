import React, { Component } from 'react'
import TutorialDataService from '../services/Tutorial'
import { Link } from 'react-router-dom'

export default class TutorialList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ''
    }
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this)
    this.retrieveTutorials = this.retrieveTutorials.bind(this)
    this.refreshList = this.refreshList.bind(this)
    this.setActivateTutorial = this.setActivateTutorial.bind(this)
    this.removeTutorials = this.removeTutorials.bind(this)
    this.searchTitle = this.searchTitle.bind(this)
  }

  componentDidMount () {
    this.retrieveTutorials()
  }

  onChangeSearchTitle (e) {
    const searchTitle = e.target.value

    this.setState({
      searchTitle: searchTitle
    })
  }

  retrieveTutorials () {
    TutorialDataService.getAll().then(response => {
      this.setState({
        tutorials: response.data
      })
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }

  refreshList () {
    this.retrieveTutorials()
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    })
  }

  setActivateTutorial (tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    })
  }

  removeTutorials () {
    TutorialDataService.deleteAll().then(response => {
      console.log(response.data)
      this.refreshList()
    }).catch(e => {
      console.log(e)
    })
  }

  searchTitle () {
    TutorialDataService.findByTitle(this.state.searchTitle).then(response => {
      this.setState({
        tutorials: response.data
      })
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }

  render () {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state
    return (
      <div>
        <div>
          <div>
            <input
              type='text'
              placeholder='Buscar'
              value={searchTitle}
              onChange={this.onChangeSearchTitle.bind(this)}
            />
            <div>
              <button onClick={this.searchTitle}>Buscar</button>
            </div>
          </div>
        </div>
        <div>
          <h4>Tutoriales lista</h4>
          <ul>
            {tutorials && tutorials.map((tutorial, index) => (
              <li
                className={'prueba' + (index === currentIndex ? 'active' : '')}
                onClick={() => this.setActivateTutorial(tutorial, index)} key={index}
              >
                {tutorial.title}
              </li>
            ))}
          </ul>
          <button onClick={this.removeTutorials}>Remover todo</button>
        </div>
        <div>
          {currentTutorial ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Titulo</strong>
                </label>
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Description</strong>
                </label>
                {currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Status</strong>
                </label>
                {currentTutorial.published ? 'Publicado' : 'Pendiente'}
              </div>
              <Link to={'/tutorials/' + currentTutorial.id}>
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Por favor presione un tutorial</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
