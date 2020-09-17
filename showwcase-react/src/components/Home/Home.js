import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './home.css'

export default function Home() {
  const [name, setName] = useState("")
  const history = useHistory()
  return (
    <form className="home-form" onSubmit={(event) => {
      event.preventDefault()
    }}>
      <label htmlFor="yourName">Type your name and click "Enter" below to begin!</label>
      <input
        id="yourName"
        name="yourName"
        placeholder="Your name"
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
      <Button className="home-button" onClick={() => history.push('/main')}>Enter</Button>
    </form>
  )
}
