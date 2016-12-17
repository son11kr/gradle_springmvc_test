import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
import update from 'react-addons-update';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};

class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards : []
        };
    }

    addTask(cardId, taskName) {
        let prevState = this.state;

        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

        let newTask = {id:Date.now(), name:taskName, done:false};

        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$push: [newTask]}
            }
        });

        this.setState({cards:nextState});
        console.log("addTask");
        console.log("cardId: " + cardId);

        fetch(API_URL + '/cards/' + JSON.stringify({cardId}) + '/tasks', {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Server respose wasn't OK");
                }
            })
            .then((responseData) => {
                newTask.id = responseData.id
                this.setState({cards:nextState});
            })
            .catch((error) => {
                this.setState(prevState);
            })
    }

    deleteTask(cardId, taskId, taskIndex) {
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);

        let prevState = this.state;

        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$splice: [[taskIndex, 1]] }
            }
        });

        this.setState({cards:nextState});

        console.log("deleteTask");
        console.log("cardId: " + cardId);
        console.log("taskId: " + taskId);

        fetch(API_URL + '/cards/' + {cardId} + '/tasks/' + JSON.stringify({taskId}), {
            method: 'delete',
            headers: API_HEADERS
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Serverr response wasn't OK");
                }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                this.setState(prevState);
            })
    }

    toggleTask(cardId, taskId, taskIndex) {
        let prevState = this.state;

        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

        let newDoneValue;

        let nextState = update(this.state.cards, {
            [cardIndex] : {
                tasks: {
                    [taskIndex] : {
                        done: { $apply: (done) => {
                            newDoneValue = !done;
                            return newDoneValue;
                        }}
                    }
                }
            }
        });

        this.setState({cards:nextState});

        console.log("toggleTask");
        console.log("cardId: " + cardId);
        console.log("taskId: " + taskId);

        fetch(API_URL + '/cards/' + {cardId} + '/tasks/' + {taskId}, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({done:newDoneValue})
        })
            .then((response) => {
                if (response.ok) {
                    throw new Error("Server response wasn't OK");
                }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                this.setState(prevState);
            });
    }

    consoleTask(taskName){
        console.log(taskName);
    }

    componentDidMount() {
        fetch(API_URL+'/cards', {headers: API_HEADERS})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({cards : responseData});
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return <KanbanBoard cards={this.state.cards}
            taskCallbacks={{
            toggle: this.toggleTask.bind(this),
            delete: this.deleteTask.bind(this),
            add: this.addTask.bind(this),
            console: this.consoleTask.bind(this)
            }} />
    }
}

export default KanbanBoardContainer;