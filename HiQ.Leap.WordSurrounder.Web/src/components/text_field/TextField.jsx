import axios from 'axios'
import React, { useEffect } from 'react'
const processFile = (file) => {
  file.text()
  .then((res) =>
    axios.post('https://localhost:5001', JSON.stringify({ text: res }), {headers: {'Content-Type': 'application/json'}})
    .then((response) => {
      document.getElementById('showText').innerHTML = response.data.text
      document.getElementById('uploadText').innerHTML = 'Success!'
    })
    .catch((error) => {
      document.getElementById('showText').innerHTML = error
      document.getElementById('uploadText').innerHTML = 'Failure'
    })
  )
}

const TextField = (props) => {
  useEffect(()=>{
    if (props.uploadedFile !== null) {
      processFile(props.uploadedFile)
    }
  },[props.uploadedFile])
  return (
    <pre data-testid = "showText" id="showText" align="center">
      Processed text will be printed here!
    </pre>
  )
}
export default TextField
