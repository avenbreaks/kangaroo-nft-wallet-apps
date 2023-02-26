/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
import { Platform } from 'react-native';
function renderLinkingPrefix() {
  try {
    return Linking.createURL('/');
  } catch (e) {
    return 'draftbit://';
  }
}

const prefix = renderLinkingPrefix();
const linking = {
  enabled: Platform.OS === 'web' ? false : true,
  prefixes: [prefix],
  config: {
    screens: {
      BottomTabNavigator: {
        screens: {
          SettingsStack: {
            screens: {},
          },
          WalletStack: {
            screens: {},
          },
          UploadStack: {
            screens: {},
          },
          LeaderboardStack: {
            screens: {},
          },
          ExploreStack: {
            screens: {},
          },
        },
        SettingsStack: {
          screens: {},
        },
        WalletStack: {
          screens: {},
        },
        UploadStack: {
          screens: {},
        },
        LeaderboardStack: {
          screens: {},
        },
        ExploreStack: {
          screens: {},
        },
      },
    },
  },
};

export default linking;
