import React from 'react';
import Images from '../config/Images';
import {
  AccordionGroup,
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen1FAQ = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasTopSafeArea={true}>
      {/* Header View */}
      <View style={styles(theme).Viewdbf79098}>
        {/* Navigation Component with Back */}
        <View style={styles(theme).View906fab56}>
          {/* Left Frame */}
          <View style={styles(theme).Viewe5c1fe2d}>
            {/* Touchable Frame */}
            <View style={styles(theme).View4f6009be}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen0Profile');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Flex Attribute */}
                <View style={styles(theme).View0419a0dc}>
                  <Icon
                    color={theme.colors.nFTTIMEPrimaryBlack}
                    name={'Ionicons/chevron-back'}
                    size={18}
                  />
                </View>
              </Touchable>
            </View>
            {/* LOGO Frame */}
            <View style={styles(theme).View6a955cc3}>
              {/* LOGO */}
              <Text style={styles(theme).Textdb782106}>{'dbNFT.'}</Text>
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
        <View style={styles(theme).Viewb792de4b}>
          {/* Title Featured */}
          <Text style={styles(theme).Texta16ac0d0}>
            {'Frequently asked questions'}
          </Text>
        </View>
        {/* FAQ List Frame */}
        <View style={styles(theme).View305e32fb}>
          {/* Touchable Frame */}
          <View style={styles(theme).View378b3d40}>
            <Touchable>
              {/* FAQ Record Frame Active */}
              <View style={styles(theme).Viewe5e67ef3}>
                {/* FAQ Text */}
                <Text style={styles(theme).Text03791f6f}>
                  {'Ordering and Support'}
                </Text>
                {/* Icon Flex Attributes */}
                <View>
                  {/* Right Arrow */}
                  <Icon
                    name={'AntDesign/arrowright'}
                    size={18}
                    color={theme.colors.nFTTIMEBlack}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View style={styles(theme).View378b3d40}>
            <Touchable>
              {/* FAQ Record Frame Inactive */}
              <View style={styles(theme).Viewff15e86f}>
                {/* FAQ Text */}
                <Text style={styles(theme).Textb0543284}>
                  {'General Support'}
                </Text>
                {/* Icon Flex Attributes */}
                <View></View>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View style={styles(theme).View378b3d40}>
            <Touchable>
              {/* FAQ Record Frame Inactive */}
              <View style={styles(theme).Viewff15e86f}>
                {/* FAQ Text */}
                <Text style={styles(theme).Textb0543284}>
                  {'Collector and Creator'}
                </Text>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View style={styles(theme).View378b3d40}>
            <Touchable>
              {/* FAQ Record Frame Inactive */}
              <View style={styles(theme).Viewff15e86f}>
                {/* FAQ Text */}
                <Text style={styles(theme).Textb0543284}>{'Product'}</Text>
              </View>
            </Touchable>
          </View>
        </View>

        <AccordionGroup
          style={styles(theme).AccordionGroup21cc2d3b}
          label={'How does it work'}
          iconSize={24}
          openColor={theme.colors.nFTTIMEBlack}
          expanded={true}
          caretColor={theme.colors.nFTTIMEBlack}
          closedColor={theme.colors.nFTTIMEBlack}
        >
          <AccordionGroup
            style={styles(theme).AccordionGroupd6798675}
            label={
              "To make your first listing, you'll have to first mint the NFT. Set the price of the artwork in Enefty, set the royalty, and mint the NFT. The only fees to be paid here are the gas fees."
            }
            caretSize={24}
            iconSize={24}
            expanded={false}
            openColor={theme.colors.nFTTIMEBlack}
            caretColor={theme.colors.nFTTIMEBlack}
            closedColor={theme.colors.nFTTIMEBlack}
          >
            {/* Border */}
            <View style={styles(theme).View71b74763} />
          </AccordionGroup>
          {/* Border */}
          <View style={styles(theme).View71b74763} />
        </AccordionGroup>

        <AccordionGroup
          style={styles(theme).AccordionGroup21cc2d3b}
          label={'How to start with NFT Time'}
          iconSize={24}
          expanded={false}
          caretColor={theme.colors.nFTTIMEBlack}
          closedColor={theme.colors.nFTTIMEBlack}
          openColor={theme.colors.nFTTIMEBlack}
        >
          <AccordionGroup
            style={styles(theme).AccordionGroupd6798675}
            label={
              "To make your first listing, you'll have to first mint the NFT. Set the price of the artwork in Enefty, set the royalty, and mint the NFT. The only fees to be paid here are the gas fees."
            }
            caretSize={24}
            iconSize={24}
            expanded={false}
            caretColor={theme.colors.nFTTIMEBlack}
            closedColor={theme.colors.nFTTIMEBlack}
            openColor={theme.colors.nFTTIMEBlack}
          >
            {/* Border */}
            <View style={styles(theme).View71b74763} />
          </AccordionGroup>
        </AccordionGroup>

        <AccordionGroup
          style={styles(theme).AccordionGroup21cc2d3b}
          label={'How to connect wallet'}
          caretColor={theme.colors.nFTTIMEBlack}
          closedColor={theme.colors.nFTTIMEBlack}
          iconSize={24}
          expanded={false}
          openColor={theme.colors.nFTTIMEBlack}
        >
          <AccordionGroup
            style={styles(theme).AccordionGroupd6798675}
            label={
              "To make your first listing, you'll have to first mint the NFT. Set the price of the artwork in Enefty, set the royalty, and mint the NFT. The only fees to be paid here are the gas fees."
            }
            caretSize={24}
            iconSize={24}
            expanded={false}
            caretColor={theme.colors.nFTTIMEBlack}
            closedColor={theme.colors.nFTTIMEBlack}
            openColor={theme.colors.nFTTIMEBlack}
          >
            {/* Border */}
            <View style={styles(theme).View71b74763} />
          </AccordionGroup>
        </AccordionGroup>

        <AccordionGroup
          style={styles(theme).AccordionGroup21cc2d3b}
          label={'How to buy it'}
          iconSize={24}
          expanded={false}
          caretColor={theme.colors.nFTTIMEBlack}
          closedColor={theme.colors.nFTTIMEBlack}
          openColor={theme.colors.nFTTIMEBlack}
        >
          <AccordionGroup
            style={styles(theme).AccordionGroupd6798675}
            label={
              "To make your first listing, you'll have to first mint the NFT. Set the price of the artwork in Enefty, set the royalty, and mint the NFT. The only fees to be paid here are the gas fees."
            }
            caretSize={24}
            iconSize={24}
            expanded={false}
            caretColor={theme.colors.nFTTIMEBlack}
            closedColor={theme.colors.nFTTIMEBlack}
            openColor={theme.colors.nFTTIMEBlack}
          >
            {/* Border */}
            <View style={styles(theme).View71b74763} />
          </AccordionGroup>
        </AccordionGroup>
        {/* Hot Bid Frame */}
        <View style={styles(theme).Viewd52acae8}>
          {/* Heading Frame */}
          <View style={styles(theme).Viewf0186fe1}>
            {/* Title */}
            <Text style={styles(theme).Text7d31d352}>{'Hot Bid'}</Text>
            {/* Description for Bid */}
            <Text style={styles(theme).Text7d60d38e}>
              {'We maintain the quality of the goods sold with strict approval'}
            </Text>
          </View>
          {/* Unique Content Frame */}
          <View style={styles(theme).View38fc8d2e}>
            {/* Flex Attribute */}
            <View style={styles(theme).View39912261}>
              {/* Hot Bid Image */}
              <Image
                style={styles(theme).Imageb8453a4d}
                resizeMode={'cover'}
                source={Images.Rectangle2899}
              />
            </View>
            {/* Floating Card Frame */}
            <View style={styles(theme).Viewcf2883c1}>
              {/* Absolute Positioning for Circle */}
              <View style={styles(theme).View432fe2c8}>
                <Circle bgColor={theme.colors.nFTTIMEBlack} size={38}>
                  <Image
                    style={styles(theme).Imagec4a1cf72}
                    resizeMode={'stretch'}
                    source={Images.DirectUp}
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
                      size={18}
                      color={theme.colors.nFTTIMEStoneGray}
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
                        size={18}
                        name={'MaterialCommunityIcons/ethereum'}
                        color={theme.colors.nFTTIMEBlack}
                      />
                    </View>
                    {/* Content */}
                    <Text style={styles(theme).Texta4da07b9}>{'50 ETH'}</Text>
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
                        size={18}
                        name={'Entypo/heart'}
                        color={theme.colors.nFTTIMEBlack}
                      />
                    </View>
                    {/* Content */}
                    <Text style={styles(theme).Texta4da07b9}>{'120'}</Text>
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
                      <Text style={styles(theme).Texte98e2ed2}>{'Owner'}</Text>
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
      </ScrollView>
      {/* Footer View */}
      <View style={styles(theme).View0419a0dc}>
        {/* Working Frame */}
        <View />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    AccordionGroup21cc2d3b: {
      color: theme.colors.nFTTIMEBlack,
      fontFamily: 'System',
      fontSize: 19,
      fontWeight: '600',
      lineHeight: 22,
      paddingBottom: 36,
      paddingLeft: 21,
      paddingRight: 21,
      paddingTop: 36,
    },
    AccordionGroupd6798675: {
      color: theme.colors.nFTTIMEBlack,
      fontFamily: 'System',
      fontSize: 13,
      fontWeight: '400',
      lineHeight: 18,
      marginBottom: 12,
      paddingBottom: 8,
      paddingLeft: 21,
      paddingRight: 21,
      paddingTop: 8,
    },
    CircleImage8bd683a8: { marginRight: 6 },
    Iconda2fc39f: { marginLeft: 6 },
    Imageb8453a4d: { height: 430, width: 319 },
    Imagec4a1cf72: { height: 18, width: 18 },
    Text03791f6f: {
      color: theme.colors.nFTTIMEBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '500',
      textTransform: 'uppercase',
    },
    Text3f610bb9: {
      color: theme.colors.nFTTIMEBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '500',
    },
    Text6187d789: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginRight: 6,
    },
    Text7d31d352: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 23,
      fontWeight: '600',
      lineHeight: 34,
    },
    Text7d60d38e: {
      color: theme.colors.nFTTIMEDarkGray,
      fontFamily: 'System',
      fontWeight: '400',
      lineHeight: 21,
      marginTop: 6,
    },
    Text80aad2ed: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontWeight: '600',
      lineHeight: 23,
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
    Textb0543284: {
      color: theme.colors.nFTTIMEBorder,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '500',
      textTransform: 'uppercase',
    },
    Textd613d2e2: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '400',
      marginBottom: 6,
    },
    Textdb782106: {
      color: theme.colors.background,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 24,
      opacity: 0,
    },
    Texte98e2ed2: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 9,
      fontWeight: '600',
    },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View305e32fb: { paddingLeft: 21, paddingRight: 21, paddingTop: 18 },
    View378b3d40: { marginBottom: 12 },
    View38fc8d2e: {
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      flexGrow: 1,
      flexShrink: 0,
      marginTop: 36,
    },
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
    View71b74763: {
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      height: 1,
      marginBottom: 24,
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
    Viewa678936a: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewb792de4b: {
      paddingBottom: 18,
      paddingLeft: 21,
      paddingRight: 21,
      paddingTop: 36,
    },
    Viewc7d302eb: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 6,
    },
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
    Viewd52acae8: { paddingBottom: 36, paddingTop: 18 },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Viewe5c1fe2d: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginRight: 18,
    },
    Viewe5e67ef3: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEBlack,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 12,
      paddingTop: 12,
    },
    Viewf0186fe1: { paddingLeft: 21, paddingRight: 21 },
    Viewff15e86f: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 12,
      paddingTop: 12,
    },
  });

export default withTheme(Screen1FAQ);
