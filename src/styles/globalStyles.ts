import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from '../constants';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  text: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: 14,
    color: COLORS.text,
  },
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    flexDirection: 'row',
  },
});
