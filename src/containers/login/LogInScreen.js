

import React, { Component } from 'react';
import {
    Platform, StyleSheet, Image, View, Text,
    TextInput, Dimensions, ScrollView,
    KeyboardAvoidingView, Button, Picker,
    TouchableOpacity, Modal
} from 'react-native';
import Api from "../../utils/Api";

const { height, width } = Dimensions.get("window");


export default class LogInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            phoneNumber: '',
            flag: 'he'
        }
    }

    submitLogIn = () => {
        if (this.state.phoneNumber) {
            Api.post("CreateUser", {
                UserPhone: this.state.phoneNumber,
                CountryCode: this.state.flag == 'he' ? 'he-IL' : 'en-US'
            }).then((data) => {
               // alert('success');
                console.log({ data })
            }).catch((err) => {
                    alert('error');
                    console.log({ err });
                })
            // alert(this.state.phoneNumber)
        }
        else {
            alert('Enter Phone Number')
        }
    }


    render() {
        return (
            <ScrollView style={{ flex: 1 }} >

                <View style={{ height: height * 0.55, width: '100%' }}>
                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                        source={require("../../assets/images/cover.png")} />
                </View>
                <View style={{ height: height * 0.4 }}>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 26, fontWeight: '400', color: '#000' }}>Join the family</Text>
                    </View>
                    <View style={{ flex: 2, width: width, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Picker
                            selectedValue={this.state.flag}
                            style={{ flex: 3, height: 20 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ flag: itemValue })
                            }>
                            <Picker.Item label="en" value="en" />
                            <Picker.Item label="he" value="he" />
                        </Picker>
                        <TextInput keyboardType='numeric'
                            value={this.state.phoneNumber}
                            onChangeText={(value) => {
                                this.setState({
                                    phoneNumber: value
                                })
                            }}
                            style={{ flex: 7, borderBottomWidth: 2, fontSize: 20 }} placeholder='e.g. 4917664125034' />
                    </View>
                    <View style={{ flex: 2, width: width, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.submitLogIn} style={{
                            width: width * 0.9, backgroundColor: '#000', height: height * 0.08,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text style={{ fontWeight: '400', fontSize: 24, color: '#fff' }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

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
