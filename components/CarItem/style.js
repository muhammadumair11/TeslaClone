import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
      carContainer: {
        width: "100%",
        height: Dimensions.get("screen").height,
      },
      titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center"
      },
      titleText: {
        fontSize: 40,
        fontWeight: "500"
      },
      subTitleText: {
        fontSize: 15,
        color: "#5c5e62"
      },  
      bgImage: {
        width: "100%",
        height: Dimensions.get("screen").height,
        resizeMode: "cover",
        position: "absolute"
      },
      buttonContainer: {
        position: "absolute",
        bottom: 80,
        width: "100%"
      }
})

export default styles