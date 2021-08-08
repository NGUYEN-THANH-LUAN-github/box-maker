import React, { useState } from 'react'
import styled from 'styled-components'
import { getRandomColor, getRandomDimension } from '../utils/helpers'

const NewBoxFormWrapper = styled.form`
  margin: 20px;
  width: 400px;
`
const InputGroup = styled.div`
  margin: 10px;
`
const Label = styled.label`
  display: inline-block;
  width: 40%;
`
const Input = styled.input`
  padding: 5px;
  width: 60%;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  display: inline-block;
  padding: 3px;
  margin: 5px;
`

export default function NewBoxForm({ addBox }) {
  const [properties, setProperties] = useState({
    backgroundColor: '',
    height: '',
    width: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setProperties(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    addBox(properties)
  }

  const handleClick = e => {
    e.preventDefault()
    const randomBox = {
      backgroundColor: getRandomColor(),
      height: getRandomDimension(),
      width: getRandomDimension(),
    }
    setProperties(randomBox)
    addBox(randomBox)
  }

  return (
    <NewBoxFormWrapper onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor='background-color'>Background Color</Label>
        <Input
          type='text'
          id='background-color'
          name='backgroundColor'
          value={properties.backgroundColor}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor='width'>Width</Label>
        <Input
          type='text'
          id='width'
          name='width'
          value={properties.width}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor='height'>Height</Label>
        <Input
          type='text'
          id='height'
          name='height'
          value={properties.height}
          onChange={handleChange}
        />
      </InputGroup>
      <ButtonContainer>
        <Button>Add Box!</Button>
        <Button onClick={handleClick}>Add random Box!</Button>
      </ButtonContainer>
    </NewBoxFormWrapper>
  )
}
