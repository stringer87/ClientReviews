import React, { useState, useEffect, useContext } from 'react';
import RecentClient from '../clientReview/RecentClient.jsx';
import RecentClientModal from '../clientReview/RecentClientModal.jsx';
import axios from 'axios';

const { MenuContext } = require('../stateContext.jsx');

function RecentClientTab() {
  const [clients, setClients] = useState({})
  const [menu, setMenu] = useContext(MenuContext);
  const [client, setClient] = useState({})

  useEffect(() => {
    updateRecent();
  }, [menu.recentClients])
  const updateRecent = () => {
    axios.get('/api/recentClients')
      .then(({ data }) => {
        setClients(data)
      })
      .catch((err) => console.log(err))
  }
  const handelReview = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (menu.modal) {
      setMenu((current) => ({ ...current, modal: false }));
    } else {
      axios.get('/api/client', { params: { id: id } })
        .then(({ data }) => {
          setClient(data[0]);
          setMenu((current) => ({ ...current, modal: true }));
        })
        .catch((err) => console.log(err))
    }
  }

  const handelModal = () => {
    setMenu((current) => ({ ...current, modal: false }))
  }

  const handelSubmit = (review, rating) => {
    let sum = 0;
    let total = 0;
    axios.get('/api/review', { params: { id: client._id } })
      .then(({ data }) => {
        let reviewData = data[0];
        reviewData.totalReviews[rating - 1] += 1;
        if (review) {
          reviewData.reviews.push({ review, rating });
        }
        reviewData.totalReviews.forEach((rating, index) => {
          sum += ((index + 1) * rating);
          total += rating;
        })
        let newRating = parseFloat((sum / total).toFixed(1));
        console.log(newRating)
        axios.put('/api/updateReview', {
          params: {
            id: client._id,
            update: {
              totalReviews: reviewData.totalReviews,
              reviews: [...reviewData.reviews, review],
              rating: newRating,
            }
          }
        })
          .then(() => {
            axios.delete('/api/recentClientCompleted', { params: { id: client._id } })
              .then(() => {
                setMenu((current) => ({ ...current, modal: false }))
                updateRecent();
              })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return <>
    {menu.recentClients &&
      clients.map((client) => {
        return <RecentClient client={client} key={client._id} selection={handelReview} />
      })
    }
    {menu.modal && <RecentClientModal client={client} exit={handelModal} submit={handelSubmit} />}
  </>
}


export default RecentClientTab;