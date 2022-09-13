import Colors from './colors';
import Images from './images';
import globalStyles from './styles';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const FontSizes = {
    small: responsiveHeight(1.4), //14
    smallMedium: responsiveHeight(1.8), //18
    medium: responsiveHeight(2.4), //24
    mediumLarge: responsiveHeight(3.6), //36
    large: responsiveHeight(4.8),//48
};

export { Colors, Images, FontSizes, globalStyles };