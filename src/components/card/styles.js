import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

const styles = ScaledSheet.create({
  container: Platform.select({
    android: {
      elevation: 5,
    },
    ios: {
      shadowColor: '#000',
      ShadowOpacity: 0.5,
      shadowRadius: 3,
      shadowOffset: {width: 0, height: 3},
    },
  }),
});

export default styles;
