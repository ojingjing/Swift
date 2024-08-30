import React from "react";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ionicons 아이콘 사용
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// 아이콘 컴포넌트 정의
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={35} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#79D7FF",
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          backgroundColor: "#000000", // 탭 바의 배경색 설정
          height: 80, // 탭 바의 높이를 85으로 설정
          paddingBottom: 15, // 아이콘과 텍스트가 탭 바 내에서 중앙에 오도록 여유 공간 추가
          borderTopLeftRadius: 30, // 좌측 모서리 둥글게
          borderTopRightRadius: 30, // 우측 모서리 둥글게
          position: "absolute", // 플로팅 스타일로 설정
          left: 30,
          right: 30,
          bottom: 30,
          borderRadius: 30, // 탭바 전체 둥글게
        },
        tabBarLabelStyle: {
          fontSize: 13, // 텍스트 폰트 크기를 16으로 설정
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "주변",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="location-outline" color={color} />
          ), // 귀여운 스타일의 위치 아이콘 사용
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "MY",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-outline" color={color} />
          ), // 귀여운 마이페이지 아이콘 사용
        }}
      />
    </Tabs>
  );
}
