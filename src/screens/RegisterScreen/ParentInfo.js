import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  AsyncStorage,
} from 'react-native';
import { Images, Colors } from '../../theme';
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { Container, Button, View, Input, Item, Label } from 'native-base';
import { strings } from '../../services/i18n';

export default class ParentInfo  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            familyName: '',
        };
    }

    async componentDidMount() {
        familyName = await AsyncStorage.getItem('familyName');
        this.setState({familyName});
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={Images.parent}  style={styles.image}></ImageBackground>
                <Item floatingLabel style={styles.label}>
                    <Label style={styles.labelText}>{strings('parent_family_name_placeholder_title.value')}</Label>
                    <Input autoCapitalize='none' autoCorrect={false} style={styles.input} value={this.state.familyName} onChangeText={(text) => this.setState({familyName: text})}/>                
                </Item>
                <Button style={styles.button} onPress={this.setMyHome.bind(this)}><Text style={styles.text}>{strings('parent_set_home_button_title.value')}</Text></Button>
                <ImageBackground source={Images.children}  style={styles.image}></ImageBackground>
                <Button style={styles.buttonTwo} onPress={this.addMyChildren.bind(this)}><Text style={styles.text}>{strings('parent_add_children_button_title.value')}</Text></Button>
            </Container>
        )
    }

    addMyChildren() {
        let {familyName} = this.state;
        if (!familyName) {
            alert(strings('alert_empty_familyname_text.value'));
            return;
        }
        AsyncStorage.setItem('familyName', familyName);
        this.props.navigation.navigate('ChildInfoScreen');
    }

    onChangeText(text) {
        this.setState({ familyName: text });
        alert(text);
    }

    setMyHome() {
        // this.props.navigation.navigate('MapScreen');
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
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        marginTop: 40,
        marginBottom: 15
    },
    label: {
        width: responsiveWidth(80),
    },
    labelText: {
        color: Colors.white,
    },
    view: {
        width: responsiveWidth(80),
    },
    button: {
        width: responsiveWidth(80),
        padding: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: responsiveWidth(10),
        backgroundColor: Colors.buttonColor,
    },
    buttonTwo: {
        width: responsiveWidth(80),
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: responsiveWidth(10),
    },
    text: {
        color: Colors.white,
    },
    input: {
        color: Colors.white,
    },
});