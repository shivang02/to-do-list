import React from "react"
import List from './List'

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            ItemVal : []
        }
        this.ClickHandler = this.ClickHandler.bind(this);
        this.EnterCheck=this.EnterCheck.bind(this);
    }
    
    
    ClickHandler = () => {
        const str=document.getElementById("input-box").value;
        this.setState({ItemVal:this.state.ItemVal.concat(str)});
        document.getElementById("input-box").value="";
    };

    EnterCheck = (e)=>{
        if(e.key== 'Enter'){
            this.ClickHandler();
        }    
    }
    
    render() {
        
        const listItems = this.state.ItemVal.map((listVal,index) =>{
            return (
                <List value={listVal} />
            );
        })
        return (
            <div>
            <div className="input-container">
            <input className="list-input" placeholder="Enter List Item" id="input-box" onKeyDown={this.EnterCheck}></input>
                <button type="submit" id="submit-button" className="list-submit-button" onClick={() =>this.ClickHandler()}>Add Note</button>
            </div>
            <div className="full-list">
                {listItems}
            </div>
        </div>
        )
    }
}
export default InputBox 