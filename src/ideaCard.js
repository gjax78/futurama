import React from 'react'
import './ideaCard.css'

const IdeaCard = ({ age, profession, status, planet, name, species, id, picURL, deleteIdea }) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <img src={picURL} />
      <h4><u>Species:</u> {species}</h4>
      <h4><u>Planet:</u> {planet}</h4>
      <h4><u>Age:</u> {age}</h4>
      <h4><u>Profession:</u> {profession}</h4>
      <h4><u>Status:</u> {status}</h4>
      <button onClick={() => deleteIdea(id)}>Trash</button>
    </div>
  )
}

export default IdeaCard
