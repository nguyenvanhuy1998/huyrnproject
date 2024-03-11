import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {FeedScreen, NotificationsScreen} from '../screens';

const Drawer = createDrawerNavigator();
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={'Close drawer'}
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label={'Toggle drawer'}
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
