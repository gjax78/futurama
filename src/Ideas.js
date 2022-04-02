import React from 'react'
import './Ideas.css'
import IdeaCard from './ideaCard'

const Ideas = ({ideas, deleteIdea}) => {
  const ideaCards = ideas.map(idea => {
    return (
      <div className='ideas-container'>
        <IdeaCard
          name={idea.Name}
          species={idea.Species}
          planet={idea.Planet}
          picURL={idea.PicUrl}
          id={idea.PicUrl.slice(-3)}
          age={idea.Age}
          profession={idea.Profession}
          status={idea.Status}
          key={idea.id}
          deleteIdea={deleteIdea}
        />
      </div>
    )
  })


  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas
