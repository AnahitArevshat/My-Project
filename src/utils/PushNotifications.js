import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken= async ()=>{
  let fcmToken= await AsyncStorage.getItem('fcmToken');
  console.log('Old fcmToken:' , fcmToken);
  if(!fcmToken){
    try {
      const fcmToken = await messaging().getToken();
      if(fcmToken){
        console.log('You Generated Fcm Token: ', fcmToken);
        await AsyncStorage.setItem('fcmToken',fcmToken);
      }
    } catch (error){
      console.log(error);
    }
  }
}

export const NotificationServices=()=>{
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Foreground Messeage Hendling
  messaging().onMessage(async remoteMessage => {
    console.log('Notification in Foreground: ', remoteMessage);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }

    });

}
