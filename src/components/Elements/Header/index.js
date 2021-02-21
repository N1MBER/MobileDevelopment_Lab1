import React, {useEffect,useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import MenuIcon from '../../../assets/images/icons/menu.svg';
import ArrowIcon from '../../../assets/images/icons/arrow.svg';
import {getHeight, getWidth} from '../../../util/adaptivity';
import {useRoute} from '@react-navigation/core';

const Header = ({setVisible,visible,...props}) => {
    const route = useRoute();
    const [title, setTitle] = useState('')

    const getTitle = () => {
        switch (route.name){
            case 'settings':
                return 'Настройки';
            default:
            case 'profile':
                return 'Профиль';
            case 'faq':
                return 'Обратная связь';
        }
    }

    useEffect(() => {
        setTitle(getTitle())
    }, [route.name])
    useEffect(() => {
        setTitle(getTitle())
    }, [])

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => {
                setVisible(!visible)
            }}>
                <MenuIcon/>
            </TouchableOpacity>
            <Text style={styles.header__text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: getWidth(20),
        height: getHeight(60),
        backgroundColor: '#72c414'

    },
    header__button: {

    },
    header__text: {
        color: '#FFF',
        fontSize: 21,
        lineHeight: 24,
        marginLeft: 30
    }
})

export default Header;
