import React from "react";
import ListDelete from "./ListDelete";
class AddDeleteClassComponent extends React.Component {
    state = {
        inputValue: "",
        name: "",
        mobile: "",
        lists: []
    }
    id= 0
    handleChange = (event) => {
        this.setState({ inputValue: event.target.value })

    }
    addInputName = (event) => {
        this.setState({ name: event.target.value })
    }
    addInputMobile = (event) => {
        this.setState({ mobile: event.target.value })
    }
    addInputValue = () => {
         this.setState({
            lists: [...this.state.lists,
            {
                id: this.id + 1,
                name: this.state.name,
                mobile: this.state.mobile
            }]
        });
        this.id = this.id+1;
    }

    deleteInputValue = (id) => {
        this.setState({ lists: this.state.lists.filter(list => list.id !== id) });
    }
    render() {
        return (
            <div>
                <h1>Hello Class Component</h1>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
                <p>{this.state.inputValue}</p>
                <label>
                    Name:
    <input type="text" value={this.state.name} onChange={this.addInputName} />
                </label>
                <label>
                    Mobile:
    <input type="text" value={this.state.mobile} onChange={this.addInputMobile} />
                </label>
                <button onClick={this.addInputValue}>ADD</button>
                <div>
                    {this.state.lists.map((list) => (
                        <ListDelete
                            key={list.id}
                            list={list}
                            deleteInputValue = {this.deleteInputValue} />
                    )
                    )
                    }
                </div>
            </div>
        )
    }

}
export default AddDeleteClassComponent;