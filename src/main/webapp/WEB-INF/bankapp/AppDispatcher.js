import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    dispatcher(action = {}) {
        console.log("Dispatched", action);
        super.dispatch(action);
    }

    dispatchAsync(promise, types, payload){
        const { request, succes, failure } = types;
        this.dispatch({ type: request, payload: Object.assign({}, payload) });
        promise.then(
            response => this.dispatch({
                type: success,
                payload: Object.assign({}, payload, { reponse })
            }),
            error => this.dispatch({
                type:failure,
                payload: Object.assign({}, payload, { error} )
            })
        );
    }
}

export default new AppDispatcher();
