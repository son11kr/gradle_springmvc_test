import AppDispatcher from'./AppDispatcher';
import bankConstants from'./constants';

let BankActions = {
    createAccount() {
        AppDispatcher.dispatcher({
            type: bankConstants.CREATED_ACCOUNT,
            amount: 0
        });
    },
    depositIntoAccount(amount) {
        AppDispatcher.dispatcher({
            type:bankConstants.DEPOSITED_INTO_ACCOUNT,
            amount: amount
        });
    },
    withdrawFromAccount(amount) {
        AppDispatcher.dispatcher({
            type:bankConstants.WITHDREW_FROM_ACCOUNT,
            amount: amount
        });
    }
};

export default BankActions;