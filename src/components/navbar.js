import React,{Component} from "react";

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state  = {

        }
    }
    render(){
        return(
            <div
            style ={{width: '100%', padding:'0px', margin:'0px',paddingTop:'10px', paddingLeft: '10px',  background:  'rgb(50, 81, 237)', height: '55px'}}>

            
            <span style ={{color:'white',  fontSize: '34px'}}>Weather App</span>
            </div>
            );
    }

}
export default NavBar;