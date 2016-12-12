import React, {Component} from 'react';
import CheckList from './CheckList';
import marked from 'marked';

class Card extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }

    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
              <div className="card__details">
                  <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                  <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
              </div>
            );
        }

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };
        // let cardTitleClassName;
        // if (this.state.showDetails) {
        //     cardTitleClassName = "card__title--is-open";
        // } else {
        //     cardTitleClassName = "card__title";
        // }
        return (
            <div className="card">
                <div style={sideColor}/>
                <div className="card__title" onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
                {cardDetails}
            </div>

            /* 삼항식
             <div className="card">
                 <div className={this.state.showDetails? "card__title--is-open" : "card__title"} onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
                 {cardDetails}
             </div>
            */

            /* 조건문 버전
            <div className="card">
                <div className={cardTitleClassName} onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
                {cardDetails}
            </div>
            */
        );
    }
}

export default Card;