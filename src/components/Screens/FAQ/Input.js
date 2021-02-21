import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Keyboard
} from 'react-native'

const Input = ({title,placeholder, ...props}) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        const showListener = Keyboard.addListener("keyboardDidShow", () => {
            setActive(true)
        });
        const hideListener = Keyboard.addListener('keyboardDidHide', () => {
            setActive(false)

        })
    })

    return(
        <View style={styles.input}>
            <Text style={[styles.input__title, active ? styles.active__title: {}]}>{title}</Text>
            <TextInput
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                placeholder={placeholder}
                style={[styles.input__input, active ? styles.active__input: {}]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 25,
        marginBottom: 10
    },
    input__title:{
        color: '#aba4a4',
        fontSize: 16,
        lineHeight: 19,
        height: 20,
    },
    input__input: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        width: '100%',
        color: '#000',
        borderBottomColor: '#aba4a4',
        fontSize: 19,
        paddingVertical: 7,
        lineHeight: 21
    },
    active__title: {
        color: '#528c22'
    },
    active__input: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        fontWeight: 'bold'

    }
})

export default Input;
