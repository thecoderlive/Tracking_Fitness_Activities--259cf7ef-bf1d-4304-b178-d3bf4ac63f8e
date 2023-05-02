import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function ActivityComments({ item, navigation }){



function activityCommentsItem({ item }){
return (
<View style={styles.activity_comments_item}>
<Image
    style={styles.profile_image}
    source={{uri: item.profile_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<Text style={styles.comment_text}>{item.comment_text}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.activity_comments}
    data={item}
    renderItem={activityCommentsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default ActivityComments;

const styles = StyleSheet.create({
    "user_name": {
        "flex": 1,
        "color": "#080808",
        "fontSize": 15,
        "marginTop": 5,
        "fontFamily": "Academy Engraved LET",
        "fontWeight": "500",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "comment_text": {
        "fontSize": 12,
        "marginTop": 5,
        "fontFamily": "Academy Engraved LET",
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "profile_image": {
        "width": "100vw",
        "height": "70vw",
        "marginTop": 5,
        "marginVertical": "15px"
    }
});