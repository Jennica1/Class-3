import { useState, useEffect } from "react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

//setting up a counter 
//after every 1 second the number increases by 1
//display number on screen as it increases
export default function ExampleFive() {

    const [counter, setCounter] =useState(0);
   useEffect(() =>{
    const interval = setInterval(() => {
        setCounter(counter + 1);
   }, 1000);

   return () => clearInterval(interval);
   }, [counter]);

    return(
        <>
            <Header/>
            <main>
                <h1>{counter}</h1>
            </main>
            <Footer/>
        </>
    )
}