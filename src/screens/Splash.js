import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';
import { Images } from '../theme';
import { Container } from 'native-base';

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('LogInScreen');
        }, 200)
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={Images.spalshBk}  style={styles.image} ></ImageBackground>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        flex: 1
    },
});