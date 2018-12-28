import React from 'react'
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import styles from '../styles/ListItem'
import * as actions from '../actions'

class ListItem extends React.Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  render() {
    const { item } = this.props.library
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(item.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {item.title}
            </Text>
          </CardSection>
          {this.props.expanded &&
            <CardSection>
              <Text>{item.description}</Text>
            </CardSection>}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state, { library }) => ({
  expanded: state.selectedLibraryId === library.item.id
})

export default connect(mapStateToProps, actions)(ListItem)