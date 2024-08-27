import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { formatRelative } from "date-fns";
import { AutoComplete, Button, Radio, Space, Spin, message } from "antd";
const libraries = ["places"];
const mapContainerStyle = {
  height: "300px",
  width: "300px",
};
const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};

export default function Form() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDL9J82iDhcUWdQiuIvBYa0t5asrtz3Swk",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedOption, setSelectedOption] = useState("currentLocation");
  const onMapClick = React.useCallback(async (e) => {
    const results = await getGeocode({
      location: { lat: e.latLng.lat(), lng: e.latLng.lng() },
    });
    const { formatted_address } = results[0];
    setSelectedAddress(formatted_address);
    setMarkers((current) => [
      // ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    console.log({ lat, lng });
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    setMarkers((current) => [
      // ...current,
      {
        lat,
        lng,
        time: new Date(),
      },
    ]);
  }, []);
  return (
    <div id="boxmap">
      {!isLoaded ? (
        <div style={{ textAlign: "center" }}>
          <Spin spinning={!isLoaded} size="large" />
        </div>
      ) : (
        <>
          <Space>
            <Locate
              panTo={panTo}
              setValue2={selectedAddress}
              setSelectedAddress={setSelectedAddress}
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
            <Search panTo={panTo} />
          </Space>
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
          >
            {markers.map((marker) => (
              <Marker
                key={`${marker.lat}-${marker.lng}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setSelected(marker);
                }}
              />
            ))}

            {selected ? (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  <h2>
                    <span role="img" aria-label="bear">
                      🐻
                    </span>{" "}
                    Alert
                  </h2>
                  <p>Spotted {formatRelative(selected.time, new Date())}</p>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </>
      )}
    </div>
  );
}

const scrollToMap = () => {
  const scrtomap = document.querySelector("#boxmap");
  scrtomap.scrollIntoView({ behavior: "smooth" });
};
function Locate({ panTo, setValue2, setSelectedOption, selectedOption,setSelectedAddress }) {
  console.log(setValue2);
  const {
    ready,
    value,
    clearSuggestions,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });
  const options = data.map((address) => ({
    value: address.description,
  }));
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    scrollToMap();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
      console.log(lat, lng);
    } catch (error) {
      message.error(error);
    }
  };
  const handleLocate = async () => {
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Sử dụng panTo để di chuyển đến vị trí mới
        panTo({ lat: latitude, lng: longitude });

        // Lấy địa chỉ định dạng từ toạ độ
        const results = await getGeocode({
            location: { lat: latitude, lng: longitude },
        });

        const { formatted_address } = results[0];

        // Cập nhật địa chỉ vào giá trị
        setValue(formatted_address);

    } catch (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
    }
};

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Radio.Group
        onChange={handleOptionChange}
        value={selectedOption}
        style={{ marginLeft: "10px" }}
      >
        <Radio value="currentLocation" onClick={handleLocate}>
          Vị trí của tôi
        </Radio>
        <Radio value="selectedLocation">Địa chỉ trên bản đồ</Radio>
      </Radio.Group>
      <AutoComplete
        style={{ width: 400 }}
        options={options}
        value={selectedOption === "selectedLocation" ? setValue2 : value}
        onChange={
         setValue
        }
        onSelect={handleSelect}
        disabled={!ready}
      />
    </div>
  );
}
const Search = ({ panTo }) => {
  const {
    ready,
    value,
    clearSuggestions,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });
  const options = data.map((address) => ({
    value: address.description,
  }));

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    scrollToMap();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
      console.log(lat, lng);
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <div className="search" style={{ display: "flex", alignItems: "center" }}>
      <label htmlFor="">Nhập địa chỉ :</label>
      <AutoComplete
        style={{ width: 400 }}
        options={options}
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        disabled={!ready}
      />
    </div>
  );
};
