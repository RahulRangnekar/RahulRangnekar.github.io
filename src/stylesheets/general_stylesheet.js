import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';

export const generalStyles = StyleSheet.create({
  header: {
    borderBottom: '3px solid #2980B9',
    color: '#333',
    fontSize: '1.875em',
    letterSpacing: '0.025em',
    padding: '5px 20px',
    textTransform: 'uppercase'
  },

  altHeader: {
    color: '#FFF'
  },

  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
