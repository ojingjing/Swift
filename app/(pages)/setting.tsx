import React, { useState, createContext, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import Slider from "@react-native-community/slider";

// Create a Theme Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleDarkMode = () => setIsDarkMode(true);
  const toggleLightMode = () => setIsDarkMode(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, toggleLightMode }}>
      <SettingsPage />
    </ThemeContext.Provider>
  );
}

function SettingsPage() {
  const [fontSize, setFontSize] = useState(18); // Default font size to 18
  const [smsAlert, setSmsAlert] = useState(false); // Default SMS alert off
  const [pushAlert, setPushAlert] = useState(false); // Default push alert off
  const { isDarkMode, toggleDarkMode, toggleLightMode } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#000" : "#fff" },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* Back button can go here if needed */}
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              {
                color: isDarkMode ? "#79D7FF" : "#000",
                fontSize: 24, // Title font size set to 24
              },
            ]}
          >
            설정
          </Text>
        </View>
      </View>

      {/* Font Size Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>폰트 크기</Text>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={30}
          step={1}
          value={fontSize}
          onValueChange={(value) => setFontSize(value)}
          minimumTrackTintColor="#007AFF"
          maximumTrackTintColor="#000000"
        />
        <Text style={[styles.fontSizeLabel, { fontSize }]}>현재 크기: {fontSize}px</Text>
      </View>

      {/* Parking Notification Settings */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>주차 알림 설정</Text>

        {/* SMS Notification */}
        <View style={styles.notificationRow}>
          <Text style={[styles.notificationText, { fontSize }]}>문자알림</Text>
          <Switch
            value={smsAlert}
            onValueChange={setSmsAlert}
            trackColor={{ false: "#767577", true: "#007AFF" }}
            thumbColor={smsAlert ? "#fff" : "#f4f3f4"}
          />
        </View>

        {/* Push Notification */}
        <View style={styles.notificationRow}>
          <Text style={[styles.notificationText, { fontSize }]}>푸시알림</Text>
          <Switch
            value={pushAlert}
            onValueChange={setPushAlert}
            trackColor={{ false: "#767577", true: "#007AFF" }}
            thumbColor={pushAlert ? "#fff" : "#f4f3f4"}
          />
        </View>
      </View>

      {/* Mode Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize }]}>모드</Text>
        <View style={styles.modeContainer}>
          <TouchableOpacity
            style={[
              styles.modeButton,
              !isDarkMode && styles.selectedModeButton,
            ]}
            onPress={toggleLightMode}
          >
            <Text style={[styles.modeText, { fontSize }]}>밝은 모드</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeButton, isDarkMode && styles.selectedModeButton]}
            onPress={toggleDarkMode}
          >
            <Text style={[styles.modeText, { fontSize }]}>다크 모드</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24, // Title font size set to 24
    fontWeight: "bold",
    marginRight: 5, // 아이콘과 글씨 사이의 간격 조정
  },
  section: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#68C3E5", // 채도와 명도를 살짝 낮춘 색상
    borderRadius: 10,
  },
  sectionTitle: {
    color: "#000",
    fontSize: 18, // Default font size set to 18
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  fontSizeLabel: {
    marginTop: 10,
    color: "#000",
    fontSize: 16,
  },
  notificationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  notificationText: {
    fontSize: 18, // Default font size set to 18
    color: "#000",
  },
  modeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modeButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#1E1E1E",
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedModeButton: {
    backgroundColor: "#007AFF",
  },
  modeText: {
    color: "#fff",
    fontSize: 16,
  },
});
