import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userView: {
        width: '100%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userIcon: {
        height: '60%',
        width: '40%',
        resizeMode: 'contain'
    },
    userName: {
        fontSize: 24,
        fontFamily: 'Rajdhani-Bold',
        color: 'white',
        marginTop: 10
    },
    optionsView: {
        marginLeft: 10,
        marginRight: 10,
        height: '34%',
        backgroundColor: 'white',
        borderRadius: 3,
        justifyContent: 'flex-start'
    },
    touchableOpacityStyle: {
        marginLeft: 20,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textButtons: {
        color: 'gray',
        fontSize: 22,
        fontFamily: 'Rajdhani-semibold',
        alignSelf: 'center'
    },
    arrowImage: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginRight: 10
    },
    lineView: {
        height: 1,
        marginLeft: 22,
        backgroundColor: '#D3D3D3',
    }
});
export default styles;