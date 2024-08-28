import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get('window'); // Get screen width

export default function HelpPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>도움말</Text>

      {/* Help Section in Blue Box */}
      <View style={styles.helpBox}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="call-outline" size={28} color="#000" style={styles.icon} />
          <Text style={styles.menuText}>고객센터</Text>
          <Ionicons name="chevron-forward" size={28} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="megaphone-outline" size={28} color="#000" style={styles.icon} />
          <Text style={styles.menuText}>공지사항</Text>
          <Ionicons name="chevron-forward" size={28} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="document-text-outline" size={28} color="#000" style={styles.icon} />
          <Text style={styles.menuText}>개인정보처리방침</Text>
          <Ionicons name="chevron-forward" size={28} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="file-tray-full-outline" size={28} color="#000" style={styles.icon} />
          <Text style={styles.menuText}>서비스이용약관</Text>
          <Ionicons name="chevron-forward" size={28} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Ionicons name="information-circle-outline" size={28} color="#000" style={styles.icon} />
          <Text style={styles.menuText}>버전정보 v2.220.0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Background color of the screen
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20, // Adjust padding for better centering
  },
  title: {
    color: "#79D7FF", // Title color
    fontSize: 30, // Title font size
    fontWeight: "bold",
    marginBottom: 20,
  },
  helpBox: {
    backgroundColor: "#79D7FF", // Blue background
    width: width - 40, // Adjust width to match screen width minus padding
    paddingVertical: 30, // Increase padding for larger box
    paddingHorizontal: 25, // Increase horizontal padding
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center', // Center the box horizontally
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30, // Increase padding for more spacing between items
    borderBottomWidth: 1,
    borderBottomColor: "#007BA3",
  },
  icon: {
    marginRight: 20, // Increase margin between icon and text
  },
  menuText: {
    flex: 1,   color: "#000",
    fontSize: 22, // Increase font size for text
  },
});

