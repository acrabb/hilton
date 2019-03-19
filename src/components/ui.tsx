import React from "react"
import { Image, Text, View } from "react-native"

export const NavHeader = () => (
  <Image
    source={require("../../assets/hilton_2017_logo.png")}
    style={{
      width: "50%",
      height: "100%",
      resizeMode: "contain",
    }}
  />
)

export const LableledItem = ({ label, children }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: 5,
    }}
  >
    <Text
      style={{
        width: "30%",
        textAlign: "right",
        paddingRight: 5,
        fontSize: 16,
        fontWeight: "bold",
      }}
    >
      {label}
    </Text>
    {children}
  </View>
)

export const ListSeparator = () => (
  <View
    style={{
      backgroundColor: "transparent",
    }}
  >
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "black",
        opacity: 0.2,
        marginLeft: "14%",
      }}
    />
  </View>
)
