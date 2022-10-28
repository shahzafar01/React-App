import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return <div>
    
      <u>
        <b>
          <i>  "Shahmir Zafar" </i>
        </b>
      </u>
      <p>
        <li> Address:House No L-431 sec 5C-3 North Karachi  </li>
        <li> Phone No. 03171196506 </li>
        <li> Email:shahmirzafar6@gmail.com </li>
      </p>
      <h1>Objectives:</h1>I am hardworking and punctual student. I take actively
      participate in different activities. I have ability to tackle problems and
      make good solutions. I will contribute all my best to SMIT.
      <h1>Education:</h1>
      <li>
        <b>University:</b> Sindh Madressatul Islam University –
        2022 – 1st Semester | Department Cyber Security|{" "}
      </li>
      <li>
        <b>College:</b> Govt National College – 2021 – Result Awaiting |
        Intermediate Pre Engineering |
      </li>
      <li>
        <b>School:</b> Islamia English Model School – 2019 – A Grade
        Matriculation | Science |{" "}
      </li>
      <h1>
        <b>Sports:</b>
      </h1>
      <ul>
        <li>Cricket</li>
      </ul>
      <h1>
        <b>Hobbies:</b>
      </h1>
      <ul>
        <li>Traveling</li>
        <li>Learning</li>
        <li>Working</li>
      </ul>
    </div>
  
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));