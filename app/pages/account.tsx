import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // If you are using Expo, install @expo/vector-icons

export default function ProfileUpdateScreen() {
  // State for form fields
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Title Section */}
      <Text style={styles.title}>회원 정보 수정</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://your-profile-image-url.com' }} // Replace with your image source
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.uploadButton}>
          <Ionicons name="camera" size={16} color="#000" style={styles.cameraIcon} />
          <Text style={styles.uploadButtonText}>사진 올리기</Text>
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.input}
          placeholder="이메일 입력"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"  // Lighter placeholder text
          value={email}
          onChangeText={setEmail}  // Update email state
        />

        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="이름 입력"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"  // Lighter placeholder text
          value={name}
          onChangeText={setName}  // Update name state
        />

        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"  // Lighter placeholder text
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}  // Update password state
        />

        <Text style={styles.label}>휴대폰 번호</Text>
        <TextInput
          style={styles.input}
          placeholder="휴대폰 번호 입력"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"  // Lighter placeholder text
          value={phone}
          onChangeText={setPhone}  // Update phone state
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Text style={[styles.footerText, { color: '#fff' }]}>회원정보를 삭제하시겠습니까?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.footerText, { color: '#fff' }]}>회원탈퇴</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    color: '#79D7FF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    backgroundColor: '#79D7FF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cameraIcon: {
    marginRight: 10,
  },
  uploadButtonText: {
    color: '#000',
    fontSize: 16,
  },
  formContainer: {
    backgroundColor: '#79D7FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  label: {
    color: '#000',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#E0F7FF',
    color: '#000',
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,  // Adjust this value to move the text upward
  },
  footerText: {
    color: '#fff',  // Set footer text to white
    fontSize: 14,
  },
});