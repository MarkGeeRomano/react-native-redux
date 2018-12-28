import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends React.Component {
  renderItem(library) {
    return <ListItem library={library}/>
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.title}
      />
    ) 
  }
}

const mapStateToProps = (state) => ({
  libraries: state.libraries
})
export default connect(mapStateToProps)(LibraryList)