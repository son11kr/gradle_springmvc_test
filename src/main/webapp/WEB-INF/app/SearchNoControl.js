import React, {Component} from 'react';

class SearchNoControl extends Component {

    handleChange(event) {
        console.log("Submitted values are: ",
        event.target.name.value,
        event.target.email.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleChange}>
                <div>
                    Name: <input name="name" type="text" />
                </div>
                <div>
                    E-mail: <input name="email" type="mail"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SearchNoControl;