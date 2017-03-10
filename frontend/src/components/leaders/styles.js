import React, {StyleSheet} from 'react-native';
import theme, * as fromTheme from '../../theme';

const screenWidth = fromTheme.screenWidth;
const screenHeight = fromTheme.screenHeight;

const userPositionContainer = {
    flex: 0.1,
    alignSelf: 'center',
    padding: 5,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
};

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: fromTheme.INDIGO
    },

    titleRow: {
        width: screenWidth,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: fromTheme.BLACK_CHERRY,
    },

    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    statusBarBackground: {
        width: screenWidth,
        height: fromTheme.STATUSBAR_HEIGHT,
        backgroundColor: fromTheme.BLACK_CHERRY,
    },

    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
    },

    normalUserPositionContainer: {
        ...userPositionContainer,
        backgroundColor: 'grey',
    },

    top1UserPositionContainer: {
        ...userPositionContainer,
        backgroundColor: '#f0ad4e',
    },

    top2UserPositionContainer: {
        ...userPositionContainer,
        backgroundColor: '#b5b5b5',
    },

    top3UserPositionContainer: {
        ...userPositionContainer,
        backgroundColor: fromTheme.CRIMSON_SKY,
    },

    userPosition: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    userAvatarContainer: {
        flex: 0.2,
    },

    userName: {
        marginLeft: 5,
        flex: 0.5,
        alignSelf: 'center',
        color: 'white',
    },

    userLevel: {
        flex: 0.2,
        alignSelf: 'center',
        color: fromTheme.RAISIN,
    },

    user: {
        flex: 1,
        width: screenWidth,
        borderColor: 'grey',
        borderTopWidth: 0.5,
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
    },
});