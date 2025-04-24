"use client"

import { useUser } from '@clerk/nextjs'
import  { useState } from 'react'
import { Card, CardContent } from './ui/card'

const CreatePost = () => {
    const {user} = useUser()
    const[content, setContent] = useState("");
    const[imageUrl, setImageUrl] = useState("");
    const[isPosting, setIsPosting] = useState(false);
    const[showImageUpload, setShowImageUpload] = useState(false);


    const handleSubmit = async() =>{

    }


  return (
   <Card className='mb-6'>
    <CardContent className='pt-6'>
        <div className='space-y-4'>

        </div>    
    </CardContent>
     
   </Card>
  )
}

export default CreatePost