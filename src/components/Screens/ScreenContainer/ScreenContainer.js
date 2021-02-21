import React, {useState, useEffect} from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import Header from '../../Elements/Header/';
import Menu from '../../Elements/Menu/Menu';
import Authorization from '../../Elements/Authoriaztion/Authorization';

const ScreenContainer = ({children,...props}) => {
    const [visible, setVisible] = useState(false);
    const [viewAuth, setViewAuth] = useState(false);

    return (
       <>
           {viewAuth && <Authorization setVisible={setViewAuth} visible={viewAuth}/> }
           {visible &&  <Menu visible={visible} setVisibleMenu={setVisible} setAuth={setViewAuth}/>}
           <SafeAreaView style={styles.view}>
               <Header setVisible={setVisible} visible={visible}/>
               {children}
           </SafeAreaView>
       </>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f4f3f4',
    }
})

export default ScreenContainer;
