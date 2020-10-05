import React from "react";



class ListDelete extends React.Component {  
    render() {
        return (
            <div>
                <ul>
                    <li key={this.props.id}>
                        {this.props.list.name}
                        {this.props.list.mobile}
                        <button onClick={() => {
                            this.props.deleteInputValue(this.props.list.id)
                        }}>DELETE</button>
                    </li>
                </ul>
            </div>


        );
    }
}

export default ListDelete;


