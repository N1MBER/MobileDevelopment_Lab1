import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    TextInput,
    CheckBox,
    StyleSheet,
    Text
} from 'react-native';

import Input from './Input';

const FAQ = ({...props}) => {
    const [confirm, setConfirm] = useState(false)
    useEffect(() => {
        console.log(confirm)
    }, [confirm])
    const InputArr = [
        {title: 'Ваше имя', placeholder: 'Ваше имя'},
        {title: 'Номер телефона', placeholder: 'Номер телефона'},
        {title: 'Ваш Email адрес', placeholder: 'Ваш Email адрес'},
        {placeholder: 'Тема обращения'},
        {placeholder: 'Коментарий'},
    ]

    return (
        <View style={styles.faq}>
            {InputArr.map(item => {
                return(
                    <Input title={item.title} placeholder={item.placeholder}/>
                )
            })}
            <View style={styles.confirm}>
                <CheckBox
                    value={confirm}
                    onValueChange={setConfirm}
                    style={styles.confirm__checkbox}
                />
                <Text  style={styles.confirm__text}>Я даю согласие</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    faq: {
        marginTop: 20
    },
    confirm: {
        marginTop: 50,
        paddingHorizontal: 25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    confirm__text: {
        color: '#000',
        fontSize: 16,
        lineHeight: 19,
        marginLeft: 20
    },
    confirm__checkbox: {
        width: 20,
        height: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#528c22'
    },
})

export default FAQ;
