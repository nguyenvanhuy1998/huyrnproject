import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  jusCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  icSmall: {
    width: 32,
    height: 32,
  },
  body: {
    paddingHorizontal: 20,
  },
  shadowProp: {
    // shadowColor: colors.shadow,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    // shadowColor: colors.shadow,
  },
  divider: {
    height: 1,
    // backgroundColor: colors.divider,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexEnd: {
    flex: 1,
    alignItems: 'flex-end',
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default commonStyles;
