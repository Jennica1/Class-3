import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from "react"


export default function ExampleFour() {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("grey");

    const [trigger, setTrigger] = useState(false);

    const handleChange = () => {
        if(number > 2) {
            setColor("orange");
        }
        console.log(number);
    }

    useEffect(() => {
        var interval;

        if(trigger) {
            interval =setInterval(() => {
                handleChange()
                setTrigger(false);
            }, 3000) //after 3 secs  then it will do console log below
        }
        console.log(number);
        console.log(trigger);

        return () => clearInterval(interval);
    })
    return(
        <>
            <Header/>
            <main>
                <button onClick={() => {
                    setNumber(number + 1);
                    setTrigger(true);
                }}>Add number</button>
                <h1 style={{color: color }}>Change text colour</h1>

                {
                    number > 1 && <div style={{backgroundColor: `${color}`,
                    lineHeight: 10,
                    padding: 20
                }}>
                    Box
                </div>
            }
            </main>
            <Footer/>
        </>
    )
}