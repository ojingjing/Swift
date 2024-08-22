import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ParkingInfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="parking" size={24} color="#79D7FF" style={styles.icon} />
        <Text style={styles.headerText}>해운대광장 공영주차장</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon name="car" size={24} color="#000" style={styles.icon} />
          <Text style={styles.sectionTitle}>주차 가능 자리</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.subTitle}>장애인 전용</Text>
            <Text style={styles.largeInfoText}>5대 주차 가능</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subTitle}>비장애인 전용</Text>
            <Text style={styles.largeInfoText}>15대 주차 가능</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon
            name="credit-card-outline"
            size={24}
            color="#000"
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>현장 요금 및 운영 시간</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.infoText}>30분: 무료</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.infoText}>60분: 3,000원</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.infoText}>120분: 6,000원</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.infoText}>일주차: 12,000원</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.largeInfoText}>연중무휴 24시간</Text>
        </View>
      </View>
    </View>
  );
};

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
  icon: {
    marginRight: 10,
  },
  headerText: {
    color: "#79D7FF",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#79D7FF",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  subTitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  largeInfoText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  infoText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ParkingInfoScreen;
