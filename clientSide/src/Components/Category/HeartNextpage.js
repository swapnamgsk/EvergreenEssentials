import React from 'react';
import { useParams, Link } from 'react-router-dom';

const HeartNextpage = () => {
    const data = [
      { id: 1, name : "Hawthorn",imageUrl:'https://media.istockphoto.com/id/1344301193/photo/holy-basil-tulsi-a-medicinal-plant-of-indian-origin.jpg?s=612x612&w=0&k=20&c=M_-5529SH7Bl6kkP-EcW6IxGTM3xynQczlAouXEoDxk='},
    ];

    const { id } = useParams();
  const parsedId = parseInt(id, 10);

  const plantData = data.find((item) => item.id === parsedId);

  if (!isNaN(parsedId) && plantData) {
    const imageStyle = {
      backgroundImage: `url(${plantData.imageUrl})`,
      backgroundSize: '350px 300px',
      backgroundRepeat: 'no-repeat',
      marginLeft: '60px',
      marginTop : "100px",
      width: '350px',
      height: '300px',
      border: '1px solid black',
    };
    const textWithLineBreaks = plantData.text.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ));
  
      return (
        <div>
          <h1 style={{marginLeft : "80px"}}>{plantData.name}</h1>
          <div style={{ display: "flex" }}>
            <div style={{ width: "900px", lineHeight: "30px", marginLeft: "80px" }}>{textWithLineBreaks}</div>
            <div>
              <Link to={`/nextPage/${parsedId}`}>
                <div style={imageStyle}></div>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Invalid Plant data: {id}</h2>
        </div>
      );
    }
  };
  
  export default HeartNextpage;
