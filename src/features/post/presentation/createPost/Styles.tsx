import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginTop: '20%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    paddingVertical: 40,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#666',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('screen').height,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  inputView: {
    marginBottom: 16,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default styles;

