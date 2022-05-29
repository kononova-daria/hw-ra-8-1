import React, { useEffect, useState } from 'react';

export default function Details({selected}) {
  const [id, setID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({name: '', avatar: '', details: {city: '', company: '', position: ''}});

  const fetchDetails = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setDetails(data);
    setLoading(false);
  }

  useEffect(() => {
    if (selected.id) {
      setID(selected.id);
      setLoading(true);
    }
  }, [selected]);

  useEffect(() => {
    if (id) fetchDetails(process.env.REACT_APP_DATA_ID_URL + `${id}.json`)
  }, [id]);

  if (loading) {
    return <progress/>
  }

  return (
    <div className={`details-container ${!id && 'hidden'}`}>
      <div className="img-container">
        <img src={details.avatar} alt={details.name}></img>
      </div>
      <div className="details main">{details.name}</div>
      <div className="details">{`City: ${details.details.city}`}</div>
      <div className="details">{`Company: ${details.details.company}`}</div>
      <div className="details">{`Position: ${details.details.position}`}</div>
    </div>
  )
};