import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        region={{
          latitude: 51.53064042295979,
          longitude: -0.44188440595809003,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

export default MapScreen;
