import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

const footer = () => {
  return (
    <div className='footer'>

      <div className='left'>
          <h1>
            Rent a Property
          </h1>
          <span>© Copyright 2023 All Rights Reserved</span>
          <div className='madeby'>
            Made by <a href="https://www.linkedin.com/in/tarab-mojiz/">Tarab Mojiz</a>
          </div>  
      </div>

      <div className='right'>
        <div className='item'>
            <h2>About</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
        <div className='item'>
            <h2>Contact</h2>
              <span className='myname'>Tarab Mojiz</span> 
              <span><ArticleIcon style={{color:"#445069", height:"18px", width:"18px"}}/>  <a href="https://drive.google.com/file/d/1HEl2xyVd1ZPpKDQIez7IjbGeMhu2oPrP/view?usp=sharing">Resume</a> </span>
              <span><LinkedInIcon style={{color:"#445069", height:"18px", width:"18px"}}/>  <a href="https://www.linkedin.com/in/tarab-mojiz/">LinkedIn</a></span>
              <span><GitHubIcon style={{color:"#445069", height:"18px", width:"18px"}}/>  <a href="https://github.com/tarab7">GitHub</a></span>
              <span><CodeIcon style={{color:"#445069", height:"18px", width:"18px"}}/>  <a href="https://leetcode.com/Tarab_Mojiz/">Leetcode</a></span>
              <span><EmailIcon style={{color:"#445069", height:"18px", width:"18px"}}/> tarabnaqvi766@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default footer
