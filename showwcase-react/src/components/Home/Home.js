import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './home.css'

export default function Home() {
  const history = useHistory()
  return (
    <form className="home-form">
      <label htmlFor="yourName">Type your name and click "Enter" below to begin!</label>
      <input
        name="yourName"
        placeholder="Your name"
      />
      <Button className="home-button" onClick={() => history.push('/main')}>Enter</Button>
    </form>
  )
}
