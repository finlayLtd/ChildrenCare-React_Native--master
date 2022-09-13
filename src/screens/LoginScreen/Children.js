import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import { Images, Colors, globalStyles } from '../../theme';
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { Container, Button, View } from 'native-base';
import { strings } from '../../services/i18n';

export default class Children extends Component {

    render() {
        return (
            <Container style={globalStyles.container}>
                <View style={globalStyles.header}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={ Images.backBtn }
                            style={ globalStyles.backBtn }></Image>
                    </TouchableOpacity>
                </View>
                <Container style={styles.innerBox}>
                    <Image style={styles.image}
                        source={Images.children}>
                    </Image>
                    <Button block onPress={this.onQRLogin.bind(this)} style={styles.button}><Text style={styles.text}>{strings('login_button_scanqr_title.value')}</Text></Button>
                    <Button block onPress={this.onLibraryLogin.bind(this)} style={styles.button}><Text style={styles.text}>{strings('login_button_library_title.value')}</Text></Button>              
                </Container>
            </Container>
        )
    }

    onQRLogin() {
        this.props.navigation.navigate("QRCodeScanScreen");
    }

    onLibraryLogin() {
        // this.props.navigation.navigate("LibraryScreen");
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
}

const styles = StyleSheet.create({
    innerBox: {
        marginTop: 0,
        backgroundColor: Colors.Red,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        marginBottom: 40
    },
    view: {
        width: responsiveWidth(80),
    },
    button: {
        padding: 20,
        marginTop: 10,
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(10),
        backgroundColor: Colors.buttonColor,
    },
    buttonTwo: {
        marginTop: 10,
        marginLeft: 5,
    },
    text: {
        color: Colors.white,
    },
});