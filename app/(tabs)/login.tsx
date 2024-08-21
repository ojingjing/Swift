// import React from 'react';
// import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native';
// import { login } from '@react-native-seoul/kakao-login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const LoginScreen = ({ navigation }) => {
//   const handleKakaoLogin = async () => {
//     try {
//       const result = await login();
//       if (result) {
//         Alert.alert('로그인 성공', `환영합니다, ${result.profile.nickname}님`);
//         // 로그인 성공 후 메인 화면으로 이동 로직 추가 가능
//       }
//     } catch (error) {
//       Alert.alert('로그인 실패', '카카오 로그인에 실패했습니다. 다시 시도해주세요.');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image 
//         source={require('../../assets/images/logo.png')} 
//         style={styles.logo} 
//       />

//       <Text style={styles.title}>
//         공평한 주차의 시작,{"\n"}
//         스위프트로 더 나은 내일을 만드세요.
//       </Text>
      
//       <TextInput
//         style={styles.input}
//         placeholder="이메일 입력"
//         placeholderTextColor="#888"
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="비밀번호 입력"
//         placeholderTextColor="#888"
//         secureTextEntry
//       />

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.loginButton} onPress={handleKakaoLogin}>
//           <Text style={styles.buttonText}>로그인</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Login1')}>
//           <Text style={styles.buttonText}>회원가입</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000', 
//     padding: 20,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 30,
//     alignSelf: 'center',
//   },
//   title: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     alignSelf: 'stretch',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#1C1C1E',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginVertical: 10,
//     color: '#fff',
//     borderColor: '#fff',
//     borderWidth: 1,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 20,
//   },
//   loginButton: {
//     flex: 1,
//     height: 50,
//     backgroundColor: '#2D9CDB',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   signupButton: {
//     flex: 1,
//     height: 50,
//     backgroundColor: '#2D9CDB',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;


import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { login } from '@react-native-seoul/kakao-login';

const LoginScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const handleKakaoLogin = async () => {
    try {
      const result = await login();
      if (result) {
        Alert.alert('로그인 성공', `환영합니다, ${result.profile.nickname}님`);
      }
    } catch (error) {
      Alert.alert('로그인 실패', '카카오 로그인에 실패했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')} 
        style={styles.logo} 
      />

      <Text style={styles.title}>
        공평한 주차의 시작,{"\n"}
        스위프트로 더 나은 내일을 만드세요.
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="이메일 입력"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => {
          router.setParams({ name: 'login1' });
        }}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signupButton}  onPress={() => router.push('/(pages)/login1')}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1C1C1E',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  loginButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#2D9CDB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  signupButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#2D9CDB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default LoginScreen;
