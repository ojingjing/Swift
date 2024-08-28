import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRouter } from "expo-router";

const Login1Screen = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const isNextEnabled = email.length > 0; // 이메일 입력 여부에 따른 활성화 상태

  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>1. 회원가입</Text>
      <Text style={styles.title}>이메일주소를 입력해 주세요</Text>
      <View style={styles.inputContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.subtitle}>이메일</Text>
          <TextInput
            style={[
              styles.input,
              isNextEnabled && styles.inputActive, // 필드 입력 후 테두리 색 변경
            ]}
            placeholder="이메일 입력"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            isNextEnabled && styles.activeButton, // 필드 입력 후 버튼 스타일 변경
          ]}
          onPress={() => router.push("login2")}
          disabled={!isNextEnabled} // 입력되지 않으면 버튼 비활성화
        >
          <Text
            style={[
              styles.buttonText,
              isNextEnabled && styles.activeButtonText, // 필드 입력 후 텍스트 색상 변경
            ]}
          >
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "stretch",
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#1C1C1E",
    borderRadius: 5,
    borderColor: "#888", // 기본 테두리 색상
    borderWidth: 1,
  },
  inputActive: {
    borderColor: "#fff", // 필드 입력 후 테두리 색상 흰색
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  button: {
    flex: 1,
    height: 50,
    backgroundColor: "#2D9CDB", // 기본 버튼 배경색 파랑
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent", // 기본 테두리 색상 투명
  },
  activeButton: {
    borderColor: "#fff", // 필드 입력 후 테두리 색상 흰색
  },
  buttonText: {
    fontSize: 24,
    color: "#fff", // 기본 텍스트 색상 흰색
    fontWeight: "bold",
  },
  activeButtonText: {
    color: "#000", // 필드 입력 후 텍스트 색상 검정
  },
  footerText: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
});

export default Login1Screen;
