import React, { useContext, useState, useCallback, useRef } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import "../../../styles/_mapa.scss";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import PropTypes from "prop-types";
import { formatRelative } from "date-fns";
//import * as parksData from "../data/skateboard-parks.json";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import logo from "../../../img/harvest.png";
import ubicacionMapa from "../../../img/ubicacion.png";
const libraries = ["places"];
const mapContainerStyle = {
	with: "90vw",
	height: "45vh"
};

const center = {
	lat: 9.9348041,
	lng: -84.1020275
};
const options = {
	disableDefaultUI: true,
	zoomControl: true
};

export const Mapa = () => {
	const { store, actions } = useContext(Context);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_API_KEY_GOOGLE_MAPS,
		libraries
	});

	const [markers, setMarkers] = useState([]);
	const [selected, setSelected] = useState(null);
	const onMapClick = useCallback(event => {
		setMarkers(current => [
			...current,
			{
				lat: event.latLng.lat(),
				lng: event.latLng.lng(),
				time: new Date()
			}
		]);
	}, []);

	const mapRef = useRef();
	const onMapLoad = useCallback(map => {
		mapRef.current = map;
	}, []);

	const panTo = useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(14);
	}, []);

	if (loadError) return "Error al cargar el mapa";
	if (!isLoaded) return "Loading Maps";

	return (
		<div>
			<h1>Agricultores 🧑‍🌾</h1>

			{/* <Search panTo={panTo} />
			<Locate panTo={panTo} /> */}
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={12}
				center={center}
				options={options}
				onClick={onMapClick}
				onLoad={onMapLoad}>
				{markers.map(marker => (
					<Marker
						key={marker.time.toISOString()}
						position={{ lat: marker.lat, lng: marker.lng }}
						icon={{
							url: logo,
							scaledSize: new window.google.maps.Size(40, 60),
							origin: new window.google.maps.Point(0, 0),
							anchor: new window.google.maps.Point(20, 30)
						}}
						onClick={() => {
							setSelected(marker);
						}}
					/>
				))}

				{selected ? (
					<InfoWindow position={{ lat: selected.lat, lng: selected.lng }}>
						<div>
							<h2>Detalles</h2>
							<p>Hora {formatRelative(selected.time, new Date())}</p>
						</div>
					</InfoWindow>
				) : null}
			</GoogleMap>
		</div>
	);
};

// function Locate({ panTo }) {
// 	return (
// 		<button
// 			className="locate"
// 			onClick={() => {
// 				navigator.geolocation.getCurrentPosition(
// 					position => {
// 						panTo({
// 							lat: position.coords.latitude,
// 							lng: position.coords.longitude
// 						});
// 					},
// 					() => null
// 				);
// 			}}>
// 			<img src={ubicacionMapa} alt="Mi Ubicacion" />
// 		</button>
// 	);
// }

// function Search({ panTo }) {
// 	const {
// 		ready,
// 		value,
// 		suggestions: { status, data },
// 		setValue,
// 		clearSuggestions
// 	} = usePlacesAutocomplete({
// 		requestOptions: {
// 			location: { lat: () => 9.9348041, lng: () => -84.1020275 },
// 			radius: 25 * 1000
// 		}
// 	});
// 	return (
// 		<div className="search">
// 			<Combobox
// 				onSelect={async address => {
// 					setValue(address, false);
// 					clearSuggestions();

// 					try {
// 						const results = await getGeocode({ address });
// 						const { lat, lng } = await getLatLng(results[0]);
// 						panTo({ lat, lng });
// 					} catch (error) {
// 						//console.log("error");
// 					}
// 					//console.log(address);
// 				}}>
// 				<ComboboxInput
// 					value={value}
// 					onChange={e => {
// 						setValue(e.target.value);
// 					}}
// 					disabled={!ready}
// 					placeholder="Ingrese una ubicación"
// 				/>
// 				<ComboboxPopover>
// 					<ComboboxList>
// 						{status === "OK" &&
// 							data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}
// 					</ComboboxList>
// 				</ComboboxPopover>
// 			</Combobox>
// 		</div>
// 	);
// }

// Search.propTypes = {
// 	panTo: PropTypes.objeto
// };
// Locate.propTypes = {
// 	panTo: PropTypes.objeto
// };
