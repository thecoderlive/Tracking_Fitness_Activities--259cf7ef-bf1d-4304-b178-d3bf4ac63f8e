import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './activity_details_screen_data'
import ActivityStats from './ActivityStats'
import ActivityComments from './ActivityComments'

function ActivityDetailsScreen({ navigation, route }){ 
const url = (api.activity_details_screen ?? "activity_details_screen/") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state

const onPressViewActivityRoute = () => {}

async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id || !Array.isArray(json) ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.activity_details_screen} showsVerticalScrollIndicator={false}>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.activity_map}
    source={{uri: item.activity_map}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.activity_type} numberOfLines={1}>{item.activity_type}</Text>
<Text style={styles.activity_duration} numberOfLines={1}>{item.activity_duration}</Text>
<Text style={styles.activity_distance} numberOfLines={1}>{item.activity_distance}</Text>
</View>
<Text style={styles.activity_calories_burned} numberOfLines={1}>{item.activity_calories_burned}</Text>
</View>
<ActivityStats item={'activity_stats' in item ? item.activity_stats: item} navigation={navigation}/>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.activity_map}
    source={{uri: item.activity_map}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.activity_type} numberOfLines={1}>{item.activity_type}</Text>
<Text style={styles.activity_duration} numberOfLines={1}>{item.activity_duration}</Text>
<Text style={styles.activity_distance} numberOfLines={1}>{item.activity_distance}</Text>
</View>
<View style={{flexDirection: 'row'}}>
<Text style={styles.activity_calories_burned} numberOfLines={1}>{item.activity_calories_burned}</Text>
<TouchableOpacity  onPress={onPressViewActivityRoute}>
    <View style={styles.view_activity_route}>{'View Activity Route'}</View>
</TouchableOpacity>
</View>
</View>
<ActivityComments item={'activity_comments' in item ? item.activity_comments: item} navigation={navigation}/>
<Image
    style={styles.activity_map}
    source={{uri: item.activity_map}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.activity_type} numberOfLines={1}>{item.activity_type}</Text>
<Text style={styles.activity_duration} numberOfLines={1}>{item.activity_duration}</Text>
<Text style={styles.activity_distance} numberOfLines={1}>{item.activity_distance}</Text>
</View>
<View style={{flexDirection: 'row'}}>
<Text style={styles.activity_calories_burned} numberOfLines={1}>{item.activity_calories_burned}</Text>
<TouchableOpacity  onPress={onPressViewActivityRoute}>
    <View style={styles.view_activity_route}>{'View Activity Route'}</View>
</TouchableOpacity>
</View>
</ScrollView>
)}

export default ActivityDetailsScreen;

const styles = StyleSheet.create({
    "center": {
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "activity_map": {
        "width": "100vw",
        "height": "60vw",
        "marginTop": 5,
        "marginVertical": "15px"
    },
    "activity_type": {
        "flex": 1,
        "color": "#050505",
        "fontSize": 15,
        "marginTop": 5,
        "fontFamily": "Academy Engraved LET",
        "fontWeight": "500",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "activity_distance": {
        "flex": 1,
        "color": "#0d0d0d",
        "fontSize": 15,
        "marginTop": 5,
        "fontFamily": "Academy Engraved LET",
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "activity_duration": {
        "flex": 1,
        "color": "#030303",
        "fontSize": 15,
        "marginTop": 5,
        "fontFamily": "Academy Engraved LET",
        "fontWeight": "500",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "view_activity_route": {
        "flex": 1,
        "color": "white",
        "margin": "10px",
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#8bd0c1"
    },
    "activity_calories_burned": {
        "flex": 1,
        "color": "#080808",
        "fontSize": 15,
        "marginTop": 5,
        "fontFamily": "Academy Engraved LET",
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});