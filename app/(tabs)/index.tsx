
import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function App() {
  const [showListView, setShowListView] = useState(true);
  const handleMapPress = () => {
    setShowListView(false); // 지도를 터치하면 listView 숨김
  };
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const autoCompleteHandler = (data, details = null) => {
    if (details) {
      const newRegion = {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setRegion(newRegion);

      const newMarker = {
        latlng: {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        },
        title: data.description || "No title", // data.description을 사용하거나 제목이 없으면 "No title"을 사용
        description: "Selected from search", // 선택된 위치에 대한 설명
      };

      // 마커 배열 업데이트
      //setMarkers((prevMarkers) => [...prevMarkers, newMarker]); // 이전의 값들도 같이 표시
      setMarkers([newMarker]);
      // 지도를 새로운 지역으로 부드럽게 이동
      mapRef.current.animateToRegion(newRegion, 1500);
    }
  };
  console.log(showListView);

  // 초기 마커 상태 설정
  const [markers, setMarkers] = useState([]);
  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        ref={mapRef}
        region={region}
        onPress={handleMapPress}
      >
        <GooglePlacesAutocomplete
          minLength={1}
          placeholder="검색어 입력"
          query={{
            key: "AIzaSyBTyK1QM6UcLdXPhGF_MATUWs-868I5OFc",
            language: "ko",
            components: "country:kr",
          }}
          keyboardShouldPersistTaps={"handled"}
          fetchDetails={true}
          onPress={autoCompleteHandler}
          textInputProps={{
            onFocus: () => setShowListView(true), // 포커스를 받을 때 listView를 보여줌
          }}
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log("no results")}
          keepResultsAfterBlur={true}
          enablePoweredByContainer={false} //구글 표시 없애줌
          styles={{
            container: styles.autocompleteContainer,
            textInput: styles.textInput,
            listView: showListView ? styles.listView : styles.listViewHidden, // Adjusted the list view style
          }}
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
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
  textInput: {
    backgroundColor: "rgba(255,255,255,0.9)",
    height: 50,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  listView: {
    position: "absolute",
    top: 60,
    left: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    maxHeight: 200, // Limit the height and make it scrollable
  },
  listViewHidden: {
    display: "none", // 숨김 스타일
  },
});