

const redux=require('redux')

// second Redux Concept - reducer function

const counterReducer = (state={counter:0}, action)=>{

    if (action.type==='increment'){
        
        return {counter:state.counter+1}
    }

    if (action.type==='decrement'){
        return {
            counter:state.counter-1
        }
    }

    return state

}

//first Redux Concept

const store = redux.createStore(counterReducer)

//subscriber function/ Component / action creator
const counterSubscriber = ()=>{

    const latestState=store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})