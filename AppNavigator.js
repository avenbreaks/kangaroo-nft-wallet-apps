import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import Screen01Confirmation from './screens/Screen01Confirmation';
import Screen01PlaceholderScreen from './screens/Screen01PlaceholderScreen';
import Screen02StatusOwnedScreenBanner from './screens/Screen02StatusOwnedScreenBanner';
import Screen0Profile from './screens/Screen0Profile';
import Screen10AllCollections from './screens/Screen10AllCollections';
import Screen11CreatorsCollection from './screens/Screen11CreatorsCollection';
import Screen1CreateNFTUpload from './screens/Screen1CreateNFTUpload';
import Screen1FAQ from './screens/Screen1FAQ';
import Screen1Stats from './screens/Screen1Stats';
import Screen1Wallet from './screens/Screen1Wallet';
import Screen20AllCreators from './screens/Screen20AllCreators';
import Screen21ProfileCreatedTab from './screens/Screen21ProfileCreatedTab';
import Screen22ProfileCollectedTab from './screens/Screen22ProfileCollectedTab';
import Screen31TemplateEasyUse from './screens/Screen31TemplateEasyUse';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function SettingsStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Screen0Profile">
      <Stack.Screen
        name="Screen31TemplateEasyUse"
        component={Screen31TemplateEasyUse}
        options={{ title: '13.1 Template Easy Use' }}
      />
      <Stack.Screen
        name="Screen1FAQ"
        component={Screen1FAQ}
        options={{ title: '7.1 FAQ' }}
      />
      <Stack.Screen
        name="Screen0Profile"
        component={Screen0Profile}
        options={{ title: '7.0 Profile' }}
      />
    </Stack.Navigator>
  );
}

function WalletStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Screen1Wallet">
      <Stack.Screen
        name="Screen1Wallet"
        component={Screen1Wallet}
        options={{ title: '4.1 Wallet' }}
      />
    </Stack.Navigator>
  );
}

function UploadStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Screen1CreateNFTUpload"
    >
      <Stack.Screen
        name="Screen1CreateNFTUpload"
        component={Screen1CreateNFTUpload}
        options={{ title: '3.1 Create NFT Upload' }}
      />
    </Stack.Navigator>
  );
}

function LeaderboardStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Screen1Stats">
      <Stack.Screen
        name="Screen1Stats"
        component={Screen1Stats}
        options={{ title: '2.1 Stats' }}
      />
    </Stack.Navigator>
  );
}

function ExploreStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Screen20AllCreators">
      <Stack.Screen
        name="Screen10AllCollections"
        component={Screen10AllCollections}
        options={{ title: '1.10 All Collections' }}
      />
      <Stack.Screen
        name="Screen11CreatorsCollection"
        component={Screen11CreatorsCollection}
        options={{ title: '1.11 Creators Collection' }}
      />
      <Stack.Screen
        name="Screen22ProfileCollectedTab"
        component={Screen22ProfileCollectedTab}
        options={{ title: '1.22 Profile Collected Tab' }}
      />
      <Stack.Screen
        name="Screen20AllCreators"
        component={Screen20AllCreators}
        options={{ title: '1.20 All Creators' }}
      />
      <Stack.Screen
        name="Screen21ProfileCreatedTab"
        component={Screen21ProfileCreatedTab}
        options={{ title: '1.21 Profile Created Tab' }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="ExploreStack">
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/grid"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'NFTs',
          title: 'Explore Stack',
        }}
      />
      <Tab.Screen
        name="LeaderboardStack"
        component={LeaderboardStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/stats-chart"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'Stats',
          title: 'Leaderboard Stack',
        }}
      />
      <Tab.Screen
        name="UploadStack"
        component={UploadStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/add-circle-sharp"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'New NFT',
          title: 'Upload Stack',
        }}
      />
      <Tab.Screen
        name="WalletStack"
        component={WalletStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/wallet"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'Wallet',
          title: 'Wallet Stack',
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/settings"
              size={25}
              color={focused ? color : color}
            />
          ),
          tabBarLabel: 'Account',
          title: 'Settings Stack',
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator headerMode="none" initialRouteName="BottomTabNavigator">
        <Stack.Screen
          name="Screen02StatusOwnedScreenBanner"
          component={Screen02StatusOwnedScreenBanner}
          options={{ title: '20.2 Status Owned Screen Banner' }}
        />
        <Stack.Screen
          name="Screen01PlaceholderScreen"
          component={Screen01PlaceholderScreen}
          options={{ title: '20.1 Placeholder Screen' }}
        />
        <Stack.Screen
          name="Screen01Confirmation"
          component={Screen01Confirmation}
          options={{ title: '10.1 Confirmation' }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
