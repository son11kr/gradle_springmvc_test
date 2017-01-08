import React, {Component} from 'react';

class FocusText extends Component {
    handleClick() {
        console.log("asdf");
        // this.refs.myTextInput.focus();
        // this.refs.myTextInput.getDOMNode().focus();
        this.refs.myTextInput.findDOMNode().focus();


    }
    
    render() {
        return (
            <div>
                <input type="text" ref="myTextInput"/>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.handleClick.bind(this)}
                />
            </div>
        );
    }
}

export default FocusText;