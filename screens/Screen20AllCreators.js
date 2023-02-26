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

const Screen20AllCreators = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasTopSafeArea={true}>
      {/* Header View */}
      <View style={styles(theme).Viewdbf79098}>
        {/* Navigation Component */}
        <View style={styles(theme).Viewab42bfa2}>
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
        <View style={styles(theme).View301de70d}>
          {/* Title Featured */}
          <Text style={styles(theme).Texta16ac0d0}>
            {'Meet Out Great Creators'}
          </Text>
          {/* Featured Filtering Frame */}
          <View style={styles(theme).View5572c981}>
            {/* Touchable Frame */}
            <View style={styles(theme).View0419a0dc}>
              <Touchable>
                {/* Filtering Option Frame */}
                <View style={styles(theme).View706414e9}>
                  {/* Icon Frame */}
                  <View>
                    {/* Category Icon */}
                    <Icon
                      size={18}
                      name={'Ionicons/grid-outline'}
                      color={theme.colors.nFTTimeUIBlack}
                    />
                  </View>
                  {/* Filtering Title */}
                  <Text style={styles(theme).Text2421faa3}>{'Category'}</Text>
                </View>
              </Touchable>
            </View>
            {/* Touchable Frame */}
            <View style={styles(theme).View0419a0dc}>
              <Touchable>
                {/* Filtering Option Frame */}
                <View style={styles(theme).View87bfde33}>
                  {/* Filtering Title */}
                  <Text style={styles(theme).Text0b62808a}>{'Sort By'}</Text>
                  {/* Icon Frame */}
                  <View>
                    {/* Category Icon */}
                    <Icon
                      name={'Ionicons/options'}
                      size={18}
                      color={theme.colors.nFTTimeUIBlack}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
          <View />
        </View>

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
                listKey={'6yPVSdNz'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Creator Card Frame */}
                      <View style={styles(theme).View02f8ec45}>
                        {/* Touchable Frame */}
                        <View>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate(
                                  'Screen21ProfileCreatedTab'
                                );
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            {/* Creator Card Featured Image */}
                            <ImageBackground
                              style={styles(theme).ImageBackground18485b45}
                              source={
                                Images.BusinesspeopleMeetingOfficeWorking21
                              }
                              resizeMode={'cover'}
                            />
                            {/* Content Frame */}
                            <View style={styles(theme).View34721ddb}>
                              {/* Top Line Frame */}
                              <View style={styles(theme).Viewbacab61e}>
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
                              <View style={styles(theme).View60dd6935}>
                                {/* Detail List Frame */}
                                <View>
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
                                <View>
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
                                <View style={styles(theme).Vieweaea779a}>
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
                                    source={Images.Rectangle38321}
                                    resizeMode={'cover'}
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
                                  source={Images.Rectangle38321}
                                  resizeMode={'cover'}
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
                          </Touchable>
                        </View>
                      </View>
                    </>
                  );
                }}
                style={styles(theme).FlatList989db244}
                contentContainerStyle={styles(theme).FlatList55977854Content}
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
    FlatList55977854Content: { flex: 1, paddingLeft: 20, paddingRight: 20 },
    Iconda2fc39f: { marginLeft: 6 },
    Image4462382a: { height: 85, width: 85 },
    ImageBackground18485b45: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 200,
      overflow: 'hidden',
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
    Text0b62808a: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontWeight: '400',
      marginRight: 24,
    },
    Text1f98662d: {
      color: theme.colors.nFTTIMEBorder,
      fontFamily: 'System',
      fontSize: 9,
      fontWeight: '500',
      lineHeight: 11,
    },
    Text2421faa3: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontWeight: '400',
      marginLeft: 24,
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
    Text780188e0: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '500',
      lineHeight: 11,
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
    Texte8d51cfd: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 9,
      fontWeight: '400',
      lineHeight: 11,
    },
    View02f8ec45: { marginTop: 20 },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View301de70d: { paddingLeft: 21, paddingRight: 21, paddingTop: 37 },
    View34721ddb: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopRightRadius: 12,
      marginTop: -20,
      overflow: 'hidden',
    },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View5572c981: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      marginTop: 23,
    },
    View60dd6935: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 12,
    },
    View6a955cc3: { justifyContent: 'center' },
    View706414e9: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEDarkWhite,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
      marginRight: 6,
      paddingBottom: 11,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 11,
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
    View87bfde33: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEDarkWhite,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
      marginLeft: 6,
      paddingBottom: 11,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 11,
    },
    Viewa678936a: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewab42bfa2: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 12,
    },
    Viewb7389f73: { borderRadius: 16, marginRight: 12 },
    Viewbacab61e: {
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 14,
      marginRight: 14,
      marginTop: 12,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
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
    Vieweaea779a: {
      alignItems: 'center',
      backgroundColor: theme.colors.nFTTIMELimeGreen,
      borderRadius: 8,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      paddingBottom: 5,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 5,
    },
  });

export default withTheme(Screen20AllCreators);
