import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7FF87',
  },
  cardContainer: {
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    alignItems: 'center',
  },
});

export default styles;
