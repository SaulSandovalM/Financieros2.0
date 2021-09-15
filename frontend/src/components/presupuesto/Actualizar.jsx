import React, { useState, useEffect } from 'react'
import PresupuestoDataService from '../../services/Presupuesto'
import { Link } from 'react-router-dom'

export default function Actualizar (props) {
  const [presupuesto, setPresupuesto] = useState([])
  const [currentPartida, setCurrentPartida] = useState(null)

  useEffect(() => {
    PresupuestoDataService.getAll().then(response => {
      setPresupuesto(response.data)
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  const setActivePartida = (partida, index) => {
    console.log(partida)
    setCurrentPartida(partida)
    console.log('Entre a la funcion')
  }

  return (
    <div>
      Actualizar
      {presupuesto && 
        presupuesto.map((partida, index) => (
          <div key={index} onClick={() => setActivePartida(partida, index)}>
            {partida.ogasto}
          </div>
      ))}

      { currentPartida ? (
          <div>
            <Link to={'/presupuesto/' + currentPartida.id}>
              Editar
            </Link>
          </div>
      ) : (
        <div>
          Por favor presiona algun presupuesto
        </div>
      )
      }
    </div>
  )
}
