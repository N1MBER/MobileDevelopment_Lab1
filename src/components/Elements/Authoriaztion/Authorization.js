import React, {useRef, useEffect, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Animated,
    StyleSheet
} from 'react-native';

const Authorization = ({visible, setVisible,...props}) => {
    const menuAnimation = useRef(new Animated.Value(-650)).current

    const showMenu = () => {
        Animated.timing(menuAnimation, {
            toValue: 0,
            duration: 500
        }).start();
    }

    const hideMenu = () => {
        Animated.timing(menuAnimation, {
            toValue: -650,
            duration: 500
        }).start();
        setTimeout(() => {
            setVisible(false)
        }, 500)
    }

    useEffect(() => {
        showMenu()
    }, [])

    useEffect(() => {
        console.log(true)
    })


    return(
        <Animated.View style={[styles.auth, {
            bottom: menuAnimation
        }]}>
           <View style={styles.auth__container}>
               <Text style={styles.title}>
                    Войти или зарегистрироваться
               </Text>
               <Text style={styles.text}>
                    Мы отправим на этот номер SMS-сообщение с кодом подтверждения
               </Text>
               <TextInput
                   style={styles.input}
                   placeholder={'+7 (___) ___-__-__'}
               />
               <TouchableOpacity
                   style={styles.submit}
                   onPress={() => {
                       setVisible(false)
                       hideMenu()
                   }}
               >
                   <Text style={styles.submit__text}>
                        Получить код
                   </Text>
               </TouchableOpacity>
               <View style={styles.confirm}>
                   <Text style={styles.confirm}>
                       При входе вы соглашаетесь с условиями
                   </Text>
               </View>
           </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    auth: {
        height: 650,
        width: '100%',
        position: 'absolute',
        left: 0,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 40000,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    auth__container: {
        padding: 40,
        height: '100%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative'
    },
    title: {
        fontSize: 32,
        lineHeight: 35,
        fontWeight: 'bold',
        marginBottom: 20
    },
    confirm: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        textAlign: 'center',
        width: '100%',
        color: '#aba4a4',
        fontSize: 14,
        lineHeight: 17,
    },
    submit: {
        width: '100%',
        height: 60,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submit__text:{
        fontSize: 19,
        lineHeight: 21,
        color: '#FFF',
        textTransform: 'uppercase'
    },
    input: {
        height: 40,
        paddingVertical: 8,
        width: '100%',
        borderBottomColor: '#aba4a4',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        marginBottom: 50
    },
    text: {
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'left',
        marginBottom: 20

    }

})

export default Authorization;
