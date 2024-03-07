import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const StoreDetails = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/stores/${storeId}`
        );
        setStore(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchStoreDetails();
  }, [storeId]);

  if (initialLoading) {
    return <p>Loading...</p>;
  }

  if (loading) {
    return <p>Loading store details...</p>;
  }

  if (error) {
    return <p>Error loading store details.</p>;
  }

  if (!store) {
    return <p>Store not found.</p>;
  }


  return (
    <div className="bg-black text-white">
      <div className="containerBG bg-black bg-opacity-70 flex flex-col items-center rounded-xl p-8 lg:p-16">
        <div className="flex flex-row lg:flex-row items-center justify-center mb-8 lg:mb-0">



          <div className="w-full lg:w-1/2 lg:mr-4 bg-black bg-opacity-80 p-8 mb-4 lg:mb-0 rounded-md shadow-lg">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-cbb26a mb-4">
              {store.store.name}
            </h2>
            <p className="text-cbb26a mb-2">
              {`${store.store.address.street}, ${store.store.address.zipCode} ${store.store.address.city}`}
            </p>
            <p className="text-cbb26a mb-2">{store.store.website}</p>
            <p className="text-cbb26a mb-4">{store.store.phoneNumber}</p>
            <img
              src={store.store.images}
              alt={store.store.name}
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-cbb26a mb-4">
              Reviews from Users
            </h3>
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-cbb26a mb-4">Reviews from Users</h3>
            <ul className="list-disc">
              <li className="mb-2 text-cbb26a font-bold">Beste Burger in der Stadt!</li>
              <li className="mb-2 text-cbb26a font-bold">Fantastischer Service!</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 p-8">
            {/* <MapContainer zoom={12} style={{ height: '300px', width: '100%', borderRadius: '10px', border: '2px solid  #b8860b', }}
              center={store.store.location.coordinates[0]}>
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={store.store.location.coordinates[1]}></Marker>
            </MapContainer> */}
            <MapContainer zoom={12} style={{ height: '300px', width: '100%', borderRadius: '10px', border: '2px solid  #b8860b', }} center={store.store.location.coordinates}>
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={store.store.location.coordinates}></Marker>
            </MapContainer>

            {console.log(store.store.location.coordinates[0])}
            {console.log(store.store.location.coordinates[1])}
            {console.log(store.store.location.coordinates)}
          </div>




        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 p-8 lg:ml-4 lg:block">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-cbb26a mb-4 lg:mb-6">
              Rating: <span className="text-yellow-400">⭐⭐⭐⭐</span>
            </h3>
          </div>


          <div className="w-full lg:w-1/2 p-8 lg:ml-4 hidden lg:block">

            <Link to="/reviewStore">
              <button className="border-2 border-cbb26a text-cbb26a px-6 py-2 rounded-md mt-4 hover:bg-cbb26aHover">
                Rate this store
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StoreDetails;