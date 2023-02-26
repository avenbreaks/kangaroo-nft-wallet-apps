import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import {
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

const Screen22ProfileCollectedTab = props => {
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
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        {/* Banner Frame */}
        <View style={styles(theme).View70a61404}>
          {/* Banner Image Frame */}
          <ImageBackground
            style={styles(theme).ImageBackground24e58078}
            resizeMode={'cover'}
            source={Images.BusinesspeopleMeetingOfficeWorking2}
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
          {/* CTA Frame v3.1 */}
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
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen21ProfileCreatedTab');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Menu Option Frame */}
              <View style={styles(theme).Viewcde61486}>
                {/* Option */}
                <Text style={styles(theme).Text65b277c7}>{'Created 57'}</Text>
              </View>
            </Touchable>
          </View>
          {/* Touchable Frame */}
          <View style={styles(theme).Viewbb87a310}>
            <Touchable>
              {/* Menu Option Frame */}
              <View style={styles(theme).Viewc4214efc}>
                {/* Option */}
                <Text style={styles(theme).Text0ff29a67}>{'Collected 20'}</Text>
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
        <View style={styles(theme).View71b74763} />
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
                listKey={'sdUrIGuo'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Creator Card Frame */}
                      <View style={styles(theme).View1ac1a1bc}>
                        {/* Creator Card Featured Image */}
                        <ImageBackground
                          style={styles(theme).ImageBackground5bffbb84}
                          resizeMode={'cover'}
                          source={Images.BusinesspeopleMeetingOfficeWorking21}
                        >
                          {/* Content Frame */}
                          <View style={styles(theme).Viewb96a54e2}>
                            {/* Top Line Frame */}
                            <View style={styles(theme).View3eefd8a4}>
                              {/* Left Side */}
                              <View>
                                <CircleImage
                                  source={Images.Rectangle29001}
                                  size={30}
                                />
                              </View>
                              {/* Right Side */}
                              <View style={styles(theme).View7d342543}>
                                {/* Name */}
                                <Text style={styles(theme).Text780188e0}>
                                  {'Wanda'}
                                </Text>
                                {/* Username */}
                                <Text style={styles(theme).Texte8d51cfd}>
                                  {'@wandada'}
                                </Text>
                              </View>
                            </View>
                            {/* Second Row Frame */}
                            <View style={styles(theme).View6166c934}>
                              {/* Detail List Frame */}
                              <View style={styles(theme).Viewd0568a57}>
                                {/* Title */}
                                <Text style={styles(theme).Text1f98662d}>
                                  {'Collections'}
                                </Text>
                                {/* Data */}
                                <Text style={styles(theme).Text07e71999}>
                                  {'$421.00'}
                                </Text>
                              </View>
                              {/* Detail List Frame */}
                              <View style={styles(theme).Viewd0568a57}>
                                {/* Title */}
                                <Text style={styles(theme).Text1f98662d}>
                                  {'Followers'}
                                </Text>
                                {/* Data */}
                                <Text style={styles(theme).Text07e71999}>
                                  {'1.000'}
                                </Text>
                              </View>
                              {/* Primary Frame */}
                              <View style={styles(theme).View0e241625}>
                                {/* Primary Text */}
                                <Text style={styles(theme).Text57662d98}>
                                  {'Follow'}
                                </Text>
                              </View>
                            </View>
                            {/* Third Row Frame */}
                            <View style={styles(theme).Viewdff8420b}>
                              {/* Image Item Frame */}
                              <View style={styles(theme).Viewb7389f73}>
                                {/* List Image */}
                                <Image
                                  style={styles(theme).Image4462382a}
                                  resizeMode={'cover'}
                                  source={Images.Rectangle38321}
                                />
                              </View>
                              {/* Image Item Frame */}
                              <View style={styles(theme).Viewb7389f73}>
                                {/* List Image */}
                                <Image
                                  style={styles(theme).Image4462382a}
                                  source={Images.Rectangle38321}
                                  resizeMode={'cover'}
                                />
                              </View>

                              <ImageBackground
                                style={styles(theme).ImageBackground9657ba9d}
                                resizeMode={'cover'}
                                source={Images.Rectangle38321}
                              >
                                {/* Text Frame */}
                                <View style={styles(theme).View8258ef81}>
                                  {/* List Count */}
                                  <Text style={styles(theme).Text552b6a13}>
                                    {'+ 30'}
                                  </Text>
                                </View>
                              </ImageBackground>
                            </View>
                          </View>
                        </ImageBackground>
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
      {/* Footer View */}
      <View style={styles(theme).View0419a0dc} />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImage8bd683a8: { marginRight: 6 },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Iconda2fc39f: { marginLeft: 6 },
    Image4462382a: { height: 85, width: 85 },
    ImageBackground24e58078: {
      height: 230,
      justifyContent: 'flex-end',
      width: 319,
    },
    ImageBackground5bffbb84: {
      height: 382,
      justifyContent: 'flex-end',
      marginBottom: 36,
      width: 319,
    },
    ImageBackground9657ba9d: { borderRadius: 16, height: 85, width: 85 },
    Text07e71999: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '500',
      lineHeight: 12,
      marginTop: 6,
    },
    Text0ff29a67: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '500',
    },
    Text1f98662d: {
      color: theme.colors.nFTTIMEBorder,
      fontFamily: 'System',
      fontSize: 9,
      fontWeight: '500',
      lineHeight: 11,
    },
    Text552b6a13: {
      color: theme.colors.background,
      fontFamily: 'System',
      fontWeight: '700',
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
    Text780188e0: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '500',
      lineHeight: 11,
    },
    Text9445a248: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontWeight: '500',
      marginTop: 6,
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
    Texte8d51cfd: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 9,
      fontWeight: '400',
      lineHeight: 11,
    },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View0e241625: {
      alignItems: 'center',
      backgroundColor: theme.colors.nFTTIMELimeGreen,
      borderRadius: 8,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 5,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 5,
    },
    View1ac1a1bc: { alignItems: 'center', marginBottom: 36 },
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
    View3eefd8a4: {
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 23,
      marginLeft: 24,
      marginRight: 24,
      marginTop: 12,
    },
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
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View6166c934: {
      flexDirection: 'row',
      marginBottom: 15,
      marginLeft: 15,
      marginRight: 15,
    },
    View6a955cc3: { justifyContent: 'center' },
    View70a61404: {
      alignItems: 'center',
      flexGrow: 1,
      flexShrink: 0,
      marginTop: 18,
    },
    View71b74763: {
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      height: 1,
      marginBottom: 24,
    },
    View7d342543: { marginLeft: 15 },
    View8258ef81: {
      alignItems: 'center',
      backgroundColor: theme.colors.strong,
      height: 85,
      justifyContent: 'center',
      opacity: 0.61,
      width: 85,
    },
    View8d989fb3: { marginBottom: 23, marginLeft: 24, marginRight: 24 },
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
    Viewb7389f73: { borderRadius: 16, marginRight: 12 },
    Viewb96a54e2: {
      backgroundColor: theme.colors.background,
      borderTopRightRadius: 12,
    },
    Viewbb87a310: { marginRight: 18 },
    Viewc4214efc: {
      paddingBottom: 15,
      paddingLeft: 11,
      paddingRight: 11,
      paddingTop: 15,
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
    Viewd0568a57: { marginRight: 24 },
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
    Viewdff8420b: {
      flexDirection: 'row',
      marginBottom: 12,
      marginLeft: 15,
      marginRight: 15,
    },
    Viewe5c1fe2d: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginRight: 18,
    },
    Viewe7b6194a: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginBottom: 23,
      marginLeft: 24,
      marginRight: 24,
    },
  });

export default withTheme(Screen22ProfileCollectedTab);
