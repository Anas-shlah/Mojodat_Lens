import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, ImageBackground} from 'react-native';

import {useDispatch} from 'react-redux';
import {getAsset} from '../redux/actions';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAsset());
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} animated={true} />
      <ImageBackground
        style={styles.logo}
        resizeMode="cover"
        source={require('../assets/image/splashImage.png')}
      />
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
});
