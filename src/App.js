import React, { useState } from 'react'
import './App.css';

// Fitur state Hooks
// Import Hooksnya dengan useState

const App = () => {

  const [angka, setAngka] = useState(0) // isi defaultnya 0

  const [text, setText] = useState("") // initial state ""

  const [arr, setArr] = useState([
    {
      id: 1,
      title: 'This is title'
    }
  ])

  const [obj, setObj] = useState({
    name: 'ini objek'
  })

  const add = () => {
    setAngka(angka + 1)
  }

  const kurang = () => {
    setAngka(angka - 1)
  }

  return (
    <div>
      <h1>{ angka }</h1>

      <button onClick={ add }>Tambah</button>
      <button onClick={ kurang }>Kurang</button>
    </div>
  );
}

export default App;
