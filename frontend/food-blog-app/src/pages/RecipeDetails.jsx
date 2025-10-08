import React, { useState, useEffect } from 'react'
import profileImg from '../assets/profile.png'
import food from '../assets/foodRecipe.png'
import { useLoaderData } from 'react-router-dom'
import { BsStopwatchFill, BsCalendarDate } from "react-icons/bs";
import { FaUtensils, FaPrint, FaShareAlt, FaHeart, FaRegHeart } from "react-icons/fa";

export default function RecipeDetails() {
    const recipe = useLoaderData()
    const [imageError, setImageError] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    
    // Check if recipe is in favorites on component mount
    useEffect(() => {
        const favItems = JSON.parse(localStorage.getItem("fav")) || []
        const isInFavorites = favItems.some(item => item._id === recipe._id)
        setIsFavorite(isInFavorites)
    }, [recipe._id])
    
    // Format date for display (assuming recipe might have a createdAt field)
    const formatDate = (dateString) => {
        if (!dateString) return "Recently added";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };
    
    const handlePrint = () => {
        window.print();
    };
    
    const handleImageError = () => {
        setImageError(true);
    };
    
    // Share functionality using Web Share API
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: recipe.title,
                text: `Check out this delicious recipe for ${recipe.title}!`,
                url: window.location.href
            })
            .catch(error => console.log('Error sharing:', error));
        } else {
            // Fallback for browsers that don't support Web Share API
            const url = window.location.href;
            navigator.clipboard.writeText(url)
                .then(() => {
                    alert('Link copied to clipboard!');
                })
                .catch(() => {
                    alert('Failed to copy link. Please copy the URL manually.');
                });
        }
    };
    
    // Toggle favorite status
    const toggleFavorite = () => {
        let favItems = JSON.parse(localStorage.getItem("fav")) || []
        
        if (isFavorite) {
            // Remove from favorites
            favItems = favItems.filter(item => item._id !== recipe._id)
        } else {
            // Add to favorites
            favItems.push(recipe)
        }
        
        localStorage.setItem("fav", JSON.stringify(favItems))
        setIsFavorite(!isFavorite)
    };

    return (
        <>
            <div className='recipe-details-page'>
                <div className='recipe-details-container'>
                    <div className='recipe-header'>
                        <div className='recipe-title-section'>
                            <h1>{recipe.title}</h1>
                            <div className='recipe-meta'>
                                <div className='meta-item'>
                                    <BsCalendarDate />
                                    <span>{formatDate(recipe.createdAt)}</span>
                                </div>
                                <div className='meta-item'>
                                    <BsStopwatchFill />
                                    <span>{recipe.time}</span>
                                </div>
                                <div className='meta-item'>
                                    <FaUtensils />
                                    <span>{recipe.ingredients?.length || 0} ingredients</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className='recipe-actions'>
                            <button className='action-btn print-btn' onClick={handlePrint}>
                                <FaPrint />
                                <span className="btn-text">Print</span>
                            </button>
                            <button className='action-btn share-btn' onClick={handleShare}>
                                <FaShareAlt />
                                <span className="btn-text">Share</span>
                            </button>
                            <button 
                                className={`action-btn favorite-btn ${isFavorite ? 'is-favorite' : ''}`} 
                                onClick={toggleFavorite}
                            >
                                {isFavorite ? <FaHeart /> : <FaRegHeart />}
                                <span className="btn-text">{isFavorite ? 'Saved' : 'Save'}</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className='recipe-author'>
                        <div className='author-info'>
                            <img 
                                src={profileImg} 
                                alt="Author" 
                                className="author-image"
                            />
                            <div className='author-details'>
                                <p className='author-label'>Recipe by:</p>
                                <h5 className='author-name'>{recipe.email}</h5>
                            </div>
                        </div>
                    </div>
                    
                    <div className='recipe-image-container'>
                        <img 
                            src={!imageError ? `http://localhost:5000/images/${recipe.coverImage}` : food} 
                            alt={recipe.title} 
                            className="recipe-image"
                            onError={handleImageError}
                        />
                    </div>
                    
                    <div className='recipe-content'>
                        <div className='ingredients-section'>
                            <h2>Ingredients</h2>
                            <div className='ingredients-count'>
                                You will need {recipe.ingredients?.length || 0} ingredient{recipe.ingredients?.length !== 1 ? 's' : ''}
                            </div>
                            <ul className='ingredients-list'>
                                {recipe.ingredients?.map((item, index) => (
                                    <li key={index} className='ingredient-item'>
                                        <span className='ingredient-text'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className='instructions-section'>
                            <h2>Instructions</h2>
                            <div className='instructions-content'>
                                {recipe.instructions?.split('\n').map((paragraph, idx) => (
                                    paragraph.trim() && <p key={idx} className='instruction-paragraph'>{paragraph}</p>
                                )) || <p className='instruction-paragraph'>{recipe.instructions}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
