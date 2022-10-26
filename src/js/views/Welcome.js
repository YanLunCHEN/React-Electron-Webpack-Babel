
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Hello from '../components/Hello';


export default function Welcome() {
 

  return (
    <div className="centered-view">
       <Hello /> 
    </div>
  )
}
