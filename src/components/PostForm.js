import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPost, showWarning} from "../redux/actions";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state
        if (title) {
            const newPost = {
                title,
                id: Date.now().toString()
            }
            this.props.createPost(newPost)
        } else {
            this.props.showWarning('title does not be empty')
        }
        this.setState({title: ''})
    }

    onInput = event => {
        this.setState(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Title post</label>
                        <input type="text"
                               id="title"
                               className="form-control"
                               value={this.state.title}
                               name="title"
                               onChange={this.onInput}
                        />
                    </div>
                    <button className="btn btn-success" type="submit">Create</button>
                </form>
                {this.props.isWarning &&
                    <div className="alert alert-danger" role="alert">{this.props.isWarning}</div>}</>
        );
    }
}

const mapDispatchToProps = {
    createPost,
    showWarning
}

const mapStateToProps = state => ({isWarning: state.app.warning})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);