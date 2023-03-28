import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars, reviews }) => {
  const starsArray = [1, 2, 3, 4, 5]
  console.log(stars)
  return <Wrapper>
    <div className="stars">{starsArray.map((idx) => {
      if (idx <= stars) {
        return <span key={idx}><BsStarFill /></span>
      } else if (idx - 0.5 <= stars){
        return <span key={idx}><BsStarHalf /></span>
      } else {
        return <span key={idx}><BsStar /></span>
      }
    })}</div>
    <p className='reviews'>({reviews} customer reviews)</p>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
