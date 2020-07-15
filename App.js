import React, { useEffect, useState } from 'react';
import {StyleSheet, SafeAreaView, Text, View, Button} from 'react-native';
import firebase from './src/utils/firebase';
import Auth from './src/components/Auth'

import "firebase/auth";



export default function App(){
const [ user, setUser] = useState(undefined);



  useEffect(() => { 
    firebase.auth().onAuthStateChanged((response) => {
      console.log(response);
      setUser(response);
    });
  },[]);

    if(user === undefined) return null;

  return(
    <SafeAreaView style={styles.background}>
      {user ? <Logout/> : <Auth/>}
    </SafeAreaView>
  );
}

function Logout(){
  firebase.auth().signOut();
  return(
    <View>
      <Text>Estas Logeado</Text>
      <Button title="Cerrar Sesion" onPress={Logout}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#15212b",
    height: "100%"

  }
})