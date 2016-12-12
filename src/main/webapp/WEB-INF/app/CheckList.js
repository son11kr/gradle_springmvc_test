import React, {Component} from 'react';
import FocusText from './FocusText';
import Search from './Search';
import SearchNoControl from'./SearchNoControl'

class CheckList extends Component {
    // render() {
    //     let tasks = this.props.tasks.map((task) => (
    //         <li className="checklist__task">
    //             <input type="checkbox" defaultChecked={task.done} />
    //             {task.name}
    //             <a href="#" className="check__task--remove"/>
    //         </li>
    //     ));
    //
    //     return (
    //         <div className="checklist">
    //             <ul>{tasks}</ul>
    //         </div>
    //     );
    // }

    render() {
        let tasks = this.props.tasks.map((task) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="#" className="check__task--remove"/>
            </li>
        ));
        return (
          <div className="checklist">
              <ul>{tasks}</ul>
              <input type="text"
                     className="checklist--add-task"
                     placeholder="Type then hit Enter to add a task"/>
              <FocusText />
              <Search />
              <SearchNoControl />
          </div>
        )

    }
}

export default CheckList;