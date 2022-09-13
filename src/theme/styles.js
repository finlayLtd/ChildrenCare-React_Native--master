import {
    StyleSheet,
} from 'react-native';
import { Images, Colors } from '../theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    header: {
        alignSelf: 'stretch',        
        height: 40,
        width: responsiveWidth(100),
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    backBtn: {
        marginLeft: 15,
        height: 25,
        width: 30,
    },
});