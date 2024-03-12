import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import ReactStars from 'react-stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import 'leaflet/dist/leaflet.css';
import PolicyBackground from './DynamicBackground';

const StoreDetails = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const [storeResponse, reviewsResponse] = await Promise.all([
          axios.get(`http://localhost:5000/stores/${storeId}`),
          axios.get(`http://localhost:5000/reviews/${storeId}`),
        ]);
        setStore(storeResponse.data.data);
        setReviews(reviewsResponse.data.data.reviews);
        setAverageRating(reviewsResponse.data.data.averageRating);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchDetails();
  }, [storeId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!store) {
    return <p>Store not found.</p>;
  }

  return (
    <PolicyBackground>
      <div className='container flex flex-col w-full p-4'>
        <div id='burger-store' className='p-8 flex rounded-md'>
          <div>
            <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-cbb26a'>
              {store.store.name}
            </h2>
            <ReactStars
              count={5}
              size={24}
              value={averageRating}
              edit={false}
              color2={'#ffd700'}
              className='mb-4'
            />
            <p className='text-cbb26a mb-2'>
              📍
              {`${store.store.address.street}, ${store.store.address.zipCode} ${store.store.address.city}`}
            </p>
            <a href={store.store.website}>
              <p className='text-cbb26a mb-2'>{store.store.website}</p>
            </a>
            <p className='text-cbb26a mb-4'>{store.store.phoneNumber}</p>
            <p className='text-cbb26a font-bold'>Share with your Friends</p>
            <br />
            <div className="flex space-x-4">
  {/* Instagram */}
  <a href={`https://www.instagram.com/${store.store.instagram}`} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className="text-2xl text-cbb26a cursor-pointer" />
  </a>
  {/* Facebook */}
  <a href={`https://www.facebook.com/${store.store.facebook}`} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} className="text-2xl text-cbb26a cursor-pointer" />
  </a>
  {/* Twitter */}
  <a href={`https://twitter.com/${store.store.twitter}`} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} className="text-2xl text-cbb26a cursor-pointer" />
  </a>
  {/* WhatsApp */}
  <a href={`https://wa.me/${store.store.whatsapp}`} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-cbb26a cursor-pointer" />
  </a>
</div>
          
          
          </div>

        
        </div>

        <div
          id='burger-map'
          className='flex flex-col md:flex-row justify-between rounded-md mt-4'
          style={{ borderRadius: '0.375rem' }}
        >
          <div className='w-full p-8 '>
            <img
              className='w-full rounded-xl imageBorderLogo'
              src={store.store.images}
              alt={store.store.name}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className='w-full p-8 h-128 rounded-md'>
            <MapContainer
              zoom={12}
              style={{ height: '100%', width: '100%', borderRadius: '0.375rem' }}
              center={store.store.location.coordinates}
            >
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={store.store.location.coordinates}></Marker>
            </MapContainer>
          </div>
        </div>

        <div
          className='flex'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            borderRadius: '0.3rem',
            width: 'fit-content',
            padding: '1rem',
            justifyContent: 'space-between',
          }}
        >
          <div className='flex-1 max-w-3x sm:w-full overflow-x-hidden overflow-y-auto p-8 '>
            <h3 className='text-xl lg:text-2xl font-bold text-cbb26a pb-6 underline'>
              Reviews from Users
            </h3>
            <div className='flex flex-col space-y-4 max-h-96 overflow-y-auto '>
              {reviews.length > 0 ? (
                <ul>
                  {reviews.map((review) => (
                    <li key={review._id}>
                      <div
                        id='review'
                        className='flex flex-col items-start rounded-xl bg-slate-200  my-2 p-3 text-gray-600'
                      >
                        <div>
                          <Link to='#' className='hover:underline'>
                            {review.user.firstName} {review.user.lastName}:
                          </Link>
                          <span className='block'>{review.comment}</span>
                        </div>
                        <div className='mt-2'>
                          <ReactStars
                            count={5}
                            size={24}
                            value={Number(review.individualAverage)}
                            edit={false}
                            color2={'#ffd700'}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='text-cbb26a font-bold'>No Reviews</p>
              )}
            </div>
          </div>

          <div className='p-8' style={{ alignSelf: 'center' }}>
            <Link to={`/reviewStore/${storeId}`}>
              <button className='text-xl font-bold text-cbb26a bg-black p-2 border-cbb26a rounded-md hover:bg-cbb26aHover hover:text-white transition duration-300 rounded-xl'>
                Rate this store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PolicyBackground>
  );
};

export default StoreDetails;