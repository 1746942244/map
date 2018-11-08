import React, { Component } from 'react';
import '../assets/css/weather.css'
import axios from 'axios'
import Index from './Index'
export default class Weather extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            defaultPlay:true
        }
    }
    changePlay(){
        this.setState({
            defaultPlay:!this.state.defaultPlay
        })
    }
 getData = () => {
     var url="https://www.apiopen.top/weatherApi?city=%E6%AD%A6%E6%B1%89"
 
     axios.get(url).then((res) => {
         console.log(res)
         this.setState({
             list:res.data.data.forecast
         })
     })
 }
 
 
 componentWillMount() {
     this.getData()
     
   }
     render() {
            let styleObj = {
                display:this.state.defaultPlay ? 'block' : 'none'
            }
         return (
             <div>
               <Index/>
               <ul className="weather">
              
                   {
                       this.state.list.map((val,key) => {
                          return(
                            <li key={key} style={styleObj} onClick={this.changePlay.bind(this)}>
                                <p>{val.date}</p>
                                <p>{val.fengxiang}</p>
                                <p>{val.high}</p>
                                <p>{val.low}</p>
                                <p>{val.type}</p> 
                            </li>
                            
                          ) 
                       })
                   }
               </ul>
             </div>
         );
     }
}
