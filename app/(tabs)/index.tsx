import React, { useState, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState("");
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // ref={mapRef}
        // region={region}
        // onPress={handleMapPress}
      >

        <View style={styles.map_on_box}>
          <View>
            <Link href="/modal" asChild>
              <TextInput
                style={styles.input}
                placeholder="검색어 입력"
                placeholderTextColor="lightgray"

                // value={searchQuery}
                // onChangeText={(text) => setSearchQuery(text)}
                // onSubmitEditing={handleSearch}
              />
            </Link>
          </View>

          <View style={styles.btn_box}>
            <TouchableOpacity style={styles.btu}>
              <Text>필터</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btu}>
              <Text>무료</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btu}>
              <Text>유료</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btu}>
              <Text>거리</Text>
            </TouchableOpacity>
          </View>
        </View>

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  // listView: {
  //   // position: "absolute",
  //   top: 60,
  //   left: 10,
  //   right: 10,
  //   backgroundColor: "white",
  //   borderRadius: 5,
  //   padding: 5,
  //   maxHeight: 200, // Limit the height and make it scrollable
  // },
  // listViewHidden: {
  //   display: "none", // 숨김 스타일
  // },
  map_on_box: { flexDirection: "column" },
  input: {
    height: 50,
    backgroundColor: "rgba(0, 0,0, 0.7)",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 60,

    borderRadius: 8,
    paddingLeft: 20,
    fontSize: 18,
  },

  btn_box: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btu: {
    backgroundColor: "white",
    height: 35,
    width: 70,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
