import React,{Component } from "react";
import { ReactPropTypes } from "react";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            cityName : null,
            
        }
        this.handleSearchInput = this.handleSearchInput.bind(this);

    }
    updatedCityname(e){
        this.setState({cityName : e.target.value})
    }
    handleSearchInput(){
        console.log('handleSearchInput');
        this.props.searchCity(this.state.cityName);

    }
    render(){
        return(
            <div 
            style = {{textAlign : 'center'}}>
                <input placeholder="Enter City Name...." value={this.state.cityName}
                style={{fontSize: '28px' ,width: '600px', background: '#FFFFFF', boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', border: '1px solid #E5E5E5', color: '#8C8C99' , boxSizing: 'border-box', borderRadius: '4px', padding: '5px'}}
                onChange={e=> this.updatedCityname(e)}/>
                <button onClick={this.handleSearchInput}
                style={{ background: '#3251ED', color: 'white', fontSize: '33px',cursor: 'pointer' , boxShadow: '0px 4px 32px rgba(143, 143, 143, 0.4)', borderRadius: '4px',}}
               
               >Search</button> </div>
        );
    }

}

SearchBar.ReactPropTypes={
    searchCity:ReactPropTypes.func
};
export default SearchBar;