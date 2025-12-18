import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiComponent = () => {
    //create a state to store and read the data
    const [posts, setPosts] = useState([])

    //create an async function to fetch an API and call it inside the useEffect functionto mount it
    const getPosts = async () => {
        //using fetch
        try {
            // const response = await fetch()
            // setPosts(response.json)

            //............using axios..............
            const response = await axios.get("https://fakestoreapi.com/products")
            setPosts(response.data)
            console.log(await response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    //create a life-cycle function using useEffect
    useEffect(() => {
        getPosts();
        
        console.log("API Mounted")
    }, [])

    return (
        <div style={{backgroundColor: "blue", color: "white"}}>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h1>{post.category}</h1>
                        <img src={post.image} alt="" />
                        <p>{post.description}</p>
                        <h3>{post.price}</h3>
                    </div>
                )
            })}

        </div>
    )
}

export default ApiComponent