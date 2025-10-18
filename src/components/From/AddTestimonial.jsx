import React from 'react'
import { useParams } from 'react-router-dom'

const AddTestimonial = () => {
    const {clubId,userId}=useParams()
    console.log(clubId,userId)
  return (
    <div>
      this is tastomaoal page
    </div>
  )
}

export default AddTestimonial
