import AppDispatcher from './AppDispatcher'
import {Store} from 'flux/utils';
import bankConstants from './constants';

let balance = 0;

class NewBankBalanceStore extends Store {
    getState() {
        return balance;
    }

    __onDispatch(action) {
        switch(action.type) {
            case bankConstants.CREATED_ACCOUNT:
                balance = 0;
                this.__emitChange();
                break;
            case bankConstants.DEPOSITED_INTO_ACCOUNT:
                balance = balance + action.amount;
                this.__emitChange();
                break;
            case bankConstants.WITHDREW_FROM_ACCOUNT:
                balance = balance - action.amount;
                this.__emitChange();
                break;
        }
    }
}
export default new NewBankBalanceStore(AppDispatcher);