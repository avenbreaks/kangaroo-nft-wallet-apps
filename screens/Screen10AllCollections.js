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
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen10AllCollections = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasTopSafeArea={true}>
      {/* Header View */}
      <View style={styles(theme).Viewbe073bf8}>
        {/* LOGO & Profile Menu Frame */}
        <View style={styles(theme).Viewadd17dea}>
          {/* Row Wrapper */}
          <View style={styles(theme).View115c8f3c}>
            {/* Logo Component */}
            <View style={styles(theme).View6a955cc3}>
              {/* brandName */}
              <Text style={styles(theme).Textb10db0c1}>{'dbNFT.'}</Text>
            </View>

            <Touchable>
              {/* profileComponent */}
              <View style={styles(theme).Viewb224489a}>
                {/* profileImage */}
                <CircleImage
                  source={Images.JulianWanWNoLnJo7tS8Unsplash}
                  size={24}
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
        {/* Screen Title Frame */}
        <View style={styles(theme).View06693a7f}>
          {/* nftName */}
          <Text style={styles(theme).Textfa7dc1d9}>
            {'Explore NFT Collections'}
          </Text>
        </View>
      </View>
      {/* Content View Scrollable */}
      <ScrollView
        style={styles(theme).ScrollViewb284e5b0}
        contentContainerStyle={styles(theme).ScrollViewa5de2569Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
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
                listKey={'aKgPmRIX'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('Screen11CreatorsCollection');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      {/* singleRecord */}
                      <View style={styles(theme).Viewa1dce983}>
                        {/* imageWrapper */}
                        <View style={styles(theme).View4a1d0d11}>
                          <ImageBackground
                            style={styles(theme).ImageBackground8dc796a9}
                            resizeMode={'cover'}
                            source={{
                              uri: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                            }}
                          />
                        </View>
                        {/* categoryTypeWrapper */}
                        <View style={styles(theme).Viewd0f5277d}>
                          {/* category */}
                          <Text style={styles(theme).Texta0f50cd4}>
                            {'Azuki'}
                          </Text>
                          {/* verified */}
                          <Icon
                            style={styles(theme).Icon09c129c9}
                            size={24}
                            name={'MaterialIcons/verified'}
                            color={theme.colors.nFTTIMEBlue}
                          />
                        </View>
                      </View>
                    </Touchable>
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
      {/* Footer Frame */}
      <View style={styles(theme).View3eb22e56}>
        {/* resultsFilterComponent */}
        <View style={styles(theme).View43b593eb}>
          {/* sortByComponent */}
          <View style={styles(theme).Viewc3e4be0f}>
            <Text style={styles(theme).Text9e98fb3f}>{'Sort By'}</Text>
            <Icon
              size={18}
              name={'AntDesign/filter'}
              color={theme.colors.nFTTIMEStone}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Icon09c129c9: { left: 12 },
    Iconda2fc39f: { marginLeft: 6 },
    ImageBackground8dc796a9: { height: '100%', width: '100%' },
    ScrollViewa5de2569Content: { flex: 1, flexShrink: 0 },
    ScrollViewb284e5b0: { flexGrow: 1 },
    Text9e98fb3f: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginLeft: 6,
    },
    Texta0f50cd4: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 24,
    },
    Textb10db0c1: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 24,
    },
    Texte6750c5c: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginLeft: 6,
    },
    Textfa7dc1d9: {
      color: theme.colors.nFTTimeUIBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 18,
      paddingLeft: 18,
    },
    View06693a7f: {
      alignSelf: 'stretch',
      borderBottomWidth: 2,
      borderColor: theme.colors.divider,
      justifyContent: 'center',
      paddingBottom: 12,
      paddingTop: 12,
    },
    View115c8f3c: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginLeft: 18,
      marginRight: 18,
    },
    View3eb22e56: {
      backgroundColor: theme.colors.lightInverse,
      borderColor: theme.colors.divider,
      borderTopWidth: 1,
      flexGrow: 1,
      flexShrink: 0,
      maxHeight: 56,
      minHeight: 56,
      paddingLeft: 18,
      paddingRight: 18,
    },
    View43b593eb: { flexDirection: 'row', flexGrow: 1, flexShrink: 0 },
    View4a1d0d11: {
      marginRight: 12,
      maxWidth: 90,
      minWidth: 90,
      overflow: 'hidden',
    },
    View6a955cc3: { justifyContent: 'center' },
    Viewa1dce983: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      marginLeft: 18,
      marginRight: 18,
      marginTop: 12,
      maxHeight: 54,
      minHeight: 54,
    },
    Viewadd17dea: {
      flexGrow: 0,
      flexShrink: 0,
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
    Viewc3e4be0f: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 6,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginBottom: 7,
      marginTop: 7,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 12,
    },
    Viewd0f5277d: {
      alignItems: 'center',
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
    },
  });

export default withTheme(Screen10AllCollections);
