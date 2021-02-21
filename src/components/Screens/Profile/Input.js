import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {getHeight, getWidth} from '../../../util/adaptivity';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Input = ({title, icon, ...props}) => {
    return(
        <View style={styles.inputContainer}>
            <View style={styles.title}>
                <Text style={styles.title__text}>{title}</Text>
            </View>
            <View style={styles.textInput}>
                <TextInput style={styles.textInput__input}/>
                {icon &&
                <TouchableOpacity style={styles.button}>
                    {icon}
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: getHeight(100)
    },
    title: {
        width: '100%',
        height: getHeight(50),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    title__text: {
        color: '#4e4949',
        fontSize: 16,
    },
    textInput: {
        width: '100%',
        position: 'relative',
        height: getHeight(50),
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textInput__input: {
        width: '70%',
        paddingHorizontal: 20,
        height: getHeight(40),
    },
    button:{
        // position: 'absolute',
        height: getHeight(30),
        width: getWidth(30),
        // top: -10,
        // right: 20,
        // zIndex: 20000,
        marginRight: 25,
        borderStyle: 'solid',
        borderColor: '#72c414',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Input;
