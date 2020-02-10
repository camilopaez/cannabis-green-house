import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Dash = () => {
  const [data, setData] = useState({ plants: [] })

  useEffect(async () => {
    const result = await axios('http://192.168.18.42:4200/get')
    setData(result.data)
  }, [])

  return <ul>{console.log(data)}</ul>
}
