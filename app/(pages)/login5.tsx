import { useRouter } from "expo-router";
import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const IDNumberInputScreen = () => {
  const [firstPart, setFirstPart] = useState("");
  const [secondPart, setSecondPart] = useState("");
  const secondPartRef = useRef(null);

  const router = useRouter();
  const handleFirstPartChange = (text) => {
    const filteredText = text.replace(/[^0-9]/g, "").slice(0, 6);
    setFirstPart(filteredText);
    if (filteredText.length === 6) {
      secondPartRef.current.focus(); // 앞 6자리 입력이 완료되면 자동으로 뒤 7자리 입력칸으로 포커스 이동
    }
  };

  const handleSecondPartChange = (text) => {
    const filteredText = text.replace(/[^0-9]/g, "").slice(0, 7);
    setSecondPart(filteredText);
  };

  const isNextEnabled = firstPart.length === 6 && secondPart.length === 7;

  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>5. 회원가입</Text>

      <Text style={styles.title}>주민등록번호를 입력해 주세요</Text>

      <View style={styles.inputContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.subtitle}>주민등록번호</Text>
          <TextInput
            style={[
              styles.input,
              firstPart.length === 6 && styles.inputActive, // 앞자리 입력 후 테두리 색 변경
            ]}
            placeholder="앞 6자리"
            placeholderTextColor="#888"
            value={firstPart}
            onChangeText={handleFirstPartChange}
            keyboardType="numeric"
            maxLength={6} // 앞 6자리 입력 제한
          />
          <Text style={styles.hyphen}>-</Text>
          <TextInput
            style={[
              styles.input,
              secondPart.length === 7 && styles.inputActive, // 뒷자리 입력 후 테두리 색 변경
            ]}
            placeholder="뒤 7자리"
            placeholderTextColor="#888"
            value={secondPart}
            onChangeText={handleSecondPartChange}
            keyboardType="numeric"
            maxLength={7} // 뒤 7자리 입력 제한
            secureTextEntry // 뒤 7자리 비밀번호 형태로 표시
            ref={secondPartRef}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            isNextEnabled && styles.activeButton, // 필드 입력 후 버튼 스타일 변경
          ]}
          onPress={() => {
            if (isNextEnabled) {
              router.push("/(pages)/login6");
            }
          }}
          disabled={!isNextEnabled}
        >
          <Text
            style={[
              styles.buttonText,
              isNextEnabled && styles.activeButtonText, // 필드 입력 후 텍스트 색상 변경
            ]}
          >
            확인
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // 배경색: 검정색
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
    textAlign: "center", // 입력 텍스트를 가운데 정렬
  },
  inputActive: {
    borderColor: "#fff", // 필드 입력 후 테두리 색상 흰색
  },
  hyphen: {
    fontSize: 18,
    color: "#fff",
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center", // 버튼을 가운데 정렬
    width: "100%",
    marginTop: 20,
  },
  button: {
    width: "100%",
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

export default IDNumberInputScreen;
