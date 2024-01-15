import { useEffect } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Head from "next/head"

export default function ExampleTwo() {

    //The [] makes sure that useFecct only runs once
    /**
     * code on pages will run 2x
     */
    useEffect(() => {
        console.log("RUN");
    }, [])
    return(
        <>
            <Header/>
                <main>
                    <h1>Example 2</h1>
                </main>
                <Footer/>
        
        </>
    )
}