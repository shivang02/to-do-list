import React from "react"

class List extends React.Component {
    constructor(props){
        super(props);
    } 

    ListCheck = () => {
        const strikeMe = document.getElementById(this.props.listId);
        const checkMe = document.getElementById(this.props.checkId)
        if(!strikeMe.classList.contains("strike")){
            checkMe.checked=true;
            strikeMe.classList.add("strike");
        }
        else{
            checkMe.checked = false;
            strikeMe.classList.remove("strike");
        }
    }

    render() {
        return (
            <div className="list-item">
                <div>
                    <input type="checkbox" onClick={this.ListCheck} id={this.props.checkId}/>
                </div>
                <div id={this.props.listId} onClick={this.ListCheck}>
                    {this.props.value}
                </div>
            </div>
        );
    }
}
export default List