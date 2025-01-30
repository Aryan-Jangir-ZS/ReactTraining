import React, { useState } from 'react';
import Title from './Components/TitleComponent';
import ImgDescription from './Components/ImgDescription';
import "../day10ReactAssignment/assignmet4.css"

const Assignment4 = () => {
    const [title, setTitle] = useState("Personal info");
    const [description, setDescription] = useState("there dfasdf");

    return (
        <div className='outer-container'>
            <div className='img-div'>
                <img src="./Passport_Photo.png" alt="Render Image" style={{ width: "200px", height: "200px" }} />
            </div>
            <div className='title-div'>
                <Title title={title} />
                <ImgDescription description={description} />
            </div>
        </div>
    );
}

export default Assignment4;
