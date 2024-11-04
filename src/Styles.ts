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
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '70%',
    height: 80,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  button: {
    width: '100%',
    height: 30,
  },
});

export default styles;
