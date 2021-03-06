import React, { Component } from 'react'
import { Text, TouchableOpacity ,StyleSheet} from 'react-native'

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.whenPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}> {this.props.children} </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        alignSelf:'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: "600",
        paddingBottom: 10,
        paddingTop: 10,
    },
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor:"#fff",
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        borderColor: "blue",
    }
})