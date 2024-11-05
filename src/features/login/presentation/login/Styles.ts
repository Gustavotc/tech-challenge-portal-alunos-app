import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 200,
    paddingHorizontal: 10,
  },
  TextInputComponent: {
    alignItems: 'center',
    marginHorizontal: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '70%',
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 80,
  },
});

export default styles;
