import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00316e',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container1: {
        flex: 1,
        backgroundColor: '#00316e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
      },
      
      titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
      },
      titleText2: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
      },
      buttonText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        padding: 25,
        textTransform: "uppercase",

      },
      // buttonContainer:{
      //   paddingTop: 15,
      //   paddingBottom: 15,
      //   paddingRight: 35,
      //   paddingLeft: 35,
      //   borderRadius: 35,
      //   borderWidth: 2,
      // },
      buttonText1:{ 
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        padding: 25,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 35,
        paddingLeft: 35,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: "#00315a",
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',

      },
      buttonText2:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        margin: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 35,
        paddingLeft: 35,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: "#ffffff",
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer:{
        marginTop: 180,
        textTransform: "lowercase",
      },
      logo: {
        width: 70,
        height: 60,
      },
      modalToggle: {
        padding: 10,
        alignSelf: "flex-end"  ,      
      }
      // linearGradient: {
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   borderRadius: 5,
      //   height: 200,
      //   width: 350,
      // },
      
    }
    );