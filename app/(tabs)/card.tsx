import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function CardRegistrationScreen() {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>복지 카드 등록</Text>
        <Text style={styles.subtitle}>CARD</Text>
      </View>

      {/* Card Image */}
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: "https://your-image-url.com" }} // Replace with your image source
          style={styles.cardImage}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Text>📷</Text>
        </TouchableOpacity>
      </View>

      {/* Car Number Section */}
      <View style={styles.inputSection}>
        <View style={styles.titleSection}>
          <Text style={styles.sectionTitle}>차량 번호 등록</Text>
          <Text style={styles.subtitle}>NUMBER</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="389라 4405"
          placeholderTextColor="#000"
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>등록하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  backButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  titleSection: {
    marginBottom: 10,
  },
  title: {
    color: "#79D7FF",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 5,
  },
  cardContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1, // Added border width
    borderColor: "#fff", // Added border color (white)
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cameraIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  inputSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: "#79D7FF",
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    fontSize: 24,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1, // Added border width
    borderColor: "#fff", // Added border color (white)
  },
  registerButton: {
    backgroundColor: "#79D7FF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
});
