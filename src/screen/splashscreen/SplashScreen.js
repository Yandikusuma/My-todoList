import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';



const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
               <View>
                   <Image 
                    style={styles.media}
                    source={ require('../../../asset/undraw_events_2p66.png')}
                   />
               </View>
               <View style={styles.textView}>
                   <Text style={styles.text}>
                       Welcome To MyTodoList
                   </Text>
                   <Text style={styles.text2}>
                       Whats going to happen tommorrow?
                   </Text>
               </View>
               <View style={styles.viewButton}>
                   <TouchableOpacity style={styles.button}>
                       <Text style={styles.textStarted}>
                           Get Started
                       </Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.buttonLogin}>
                       <Text style={styles.textLogin}>
                           Login
                       </Text>
                   </TouchableOpacity>
               </View>
            </View>
        </View>
    )
}


export default SplashScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    media: {
        width: 300,
        height: 300,
        marginTop: 40
    },
    textView: {
        marginTop: 40,
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    text2: {
        fontSize: 18,
        color: 'grey'
    },
    viewButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: 'red',
        width: '100%',
        height: '35%'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: 300,
        height: 40,
        borderRadius: 4
    },
    buttonLogin: {
        marginTop: 10
    },
    textLogin: {
        fontSize: 18,
        color: '#fff'
    },
    textStarted: {
        fontSize: 18
    }
})