import React, { useState } from 'react'

export default function Nama(props) {
    const [namadepan, setnamadepan] = useState("");
  const [namabelakang, setnamabelakang] = useState("");
  const [fullnama, setfullnama] = useState("");
  const displayFull= ()=>{
      setfullnama(namadepan +" "+namabelakang)
  }
  return (
    <div>
      <h1>{props.nama}</h1>
      <div>
      <label>nama depan : </label><input type="text" onChange={(e)=> setnamadepan(e.target.value)}/>
      </div>
      <div>
      <label>nama depan : </label><input type="text" onChange={(e)=> setnamabelakang(e.target.value)}/>
      </div>
      <button onClick={displayFull}>ok</button>
      <h1>nama lengkap : {fullnama}</h1>
    </div>
  );
}
