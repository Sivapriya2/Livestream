import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ZegoUIKitPrebuiltLiveStreaming, {HOST_DEFAULT_CONFIG} from "@zegocloud/zego-uikit-prebuilt-live-streaming-rn";
import {useNavigation, useRoute} from "@react-navigation/native";
import credential from '../credential';

const HostPage = () => {

  const route =useRoute();
  const {userId,username,liveId }= route.params;
  const navigation =useNavigation();

    return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltLiveStreaming 
        appID={credential.AppID}
        appSign={credential.AppID}
        userId={userId}
        liveId={liveId}
        userName={username}
        config ={{
          ...HOST_DEFAULT_CONFIG,
          onLeaveLiveStreaming:()=>{
            navigation.navigate('HomePage');
          }
        }}
      />
    </View>
  )
}

export default HostPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    zIndex:0,
  },
})