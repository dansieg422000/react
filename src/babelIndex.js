import C from './constants';
import { skiDay } from './store/reducers'

const state = 10

const action = {
    type: C.SET_GOAL,
    payload: {
        "resort": "Heavenly",
        "date": "2019-08-27",
        "powder": true,
        "backcountry": false
    }
}

const nextState = skiDay(state, action)

console.log(`
    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${nextState}
`);