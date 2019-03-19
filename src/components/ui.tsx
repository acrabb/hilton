import React from "react"
import { Text, View } from "react-native"

export const LableledItem = ({ label, children }) => (
  <View
    style={{
      flexDirection: "row",
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
