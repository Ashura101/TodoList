import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginPage = () => 
{
    return(
        <View style={styles.container}> 

            <View style={styles.bioHackerFlexBox}>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitleText}>BIOHACKER</Text>
                </View>
            </View>

            <View style={styles.loginFlexBox}>
                
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Login</Text>
                        <Text style={styles.loginSubText}>Login To Your Account</Text>
                    </View>

                    <View style={styles.emailInput}>
                        <TextInput placeholder='Enter your email' style={styles.emailInputBox}></TextInput>
                    </View>

                    <View style={styles.passwordInput}>
                        
                        <TextInput placeholder='Password' style={styles.passwordInputBox}></TextInput>
                        <Image style={styles.passwordImageStyles} source={require('./assets/iconPassword.png') } />
                    
                    </View>

                    <View style={styles.forgotPassword}>
                        <Text style={styles.forgotPassword}
                        onPress={() => Linking.openURL('http://google.com')}>Forgot Password?</Text>
                    </View>
                
            </View>

            <View style={styles.loginButtonFlexBox}>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.noAccount}>
                    <Text>If you don’t have an account?
                    <Text style={styles.noAccountText}> Sign up</Text>
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 30
    },

    bioHackerFlexBox:{
        flex: 0.2,
        justifyContent: "center"
    },
    pageTitle: {
        alignItems: "center"
    },
    pageTitleText: {
        fontSize: 30,
        color: "#808000",
        fontWeight: "bold"
    },

    loginFlexBox:{
        flex: 0.4,
        flexDirection: "column",
        justifyContent: "space-between",
    },

    loginTitle: {
        alignItems: "center"
    },
    loginTitleText: {
        color: "#808000",
        fontSize: 40
    },

    loginSub: {
        alignItems: "center",
    },
    loginSubText: {
        color: "#484848"
    },

    emailInput:{
        borderRadius: 50,
        backgroundColor: "#e8eaed"
    },
    emailInputBox: {
        padding: 15,
        paddingVertical: 0,
        height: 45
    },

    passwordInput:{
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 50,
        backgroundColor: "#e8eaed",
        alignItems: "center",
    },
    passwordInputBox:{  
        padding: 15,
        paddingVertical: 0,
        height: 45
    },
    passwordImageStyles:{
        justifyContent: "center",
        marginRight: 10
    },

    forgotPassword:{
        alignItems: "flex-end",
        color: "#484848"
    },

    loginButtonFlexBox:{
        flex: 0.2,
        justifyContent: "space-between"
    },
    buttonView: {
    },
    button: {
        alignItems: "center",
        backgroundColor: "#808000",
        padding: 10,
        borderRadius: 50
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },  
    noAccount: {
        alignItems: "center"
    },
    noAccountText: {
        color: "#808000",
    }
})

export default LoginPage;