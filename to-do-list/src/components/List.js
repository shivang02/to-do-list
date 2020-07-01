import React from "react"

class List extends React.Component {
    constructor(props){
        super(props);
    } 
    render() {
        return (
            <div className="list-item">
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    {this.props.value}
                </div>
            </div>
        );
    }
}
export default List