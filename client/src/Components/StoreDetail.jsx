import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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

    <div className="containerBG flex flex-col bg-black bg-opacity-100">

      <div className='p-8'>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-cbb26a mb-4">{store.store.name}</h2>
        <p className="text-cbb26a mb-2">
          {`${store.store.address.street}, ${store.store.address.zipCode} ${store.store.address.city}`}</p>
        <a href={store.store.website}><p className="text-cbb26a mb-2">{store.store.website}</p></a>
        <p className="text-cbb26a mb-4">{store.store.phoneNumber}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between ">

        <div className="w-full p-8">
          <img className="w-full rounded-md " src={store.store.images} alt={store.store.name}
            style={{ height: '100%', width: '100%', objectFit: 'cover', }} />
        </div>

        <div className="w-full p-8  h-32" >  {/* Map */}
          <MapContainer zoom={12} style={{ height: '100%', width: '100%', }} center={store.store.location.coordinates}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={store.store.location.coordinates}></Marker>
          </MapContainer>
        </div>
      </div>

      <div className="flex">

        <div className='fer p-8 flex-1'>
          <h3 className="text-xl lg:text-2xl font-bold text-cbb26a">Reviews from Users</h3>
          <ul className="list-disc">
            <ol className="text-cbb26a font-bold">PlaceHolder!</ol>
            <ol className="text-cbb26a font-bold">PlaceHolder!</ol>
          </ul>
        </div>

        <div className='fer p-8 flex-1'>

          <div className=" p-8 ">
            <h3 className="text-xl font-bold text-cbb26a mt-4">Rating:<span >⭐⭐⭐⭐</span></h3>
          </div>
          <div className="  p-8">
            <Link to={`/reviewStore/${storeId}`}>
              <button className="text-xl font-bold border-2 text-cbb26a mt-4 p-2 border-cbb26a rounded-md hover:bg-cbb26aHover">
                Rate this store</button>
            </Link>
          </div>

        </div>

      </div>

    </div>

  );
};

export default StoreDetails;