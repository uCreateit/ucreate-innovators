
import { StyleSheet,Dimensions} from 'react-native';

const stylesLive = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerMain: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width/2
        
    },

    containerImage: {
        flex: 1
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        fontSize: 18,
        marginLeft: 15,
        fontFamily:'Rajdhani-SemiBold'
    },
    email: {
        color: 'red',
        marginLeft: 15,
    },
    userImage: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'gray',
        borderRadius: 25
    },
    textView: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    },

});
export default stylesLive;