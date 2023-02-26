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

const Screen11CreatorsCollection = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasTopSafeArea={true}>
      {/* Header View */}
      <View style={styles(theme).Viewa70a25a2}>
        {/* Navigation Component with Back */}
        <View style={styles(theme).View906fab56}>
          {/* Left Frame */}
          <View style={styles(theme).Viewe5c1fe2d}>
            {/* Touchable Frame */}
            <View style={styles(theme).View4f6009be}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen10AllCollections');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Flex Attribute */}
                <View style={styles(theme).View0419a0dc}>
                  <Icon
                    size={18}
                    name={'Ionicons/chevron-back'}
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
      {/* List Title Frame */}
      <View style={styles(theme).Viewd14c151b}>
        {/* nftName */}
        <Text style={styles(theme).Text4fa1993b}>
          {"Exploring Azuki's Creations"}
        </Text>
      </View>
      {/* Content View Scrollable */}
      <ScrollView
        style={styles(theme).ScrollViewb284e5b0}
        contentContainerStyle={styles(theme).ScrollView4e34f380Content}
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
                listKey={'TEoy4H8k'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable style={styles(theme).Touchableb31d98f4}>
                      {/* Record Frame */}
                      <View style={styles(theme).Viewf8304bf6}>
                        {/* Image Frame */}
                        <View style={styles(theme).View093f4d20}>
                          <ImageBackground
                            style={styles(theme).ImageBackground8dc796a9}
                            source={{
                              uri: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                            }}
                            resizeMode={'cover'}
                          />
                        </View>
                        {/* Image Author Frame */}
                        <View style={styles(theme).View18602197}>
                          {/* nftProperties */}
                          <Text style={styles(theme).Text296760f7}>
                            {'Created by '}
                          </Text>
                          {/* nftCreatorName */}
                          <Text
                            style={styles(theme).Texta3941dc9}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                          >
                            {'@Azuki'}
                          </Text>
                        </View>
                        {/* Bid Frame */}
                        <View style={styles(theme).View9e3c76a6}>
                          {/* label */}
                          <Text style={styles(theme).Textbccd6fbe}>
                            {'Current Bid'}
                          </Text>
                          {/* amountDue */}
                          <Text style={styles(theme).Text03b61d50}>
                            {'85 ETH'}
                          </Text>
                        </View>
                      </View>
                    </Touchable>
                  );
                }}
                style={styles(theme).FlatList989db244}
                contentContainerStyle={styles(theme).FlatListc992f941Content}
                numColumns={2}
              />
            );
          }}
        </ExampleDataApi.FetchGrabDataPointsGET>
      </ScrollView>
      {/* Footer View */}
      <View style={styles(theme).View466ed818}>
        {/* resultsFilterComponent */}
        <View style={styles(theme).View43b593eb}>
          {/* sortByComponent */}
          <View style={styles(theme).View0a8ca3cf}>
            <Text style={styles(theme).Textbc4f8f3f}>{'Sort By'}</Text>
            <Icon
              name={'AntDesign/filter'}
              size={18}
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
    CircleImage8bd683a8: { marginRight: 6 },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Iconda2fc39f: { marginLeft: 6 },
    ImageBackground8dc796a9: { height: '100%', width: '100%' },
    ScrollView4e34f380Content: { flexShrink: 0 },
    ScrollViewb284e5b0: { flexGrow: 1 },
    Text03b61d50: {
      color: theme.colors.nFTTIMEPrimaryBlack,
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '400',
      lineHeight: 16,
    },
    Text296760f7: {
      color: theme.colors.nFTTIMEGray,
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '500',
      lineHeight: 16,
    },
    Text4fa1993b: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 18,
      paddingLeft: 18,
    },
    Text6187d789: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginRight: 6,
    },
    Texta3941dc9: {
      color: theme.colors.nFTTIMEBlue,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginLeft: 3,
    },
    Textbc4f8f3f: {
      color: theme.colors.nFTTIMEDarkGray,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      marginLeft: 6,
    },
    Textbccd6fbe: {
      color: theme.colors.nFTTIMEBlue,
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '600',
      lineHeight: 16,
    },
    Textdb782106: {
      color: theme.colors.background,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 24,
      opacity: 0,
    },
    Touchableb31d98f4: { maxWidth: '50%', minWidth: '50%' },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View093f4d20: {
      borderRadius: 12,
      height: 150,
      marginBottom: 6,
      marginLeft: 12,
      marginRight: 12,
      marginTop: 6,
      maxHeight: 150,
      minHeight: 150,
      overflow: 'hidden',
    },
    View0a8ca3cf: {
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
      paddingLeft: 18,
      paddingRight: 18,
    },
    View18602197: {
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 12,
      marginRight: 3,
      marginTop: 6,
    },
    View43b593eb: { flexDirection: 'row', flexGrow: 1, flexShrink: 0 },
    View466ed818: {
      backgroundColor: theme.colors.lightInverse,
      borderColor: theme.colors.divider,
      borderTopWidth: 1,
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      maxHeight: 56,
      minHeight: 56,
      paddingLeft: 18,
      paddingRight: 18,
    },
    View4f6009be: { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
    View6a955cc3: { justifyContent: 'center' },
    View906fab56: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 12,
    },
    View9e3c76a6: { marginLeft: 12, marginTop: 12 },
    Viewa678936a: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 18,
      paddingRight: 18,
    },
    Viewa70a25a2: {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      flexGrow: 1,
      flexShrink: 0,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewd14c151b: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      maxHeight: 36,
      minHeight: 36,
    },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Viewe5c1fe2d: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginRight: 18,
    },
    Viewf8304bf6: { marginTop: 12 },
  });

export default withTheme(Screen11CreatorsCollection);
