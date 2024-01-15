import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    //supposed to cause infinite loop
    /**
     * code on page runs 2x
     * once to render what we want and another is to render strict mode to find common bugs
     */
    useEffect(() => {
        console.log(number);
    })

    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>infinite loop</div>
            </main>
            <Footer/>
        </>
    )
}