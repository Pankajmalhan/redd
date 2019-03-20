

import React, { Component } from 'react';
import { Platform, StyleSheet, Image, View, Text, TextInput, Dimensions, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get("window");


export default class LogInScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled >
                <View style={styles.container}>
                <View style={{ height: height * 0.6, width: '100%' }}>
                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                        source={require("../../assets/images/cover.png")} />
                </View>
                <View style={{ flex: 4 }}>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 26, fontWeight: '400', color: '#000' }}>Join the family</Text>
                    </View>
                    <View style={{ flex: 2, width: width, alignItems: 'center' }}>
                        <TextInput keyboardType='numeric' style={{ width: '80%', borderBottomWidth: 2, fontSize: 20 }} placeholder='e.g. 4917664125034' />
                    </View>
                    <View style={{ flex: 1, width: width, alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity style={{
                            width: width * 0.9, backgroundColor: '#000', flex: 1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text  style={{ fontWeight: '400', fontSize: 24, color: '#fff' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
