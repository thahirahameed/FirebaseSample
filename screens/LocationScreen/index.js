import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {LocationHelper} from '../../helper';

const LocationScreen = () => {
  useEffect(() => {
    LocationHelper.fetchLocation(
      () => {
        LocationHelper.fetchLocation(
          locationObject => {
            console.log(locationObject);
          },
          error => {
            console.log(error);
          },
        );
      },
      () => {},
    );
  }, []);

  return (
    <View>
      <Text>test maps</Text>
    </View>
  );
};

export default LocationScreen;
