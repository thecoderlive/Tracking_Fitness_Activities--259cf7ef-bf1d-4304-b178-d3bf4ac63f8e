import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'



function ActivityStats({ item, navigation }){



function activityStatsItem({ item }){
return (
<View style={styles.activity_stats_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.stat_label} numberOfLines={1}>{item.stat_label}</Text>
<Text style={styles.stat_value} numberOfLines={1}>{item.stat_value}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.activity_stats}
    data={item}
    renderItem={activityStatsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default ActivityStats;

const styles = StyleSheet.create({
    "stat_label": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontFamily": "Academy Engraved LET",
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "stat_value": {
        "flex": 1,
        "color": "#050505",
        "fontSize": 15,
        "marginTop": 5,
        "fontFamily": "Academy Engraved LET",
        "fontWeight": "500",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});