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
        setStore(response.data);
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
    <div>
      <h2 className='text-lg'>{store.name}</h2>
    </div>
  );
};

export default StoreDetails;