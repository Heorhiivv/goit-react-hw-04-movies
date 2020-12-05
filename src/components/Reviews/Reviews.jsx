import React from 'react';

const Reviews = ({reviews}) => {
  return(
    <ul>
    {reviews.map((el) => {
      return  (
      <>
        <li key={el.id}>
          <p>{el.author}</p>
          <p>{el.content} </p>
        </li>
      </>
      )
    })}
  </ul>     
  )
}
export default Reviews;