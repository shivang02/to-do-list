import React, { Component } from 'react'

class SavedList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mylists: Object.keys(localStorage),
            refresh: false
        }
    }
    componentDidMount() {
        this.setState({ mylists: Object.keys(localStorage) });
    }

    UpdateMyList = value => {
        if (value) {
            this.setState({
                mylists: Object.keys(localStorage),
                refresh: false
            })
        }
    }

    render() {
        return (
            this.state.mylists.map((elem, idx) => {
                return (
                    <div key={idx} id={idx} className="saved-list" onClick={this.RetrieveList}>
                        {elem}
                    </div>
                )
            })
        )
    }
}

export default SavedList
