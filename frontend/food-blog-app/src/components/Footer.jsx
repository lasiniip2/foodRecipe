import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Foodish.</h3>
          <p>Discover and share amazing recipes from around the world. Cook with passion, share with love.</p>
        </div>
        
        <div className='footer-section'>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/myRecipe">My Recipes</a></li>
            <li><a href="/favRecipe">Favourites</a></li>
            <li><a href="/addRecipe">Add Recipe</a></li>
          </ul>
        </div>
        
        <div className='footer-section'>
          <h4>Connect With Us</h4>
          <p>Follow us on social media for daily recipe inspiration and cooking tips!</p>
          <div className='social-links'>
            <a href="#" aria-label="Facebook" className='social-facebook'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className='social-youtube'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" aria-label="Email" className='social-email'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className='footer-bottom'>
        <p>© 2024 Lasini Pallewaththa. All rights reserved.</p>
        <div className='footer-links'>
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
          <span>•</span>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  )
}
