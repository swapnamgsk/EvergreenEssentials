import React from 'react';
import { useParams } from 'react-router-dom';
import "./Nextpage.css"

const Nextpage = () => {
  const { id } = useParams();
  const parsedId = parseInt(id, 10);

  const data = [
    { id: 1, name: "Tulasi",video: "https://www.youtube.com/embed/7H8cN4ZY2xg",video2: "https://www.youtube.com/embed/nO14XTkbCxo"},
    { id: 2, name: "Aloevera", video: "https://www.youtube.com/embed/QtfZ2PZI3Ng" ,video2: "https://www.youtube.com/embed/oi8HptqZNo4" },
    {id : 3, name : "Gotu Kola",video: "https://www.youtube.com/embed/tcr1Y899V6A",video2:"https://www.youtube.com/embed/Gdfi3F_G9V4"},
    {id : 4, name : "Calendula",video:"https://www.youtube.com/embed/e2luosOTpf0",video2:"https://www.youtube.com/embed/HTV3nJUcg5k"},
    {id : 5, name : "Menthi",video:"https://www.youtube.com/embed/lARmCIImKWM",video2:"https://www.youtube.com/embed/lHDm3kegR2g"},
    {id : 6, name : "Ashwagandha",video:"https://www.youtube.com/embed/HM289ghVQvs",video2:""},
    {id : 7, name : "Lemon Balm",video:"",video2:""},
    {id : 8,name : "Lemongrass",video:"",video2:""},
    {id : 9,name : "Chickweed",video:"",video2:""},
    {id : 10, name : "Amaranthus",video:"",video2:""},
    {id : 11, name : "Karpuravalli",video:"",video2:""},
    {id : 12,name : "Phyllanthus",video:"",video2:""},
    {id : 13,name : "Moringa Leaves",video:"",video2:""},
    {id : 14,name : "Bittercress",video:"",video2:""},
    {id : 15,name : "Creeping Charlie",video:"",video2:""}

  ];

  const plantData = data.find((item) => item.id === parsedId);

  return (
    <div>
      {plantData ? (
        <div>
          <h1 className='nextpageheading'>{plantData.name} -Home Remedies</h1>
          <p>{plantData.text}</p>
          <div>
          <iframe width="900" height="430" src={plantData.video} title={plantData.name} allowFullScreen className="video"></iframe> 
          </div>
          <div>
          <iframe width="900" height="430" src={plantData.video2} title={plantData.name} allowFullScreen className="video"></iframe> 
          </div>
        </div>
      ) : (
        <h2>Invalid Plant data: {id}</h2>
      )}
    </div>
  );
};

export default Nextpage;
