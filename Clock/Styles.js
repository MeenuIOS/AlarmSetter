import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    imageViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 900,
        width: 500
    },
    card: {
        shadowRadius: 6,
        shadowOpacity: 0.26,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
        backgroundColor: 'black',
        height: 500,
        width: 350,
        justifyContent: 'flex-start',
        marginBottom: 36
    },
    titleContainer: {
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },
    textContent: {
        fontSize: 30,
        alignItems: 'center',
        color: 'red'

    },
    textInputContainer: {
        flexDirection: "row",
        marginLeft: 30,
        marginRight: 25,
        justifyContent: 'space-between',
        width: 250,
        height: 60,
        backgroundColor: 'black',
        paddingTop: 0,
        marginTop: 20,
        alignItems: 'center',
    },
    textValue: {
        marginLeft: 25,
        marginRight: 15,
        shadowRadius: 6,
        shadowOpacity: 0.26,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
        width: 300,
        height: 130,
        backgroundColor: 'white',
        paddingTop: 0,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textTitle: {
        paddingTop: 10,
        fontSize: 20,
        alignItems: 'center',
        color: 'red'
    },
    inputView: {
        paddingTop: 0,
        marginLeft: 10,
        marginRight: 10,
        width: 60,
        height: 50,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 25,
        textAlign: 'center'
    },
    inputAlarmView: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 250,
        height: 50,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 18,
        textAlign: 'center'
    },
    setAlarmButton: {
        marginLeft: 115,
        marginTop: 20,
        width: 120,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default Styles