import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useSafeAreaInsets} from "react-native-safe-area-context"
import {useNavigation} from '@react-navigation/native'

const HomePage = () => {
  const [userId,setUserId] = useState("");
  const [liveId,setLiveId] = useState("");
  const [username,setUsername] = useState("");

  const insets =useSafeAreaInsets();
  const navigation =useNavigation();

  const joinOrstart = isHost =>{
    navigation.navigate(isHost ? 'HostPage' : ' AudiencePage',{
      userId,username,liveId,
    })
  }

  useEffect(()=>{
    setUserId(string(Math.floor(Math.random()*1000000)));
    setLiveId(string(Math.floor(Math.random()*10000)));
  })
     
  return (
    <View style={
      [styles.container,{paddingTop:insets.top,paddingBottom:insets.bottom}]
    }>
      <Text style={styles.userId}>Your User Id:{userId}</Text>
      <Text style={[styles.liveId,styles.leftPadding]}>Live ID:</Text>
      <TextInput 
        placeholder='Enter the LiveID eg.1234' style={styles.input} onChangeText={text=>setLiveId(text)} maxLength={4} value={liveId}
      />

      <Text style={[styles.liveId,styles.leftPadding]}>username:</Text>
      <TextInput 
        placeholder='Enter the USername eg.Priya' style={styles.input} onChangeText={text=>setUsername(text)} maxLength={12} value={username}
      />

      <View style={[styles.buttonLine,styles.leftPadding]}>
          <Button  
              disabled={liveId.length===0}
              style={styles.button}
              title='Start a live'
              onPress={()=>joinOrstart(true)}
          />
          </View>
          <view style={styles.buttonSpacing} />

          <View style={[styles.buttonLine,styles.leftPadding]}>
          <Button  
              disabled={liveId.length===0}
              style={styles.button}
              title='Watch a live'
              onPress={()=>joinOrstart(false)}
          />
          </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
      },

      buttonLine:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:42,
      },
      buttonSpacing:{
        width:13,
      },
      input:{
        height:42,
        width:305,
        borderWidth:1,
        borderRadius:9,
        borderColor:'#333333',
        paddingLeft:16,
        paddingBottom:10,
        paddingRight:16,
        paddingTop:10,
        marginLeft:35,
        marginBottom:20,
      },

      userId:{
        fontSize:14,
        color:'#2A2A2A',
        marginBottom:27,
        paddingBottom:12,
        paddingTop:12,
        paddingLeft:20,
      },

      liveId:{
        fontSize:14,
        color:'#2A2A2A',
        marginBottom:5,
      },

      button:{
        height:42,
        borderRadius:9,
        backgroundColor:'F4F7FB'
      },
      leftPadding:{
        paddingLeft:35,
      }
})