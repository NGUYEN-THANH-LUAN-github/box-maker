import React, { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

const BoxesContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

export default function BoxList() {
  const [boxList, setBoxList] = useState([
    { backgroundColor: 'red', height: '120', width: '200', id: uuid() },
    { backgroundColor: 'blue', height: '100', width: '75', id: uuid() },
    { backgroundColor: 'orange', height: '175', width: '100', id: uuid() },
  ])
  const addBox = newBox => {
    setBoxList(prevState => [...prevState, { ...newBox, id: uuid() }])
  }
  const removeBox = id => {
    const newBoxList = boxList.filter(box => box.id !== id)
    setBoxList(newBoxList)
  }
  const renderBoxes = boxList.map(box => (
    <Box
      height={box.height}
      width={box.width}
      backgroundColor={box.backgroundColor}
      key={box.id}
      id={box.id}
      removeBox={removeBox}
    />
  ))

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <BoxesContainer>{renderBoxes}</BoxesContainer>
    </div>
  )
}
