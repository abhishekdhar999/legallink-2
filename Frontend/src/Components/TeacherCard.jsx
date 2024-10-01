import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TeacherCard({
  name,
  image,
  userId,
  number,
  charge,
  email,
  description,
  subjects,
  location,
  subscribersCount
}) {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (channelId) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/subscription/subscribe",
        { channelId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessTokken')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("response", response);

      if (response.status === 200) {
        alert("Subscribed successfully");
        setSubscribed(true);  // Update state to reflect subscription
      }
    } catch (error) {
      console.error("Subscription error", error);
    }
  };

  const handleUnsubscribe = async (channelId) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/subscription/unsubscribe",
        { channelId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessTokken')}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("response", response);

      if (response.status === 200) {
        setSubscribed(false);  // Update state to reflect unsubscription
        alert("Unsubscribed successfully");
      }
    } catch (error) {
      console.error("Unsubscription error", error);
    }
  };

  const showToolTip = () => {
    alert("Subscribe to see the videos");
  };

  // Check if user is already subscribed on component mount
  useEffect(() => {
    const checkSubscriptionStatus = async (channelId) => {
      try {
        const response = await axios.post(
          `http://localhost:3001/subscription/checksubscribed`,
          { channelId },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessTokken')}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log("response", response);

        if (response.status === 200) {
          setSubscribed(true);  // Set state if user is subscribed
        }
      } catch (error) {
        console.error("Check subscription error", error);
      }
    };

    checkSubscriptionStatus(userId);
  }, [userId]);

  const handleCreateChat = async (userId) => {
    const token = localStorage.getItem("accessTokken");
    try {
      const response = await axios.post(
        'http://localhost:3001/chat/createchat',
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("response", response);

      if (response.status !== 200) {
        alert('Failed to create chat');
      } else {
        alert('Chat created successfully');
        window.location.href = '/chats';  // Redirect to chats page
      }
    } catch (error) {
      console.error("Chat creation error", error);
    }
  };

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">{subscribersCount}</p>
              <p className="text-gray-400">Subscribers</p>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center ml-12">
              {subscribed ? (
                <Link to="/videos">
                  <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Videos
                  </button>
                </Link>
              ) : (
                <button
                  onMouseOver={() => showToolTip()}
                  className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Videos
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img className="w-full h-full object-cover rounded-full" src={image} alt={name} />
            </div>
          </div>

          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            {subscribed ? (
              <button
                onClick={() => handleUnsubscribe(userId)}
                className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Unsubscribe
              </button>
            ) : (
              <button
                onClick={() => handleSubscribe(userId)}
                className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            )}

            <button
              onClick={() => handleCreateChat(userId)}
              className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Message
            </button>
          </div>
        </div>

        <div className="mt-20 text-center border-b-2 border-b-black pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {name} <span className="font-light text-gray-500"></span>
          </h1>
          <p className="font-light text-gray-600 mt-3">
            <span className="font-extrabold text-xl">{location}</span>
          </p>
          <p className="mt-8 text-gray-500">
            Charge per Hour: <span className="font-extrabold text-xl">{charge}</span>
          </p>
          <p className="mt-2 text-gray-500">{email}</p>
          <p className="mt-2 text-gray-500">{number}</p>
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <p className="flex justify-center">Specialised In:</p>
          <p className="text-gray-600 text-center font-light lg:px-16">{subjects}</p>
        </div>

        <div className="mt-12 flex border-t-4 border-b-black flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">{description}</p>
        </div>
      </div>
    </div>
  );
}
