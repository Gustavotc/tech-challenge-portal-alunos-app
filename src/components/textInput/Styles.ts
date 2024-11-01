import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#E6E0E9',
    width: '100%',
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
});

export default styles;
