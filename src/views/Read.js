import React, { Component } from 'react';
import '../assets/css/read.css'
import axios from 'axios'
class Read extends Component {
    constructor(){
        super()
        this.state = {
            list:[]
        }
    }
    getData = () => {
        var url = "https://www.apiopen.top/satinGodApi?type=1&page=1"

        axios.get(url).then((res) => {
            console.log(res)
            this.setState({
                list:res.data.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        this.getData()
    }
    render() {
        return (
            <div>
            <ul className="list">
              {
                  this.state.list.map((val,key) => {
                      return (
                          <li key={key}>
                            
                            <div className="header">
                              <img src={val.header} />
                              <p>{val.username}</p>
                              <span>{val.passtime}</span>
                              <p>{val.text}</p>
                            </div>
                            <video src={val.video} controls></video>
                            
                          </li>
                      )
                  })
              }
            </ul>
            </div>
        );
    }
}

export default Read;