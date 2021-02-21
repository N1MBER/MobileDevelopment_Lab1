import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import SettingsPosition from './SettingsPosition';
import {getHeight, getWidth} from '../../../util/adaptivity';

const Settings = ({...props}) => {
    return(
        <View style={styles.settings}>
            <View style={styles.block}>
                {[
                    'Push-уведомления',
                    'Определять город автоматически',
                    'Вход по отпечатку пальца'].map(item =>
                    <SettingsPosition title={item}/>
                )}
                <TouchableOpacity style={styles.settings__button}>
                    <Text style={styles.settings__text}>Сбросить авторизацию</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.version}>Версия приложения 1.0.1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    settings: {
        backgroundColor: '#f4f3f4',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        position: 'relative'
    },
    settings__button: {
        marginTop: getHeight(30),
        width: getWidth(200),
        height: getHeight(44),
        backgroundColor: '#7dcf1d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    settings__text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff'
    },
    block: {
        width: '100%',
        alignItems: 'center',
    },
    version: {
        fontSize: 16,
        lineHeight: 24,
        color: '#292929',
        marginBottom: 60
    }
})

export default Settings;
