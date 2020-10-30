import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'
import {styles} from './styles'
class Header extends Component {
    render() { 
        return ( 
            <View style={styles.MainContainer}>
                <Text style={styles.font}>{this.props.header}</Text>
            </View>
         );
    }
}
 
export default Header;