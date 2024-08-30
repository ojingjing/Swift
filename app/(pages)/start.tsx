import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  // 애니메이션 값 설정

  //   const rotation = useRef(new Animated.Value(0)).current;
  // const navigation = useNavigation();
  const router = useRouter();

  const rotation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: 2, // 360도 * 2
      duration: 4000, // 4000ms 동안 애니메이션
      useNativeDriver: true,
    }).start(() => {
      router.push("login"); // 애니메이션 종료 후 네비게이션 실행
    });
  }, [router]);
  // 회전 값을 각도로 변환
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["0deg", "360deg", "720deg"], // 두 바퀴 회전
  });

  // 애니메이션 스타일
  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/logo.png")}
        style={[styles.logo, animatedStyle]}
      />

      <Text style={styles.title}>
        공평한 주차의 시작,{"\n"}
        스위프트로 더 나은 내일을 만드세요.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // 검정 배경
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20, // 텍스트 양옆에 여백 추가
  },
  logo: {
    width: 100, // 로고 크기
    height: 100, // 로고 크기
    marginBottom: 20, // 로고와 텍스트 사이 여백
  },
  title: {
    color: "#fff", // 텍스트 색상 (흰색)
    fontSize: 23, // 텍스트 크기
    fontWeight: "bold",
    textAlign: "center", // 텍스트 가운데 정렬
    lineHeight: 34, // 텍스트 줄 간격 조정
  },
});
