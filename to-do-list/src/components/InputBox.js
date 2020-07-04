import React from "react"
import List from './List'

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            ItemVal : [],
            ListTitle: ''
        }
        
    }
    
    ClickHandler = () => {
        const str=document.getElementById("input-box").value;
        if(str!=''){
            this.setState({ItemVal:this.state.ItemVal.concat(str)});
            document.getElementById("input-box").value="";
        }
    }

    handleListTitle = (e) => {
        const lsname = e.target.value
        this.setState( {
            ListTitle: lsname
        })
    }

    ClearList = () => {
        if(this.state.ItemVal!=''){
            localStorage.setItem(this.state.ListTitle, this.state.ItemVal);
            this.setState({ ItemVal:[],ListTitle:'' });
            document.getElementById("input-box").value = "";
        }
    }

    EnterCheck = (e)=>{
        if(e.key== 'Enter'){
            this.ClickHandler();
        }    
    }
    


    render() {
        
        const listItems = this.state.ItemVal.map((listVal,index) =>{
            return (
                <List value={listVal} listId={`elem${index}`} checkId={`box${index}`}/>
            );
        })
        return (
            <div>
            <div className="input-container">
                <input className="list-input" placeholder="Enter List Item" id="input-box" onKeyDown={this.EnterCheck} autoFocus={true}></input>
                <button type="submit" id="submit-button" className="list-button" onClick={() =>this.ClickHandler()}>Add Note</button>
                <button type="submit" id="clear-button" className="list-button" onClick={() => this.ClearList()}>Clear List</button>
                <input className="list-input" placeholder="Enter List Title" id="list-title-box" value={this.state.ListTitle} onChange={this.handleListTitle}></input>
            </div>
            <div className="full-list">
                {listItems}
            </div>
        </div>
        )
    }
}
export default InputBox 