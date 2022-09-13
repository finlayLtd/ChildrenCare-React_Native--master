import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';
import { Images, Colors, globalStyles } from '../../theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { Container, Button, View } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { strings } from '../../services/i18n';
import images from '../../theme/images';

export default class QRCodeScan extends Component {

    onSuccess(e) {
        console.log('Result = ', e);
    }

    constructor(props){
        super(props)
        this.state = {
            qrCodeScan: false,
        }
    }

    componentDidMount() {
    }

    render() {
        const {qrCodeScan} = this.state;
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
                    <QRCodeScanner
                        style= {styles.qrCode}
                        onRead={this.onSuccess.bind(this)}
                    />
                </Container>
            </Container>
        )
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
}

const styles = StyleSheet.create({
    innerBox: {
        marginTop: 0,
        backgroundColor: Colors.Red,
    },
    qrCode: {
        marginTop: 20,
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        marginBottom: 15,
    },
});