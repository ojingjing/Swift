import { StyleSheet} from 'react-native';
import {Text , View} from '@/components/Themed';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>마이페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
