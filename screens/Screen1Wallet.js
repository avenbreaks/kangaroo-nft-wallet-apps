import React from 'react';
import Images from '../config/Images';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen1Wallet = props => {
  const { theme } = props;

  const [visible, setVisible] = React.useState(false);

  return (
    <ScreenContainer hasTopSafeArea={true}>
      {/* Header View */}
      <View style={styles(theme).Viewdbf79098}>
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
      </View>
      {/* Content Scroll Frame */}
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        {/* Featured Frame */}
        <View style={styles(theme).Viewf1fb2701}>
          {/* Title Featured */}
          <Text style={styles(theme).Texta16ac0d0}>{'Connect To Wallet'}</Text>
          {/* Description Featured */}
          <Text style={styles(theme).Text42fc7196}>
            {
              'Select the wallet list below, then scan the QR code that appears using your cellphone.'
            }
          </Text>
        </View>
        {/* Wallet Frame */}
        <View>
          {/* Touchable Frame */}
          <View>
            <Touchable
              onPress={() => {
                try {
                  setVisible(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Wallet Record Frame */}
              <View style={styles(theme).View776b5f67}>
                {/* Wallet Option Icon */}
                <Image
                  style={styles(theme).Imagece457b8a}
                  resizeMode={'cover'}
                  source={Images.Image22}
                />
                {/* Option TItle */}
                <Text style={styles(theme).Text3dd98214}>{'Meta Mask'}</Text>
                {/* Right Icon Frame */}
                <View>
                  <Icon
                    size={18}
                    name={'AntDesign/right'}
                    color={theme.colors.nFTTimeUIBlack}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View>
            <Touchable
              onPress={() => {
                try {
                  setVisible(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Wallet Record Frame */}
              <View style={styles(theme).View776b5f67}>
                {/* Wallet Option Icon */}
                <Image
                  style={styles(theme).Imagece457b8a}
                  resizeMode={'cover'}
                  source={Images.Image23}
                />
                {/* Option TItle */}
                <Text style={styles(theme).Text3dd98214}>
                  {'Coinbase Wallet'}
                </Text>
                {/* Right Icon Frame */}
                <View>
                  <Icon
                    name={'AntDesign/right'}
                    size={18}
                    color={theme.colors.nFTTimeUIBlack}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View>
            <Touchable>
              {/* Wallet Record Frame */}
              <View style={styles(theme).View776b5f67}>
                {/* Wallet Option Icon */}
                <Image
                  style={styles(theme).Imagece457b8a}
                  resizeMode={'cover'}
                  source={Images.Image24}
                />
                {/* Option TItle */}
                <Text style={styles(theme).Text3dd98214}>
                  {'WalletConnect'}
                </Text>
                {/* Right Icon Frame */}
                <View>
                  <Icon
                    name={'AntDesign/right'}
                    size={18}
                    color={theme.colors.nFTTimeUIBlack}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View>
            <Touchable>
              {/* Wallet Record Frame */}
              <View style={styles(theme).View776b5f67}>
                {/* Wallet Option Icon */}
                <Image
                  style={styles(theme).Imagece457b8a}
                  resizeMode={'cover'}
                  source={Images.Image25}
                />
                {/* Option TItle */}
                <Text style={styles(theme).Text3dd98214}>{'Fortmatic'}</Text>
                {/* Right Icon Frame */}
                <View>
                  <Icon
                    name={'AntDesign/right'}
                    size={18}
                    color={theme.colors.nFTTimeUIBlack}
                  />
                </View>
              </View>
            </Touchable>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={visible}
        animationType={'slide'}
        presentationStyle={'overFullScreen'}
        transparent={true}
      >
        {/* Transparent Box Frame */}
        <View style={styles(theme).Viewb0dee209} />
        {/* Modal Frame */}
        <View style={styles(theme).Viewb58b1749}>
          {/* Header Frame */}
          <View style={styles(theme).View330ddba2}>
            {/* Title Modal */}
            <Text style={styles(theme).Text33982b63}>{'Scan QR Code'}</Text>

            <Touchable
              onPress={() => {
                try {
                  setVisible(false);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Flex Attribute */}
              <View>
                <Icon
                  size={18}
                  name={'AntDesign/close'}
                  color={theme.colors.nFTTimeUIBlack}
                />
              </View>
            </Touchable>
          </View>
          {/* QR Frame */}
          <View style={styles(theme).View39912261}>
            <Image
              style={styles(theme).Imageeb351363}
              resizeMode={'cover'}
              source={Images.QRCode}
            />
          </View>
          {/* Instructions Frame */}
          <View style={styles(theme).Viewf7518a4f}>
            {/* Title Modal */}
            <Text style={styles(theme).Text33982b63}>{'Scan Me!'}</Text>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImage8bd683a8: { marginRight: 6 },
    Iconda2fc39f: { marginLeft: 6 },
    Imagece457b8a: { height: 30, width: 30 },
    Imageeb351363: { height: 319, width: 319 },
    Text33982b63: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontWeight: '600',
    },
    Text3dd98214: {
      color: theme.colors.nFTTimeUIBlack,
      flex: 1,
      flexGrow: 1,
      flexShrink: 0,
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 18,
      marginLeft: 15,
    },
    Text42fc7196: {
      color: theme.colors.nFTTIMEIcons,
      fontFamily: 'System',
      fontWeight: '400',
      marginTop: 23,
    },
    Text6187d789: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginRight: 6,
    },
    Texta16ac0d0: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 30,
      fontWeight: '600',
    },
    Textada5c16a: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 24,
    },
    View330ddba2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
      marginLeft: 21,
      marginRight: 21,
      paddingBottom: 21,
      paddingTop: 21,
    },
    View39912261: { alignItems: 'center' },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View6a955cc3: { justifyContent: 'center' },
    View776b5f67: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEDarkWhite,
      flexDirection: 'row',
      marginLeft: 21,
      marginRight: 21,
      paddingBottom: 25,
      paddingTop: 25,
    },
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
    Viewb0dee209: {
      backgroundColor: theme.colors.nFTTimeUIBlack,
      bottom: -10,
      flexGrow: 1,
      flexShrink: 0,
      opacity: 0.61,
    },
    Viewb58b1749: {
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
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
    Viewf1fb2701: {
      marginBottom: 15,
      paddingLeft: 21,
      paddingRight: 21,
      paddingTop: 37,
    },
    Viewf7518a4f: {
      alignItems: 'center',
      marginTop: 8,
      paddingBottom: 21,
      paddingTop: 21,
    },
  });

export default withTheme(Screen1Wallet);
