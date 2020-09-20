import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Profile from './profile';
import Skeleton from './skeleton';

const App = () => {

  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://json-placeholder-api.now.sh/api/profiles');
        setProfiles(data.default.profiles);
        setIsLoading(true);
      }
      catch (error) {
        console.log('error', error);
      }
    }
    fetchData();
  }, []);

  if (!isLoading) {
    return <Skeleton ready={false} rows={3} type='media' color="#E0E0E0" showLoadingAnimation><></></Skeleton>
  }

  return (
    <>
      <Profile data={profiles}></Profile>
    </>
  )
}

export default App;