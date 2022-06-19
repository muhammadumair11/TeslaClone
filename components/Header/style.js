import { Dimensions, StyleSheet } from "react-native";

const style = StyleSheet.create({
    headerContainer: {
        width: Dimensions.get("screen").width,
        position: "absolute",
        top: 40,
        zIndex: 100,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: "contain"
    },
    
    menu: {
        width: 25,
        height: 25,
        resizeMode: "contain"
    }

})

export default style