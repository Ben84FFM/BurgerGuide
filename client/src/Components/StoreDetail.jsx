import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        console.log(response.data);
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
   
    <div className="flex flex-col lg:flex-row items-center justify-center  p-4 lg:p-8">
      <div className="w-full lg:w-1/2 lg:mr-4 bg-black bg-opacity-50 p-4 lg:p-8 mb-4 lg:mb-0">
        <h2 className="text-xl lg:text-2xl xl:text-3xl text-cbb26a font-bold mb-4 lg:mb-6">{store.store.name}</h2>
        {console.log(store.store.image)}
        <img src={store.store.images} alt={store.store.name} className="w-full lg:w-3/4 mx-auto rounded-md shadow-lg" />
      </div>
  

      <div className="w-full lg:w-1/2 p-4">
        <h3 className="text-lg lg:text-xl xl:text-2xl text-cbb26a font-bold mb-4 lg:mb-6">Platzhalter für Kommentare</h3>
       
      </div>
  

      <div className="w-full lg:w-1/2 p-4 lg:ml-4 hidden lg:block">
        <h3 className="text-lg lg:text-xl xl:text-2xl text-cbb26a font-bold mb-4 lg:mb-6"> Platzhalter für Bewertungen</h3>
      </div>

      <div className="w-full lg:w-1/2 p-4 lg:ml-4 hidden lg:block">
        <h3 className="text-lg lg:text-xl xl:text-2xl text-cbb26a font-bold mb-4 lg:mb-6"> Button rate this store - link to rate and comment function</h3>
      </div>

    </div>
  );
};

export default StoreDetails;