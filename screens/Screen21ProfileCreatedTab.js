import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen21ProfileCreatedTab = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer style={styles(theme).screen} hasTopSafeArea={true}>
      {/* Header Frame */}
      <View>
        {/* Navigation Component with Back */}
        <View style={styles(theme).View906fab56}>
          {/* Left Frame */}
          <View style={styles(theme).Viewe5c1fe2d}>
            {/* Touchable Frame */}
            <View style={styles(theme).View4f6009be}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen20AllCreators');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Flex Attribute */}
                <View style={styles(theme).View0419a0dc}>
                  <Icon
                    name={'Ionicons/chevron-back'}
                    size={18}
                    color={theme.colors.nFTTIMEPrimaryBlack}
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
      <ScrollView
        style={styles(theme).ScrollViewb284e5b0}
        contentContainerStyle={styles(theme).ScrollView4e34f380Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Banner Frame */}
        <View style={styles(theme).View70a61404}>
          {/* Banner Image Frame */}
          <ImageBackground
            style={styles(theme).ImageBackground24e58078}
            source={Images.BusinesspeopleMeetingOfficeWorking2}
            resizeMode={'cover'}
          >
            {/* Banner Details Frame */}
            <View style={styles(theme).View285fabf5}>
              {/* Touchable Frame */}
              <View style={styles(theme).View0419a0dc}>
                <Touchable>
                  {/* Detail List Frame */}
                  <View>
                    {/* Title */}
                    <Text style={styles(theme).Textda03c5f9}>
                      {'Followers'}
                    </Text>
                    {/* Data */}
                    <Text style={styles(theme).Text9445a248}>{'850'}</Text>
                  </View>
                </Touchable>
              </View>
              {/* Touchable Frame */}
              <View style={styles(theme).View0419a0dc}>
                <Touchable>
                  {/* Detail List Frame */}
                  <View>
                    {/* Title */}
                    <Text style={styles(theme).Textda03c5f9}>
                      {'Following'}
                    </Text>
                    {/* Data */}
                    <Text style={styles(theme).Text9445a248}>{'345'}</Text>
                  </View>
                </Touchable>
              </View>
              {/* Touchable Frame */}
              <View style={styles(theme).View0419a0dc}>
                <Touchable>
                  {/* Share Frame */}
                  <View style={styles(theme).View0419a0dc}>
                    {/* Share */}
                    <Icon
                      name={'Entypo/share-alternative'}
                      size={18}
                      color={theme.colors.nFTTIMEDividerDark}
                    />
                  </View>
                </Touchable>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* Profile Details Frame */}
        <View style={styles(theme).View1d6e5a5d}>
          {/* Top Line Frame */}
          <View style={styles(theme).Viewe7b6194a}>
            {/* Left Side */}
            <View>
              <CircleImage source={Images.Rectangle29001} size={50} />
            </View>
            {/* Right Side */}
            <View style={styles(theme).View7d342543}>
              {/* Name */}
              <Text style={styles(theme).Text6ab35098}>{'Wanda'}</Text>
              {/* Username */}
              <Text style={styles(theme).Text650273b0}>{'@wandada'}</Text>
            </View>
          </View>
          {/* Custom Quote Frame */}
          <View style={styles(theme).View8d989fb3}>
            {/* Quote */}
            <Text style={styles(theme).Text69ab5f82}>
              {'Create something awesome for you.'}
            </Text>
          </View>
          {/* CTA Frame v4.1 */}
          <View style={styles(theme).View2415ecc2}>
            {/* Touchable Frame */}
            <View style={styles(theme).Viewdbf79098}>
              <Touchable>
                {/* Left Frame */}
                <View style={styles(theme).Viewdce2fa13}>
                  {/* Label */}
                  <Text style={styles(theme).Text57662d98}>{'Follow'}</Text>
                </View>
              </Touchable>
            </View>
            {/* Touchable Frame */}
            <View style={styles(theme).Viewa57a6893}>
              <Touchable>
                {/* Secondary Frame */}
                <View style={styles(theme).View40d00674}>
                  {/* Flex Attribute */}
                  <View>
                    {/* Optional Icon */}
                    <Icon
                      name={'Feather/more-horizontal'}
                      size={12}
                      color={theme.colors.nFTTimeUIBlack}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
        {/* Menu 4 Tabs Frame */}
        <View style={styles(theme).View9bea70f7}>
          {/* Touchable Frame */}
          <View style={styles(theme).Viewbb87a310}>
            <Touchable>
              {/* Menu Option Frame */}
              <View style={styles(theme).Viewcde61486}>
                {/* Option */}
                <Text style={styles(theme).Text650273b0}>{'Created 57'}</Text>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View style={styles(theme).Viewbb87a310}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen22ProfileCollectedTab');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Menu Option Frame */}
              <View style={styles(theme).Viewc4214efc}>
                {/* Option */}
                <Text style={styles(theme).Texte3cbfe03}>{'Collected 20'}</Text>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View style={styles(theme).Viewbb87a310}>
            <Touchable>
              {/* Menu Option Frame */}
              <View style={styles(theme).Viewc4214efc}>
                {/* Option */}
                <Text style={styles(theme).Text65b277c7}>{'Split'}</Text>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View style={styles(theme).Viewbb87a310}>
            <Touchable>
              {/* Menu Option Frame */}
              <View style={styles(theme).Viewc4214efc}>
                {/* Option */}
                <Text style={styles(theme).Text65b277c7}>{'Offers'}</Text>
              </View>
            </Touchable>
          </View>
        </View>
        {/* Border */}
        <View style={styles(theme).Viewd9786ecb} />
        <ExampleDataApi.FetchGrabDataPointsGET>
          {({ loading, error, data, refetchGrabDataPoints }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <FlatList
                data={fetchData}
                listKey={'3VCAdM1h'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Unique Content Frame */}
                      <View style={styles(theme).Viewe5cab837}>
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
                            <Circle
                              bgColor={theme.colors.nFTTIMEBlack}
                              size={38}
                            >
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
                                    name={'MaterialCommunityIcons/ethereum'}
                                    size={18}
                                    color={theme.colors.nFTTIMEBlack}
                                  />
                                </View>
                                {/* Content */}
                                <Text style={styles(theme).Texta4da07b9}>
                                  {'50 ETH'}
                                </Text>
                              </View>
                            </View>
                            {/* Right Side Frame */}
                            <View style={styles(theme).View0419a0dc}>
                              {/* Title */}
                              <Text style={styles(theme).Textd613d2e2}>
                                {'Likes'}
                              </Text>
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
                                <Text style={styles(theme).Texta4da07b9}>
                                  {'120'}
                                </Text>
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
                    </>
                  );
                }}
                style={styles(theme).FlatList989db244}
                contentContainerStyle={styles(theme).FlatListc992f941Content}
                numColumns={1}
              />
            );
          }}
        </ExampleDataApi.FetchGrabDataPointsGET>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImage8bd683a8: { marginRight: 6 },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Iconda2fc39f: { marginLeft: 6 },
    ImageBackground24e58078: {
      height: 230,
      justifyContent: 'flex-end',
      width: 319,
    },
    Imageb8453a4d: { height: 430, width: 319 },
    Imagec4a1cf72: { height: 18, width: 18 },
    ScrollView4e34f380Content: { flexShrink: 0 },
    ScrollViewb284e5b0: { flexGrow: 1 },
    Text3f610bb9: {
      color: theme.colors.nFTTIMEBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '500',
    },
    Text57662d98: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '600',
      lineHeight: 17,
    },
    Text6187d789: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginRight: 6,
    },
    Text650273b0: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
    },
    Text65b277c7: {
      color: theme.colors.nFTTIMEStoneGray,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
    },
    Text69ab5f82: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
    },
    Text6ab35098: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 18,
      fontWeight: '600',
    },
    Text80aad2ed: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontWeight: '600',
      lineHeight: 23,
    },
    Text9445a248: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontWeight: '500',
      marginTop: 6,
    },
    Texta4da07b9: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '600',
      marginLeft: 6,
    },
    Textd613d2e2: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '400',
      marginBottom: 6,
    },
    Textda03c5f9: {
      color: theme.colors.nFTTIMEBorder,
      fontFamily: 'System',
      fontWeight: '500',
    },
    Textdb782106: {
      color: theme.colors.background,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 24,
      opacity: 0,
    },
    Texte3cbfe03: {
      color: theme.colors.nFTTIMEStoneGray,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '500',
    },
    Texte98e2ed2: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 9,
      fontWeight: '600',
    },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View1d6e5a5d: { marginBottom: 23, marginTop: 23 },
    View2415ecc2: { flexDirection: 'row', marginLeft: 24, marginRight: 24 },
    View285fabf5: {
      backgroundColor: theme.colors.background,
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 15,
      marginLeft: 15,
      marginRight: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
    },
    View39912261: { alignItems: 'center' },
    View40d00674: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEDarkWhite,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      minHeight: 38,
      paddingLeft: 18,
      paddingRight: 18,
    },
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
    View70a61404: {
      alignItems: 'center',
      flexGrow: 1,
      flexShrink: 0,
      marginTop: 18,
    },
    View7d342543: { marginLeft: 15 },
    View8d989fb3: { marginBottom: 23, marginLeft: 24, marginRight: 24 },
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
    View9bea70f7: { flexDirection: 'row', marginLeft: 23 },
    Viewa57a6893: { flexGrow: 0, flexShrink: 0, marginLeft: 15 },
    Viewa678936a: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewbb87a310: { marginRight: 18 },
    Viewc4214efc: {
      paddingBottom: 15,
      paddingLeft: 11,
      paddingRight: 11,
      paddingTop: 15,
    },
    Viewc7d302eb: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 6,
    },
    Viewcde61486: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 15,
      paddingLeft: 11,
      paddingRight: 11,
      paddingTop: 15,
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
    Viewd9786ecb: {
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      height: 1,
      marginBottom: 15,
    },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Viewdce2fa13: {
      alignItems: 'center',
      backgroundColor: theme.colors.nFTTIMELimeGreen,
      borderRadius: 8,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      maxHeight: 38,
      minHeight: 38,
      paddingBottom: 11,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 11,
    },
    Viewe5c1fe2d: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginRight: 18,
    },
    Viewe5cab837: {
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      flexGrow: 1,
      flexShrink: 0,
    },
    Viewe7b6194a: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginBottom: 23,
      marginLeft: 24,
      marginRight: 24,
    },
    screen: { flexGrow: 1, flexShrink: 0 },
  });

export default withTheme(Screen21ProfileCreatedTab);
