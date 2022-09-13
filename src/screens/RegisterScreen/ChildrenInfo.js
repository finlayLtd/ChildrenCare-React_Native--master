import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { Images, Colors, globalStyles } from '../../theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { Container, Button, Input, Item, Label } from 'native-base';
import { strings } from '../../services/i18n';

export default class ChildrenInfo extends Component {

    constructor(props){
        super(props)
        this.state = {
            childName: '',
            age: '',
            contactNumber: '',
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={Images.children}  style={styles.image}></ImageBackground>
                <Item floatingLabel style={styles.label}>
                    <Label style={styles.text}>{strings('child_name_label_placeholder_title.value')}</Label>
                    <Input autoCapitalize='none' autoCorrect={false} style={styles.input} value={this.state.childName} onChangeText={childNameTxt=>this.setState({childName: childNameTxt})}/>                
                </Item>
                <Item floatingLabel style={styles.label}>
                    <Label style={styles.text}>{strings('child_age_label_placeholder_title.value')}</Label>
                    <Input autoCapitalize='none' autoCorrect={false} style={styles.input} value={this.state.age} onChangeText={ageTxt=>this.setState({age: ageTxt})}/>                
                </Item>
                <Item floatingLabel style={styles.label}>
                    <Label style={styles.text}>{strings('child_contact_number_label_placeholder_title.value')}</Label>
                    <Input autoCapitalize='none' autoCorrect={false} style={styles.input} value={this.state.contactNumber} onChangeText={contactNumberTxt=>this.setState({contactNumber: contactNumberTxt})}/>                
                </Item>
                <Button style={styles.button} onPress={this.generateQR.bind(this)}><Text style={styles.text}>{strings('child_generate_qr_button_title.value')}</Text></Button>
            </Container>
        )
    }

    async generateQR() {
        let {childName, age, contactNumber} = this.state;
        let email = await AsyncStorage.getItem('email');
        let errorKey = '';
        if (!childName) {
            errorKey = 'alert_empty_child_name_title.value';
        } else if (!age) {
            errorKey = 'alert_empty_child_age_title.value';
        } else if (!contactNumber) {
            errorKey = 'alert_empty_child_number_title.value';
        }
        if (errorKey) {
            alert(strings(errorKey));
            return;
        }
        let qrCodeTxt = email + "/" + childName + "/" + age + '/' + contactNumber;
        this.props.navigation.navigate(
            'QRCodeGenScreen',
            { qrCodeTxt },
        );
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Red,
        alignItems: 'center',
    },
    image: {
        marginTop: responsiveHeight(15),
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        marginBottom: 15
    },
    label: {
        width: responsiveWidth(80),
    },
    button: {
        width: responsiveWidth(80),
        left: responsiveWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(20),
        backgroundColor: Colors.buttonColor,
    },
    text: {
        color: Colors.white,
    },
    input: {
        width: responsiveWidth(80),
        color: Colors.white,
    },
});