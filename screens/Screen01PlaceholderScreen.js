import React from 'react';
import Images from '../config/Images';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Screen01PlaceholderScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      hasTopSafeArea={true}
      hasBottomSafeArea={true}
      scrollable={true}
      hasSafeArea={true}
    >
      <KeyboardAvoidingView
        style={styles(theme).KeyboardAvoidingView2da489ca}
        enabled={true}
        behavior={'padding'}
      >
        <View style={styles(theme).View39912261}>
          <Image
            style={styles(theme).Image115e9468}
            resizeMode={'cover'}
            source={Images._062812}
          />
          <Text style={styles(theme).Text208bd4e9}>{'Placeholder Screen'}</Text>

          <Text style={styles(theme).Text03751e58}>
            {'Designing Navigate Tab Requires Screen for Proper Visualization'}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Image115e9468: { height: 100, width: 100 },
    KeyboardAvoidingView2da489ca: {
      alignItems: 'center',
      flex: 1,
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
      paddingLeft: 16,
      paddingRight: 16,
    },
    Text03751e58: {
      color: theme.colors.medium,
      fontFamily: 'System',
      fontWeight: '400',
      textAlign: 'center',
    },
    Text208bd4e9: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 24,
      fontWeight: '700',
      marginTop: 16,
      textAlign: 'center',
    },
    View39912261: { alignItems: 'center' },
  });

export default withTheme(Screen01PlaceholderScreen);
