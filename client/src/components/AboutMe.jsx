/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const AboutMe = () => {
  return (
    <div className='about-me'>
        <div className='about-me-left'>
        <h2> 01. About Me</h2>
        <div className="about-me-describe">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio iusto hic laudantium sit quam nostrum velit beatae. Ut obcaecati iste molestias maiores beatae? Quis obcaecati quia voluptatum impedit ipsam veritatis deserunt culpa quidem aliquam, consequatur unde voluptas velit placeat, tempore molestias veniam iure, autem porro accusamus magni illo tempora?
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nam esse animi quia. Numquam quia maxime dolores corrupti fugiat molestias?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero repudiandae aspernatur rem eos eligendi?
        </p>
        </div>
        <p>Here are few technologies i've been working with recently:</p>

        <ul>
            <li> JavaScript (ES6+) </li>
            <li> React </li>
            <li> Nodejs </li>
            <li> MongoDB</li>
            <li> TypeScript </li>
            <li> Express </li>
        </ul>
        </div>
        <div className='about-me-right'>
            <img src="https://images.pexels.com/photos/2171583/pexels-photo-2171583.jpeg?auto=compress&cs=tinysrgb&w=300" alt="profile image" />
        </div>
        
        
    </div>
  )
}

export default AboutMe