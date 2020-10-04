import React from "react";
class AddDeleteClassComponent extends React.Component {
    state = {
        inputValue: "",
        name: "",
        mobile: "",
        lists: []
    }
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
                name: this.state.name,
                mobile: this.state.mobile
            }]
        })
    }
    deleteInputValue(id) {
        this.setState(this.state.lists.splice(id, 1));

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
                    {this.state.lists.map((list, id) => (
                        <ul>
                            <li key={id}>
                                {list.name}
                                {list.mobile}
                                <button onClick={() => this.deleteInputValue(id)}>DELETE</button>
                            </li>
                        </ul>
                    )
                    )
                    }
                </div>
            </div>
        )
    }

}
export default AddDeleteClassComponent;