import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    section: {
        flex: 1
    },
    btn: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        backgroundColor: 'black',
        width: '40%',
        marginVertical: 15
    },
    btnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    itemBlock: {
        backgroundColor: 'black',
        width: '90%',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    titleWhite: {
        fontWeight: '700',
        color: 'white'
    },
    titleBlack: {
        fontWeight: '700',
        color: 'black',
        fontSize: 18
    },
    btnDelete: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#ed264e',
        width: '15%',
        marginVertical: 15
    },
    btnTextDelete: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    itemHeader: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 32
    },
    inputWhite: {
        width: '35%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 5,
        backgroundColor: 'white'
    },
    devider: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginTop: 10,
        marginBottom: 30,
        width: '100%'
    }
});