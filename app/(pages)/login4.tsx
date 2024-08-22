import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

const GenderSelectScreen = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const router = useRouter();

  const isNextEnabled = selectedGender !== null; // 성별이 선택되었는지 여부에 따른 버튼 활성화

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>4. 회원가입</Text>
      <Text style={styles.title}>성별을 선택해 주세요</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === 'female' && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderSelect('female')}
        >
          <Text
            style={[
              styles.genderButtonText,
              selectedGender === 'female' && styles.selectedGenderButtonText,
            ]}
          >
            여성
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === 'male' && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderSelect('male')}
        >
          <Text
            style={[
              styles.genderButtonText,
              selectedGender === 'male' && styles.selectedGenderButtonText,
            ]}
          >
            남성
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.button,
            isNextEnabled && styles.activeButton, // 성별 선택 후 버튼 스타일 변경
          ]}
          onPress={() => router.push('nextScreen')} // 다음 화면으로 이동
          disabled={!isNextEnabled} // 성별 선택되지 않으면 버튼 비활성화
        >
          <Text style={[
            styles.buttonText,
            isNextEnabled && styles.activeButtonText, // 성별 선택 후 텍스트 색상 변경
          ]}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 20,
    paddingTop: 80, 
  },
  title: {
    fontSize: 24, 
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 10, 
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  selectedGenderButton: {
    backgroundColor: '#fff',
  },
  genderButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  selectedGenderButtonText: {
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // 버튼을 가운데 정렬
    width: '100%',
    marginTop: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#2D9CDB', // 기본 버튼 배경색 파랑
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1, 
    borderColor: 'transparent', // 기본 테두리 색상 투명
  },
  activeButton: {
    backgroundColor: '#2D9CDB', // 성별 선택 후 버튼 배경색 파랑
    borderColor: '#fff', // 성별 선택 후 테두리 색상 흰색
  },
  buttonText: {
    fontSize: 24,
    color: '#fff', // 기본 텍스트 색상 흰색
    fontWeight: 'bold',
  },
  activeButtonText: {
    color: '#000', // 성별 선택 후 텍스트 색상 흰색 유지
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
});

export default GenderSelectScreen;