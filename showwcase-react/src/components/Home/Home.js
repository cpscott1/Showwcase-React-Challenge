import React from 'react';
import { Button } from 'reactstrap';
import './home.css'

export default function Home() {
  return (
    <form className="home-form">
      <label htmlFor="yourName">Type your name and click "Enter" below to begin!</label>
      <input
        name="yourName"
        placeholder="Your name"
      />
      <Button className="home-button">Enter</Button>
    </form>
  )
}
