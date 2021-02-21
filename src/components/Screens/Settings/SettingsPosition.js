import React, {useState} from 'react';
import {
    View,
    Switch,
    Text,
    StyleSheet
} from 'react-native';
import {getHeight, getWidth} from '../../../util/adaptivity';

const SettingsPosition = ({title, ...props}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.position}>
            <Text style={styles.position__text}>{title}</Text>
            <Switch
                trackColor={{ false: "#ffffff", true: "#89dd89" }}
                thumbColor={isEnabled ? "#1aae03" : "#f4f3f4"}
                ios_backgroundColor="#fff"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    position: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: getHeight(50),
        paddingHorizontal: getWidth(25),
        borderBottomColor: '#f4f3f4',
        borderStyle: 'solid',
        backgroundColor: '#fff',
        borderBottomWidth: 2
    },
    position__text: {
        fontSize: 16,
        lineHeight: 19,
        color: '#292929'
    }
})

export default SettingsPosition;
