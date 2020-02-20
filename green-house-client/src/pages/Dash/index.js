import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const Dash = props => {
  const [data, setData] = useState({ plants: [] })

  async function fetchAPI() {
    let response = await axios({
      method: 'get',
      url: 'http://localhost:4200/get',
      headers: {
        Authorization: props.token
      }
    })
    setData(response)
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     fetchAPI()
  //   }, 1000)
  // }, [fetchAPI])

  return (
    <div>
      hola {console.log(data)}
      <button onClick={() => fetchAPI()}>asd</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps)(Dash)

//' http://10.5.7.166:4200/get'
