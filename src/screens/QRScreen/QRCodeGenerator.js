import React, { Component } from 'react';
import ViewShot from "react-native-view-shot";
import QRCode from 'react-native-qrcode';
import {
  StyleSheet,
  Text,
  CameraRoll
} from 'react-native';
import { Images, Colors } from '../../theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { Container, Button, Label } from 'native-base';
import { strings } from '../../services/i18n';

export default class ParentQRCode extends Component {

    componentDidMount() {
    }

    render() {
        let {qrCodeTxt} = this.props.navigation.state.params;
        return (
            <Container style={styles.container}>
                <Container style={styles.innerBox}>
                    <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
                        <QRCode
                            value={qrCodeTxt}
                            size={200}
                            bgColor='black'
                            fgColor='white'
                            style={styles.qrCode}/>
                    </ViewShot>
                    <Label style={styles.label}>{strings('parent_qr_code_desc_title.value')}</Label>
                    <Button block onPress={this.saveToGallery.bind(this)} style={styles.button}><Text style={styles.text}>{strings('parent_qr_save_button_title.value')}</Text></Button>
                </Container>                
            </Container>
        )
    }

    saveToGallery() {
        this.refs.viewShot.capture().then(uri => {
            console.log("do something with ", uri);
            let promise = CameraRoll.saveToCameraRoll(uri);
            promise.then(function(result) {
                console.log(result);
                alert(result);
                return result;
            }).catch(function (error) {
                alert('Kill KwangHyok');
            });
            return;
        });
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Red,
    },
    innerBox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Red,
    },
    qrCode: {
        borderColor: Colors.white,
        borderWidth: 10,
    },
    button: {
        width: responsiveWidth(80),
        marginLeft: responsiveWidth(10),
        padding: 10,
        marginTop: responsiveHeight(10),
        backgroundColor: Colors.buttonColor,
    },
    text: {
        color: Colors.white,
    },
    label: {
        marginTop: 30,
        color: Colors.white,
    },
});