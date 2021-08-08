import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
  min-width: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
`
const BoxWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 5px;
`
const Icon = styled.i`
  background-color: #f1f1f1;
  padding: 5px;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
  }
`

export default function Box({ height, width, backgroundColor, id, removeBox }) {
  const handleClick = e => {
    removeBox(e.target.id)
  }
  return (
    <BoxContainer>
      <BoxWrapper
        height={height}
        width={width}
        backgroundColor={backgroundColor}
      ></BoxWrapper>
      <Icon className='far fa-trash-alt' onClick={handleClick} id={id}></Icon>
    </BoxContainer>
  )
}
