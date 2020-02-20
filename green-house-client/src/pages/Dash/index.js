import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const Dash = props => {
  const [data, setData] = useState([])

  async function fetchAPI() {
    let response = await axios({
      method: 'get',
      url: 'http://localhost:4200/get',
      headers: {
        Authorization: props.token
      }
    })
    setData(response.data)
  }
  setInterval(() => {
    fetchAPI()
  }, 3000)

  if (data !== undefined || data !== []) {
    console.log(data)
    return (
      <div>
        <table>
          <tr>
            <th>Plant id</th>
            <th>Temperature</th>
            <th>Wetness</th>
          </tr>

          {data.map((item, i) => {
            console.log('item', item)
            console.log(i)
            return (
              <tr>
                <td key={i}>{item.plant_id}</td>
                <td key={i + 'temperature'}>{item.temperature}</td>
                <td key={i + 'wetness'}>{item.wetness}</td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  } else {
    return <div>loading</div>
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps)(Dash)

//' http://10.5.7.166:4200/get'
