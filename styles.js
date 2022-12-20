import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    productsSection: {
        flex: 1
    },
    listsSection: {
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
    blockProduct: {
        backgroundColor: 'black',
        width: '90%',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    blockList: {
        backgroundColor: 'black',
        width: '90%',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontWeight: '700',
        color: 'white'
    },
    btnWhite: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        width: '15%',
        marginVertical: 15
    },
    btnTextWhite: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    }
});