import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, { AnimatedRegion, Animated, PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      region: new AnimatedRegion({
        latitude: -6.2261,
        longitude: 106.8400,
        latitudeDelta: 0.03,
        longitudeDelta: 0.045,
      }),
    };
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Test Map</Text>
        <Animated
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
          style={styles.map}
          onRegionChange={this.onRegionChange.bind(this)}
        >
          <Marker title={'Test'} description={'You are here'} coordinate={{
            latitude: -6.2261,
            longitude: 106.8400
          }} >
            <View><Image source={require('./personPin.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }} /></View>
          </Marker>
          <Marker title={'Office'} description={'Office is here'} coordinate={{
            latitude: -6.2264,
            longitude: 106.8323
          }} >
            <View><Image source={require('./pinTrans.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }} /></View>
          </Marker>
          <Circle center={{
            latitude: -6.2264,
            longitude: 106.8323
          }} radius={700} strokeColor={'#1C86EE'} fillColor={'#1C86EE80'} />
        </Animated>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 280,
    width: 330
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
