import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('screen').height,
  },
  logo: {
    width: 200,
    height: 120,
    marginTop: '30%',
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
