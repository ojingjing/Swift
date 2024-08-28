import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function ModalScreen() {
  const navigation = useNavigation();
  const data = [
    {
      id: "1",
      title: "해운대광장 공영 주차장",
      data: "해운대 동구 390",
      location: "640m",
    },
    {
      id: "2",
      title: "유료 민영 주차장",
      data: "부산광역시 동구 249",
      location: "230m",
    },
    {
      id: "3",
      title: "광안리 해변 공용 주차장",
      data: "부산광역시 광안리892",
      location: "100m",
    },
  ];

  const renderItem = ({ item }) => (
    <ScrollView>
      <TouchableOpacity style={styles.item}>
        <View style={{ backgroundColor: "#000000", marginLeft: 10 }}>
          <Icon
            name="parking"
            size={20}
            color="#90D5FB"
            style={styles.iconStyle}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#000000",
          }}
        >
          <View style={{ backgroundColor: "#000000", marginLeft: 10 }}>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={{ color: "lightgray", marginTop: 10 }}>
              {item.data}
            </Text>
          </View>
          <View style={{ backgroundColor: "#000000", marginRight: 30 }}>
            <Text style={{ color: "white" }}>{item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon
          name="magnify"
          size={20}
          color="#90D5FB"
          style={styles.iconStyle}
        />
        <GooglePlacesAutocomplete
          placeholder="목적지 또는 주소 검색"
          onPress={(data, details = null) => {
            // setLocation(data.description);
            console.log(data, details);
            navigation.goBack();
          }}
          query={{
            key: "AIzaSyBTyK1QM6UcLdXPhGF_MATUWs-868I5OFc",
            language: "ko",
          }}
          // textInputProps={{ placeholderTextColor: "#90D5FB" }}
          styles={{
            textInputContainer: {
              // backgroundColor: "black",
            },
            textInput: {
              // height: 40,
              // color: "#90D5FB",
              fontSize: 16,
            },
            // predefinedPlacesDescription: {
            //   color: "red",
            // },
          }}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200} // 검색 입력 지연
        />
      </View>
      <View style={[styles.inputContainer, { justifyContent: "flex-end" }]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            backgroundColor: "#000000",
          }}
        >
          <Icon
            name="magnify"
            size={20}
            color="#90D5FB"
            style={styles.iconStyle}
          />
          <Icon
            name="magnify"
            size={20}
            color="#90D5FB"
            style={styles.iconStyle}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 20,
    color: "#90D5FB",
    fontWeight: "bold",
  },
  // input: {
  //   flex: 1,
  //   height: 50,
  //   fontSize: 16,
  //   paddingHorizontal: 10,
  // backgroundColor: "#000000",
  // },
  inputContainer: {
    // flex: 1,
    // justifyContent: "center",
    flexDirection: "row",
    // alignItems: "center",
    backgroundColor: "#000000",
    // borderRadius: 5,
    marginTop: 20,
    marginRight: 20,
    // marginBottom: 20,
    marginLeft: 20,
  },
  iconStyle: {
    padding: 15,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#000000",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
