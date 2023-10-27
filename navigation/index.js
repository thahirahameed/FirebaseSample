import {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  FirstScreen,
  TestImagePicker,
  LocationScreen,
  MapScreen,
} from '../screens';
import NotificationHelper from '../helper/NotificationHelper';

const Stack = createNativeStackNavigator();

const Navigator = props => {
  const navigation = useNavigation();

  useEffect(() => {
    // NotificationHelper.initializeFCM();
    // NotificationHelper.checkFCMPermission();
    // NotificationHelper.getToken();
  }, []);

  const getScreens = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="mapScreen"
          component={MapScreen}
          options={{title: ' Map Screen'}}
        />
        <Stack.Screen
          name="locationScreen"
          component={LocationScreen}
          options={{title: ' Location Screen'}}
        />
        <Stack.Screen
          name="testImagePicker"
          component={TestImagePicker}
          options={{title: ' The Image Picker Screen'}}
        />
        <Stack.Screen
          name="firstScreen"
          component={FirstScreen}
          options={{title: ' The First Screen'}}
        />
      </Stack.Group>
    );
  };
  return <Stack.Navigator>{getScreens()}</Stack.Navigator>;
};

export default Navigator;
