import './index.css'
import {Component} from 'react'

const eventStatus = {
  initial: 'INITIAL',
  yet_register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeStatus} = props

  const getInitial = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const yetRegistered = () => (
    <div className="register">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button>Register Here</button>
    </div>
  )

  const getRegistered = () => (
    <div className="register">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const getClosed = () => (
    <div className="register">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const getEventStatus = () => {
    switch (activeStatus) {
      case eventStatus.initial:
        return getInitial()
      case eventStatus.yet_register:
        return yetRegistered()
      case eventStatus.registered:
        return getRegistered()
      case eventStatus.closed:
        return getClosed()
      default:
        return null
    }
  }

  return <div className="activeContainer">{getEventStatus()}</div>
}

export default ActiveEventRegistrationDetails
