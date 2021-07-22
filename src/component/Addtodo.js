import React, { Component } from 'react'

export class Addtodo extends Component {

    state = {
        title: ""
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: "" });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" 
                name="title" 
                placeholder="Add new todo list.." 
                onChange={this.onChange}
                style={{flex: "10", padding: "5px"}}
                value={this.state.title}
                />
                <input type="submit" value="Submit" className="btn"/>
            </form>
        )
    }
}

export default Addtodo;
