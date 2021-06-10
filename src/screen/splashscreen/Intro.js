import React, { Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('SplashScreen')
        }, 3000);
    }



    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}> Welcome to MyTodoList</Text>
                </View>
            </View>
        )
    }
}

export default Intro


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
})