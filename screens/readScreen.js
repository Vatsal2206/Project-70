import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Read extends React.Component{
    render(){
        return(
            <View style={readStyles.container}>
                <Text style={readStyles.header}>
                    Read Story
                </Text>
            </View>
        )
    }
}

var readStyles = StyleSheet.create({
    container : {
        backgroundColor:'#f0ffd6',
        height:'100%',

    },
    header : {
        fontSize:30,
        color:'#960577',
        alignSelf:'center',
        marginTop:30,
        textDecorationLine:'underline',

    },
})