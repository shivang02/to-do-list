import React from "react"
import List from './List'

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            ItemVal : []
        }
    }
    
    ClickHandler = () => {
        console.log(this.state.ItemVal);
        return (this.state.ItemVal).push([document.getElementById("input-box").value]);
        
    };
    
    
    render() {
        return (
            <div>
            <div className="input-container">
            <input className="list-input" placeholder="Enter List Item" id="input-box"></input>
                <button type="submit" className="list-submit-button" onClick={this.ClickHandler}>Add Note</button>
            </div>
            <div className="full-list">
                <List value={"hello12"} />
            </div>
        </div>
        )
    }
}
export default InputBox 