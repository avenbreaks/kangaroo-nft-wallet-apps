import React from 'react';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen1CreateNFTUpload = props => {
  const { theme } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
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
          <Text style={styles(theme).Texta16ac0d0}>{'Create Your NFT!'}</Text>
          {/* Description Featured */}
          <Text style={styles(theme).Text42fc7196}>
            {
              'Sign up for our regular newsletter for news, insight, \nnew product releases & more.'
            }
          </Text>
        </View>
        {/* Upload Frame */}
        <View>
          {/* Details Frame */}
          <View style={styles(theme).Viewa93cf769}>
            {/* Title */}
            <Text style={styles(theme).Text0e5d6ba6}>{'Upload File'}</Text>
            {/* Description */}
            <Text style={styles(theme).Textf7b923f0}>
              {'Drag or choose your file to upload'}
            </Text>
          </View>
          {/* Touchable Frame */}
          <View style={styles(theme).View39912261}>
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await Utils.openImagePicker({});
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              {/* Upload Details Frame */}
              <View style={styles(theme).View9a07628e}>
                {/* Top Line */}
                <View>
                  <Icon
                    style={styles(theme).Icon835213c1}
                    size={24}
                    name={'MaterialCommunityIcons/folder-upload'}
                    color={theme.colors.nFTTIMEBorder}
                  />
                </View>
                {/* Bottom Line */}
                <View>
                  <Text style={styles(theme).Text2224a599}>
                    {'PNG, GIF, WEBP or MP4, Max 1Gb'}
                  </Text>
                </View>
              </View>
            </Touchable>
          </View>
          {/* Information Form Frame */}
          <View style={styles(theme).View2df515b8}>
            {/* Title */}
            <Text style={styles(theme).Text0e5d6ba6}>{'Item Information'}</Text>
            {/* Record Frame */}
            <View style={styles(theme).View9b8b22e8}>
              {/* Data Title */}
              <Text style={styles(theme).Textf6c7c829}>{'Item Name'}</Text>
              {/* Data Description */}
              <Text style={styles(theme).Text9a3917c6}>
                {'Ex : Awesome Artwork!'}
              </Text>
            </View>
            {/* Record Frame */}
            <View style={styles(theme).View9b8b22e8}>
              {/* Data Title */}
              <Text style={styles(theme).Textf6c7c829}>{'Description'}</Text>
              {/* Data Description */}
              <Text style={styles(theme).Text9a3917c6}>
                {'Ex : After purchasing you will able to recived the logo'}
              </Text>
            </View>
            {/* Record Frame */}
            <View style={styles(theme).View2ec0d364}>
              {/* Left Side */}
              <View style={styles(theme).View0419a0dc}>
                {/* Data Title */}
                <Text style={styles(theme).Textf6c7c829}>{'Royalty'}</Text>
                {/* Data Description */}
                <Text style={styles(theme).Text9a3917c6}>
                  {'Choose Royalty'}
                </Text>
              </View>
              {/* Right Side */}
              <View>
                {/* Flex Attribute */}
                <View>
                  <Icon
                    size={18}
                    name={'AntDesign/down'}
                    color={theme.colors.nFTTIMEIcons}
                  />
                </View>
              </View>
            </View>
            {/* Record Frame */}
            <View style={styles(theme).View9b8b22e8}>
              {/* Data Title */}
              <Text style={styles(theme).Textf6c7c829}>{'Size'}</Text>
              {/* Data Description */}
              <Text style={styles(theme).Text9a3917c6}>
                {'Ex : 1000 x 1000'}
              </Text>
            </View>
            {/* Record Frame */}
            <View style={styles(theme).View9b8b22e8}>
              {/* Data Title */}
              <Text style={styles(theme).Textf6c7c829}>{'Property'}</Text>
              {/* Data Description */}
              <Text style={styles(theme).Text9a3917c6}>{'Ex : Property'}</Text>
            </View>
          </View>
          {/* NFT Configuration Frame */}
          <View style={styles(theme).View36d39c07}>
            {/* Record Frame */}
            <View style={styles(theme).View2ec0d364}>
              {/* Left Side */}
              <View style={styles(theme).View0419a0dc}>
                {/* Title */}
                <Text style={styles(theme).Text0e5d6ba6}>{'Put On Sale'}</Text>
                {/* Data Description */}
                <Text style={styles(theme).Text9a3917c6}>
                  {"You'll receive bids on this item."}
                </Text>
              </View>
              {/* Right Side */}
              <View>
                <Switch
                  onValueChange={newSwitchValue => {
                    try {
                      setSwitchValue(newSwitchValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={switchValue}
                  inactiveThumbColor={theme.colors.background}
                  activeTrackColor={theme.colors.nFTTIMELimeGreen}
                  inactiveTrackColor={theme.colors.nFTTIMEDarkWhite}
                  activeThumbColor={theme.colors.nFTTimeUIBlack}
                />
              </View>
            </View>
            {/* Record Frame */}
            <View style={styles(theme).View2ec0d364}>
              {/* Left Side */}
              <View style={styles(theme).View0419a0dc}>
                {/* Title */}
                <Text style={styles(theme).Text0e5d6ba6}>
                  {'Instant sale price'}
                </Text>
                {/* Data Description */}
                <Text style={styles(theme).Text9a3917c6}>
                  {
                    'Enter the price for which the item will \nbe instantly sold.'
                  }
                </Text>
              </View>
              {/* Right Side */}
              <View>
                <Switch
                  onValueChange={newSwitchValue => {
                    try {
                      setSwitchValue(newSwitchValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={switchValue}
                  inactiveThumbColor={theme.colors.background}
                  activeTrackColor={theme.colors.nFTTIMELimeGreen}
                  inactiveTrackColor={theme.colors.nFTTIMEDarkWhite}
                  activeThumbColor={theme.colors.nFTTimeUIBlack}
                />
              </View>
            </View>
            {/* Record Frame */}
            <View style={styles(theme).View2ec0d364}>
              {/* Left Side */}
              <View style={styles(theme).View0419a0dc}>
                {/* Title */}
                <Text style={styles(theme).Text0e5d6ba6}>
                  {'Unlock once purchased'}
                </Text>
                {/* Data Description */}
                <Text style={styles(theme).Text9a3917c6}>
                  {'Content will be unlocked after successful\ntransaction.'}
                </Text>
              </View>
              {/* Right Side */}
              <View>
                <Switch
                  onValueChange={newSwitchValue => {
                    try {
                      setSwitchValue(newSwitchValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={switchValue}
                  inactiveThumbColor={theme.colors.background}
                  activeTrackColor={theme.colors.nFTTIMELimeGreen}
                  inactiveTrackColor={theme.colors.nFTTIMEDarkWhite}
                  activeThumbColor={theme.colors.nFTTimeUIBlack}
                />
              </View>
            </View>
          </View>
          {/* Submission Actions Frame */}
          <View style={styles(theme).View0b9f8397}>
            {/* Touchable Frame */}
            <View style={styles(theme).Viewcb0cbc07}>
              <Touchable
                onPress={() => {
                  try {
                    setVisible(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Button Frame */}
                <View style={styles(theme).View2712bdc6}>
                  {/* Label */}
                  <Text style={styles(theme).Text57ba284c}>{'Preview'}</Text>
                </View>
              </Touchable>
            </View>
            {/* Touchable Frame */}
            <View style={styles(theme).Viewcb0cbc07}>
              <Touchable>
                {/* Button Frame */}
                <View style={styles(theme).View6c9258fb}>
                  {/* Label */}
                  <Text style={styles(theme).Text57ba284c}>
                    {'Create Item'}
                  </Text>
                </View>
              </Touchable>
            </View>
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
            <Text style={styles(theme).Text25864f14}>{'Preview Item'}</Text>

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
                  name={'AntDesign/close'}
                  size={18}
                  color={theme.colors.nFTTimeUIBlack}
                />
              </View>
            </Touchable>
          </View>
          {/* Item Preview Frame */}
          <View style={styles(theme).View39912261}>
            {/* Unique Content Frame */}
            <View style={styles(theme).View6ef4e5f8}>
              {/* Flex Attribute */}
              <View style={styles(theme).View39912261}>
                {/* Hot Bid Image */}
                <Image
                  style={styles(theme).Imageb8453a4d}
                  source={Images.Rectangle2899}
                  resizeMode={'cover'}
                />
              </View>
              {/* Floating Card Frame */}
              <View style={styles(theme).Viewcf2883c1}>
                {/* Absolute Positioning for Circle */}
                <View style={styles(theme).View432fe2c8}>
                  <Circle size={38} bgColor={theme.colors.nFTTIMEBlack}>
                    <Image
                      style={styles(theme).Imagec4a1cf72}
                      source={Images.DirectUp}
                      resizeMode={'stretch'}
                    />
                  </Circle>
                </View>
                {/* Top Line Frame */}
                <View style={styles(theme).View90004bf9}>
                  {/* Left Side */}
                  <View style={styles(theme).View0419a0dc}>
                    {/* Card Name */}
                    <Text style={styles(theme).Text80aad2ed}>
                      {'Abstrack Plain Waves #001'}
                    </Text>
                  </View>
                  {/* Right Side */}
                  <View>
                    {/* Flex Attribute */}
                    <View>
                      <Icon
                        name={'AntDesign/heart'}
                        color={theme.colors.nFTTIMEStoneGray}
                        size={18}
                      />
                    </View>
                  </View>
                </View>
                {/* Second Line Frame */}
                <View style={styles(theme).View90004bf9}>
                  {/* Left Side Frame */}
                  <View style={styles(theme).View0419a0dc}>
                    {/* Title */}
                    <Text style={styles(theme).Textd613d2e2}>
                      {'Reserve Price'}
                    </Text>
                    {/* Combo Content */}
                    <View style={styles(theme).Viewce4accf0}>
                      {/* Flex Attribute */}
                      <View>
                        <Icon
                          name={'MaterialCommunityIcons/ethereum'}
                          size={18}
                          color={theme.colors.nFTTIMEBlack}
                        />
                      </View>
                      {/* Content */}
                      <Text style={styles(theme).Texta4da07b9}>{'0 ETH'}</Text>
                    </View>
                  </View>
                  {/* Right Side Frame */}
                  <View style={styles(theme).View0419a0dc}>
                    {/* Title */}
                    <Text style={styles(theme).Textd613d2e2}>{'Likes'}</Text>
                    {/* Combo Content */}
                    <View style={styles(theme).Viewce4accf0}>
                      {/* Flex Attribute */}
                      <View>
                        <Icon
                          name={'Entypo/heart'}
                          size={18}
                          color={theme.colors.nFTTIMEBlack}
                        />
                      </View>
                      {/* Content */}
                      <Text style={styles(theme).Texta4da07b9}>{'0'}</Text>
                    </View>
                  </View>
                </View>
                {/* Third Lane Frane */}
                <View style={styles(theme).View43b593eb}>
                  {/* Profile Frame */}
                  <View style={styles(theme).View43b593eb}>
                    {/* Left Side Frame */}
                    <View style={styles(theme).Viewc7d302eb}>
                      {/* profileImage */}
                      <CircleImage
                        source={Images.JulianWanWNoLnJo7tS8Unsplash}
                        size={24}
                      />
                    </View>
                    {/* Right Side Frame */}
                    <View>
                      {/* Profile Details Screen */}
                      <View>
                        {/* User Name */}
                        <Text style={styles(theme).Texte98e2ed2}>
                          {'Creator'}
                        </Text>
                        {/* User Handle */}
                        <Text style={styles(theme).Text3f610bb9}>
                          {'@maliketh'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {/* Profile Frame */}
                  <View style={styles(theme).View43b593eb}>
                    {/* Left Side Frame */}
                    <View style={styles(theme).Viewc7d302eb}>
                      {/* profileImage */}
                      <CircleImage
                        source={Images.JulianWanWNoLnJo7tS8Unsplash}
                        size={24}
                      />
                    </View>
                    {/* Right Side Frame */}
                    <View>
                      {/* Profile Details Screen */}
                      <View>
                        {/* User Name */}
                        <Text style={styles(theme).Texte98e2ed2}>
                          {'Owner'}
                        </Text>
                        {/* User Handle */}
                        <Text style={styles(theme).Text3f610bb9}>
                          {'@maliketh'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Instructions Frame */}
          <View style={styles(theme).Viewf7518a4f}>
            {/* Title Modal */}
            <Text style={styles(theme).Text33982b63}> </Text>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImage8bd683a8: { marginRight: 6 },
    Icon835213c1: { marginBottom: 6 },
    Iconda2fc39f: { marginLeft: 6 },
    Imageb8453a4d: { height: 430, width: 319 },
    Imagec4a1cf72: { height: 18, width: 18 },
    Text0e5d6ba6: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 14,
      marginBottom: 8,
    },
    Text2224a599: {
      color: theme.colors.nFTTIMEBorder,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '500',
      lineHeight: 12,
    },
    Text25864f14: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontWeight: '600',
    },
    Text33982b63: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontWeight: '600',
    },
    Text3f610bb9: {
      color: theme.colors.nFTTIMEBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '500',
    },
    Text42fc7196: {
      color: theme.colors.nFTTIMEIcons,
      fontFamily: 'System',
      fontWeight: '400',
      marginTop: 23,
    },
    Text57ba284c: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 18,
    },
    Text6187d789: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginRight: 6,
    },
    Text80aad2ed: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontWeight: '600',
      lineHeight: 23,
    },
    Text9a3917c6: {
      color: theme.colors.nFTTIMEBorder,
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '400',
      lineHeight: 11,
      marginTop: 11,
    },
    Texta16ac0d0: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 30,
      fontWeight: '600',
    },
    Texta4da07b9: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '600',
      marginLeft: 6,
    },
    Textada5c16a: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 24,
    },
    Textd613d2e2: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '400',
      marginBottom: 6,
    },
    Texte98e2ed2: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 9,
      fontWeight: '600',
    },
    Textf6c7c829: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '600',
      lineHeight: 11,
    },
    Textf7b923f0: {
      color: theme.colors.nFTTIMEBorder,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '400',
      lineHeight: 12,
    },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View0b9f8397: { marginBottom: 36, marginLeft: 21, marginRight: 21 },
    View2712bdc6: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEDarkWhite,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 9,
      paddingTop: 9,
    },
    View2df515b8: {
      marginLeft: 21,
      marginRight: 21,
      marginTop: 21,
      paddingBottom: 15,
      paddingTop: 15,
    },
    View2ec0d364: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEDarkWhite,
      flexDirection: 'row',
      paddingBottom: 18,
      paddingTop: 12,
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
    View36d39c07: { marginLeft: 21, marginRight: 21 },
    View39912261: { alignItems: 'center' },
    View432fe2c8: {
      bottom: -30,
      flexGrow: 0,
      flexShrink: 0,
      position: 'absolute',
      right: -18,
    },
    View43b593eb: { flexDirection: 'row', flexGrow: 1, flexShrink: 0 },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View6a955cc3: { justifyContent: 'center' },
    View6c9258fb: {
      alignItems: 'center',
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      borderRadius: 8,
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 9,
      paddingTop: 9,
    },
    View6ef4e5f8: {
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      flexGrow: 1,
      flexShrink: 0,
      marginTop: 6,
    },
    View90004bf9: { flexDirection: 'row', paddingBottom: 15 },
    View906fab56: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 12,
    },
    View9a07628e: {
      alignItems: 'center',
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      borderRadius: 12,
      height: 250,
      justifyContent: 'center',
      width: 319,
    },
    View9b8b22e8: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEDarkWhite,
      paddingBottom: 18,
      paddingTop: 12,
    },
    Viewa678936a: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewa93cf769: {
      marginLeft: 21,
      marginRight: 21,
      paddingBottom: 15,
      paddingTop: 15,
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
    Viewc7d302eb: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 6,
    },
    Viewcb0cbc07: { marginBottom: 21 },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewcf2883c1: {
      backgroundColor: theme.colors.nFTWhiteV2,
      borderRadius: 15,
      marginLeft: 36,
      marginRight: 36,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
      top: -60,
    },
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

export default withTheme(Screen1CreateNFTUpload);
