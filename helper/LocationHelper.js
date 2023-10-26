import {Platform} from 'react-native';
import GeoLocation from 'react-native-geolocation-service';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

class LocationHelper {
  fetchLocation = (success, failure) => {
    GeoLocation.getCurrentPosition(
      position => {
        if (success) {
          success(position);
        }
      },
      error => {
        if (failure) {
          failure(error);
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000,
      },
    );
  };

  trackUserLocation = (success, failure) => {
    GeoLocation.watchPosition(
      locationObject => {
        if (success) {
          success(locationObject);
        }
      },
      error => {
        if (failure) {
          failure(error);
        }
      },
      {
        enableHighAccuracy: true,
        forceRequestLocation: true,
        showLocationDialog: true,
        distanceFilter: 0.05,
        useSignificantChanges: true,
        showsBackgroundLocationIndicator: true,
        interval: 1000,
      },
    );
  };

  requestPermission = (successCallBack, failureCallBack) => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
    )
      .then(result => {
        if (successCallBack) {
          successCallBack(result);
        }
      })
      .catch(error => {
        if (failureCallBack) {
          failureCallBack(error);
        }
      });
  };

  checkLocationPermission = (successCallBack, failureCallBack) => {
    check(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
    )
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            //raise some alert that it is unavailable
            break;
          case RESULTS.DENIED:
            this.requestPermission(successCallBack, failureCallBack);
            break;
          case RESULTS.GRANTED:
            successCallBack();
            break;
          case RESULTS.BLOCKED:
            this.requestPermission(successCallBack, failureCallBack);
            break;
        }
      })
      .catch(error => {
        if (failureCallBack) {
          failureCallBack(error);
        }
      });
  };
}

export default new LocationHelper();
