import React from 'react';
import Images from '../config/Images';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Screen01Confirmation = props => {
  const { theme } = props;

  return (
    <ScreenContainer style={styles(theme).screen} hasTopSafeArea={true}>
      {/* Header View */}
      <View style={styles(theme).Viewbcc3c415}>
        {/* Navigation Component */}
        <View style={styles(theme).View906fab56}>
          {/* Left Frame */}
          <View style={styles(theme).Viewe5c1fe2d}>
            {/* LOGO Frame */}
            <View style={styles(theme).View6a955cc3}>
              {/* LOGO */}
              <Text style={styles(theme).Textada5c16a}>{'dbNFT.'}</Text>
            </View>
          </View>
          {/* Right Frame */}
          <View style={styles(theme).Viewdbf79098}>
            {/* Flex for Touchable */}
            <View style={styles(theme).View4f6009be}>
              <Touchable>
                {/* Menu Frame */}
                <View style={styles(theme).Viewa678936a}>
                  {/* profileImage */}
                  <CircleImage
                    style={styles(theme).CircleImage8bd683a8}
                    source={Images.JulianWanWNoLnJo7tS8Unsplash}
                    size={24}
                  />
                  {/* profileDetails Frame */}
                  <View style={styles(theme).Viewce4accf0}>
                    {/* profileName */}
                    <Text style={styles(theme).Text6187d789}>{'Profile'}</Text>
                    {/* menuIcon */}
                    <Icon
                      style={styles(theme).Iconda2fc39f}
                      name={'Entypo/chevron-down'}
                      size={9}
                      color={theme.colors.strong}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
        {/* Confirmation Banner */}
        <View style={styles(theme).Viewb355d174}>
          {/* textWrapper */}
          <View style={styles(theme).View4f5146fc}>
            <Text style={styles(theme).Text25738ee8}>{'NFT Purchased! '}</Text>
            {/* Touchable Frame */}
            <View>
              <Touchable>
                <Text style={styles(theme).Texta5c9198c}>{'View Wallet'}</Text>
              </Touchable>
            </View>
          </View>

          <Text style={styles(theme).Text0fcaa642}>{'🚀 🚀 🚀'}</Text>
        </View>
      </View>
      {/* Content View Scrollable */}
      <ScrollView
        style={styles(theme).ScrollViewb284e5b0}
        contentContainerStyle={styles(theme).ScrollView4e34f380Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Content View */}
        <View style={styles(theme).View5062543d}>
          {/* nftName */}
          <Text style={styles(theme).Text2b6c2735}>
            {'Abstrack Plain Waves #001'}
          </Text>
          {/* Image Wrapper */}
          <View style={styles(theme).Viewfac0bdd5}>
            <ImageBackground
              style={styles(theme).ImageBackgroundb04939df}
              source={Images.RicardoGomezAngelUD5drKd4H6wUnsplash1}
              resizeMode={'cover'}
            />
          </View>
          {/* Author Frame */}
          <View style={styles(theme).View79351d85}>
            {/* nftProperties */}
            <Text style={styles(theme).Text3234748d}>{'Created by '}</Text>
            {/* nftCreatorName */}
            <Text style={styles(theme).Text654c5e99}>{'@theBlindPlebian'}</Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImage8bd683a8: { marginRight: 6 },
    Iconda2fc39f: { marginLeft: 6 },
    ImageBackgroundb04939df: { height: 230, width: 319 },
    ScrollView4e34f380Content: { flexShrink: 0 },
    ScrollViewb284e5b0: { flexGrow: 1 },
    Text0fcaa642: {
      color: theme.colors.strongInverse,
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: '700',
      lineHeight: 21,
    },
    Text25738ee8: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: '600',
      lineHeight: 21,
    },
    Text2b6c2735: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 30,
    },
    Text3234748d: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 24,
    },
    Text6187d789: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginRight: 6,
    },
    Text654c5e99: {
      color: theme.colors.nFTTIMEBlue,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 24,
      marginLeft: 6,
    },
    Texta5c9198c: {
      color: theme.colors.nFTTimeHotBlue,
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '600',
      lineHeight: 16,
      marginLeft: 6,
      textDecorationLine: 'underline',
    },
    Textada5c16a: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 24,
    },
    View4f5146fc: { alignItems: 'flex-end', flexDirection: 'row' },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View5062543d: {
      backgroundColor: theme.colors.strongInverse,
      flexGrow: 1,
      flexShrink: 0,
      marginBottom: 24,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 24,
    },
    View6a955cc3: { justifyContent: 'center' },
    View79351d85: { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
    View906fab56: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 12,
    },
    Viewa678936a: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewb355d174: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxHeight: 56,
      minHeight: 56,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewbcc3c415: {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      flexGrow: 0,
      flexShrink: 0,
      left: 0,
      right: 0,
      top: 0,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Viewe5c1fe2d: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginRight: 18,
    },
    Viewfac0bdd5: {
      borderRadius: 24,
      height: 230,
      marginTop: 18,
      overflow: 'hidden',
      width: 319,
    },
    screen: { flexGrow: 1, flexShrink: 0 },
  });

export default withTheme(Screen01Confirmation);
