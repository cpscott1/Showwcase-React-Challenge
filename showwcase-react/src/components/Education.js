import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Education() {
  const [education, setEducation] = useState([])
  useEffect(() => {
    axios.get("http://universities.hipolabs.com/search?name=Middle")
    .then(response => {
      console.log(response.data)
      setEducation(response.data)
    })
    .catch(error => console.log(error))
  }, [])
  return (
    <div className="education">
      {education.map(education => <p>{education.name}</p>)}
    </div>
  )
}
