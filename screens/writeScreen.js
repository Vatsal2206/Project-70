import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Write extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            author:'',
            story:'',
        }
    }
    

    submitPressed = () =>{
        alert('Now you can see your story in the Read story tab')
    }
    render(){
        console.log(this.state.name)
        return(
            <View style={writeStyles.container}>
                <Text style={writeStyles.header}>WRITE STORY</Text>
                
                <TextInput
                    style={writeStyles.textInputName}
                    placeholder = "TITLE OF STORY"
                    placeholderTextColor = 'red'
                    onChangeText={(text) => {
                        this.setState({
                            name:text

                        })
                    }}

                />

                <TextInput
                    style={writeStyles.textInputAuthor}
                    placeholder = "NAME OF AUTHOR"
                    placeholderTextColor = 'green'
                    onChangeText={(text) => {
                        this.setState({
                            author:text

                        })
                    }}

                />
                <TextInput
                multiline
                    style={writeStyles.textInputStory}
                    placeholder = "WRITE THE STORY"
                    placeholderTextColor = 'blue'
                    
                    onChangeText={(text) => {
                        this.setState({
                            story:text

                        })
                    }}

                />

                <TouchableOpacity style={writeStyles.submitButton} onPress={this.submitPressed}>
                    <Text style={writeStyles.submitButtonText}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

var writeStyles = StyleSheet.create({
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
    textInputName:{
        borderWidth:2,
        width:300,
        height:50,
        marginTop:50,
        backgroundColor:'#f0ffd6',
        alignSelf:'center',
        textAlign:'center',
        borderRadius : 5

    },
    textInputAuthor:{
        borderWidth:2,
        width:300,
        height:50,
        marginTop:30,
        backgroundColor:'#f0ffd6',
        alignSelf:'center',
        textAlign:'center',
        borderRadius : 5

    },
    textInputStory:{
        borderWidth:2,
        width:300,
        height:280,
        marginTop:30,
        backgroundColor:'#f0ffd6',
        alignSelf:'center',
        textAlignVertical: 'top',
        textAlign:'center',
        borderRadius:5

    },
    submitButton:{
        marginTop:30,
        alignSelf:'center',
        backgroundColor:'#0349fc',
        width:150,
        height:60,
        borderRadius:10
    },
    submitButtonText:{
        fontSize:30,
        textAlign:'center',
        color:'white',
    }
})