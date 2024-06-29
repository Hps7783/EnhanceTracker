import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useForm } from 'react-hook-form'


import loginPage from './pages/LoginForm'
import './App.css'
import * as React from "react"
import { Auth } from 'firebase/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'






function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm></LoginForm>
          <RegisterForm></RegisterForm>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

    </>
  );
}



export default App
