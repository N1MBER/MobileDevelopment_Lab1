import React, {useRef,useState,useEffect} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Animated,
    SafeAreaView
} from 'react-native';
import {getWidth,getHeight} from '../../../util/adaptivity';
import {useNavigation} from '@react-navigation/core';
import MenuIcon from '../../../assets/images/icons/menu.svg'
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const Menu = ({visible,setVisibleMenu,setAuth, ...props}) => {
    const menuAnimation = useRef(new Animated.Value(-238)).current
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigator = useNavigation();

    useEffect(() => {
        showMenu()
        fadeIn()
    }, [])


    const showMenu = () => {
        Animated.timing(menuAnimation, {
            toValue: 0,
            duration: 500
        }).start();
    }

    const hideMenu = () => {
        Animated.timing(menuAnimation, {
            toValue: -238,
            duration: 500
        }).start();
        setTimeout(() => {
            setVisibleMenu(false)
        }, 500)
    }

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0.2,
            duration: 300
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300
        }).start();
    };



    const closeMenu = () => {
        hideMenu()
        fadeOut()
        setTimeout(() => setVisibleMenu(!visible), 500)
    }

    const MenuArr = [
        {title: 'Профиль', route: 'profile'},
        {title: 'Настройки', route: 'settings'},
        {title: 'Обратная связь', route: 'faq'},
    ]

    return (
        <View style={styles.sideMenu}>
            <Animated.View style={[
                styles.sideMenu__background,{
                    opacity: fadeAnim
                }
            ]}>
                <TouchableOpacity style={styles.sideMenu__background_button} onPress={() => closeMenu()}/>
            </Animated.View>
            <Animated.View style={[
                styles.sideMenu__content
            ]}>
                <SafeAreaView style={styles.menu}>
                    <TouchableOpacity style={styles.menuButton}
                                      onPress={() => closeMenu()}
                    >
                        <MenuIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            hideMenu();
                            setAuth(true)
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.button__text}>Войти</Text>
                    </TouchableOpacity>
                    {MenuArr.map(item => {
                        return(
                            <TouchableOpacity
                                onPress={() => {
                                    navigator.navigate(item.route)
                                }}
                                style={styles.button}
                            >
                                <Text style={styles.button__text}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </SafeAreaView>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    sideMenu: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 10000
    },
    sideMenu__background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1000,
        backgroundColor: '#000',
        opacity: 0.2
    },
    sideMenu__background_button: {
        width: '100%',
        height: '100%',
    },
    sideMenu__content: {
        width: getWidth(238),
        zIndex: 10000,
        height: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor: '#b4dd83',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: getWidth(20)
    },
    menu: {
        height: getHeight(60),
    },
    button: {
        height: getHeight(40),
        justifyContent: 'center'
    },
    button__text: {
        fontSize: 24,
        lineHeight: 29,
        color: '#fff'
    }
})

export default Menu;
