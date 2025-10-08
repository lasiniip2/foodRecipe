import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaInfoCircle, FaLightbulb } from 'react-icons/fa'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()
    const onHandleChange = (e) => {
        let val = (e.target.name === "ingredients") ? e.target.value.split(",") : (e.target.name === "file") ? e.target.files[0] : e.target.value
        setRecipeData(pre => ({ ...pre, [e.target.name]: val }))
    }
    const onHandleSubmit = async (e) => {
        e.preventDefault()
        console.log(recipeData)
        await axios.post("http://localhost:5000/recipe", recipeData,{
            headers:{
                'Content-Type':'multipart/form-data',
                'authorization':'bearer '+localStorage.getItem("token")
            }
        })
            .then(() => navigate("/"))
    }
    return (
        <>
            <div className='recipe-submission-container'>
                <div className='submission-header'>
                    <h1>Share Your Culinary Masterpiece</h1>
                    <p>Fill out the form below to share your amazing recipe with our community of food lovers.</p>
                </div>
                
                <div className='form-container'>
                    
                    <form className='form wide-form' onSubmit={onHandleSubmit}>
                        <h2>Recipe Details</h2>
                        <div className='form-control'>
                            <label>Title</label>
                            <input type="text" className='input' name="title" onChange={onHandleChange} placeholder="e.g., Creamy Garlic Parmesan Pasta"></input>
                        </div>
                        <div className='form-control'>
                            <label>Time</label>
                            <input type="text" className='input' name="time" onChange={onHandleChange} placeholder="e.g., 45 minutes"></input>
                        </div>
                        <div className='form-control'>
                            <label>Ingredients</label>
                            <textarea type="text" className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange} placeholder="e.g., 2 cups pasta, 3 cloves minced garlic, 1/4 cup grated parmesan"></textarea>
                        </div>
                        <div className='form-control'>
                            <label>Instructions</label>
                            <textarea type="text" className='input-textarea' name="instructions" rows="5" onChange={onHandleChange} placeholder="Describe the preparation steps in detail"></textarea>
                        </div>
                        <div className='form-control'>
                            <label>Recipe Image</label>
                            <input type="file" className='input' name="file" onChange={onHandleChange}></input>
                        </div>
                        <div className="form-note">
                            <FaInfoCircle /> <span>A delicious-looking photo will make your recipe stand out!</span>
                        </div>
                        <button type="submit">Add Recipe</button>
                    </form>
                </div>
            </div>
        </>
    )
}
