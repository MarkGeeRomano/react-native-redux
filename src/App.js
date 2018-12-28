import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header>Redux</Header>
          <LibraryList/>
        </View>
      </Provider>
    )
  }
}

export default App