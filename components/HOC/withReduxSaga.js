import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import {END} from 'redux-saga'
//init Store
import initStore from '../Redux'
//rootSaga & sagaMiddleWare
import rootSaga from '../RootSaga.js'
import { sagaMiddleware } from '../Redux/CreateStore'

let clientTask = null

export default function reduxWrapper (ReduxComponent:Object) {
  class ReduxContainer extends Component {
    static async getInitialProps ({ store, req, isServer }) {
      //check if it's on server or not, otherwise you will dispatch everytime you change route
      if (isServer) {
        const rootTask = sagaMiddleware.run(rootSaga)
        //dispatch for fetching initial data
        store.dispatch(CategoryActions.categoryServer())
        //end the task 
        store.dispatch(END)
        //await for task to complete then display 
        await rootTask.done.then(() => {
          return
        })
      } else {
        return
      }
    }

    constructor (props:any) {
      super(props)
      //start saga monitor for client side check whether clientTask is running
      if (!clientTask) {
        clientTask = sagaMiddleware.run(rootSaga)
      }
    }

    render () {
      return (
        <ReduxComponent {...this.props} />
      )
    }
  }
  return withRedux(initStore)(ReduxContainer)
}
