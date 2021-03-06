import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export default class CardSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position:'relative',
    }
})