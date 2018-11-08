import React, { Component } from 'react';

class Index extends Component {
    componentDidMount(){
        console.log(window)
        const {BMap,BMAP_STATUS_SUCCESS} = window
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
    
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                alert('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
                alert('failed'+this.getStatus());
            }
            var local = new BMap.LocalSearch(map, {
                renderOptions:{map: map}
            });
            local.search("殡仪馆");        
      },{enableHighAccuracy: true})
      
      }
    render() {
        return (
            <div>
            <div id="allmap" style={{position: "absolute", top : 0, left:0,width:'100vw',height:'90vh',}}></div> 
            </div>
        );
    }
}

export default Index;