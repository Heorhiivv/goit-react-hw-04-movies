import React from 'react';

const Cast = ({persons}) => {
  return(
    <ul>
        {persons.map((person) => {
          return  (
          <>
            <li key={person.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                alt="There is no poster avalible"
                width="120"
              />
              <p>{person.name}</p>
              <p>
                <b>Character:</b> {person.character}
              </p>
            </li>
          </>
          )
        })}
      </ul>   
  )
}
export default Cast;