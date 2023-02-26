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
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen1Stats = props => {
  const { theme } = props;

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
        <View style={styles(theme).View301de70d}>
          {/* Title Featured */}
          <Text style={styles(theme).Texta16ac0d0}>{'Leaderboards NFTs'}</Text>
          {/* Featured Filtering Frame */}
          <View style={styles(theme).Viewd7bd7414}>
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
                      name={'Ionicons/ios-time-outline'}
                      color={theme.colors.nFTTimeUIBlack}
                    />
                  </View>
                  {/* Filtering Title */}
                  <Text style={styles(theme).Text2421faa3}>{'All Time'}</Text>
                </View>
              </Touchable>
            </View>
            {/* Touchable Frame */}
            <View style={styles(theme).View0419a0dc}>
              <Touchable>
                {/* Filtering Option Frame */}
                <View style={styles(theme).View87bfde33}>
                  {/* Icon Frame */}
                  <View>
                    {/* Category Icon */}
                    <Icon
                      name={'Ionicons/ios-grid-outline'}
                      color={theme.colors.nFTTimeUIBlack}
                      size={18}
                    />
                  </View>
                  {/* Filtering Title */}
                  <Text style={styles(theme).Text2421faa3}>
                    {'All Category'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
          {/* Featured Filtering Frame */}
          <View style={styles(theme).Viewd7bd7414}>
            {/* Touchable Frame */}
            <View style={styles(theme).View0419a0dc}>
              <Touchable>
                {/* Filtering Option Frame */}
                <View style={styles(theme).Viewe07b3ed4}>
                  {/* Filtering Title */}
                  <Text style={styles(theme).Text0b62808a}>{'Sort By'}</Text>
                  {/* Icon Frame */}
                  <View>
                    {/* Category Icon */}
                    <Icon
                      size={18}
                      name={'Ionicons/options'}
                      color={theme.colors.nFTTimeUIBlack}
                    />
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
          {/* Border */}
          <View style={styles(theme).View71b74763} />
        </View>
        {/* Table Scroll View */}
        <ScrollView
          style={styles(theme).ScrollViewb284e5b0}
          contentContainerStyle={styles(theme).ScrollView86845b25Content}
          showsVerticalScrollIndicator={true}
          bounces={true}
          horizontal={true}
        >
          {/* Table Frame Negating Scroll View Horizontal Behavior */}
          <View>
            {/* Header Frame for Table */}
            <View style={styles(theme).Viewdebd3207}>
              {/* Table Header Frame */}
              <View style={styles(theme).View4688b589}>
                {/* Column Title */}
                <Text style={styles(theme).Text3294f1c2}>{'Volume'}</Text>
              </View>
              {/* Table Title Frame */}
              <View style={styles(theme).Viewfc5897f4}>
                {/* Column Title */}
                <Text style={styles(theme).Text3294f1c2}>{'Collection'}</Text>
              </View>
              {/* Table Title Frame */}
              <View style={styles(theme).Viewfc5897f4}>
                {/* Column Title */}
                <Text style={styles(theme).Text3294f1c2}>
                  {'Percentage Change'}
                </Text>
              </View>
              {/* Table Title Frame */}
              <View style={styles(theme).Viewfc5897f4}>
                {/* Column Title */}
                <Text style={styles(theme).Text3294f1c2}>{'Last 30 days'}</Text>
              </View>
              {/* Table Title Frame */}
              <View style={styles(theme).Viewfc5897f4}>
                {/* Column Title */}
                <Text style={styles(theme).Text3294f1c2}>{'Dividends'}</Text>
              </View>
              {/* Table Title Frame */}
              <View style={styles(theme).Viewfc5897f4}>
                {/* Column Title */}
                <Text style={styles(theme).Text3294f1c2}>{'Followers'}</Text>
              </View>
              {/* Table Title Frame */}
              <View style={styles(theme).Viewfc5897f4}>
                {/* Column Title */}
                <Text style={styles(theme).Text3294f1c2}>
                  {'Tweet Activity'}
                </Text>
              </View>
            </View>
            {/* Border */}
            <View style={styles(theme).View3f06f333} />
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
                    listKey={'G0iu9ZEf'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* First Row Table */}
                          <View style={styles(theme).Viewdebd3207}>
                            {/* Data Point Frame */}
                            <View style={styles(theme).View0a23bff7}>
                              {/* Collection Owner Frame */}
                              <View style={styles(theme).Viewdb3f54db}>
                                <Text style={styles(theme).Text732ad1e4}>
                                  {'1.'}
                                </Text>
                                <CircleImage
                                  style={styles(theme).CircleImage27d4405a}
                                  source={Images.JulianWanWNoLnJo7tS8Unsplash}
                                  size={40}
                                />
                                <Text style={styles(theme).Text4f4d596d}>
                                  {'Jesica Jeez'}
                                </Text>
                              </View>
                            </View>
                            {/* Data Point Frame */}
                            <View style={styles(theme).View875285b8}>
                              {/* Volume Frame */}
                              <View style={styles(theme).View9085d9fc}>
                                {/* Flex Attribute */}
                                <View>
                                  <Icon
                                    name={'MaterialCommunityIcons/ethereum'}
                                    size={18}
                                    color={theme.colors.nFTTIMEStoneGray}
                                  />
                                </View>

                                <Text style={styles(theme).Text732ad1e4}>
                                  {'133,800,22'}
                                </Text>
                              </View>
                            </View>
                            {/* Data Point Frame */}
                            <View style={styles(theme).View875285b8}>
                              {/* Data Frame */}
                              <View style={styles(theme).View9085d9fc}>
                                <Text style={styles(theme).Text732ad1e4}>
                                  {'-2.73%'}
                                </Text>
                              </View>
                            </View>
                            {/* Data Point Frame */}
                            <View style={styles(theme).View875285b8}>
                              {/* Data Frame */}
                              <View style={styles(theme).View9085d9fc}>
                                <Text style={styles(theme).Text732ad1e4}>
                                  {'+1430%'}
                                </Text>
                              </View>
                            </View>
                            {/* Data Point Frame */}
                            <View style={styles(theme).View875285b8}>
                              {/* Data Frame */}
                              <View style={styles(theme).View9085d9fc}>
                                <Text style={styles(theme).Text732ad1e4}>
                                  {'---'}
                                </Text>
                              </View>
                            </View>
                            {/* Data Point Frame */}
                            <View style={styles(theme).View875285b8}>
                              {/* Data Frame */}
                              <View style={styles(theme).View9085d9fc}>
                                <Text style={styles(theme).Text732ad1e4}>
                                  {'3.2K'}
                                </Text>
                              </View>
                            </View>
                            {/* Data Point Frame */}
                            <View style={styles(theme).View875285b8}>
                              {/* Data Frame */}
                              <View style={styles(theme).View9085d9fc}>
                                <Text style={styles(theme).Text732ad1e4}>
                                  {'10.0k'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    style={styles(theme).FlatList989db244}
                    contentContainerStyle={
                      styles(theme).FlatListc992f941Content
                    }
                    numColumns={1}
                  />
                );
              }}
            </ExampleDataApi.FetchGrabDataPointsGET>
          </View>
        </ScrollView>
      </ScrollView>
      {/* Footer View */}
      <View style={styles(theme).View0419a0dc} />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    CircleImage27d4405a: { marginRight: 8 },
    CircleImage8bd683a8: { marginRight: 6 },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Iconda2fc39f: { marginLeft: 6 },
    ScrollView86845b25Content: { flexShrink: 0, paddingLeft: 21 },
    ScrollViewb284e5b0: { flexGrow: 1 },
    Text0b62808a: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontWeight: '400',
      marginRight: 24,
    },
    Text2421faa3: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontWeight: '400',
      marginLeft: 24,
    },
    Text3294f1c2: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: '600',
      lineHeight: 14,
      paddingBottom: 22,
      paddingTop: 22,
    },
    Text4f4d596d: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontWeight: '600',
    },
    Text6187d789: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginRight: 6,
    },
    Text732ad1e4: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontWeight: '600',
      marginRight: 8,
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
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View0a23bff7: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMELightGray,
      minWidth: 190,
      paddingRight: 44,
    },
    View301de70d: { paddingLeft: 21, paddingRight: 21, paddingTop: 37 },
    View3f06f333: { backgroundColor: theme.colors.nFTTIMEDarkWhite, height: 1 },
    View4688b589: { flexGrow: 0, flexShrink: 0, minWidth: 190, width: 190 },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
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
    View71b74763: {
      backgroundColor: theme.colors.nFTTIMEDarkWhite,
      height: 1,
      marginBottom: 24,
    },
    View875285b8: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMELightGray,
      flexGrow: 1,
      flexShrink: 0,
      maxWidth: 190,
      minWidth: 190,
      paddingRight: 44,
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
    View906fab56: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 12,
    },
    View9085d9fc: {
      alignItems: 'center',
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingBottom: 22,
      paddingTop: 22,
    },
    Viewa678936a: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewd7bd7414: { flexDirection: 'row', marginTop: 23 },
    Viewdb3f54db: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 22,
      paddingTop: 22,
    },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Viewdebd3207: { flexDirection: 'row' },
    Viewe07b3ed4: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEDarkWhite,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      paddingBottom: 11,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 11,
    },
    Viewe5c1fe2d: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginRight: 18,
    },
    Viewfc5897f4: { flexGrow: 0, flexShrink: 0, width: 190 },
  });

export default withTheme(Screen1Stats);
