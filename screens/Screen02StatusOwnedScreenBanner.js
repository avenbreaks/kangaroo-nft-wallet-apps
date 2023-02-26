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

const Screen02StatusOwnedScreenBanner = props => {
  const { theme } = props;

  return (
    <ScreenContainer style={styles(theme).screen} hasTopSafeArea={true}>
      {/* Header View */}
      <View style={styles(theme).Viewbe073bf8}>
        {/* Navigation Component */}
        <View style={styles(theme).View93d8dd04}>
          {/* Row Wrapper */}
          <View style={styles(theme).View115c8f3c}>
            {/* Logo Component */}
            <View style={styles(theme).View6a955cc3}>
              {/* brandName */}
              <Text style={styles(theme).Textada5c16a}>{'dbNFT.'}</Text>
            </View>

            <Touchable style={styles(theme).Touchable2200bac7}>
              {/* profileComponent */}
              <View style={styles(theme).Viewb224489a}>
                {/* profileImage */}
                <CircleImage
                  size={24}
                  source={Images.JulianWanWNoLnJo7tS8Unsplash}
                />
                {/* profileName */}
                <Text style={styles(theme).Texte6750c5c}>{'Profile'}</Text>
                {/* menuIcon */}
                <Icon
                  style={styles(theme).Iconda2fc39f}
                  name={'Entypo/chevron-down'}
                  size={9}
                  color={theme.colors.strong}
                />
              </View>
            </Touchable>
          </View>
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
          {/* Touchable Frame */}
          <View style={styles(theme).Viewf8304bf6}>
            <Touchable>
              {/* profileComponent */}
              <View style={styles(theme).Viewce4accf0}>
                {/* profileImage */}
                <CircleImage
                  source={Images.JulianWanWNoLnJo7tS8Unsplash}
                  size={32}
                />
                {/* profileReference */}
                <View>
                  {/* label */}
                  <Text style={styles(theme).Textc905c92d}>{'owner'}</Text>
                  {/* profileName */}
                  <Text style={styles(theme).Textbbd21da4}>{'@memeLord'}</Text>
                </View>
              </View>
            </Touchable>
          </View>
          {/* nftInfoWrapper */}
          <View style={styles(theme).View0ae50d17}>
            {/* bidReference */}
            <View>
              {/* label */}
              <Text style={styles(theme).Textc905c92d}>{'Current Bid'}</Text>
              {/* amountDue */}
              <Text style={styles(theme).Texte6750c5c}>{'100 GTFX'}</Text>
            </View>
            {/* expirationReference */}
            <View>
              {/* label */}
              <Text style={styles(theme).Textc905c92d}>{'End In'}</Text>
              {/* expiresIn */}
              <Text style={styles(theme).Texte6750c5c}>{'24m 12s'}</Text>
            </View>
          </View>
          {/* Image Wrapper */}
          <View style={styles(theme).View63aa7ce9}>
            <ImageBackground
              style={styles(theme).ImageBackground8dc796a9}
              resizeMode={'cover'}
              source={Images.RicardoGomezAngelUD5drKd4H6wUnsplash1}
            />
          </View>
          {/* createdBy component wrapper */}
          <View style={styles(theme).View79351d85}>
            {/* nftProperties */}
            <Text style={styles(theme).Text3234748d}>{'Created by '}</Text>
            {/* Touchable Frame */}
            <View>
              <Touchable>
                {/* nftCreatorName */}
                <Text style={styles(theme).Text654c5e99}>
                  {'@theBlindPlebian'}
                </Text>
              </Touchable>
            </View>
          </View>
          {/* propertiesComponentWrapper */}
          <View style={styles(theme).View17034e1f}>
            {/* itemWrapper */}
            <View style={styles(theme).View966b9d62}>
              <Text style={styles(theme).Text3787fc45}>
                {'Primary Pallete'}
              </Text>

              <Text style={styles(theme).Text8d486c4e}>{'Wolf Gray'}</Text>

              <Text style={styles(theme).Texta565bc4d}>
                {'12% have this trait.'}
              </Text>
            </View>
            {/* itemWrapper */}
            <View style={styles(theme).View966b9d62}>
              <Text style={styles(theme).Text3787fc45}>{'Material'}</Text>

              <Text style={styles(theme).Texta05c282c}>{'Sandy'}</Text>

              <Text style={styles(theme).Texta565bc4d}>
                {'2% have this trait.'}
              </Text>
            </View>
            {/* itemWrapper */}
            <View style={styles(theme).View966b9d62}>
              <Text style={styles(theme).Text3787fc45}>{'Lighting'}</Text>

              <Text style={styles(theme).Texta05c282c}>{'Dimly Lit'}</Text>

              <Text style={styles(theme).Texta565bc4d}>
                {'20% have this trait.'}
              </Text>
            </View>
            {/* itemWrapper */}
            <View style={styles(theme).View966b9d62}>
              <Text style={styles(theme).Text3787fc45}>{'Pattern'}</Text>

              <Text style={styles(theme).Texta05c282c}>{'Sandy'}</Text>

              <Text style={styles(theme).Texta565bc4d}>
                {'3% have this trait.'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Footer View */}
      <View style={styles(theme).View3a7f88dd}>
        {/* textWrapper */}
        <View style={styles(theme).View4f5146fc}>
          <Text style={styles(theme).Text0fcaa642}>{'NFT Owned '}</Text>
          {/* Touchable Frame */}
          <View>
            <Touchable>
              <Text style={styles(theme).Text0c26f599}>{'View Wallet'}</Text>
            </Touchable>
          </View>
        </View>

        <Text style={styles(theme).Text0fcaa642}>{'🚀 🚀 🚀'}</Text>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Iconda2fc39f: { marginLeft: 6 },
    ImageBackground8dc796a9: { height: '100%', width: '100%' },
    ScrollView4e34f380Content: { flexShrink: 0 },
    ScrollViewb284e5b0: { flexGrow: 1 },
    Text0c26f599: {
      color: theme.colors.nFTTimeDarkModeLink,
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '600',
      lineHeight: 16,
      marginLeft: 6,
      textDecorationLine: 'underline',
    },
    Text0fcaa642: {
      color: theme.colors.strongInverse,
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: '700',
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
    Text3787fc45: {
      color: theme.colors.nFTTimeSecondary,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      marginBottom: 3,
    },
    Text654c5e99: {
      color: theme.colors.nFTTIMEBlue,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 24,
      marginLeft: 6,
    },
    Text8d486c4e: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '600',
      marginBottom: 3,
    },
    Texta05c282c: {
      color: theme.colors.nFTTIMEPrimaryBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '600',
      marginBottom: 3,
    },
    Texta565bc4d: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
    },
    Textada5c16a: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 24,
    },
    Textbbd21da4: {
      color: theme.colors.nFTTIMEBlue,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginLeft: 6,
    },
    Textc905c92d: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 18,
      marginLeft: 6,
    },
    Texte6750c5c: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginLeft: 6,
    },
    Touchable2200bac7: { height: '100%' },
    View0ae50d17: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    View115c8f3c: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginLeft: 18,
      marginRight: 18,
    },
    View17034e1f: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    View3a7f88dd: {
      alignItems: 'center',
      backgroundColor: theme.colors.nFTTimeUIBlack,
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxHeight: 56,
      minHeight: 56,
      paddingLeft: 18,
      paddingRight: 18,
    },
    View4f5146fc: { alignItems: 'flex-end', flexDirection: 'row' },
    View5062543d: {
      backgroundColor: theme.colors.strongInverse,
      flexGrow: 1,
      flexShrink: 0,
      marginBottom: 24,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 24,
    },
    View63aa7ce9: {
      borderRadius: 24,
      marginTop: 18,
      minHeight: 350,
      overflow: 'hidden',
    },
    View6a955cc3: { justifyContent: 'center' },
    View79351d85: { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
    View93d8dd04: {
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 12,
      paddingTop: 12,
    },
    View966b9d62: {
      alignItems: 'center',
      backgroundColor: theme.colors.lightInverse,
      borderColor: theme.colors.light,
      borderRadius: 4,
      flexGrow: 1,
      flexShrink: 0,
      marginTop: 12,
      maxWidth: '45%',
      minWidth: '45%',
      paddingBottom: 12,
      paddingTop: 12,
    },
    Viewb224489a: {
      alignItems: 'center',
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      marginLeft: 12,
      marginRight: 12,
      paddingLeft: 6,
      paddingRight: 6,
    },
    Viewbe073bf8: {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      flexGrow: 1,
      flexShrink: 0,
      left: 0,
      right: 0,
      top: 0,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewf8304bf6: { marginTop: 12 },
    screen: { flexGrow: 1, flexShrink: 0 },
  });

export default withTheme(Screen02StatusOwnedScreenBanner);
