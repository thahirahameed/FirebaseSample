import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        region={{
          latitude: 53.55,
          longitude: 2.4333,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

export default MapScreen;
