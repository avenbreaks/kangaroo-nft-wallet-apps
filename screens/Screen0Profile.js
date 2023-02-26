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

const Screen0Profile = props => {
  const { theme } = props;
  const { navigation } = props;

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
        <View style={styles(theme).Viewb792de4b}>
          {/* Title Featured */}
          <Text style={styles(theme).Texta16ac0d0}>
            {'Account Information'}
          </Text>
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
                listKey={'JVSObbnL'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* App Menu Frame */}
                      <View style={styles(theme).View25967461}>
                        {/* Touchable Frame */}
                        <View>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('Screen1FAQ');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            {/* App Option Frame */}
                            <View style={styles(theme).View08b70666}>
                              {/* FAQ Text */}
                              <Text style={styles(theme).Text03791f6f}>
                                {'FAQ & Support'}
                              </Text>
                              {/* Icon Flex Attributes */}
                              <View>
                                {/* Right Arrow */}
                                <Icon
                                  color={theme.colors.nFTTIMEBlack}
                                  name={'AntDesign/arrowright'}
                                  size={18}
                                />
                              </View>
                            </View>
                          </Touchable>
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
    CircleImage8bd683a8: { marginRight: 6 },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Iconda2fc39f: { marginLeft: 6 },
    Text03791f6f: {
      color: theme.colors.nFTTIMEBlack,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '500',
      textTransform: 'uppercase',
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
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View08b70666: {
      borderBottomWidth: 1,
      borderColor: theme.colors.nFTTIMEBlack,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 18,
      paddingTop: 18,
    },
    View25967461: {
      paddingBottom: 18,
      paddingLeft: 21,
      paddingRight: 21,
      paddingTop: 18,
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
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Viewe5c1fe2d: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-between',
      marginRight: 18,
    },
  });

export default withTheme(Screen0Profile);
