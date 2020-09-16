import React, { useEffect } from 'react';
import axios from 'axios';

export default function Education() {
  useEffect(() => {
    axios.get("http://universities.hipolabs.com/search?")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  })
  return (
    <div className="education"></div>
  )
}
