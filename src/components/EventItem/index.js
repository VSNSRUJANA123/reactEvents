import './index.css'

const EventItem = props => {
  const {items, displayEventId} = props
  const {id, imageUrl, name, location, registrationStatus} = items
  const eventImg = () => {
    displayEventId(id)
  }
  return (
    <li key={id} className="eventList">
      <button>
        <img src={imageUrl} alt="event" onClick={eventImg} />
      </button>
      <h1>{name}</h1>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
