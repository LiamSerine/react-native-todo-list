import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
 
const Task = (props) => {
    const data = props;
    console.log(props.initialParams.d)
 return (
 <View style={styles.item}>
    <View style={styles.itemLeft}>
        <View style={styles.squareContainer}>
            <View style={styles.square}></View>
        </View>        
        <Text style={styles.itemText}>{props.initialParams.d.label}</Text>
    </View>
    <View style={styles.circularContainer}>
        <View style={styles.circular}></View>
    </View>
    
 </View>
 );
};
 
const styles = StyleSheet.create({
 item: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flexDirection: "row",
    height: 55,
    alignItems: "center",
    marginTop: 20
    // ...
 },
 itemLeft: {    
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 9,
    justifyContent: "center"
 },
 square: {   
    backgroundColor: "#8c82ff",  
    height: 24,
    width: 24,  
    marginRight: 5,
    borderRadius: 5
 },
 squareContainer: {
    flex: 1,
    marginLeft : 10
 },
 itemText: {
    maxWidth: "80%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    color: "#1A1A1A",
    flex: 8,
    marginTop : 4
 },
 circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "#2F69FF",
    borderRadius: 5
 },
 circularContainer: {
    flex: 1
 },
 
});
 
export default Task;