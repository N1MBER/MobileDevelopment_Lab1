import React from 'react';
import {
    SafeAreaView,
    View,
    TextInput,
    CheckBox,
    StyleSheet,
    Text
} from 'react-native';
import Input from './Input';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = ({...props}) => {
    return (
        <View>
            <Input title={'Email'}/>
            <Input
                title={'Ваш пароль для контакт центра'}
                icon={<Text style={styles.textIcon}>?</Text>}
            />
            <TouchableOpacity style={styles.info}>
                <Text style={styles.info__text}>
                    I modified some text index.ios.js but I can't see any change on the Simulator when I reload. I can see it reloading though, so it's not the "Connect Hardware Keyboard" issue. And even if I close the simulator and run react-native run-ios again, I still see the old text.
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textIcon: {
        color: '#72c414'
    },
    info: {
        width: '100%',
        padding: 20,
        marginTop: 40,
        backgroundColor: '#FFF'
    },
    info__text: {

    }
})

export default Profile;
