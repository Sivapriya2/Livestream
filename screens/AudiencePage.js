import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ZegoUIKitPrebuiltLiveStreaming,{AUDIENCE_DEFAULT_CONFIG} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'
import credential from '../credential'
import { useNavigation, useRoute } from '@react-navigation/native'

const AudiencePage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {userId,username,liveId} = route.params;
  return (
    <View style={styles.container}>
        <ZegoUIKitPrebuiltLiveStreaming
        appID={credential.AppID}
        appSign={credential.AppSign}
        userID={userId}
        userName={username}
        liveID={liveId}
        config ={{
          ...AUDIENCE_DEFAULT_CONFIG,
          onLeaveLiveStreaming: ()=>{
            navigation.navigate('HomePage');
          }
        }}
        />
      
    </View>
  )
}

export default AudiencePage

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    zIndex:0,
  },
})