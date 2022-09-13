import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  AsyncStorage
} from 'react-native';
import { Images, Colors, globalStyles} from '../../theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { Container, Button, View, Item, Label, Input, Spinner } from 'native-base';
import { strings } from '../../services/i18n';
import firebase from 'react-native-firebase';

export default class EmailLogin extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: 'kpstar.mc@gmail.com',
            password: 'no touch',
            error: '',
            loading: false,
        }
    }

    async componentDidMount() {
        let token = await AsyncStorage.getItem('email');
    }

    render() {
        const {navigation} = this.props;
        const loginStatus = navigation.getParam('loginStatus', false);
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
                        source={Images.parent}>
                    </Image>
                    {   loginStatus ?
                        <View style={styles.view}>
                            <Item floatingLabel>
                                <Label style={styles.label}>{strings('login_text_email_placeholder.value')}</Label>
                                <Input autoCapitalize='none' style={styles.input} autoCorrect={false} value={this.state.email} onChangeText={text=>this.setState({email: text})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>{strings('login_text_password_placeholder.value')}</Label>
                                <Input secureTextEntry={true} style={styles.input} value={this.state.password} onChangeText={text=>this.setState({password: text})} onSubmitEditing={this.onLogin.bind(this)}/>
                            </Item>
                            {this.renderButtonOrSpinner()}                           
                        </View>
                        :
                        <View style={styles.view}>
                            <Item floatingLabel>
                                <Label style={styles.label}>{strings('login_text_email_placeholder.value')}</Label>
                                <Input autoCapitalize='none' autoCorrect={false} style={styles.input} value={this.state.email} onChangeText={text=>this.setState({email: text})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>{strings('login_text_password_placeholder.value')}</Label>
                                <Input secureTextEntry={true} style={styles.input} value={this.state.password} onChangeText={text=>this.setState({password: text})} onSubmitEditing={this.onSignup.bind(this)}/>
                            </Item>
                            {this.renderButtonOrSpinner()}
                        </View> }                        
                </Container>
            </Container>
        )
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner color={Colors.White} style={styles.spinner} />;    
        }
        if (this.props.navigation.getParam('loginStatus', false)) {
            return <Button block onPress={this.onLogin.bind(this)} style={styles.button}><Text style={styles.text}>{strings('email_login_button_title.value')}</Text></Button>;
        } else {
            return <Button block onPress={this.onSignup.bind(this)} style={styles.button}><Text style={styles.text}>{strings('email_signup_button_title.value')}</Text></Button>;
        }        
    }

    onLogin() {
        this.setState({ error: '', loading: true, });
        const {email, password} =  this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((credential) => {
                let token = credential.user._user.refreshToken;
                AsyncStorage.setItem('token', token);
                this.setState({ error: '', loading: false });
                AsyncStorage.setItem('email', email);
                this.props.navigation.navigate("ParentInfoScreen");
            })
            .catch((error) => {
                alert(error);
                this.setState({error: error, loading: false});
            });
    }

    onSignup() {
        this.setState({ error: '', loading: true, });
        const {email, password} =  this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false });
                this.props.navigation.navigate("ParentInfoScreen");
            })
            .catch((error) => {
                alert(error);
                this.setState({error: error, loading: false});
            });
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
    },
    image: {
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        marginTop: responsiveHeight(10),
        marginBottom: responsiveHeight(5),
    },
    label: {
        color: Colors.white,
    },
    view: {
        width: responsiveWidth(80),
    },
    spinner: {
        justifyContent: 'center',
    },
    button: {
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.buttonColor,
    },
    buttonTwo: {
        marginTop: 10,
        marginLeft: 5,
    },
    text: {
        color: Colors.white,
    },
    input: {
        color: Colors.white,
    },
});