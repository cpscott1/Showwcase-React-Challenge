import React from 'react';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <form>
      <label htmlFor="yourName">Type your name and click "Enter" below to begin!</label>
      <input
        name="yourName"
        placeholder="Your name"
      />
      <Button>Enter</Button>
    </form>
  )
}
