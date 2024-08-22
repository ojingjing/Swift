import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Picker } from "@react-native-picker/picker";

import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

export default function SettingsPage() {
  const [fontSize, setFontSize] = useState(14);
  const [fontSetting, setFontSetting] = useState("default");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(true);
  const toggleLightMode = () => setIsDarkMode(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>맞춤</Text>
          <Ionicons
            name="options-outline"
            size={24}
            color="#fff"
            style={styles.titleIcon}
          />
        </View>
      </View>

      {/* Font Size Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>폰트 크기</Text>
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
        <Text style={styles.fontSizeLabel}>현재 크기: {fontSize}px</Text>
      </View>

      {/* Font Setting Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>폰트 설정</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={fontSetting}
            style={styles.picker}
            onValueChange={(itemValue) => setFontSetting(itemValue)}
          >
            <Picker.Item label="기본" value="default" />
            <Picker.Item label="고딕" value="gothic" />
            <Picker.Item label="세리프" value="serif" />
          </Picker>
        </View>
      </View>

      {/* Mode Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>모드</Text>
        <View style={styles.modeContainer}>
          <TouchableOpacity
            style={[
              styles.modeButton,
              !isDarkMode && styles.selectedModeButton,
            ]}
            onPress={toggleLightMode}
          >
            <Text style={styles.modeText}>밝은 모드</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeButton, isDarkMode && styles.selectedModeButton]}
            onPress={toggleDarkMode}
          >
            <Text style={styles.modeText}>다크 모드</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 5, // 아이콘과 글씨 사이의 간격 조정
  },
  titleIcon: {
    marginLeft: 0,
  },
  section: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#68C3E5", // 채도와 명도를 살짝 낮춘 색상
    borderRadius: 10,
  },
  sectionTitle: {
    color: "#000",
    fontSize: 18,
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#B0C4DE", // 채도를 낮춘 테두리 색상
    borderRadius: 10,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#E0F7FF", // 배경색의 채도와 명도를 낮춤
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
