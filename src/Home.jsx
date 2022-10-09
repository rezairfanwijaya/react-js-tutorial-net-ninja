import { useState } from "react";

const Home = () => {
    let nameWithoutUseState = "Admin"; // without useState
    const [nameWithUseState, setnameWithUseState] = useState('') // with useState
    const [counter, setCounter] = useState(0)
    const MAX = 5

    const handleChangeNameWithoutUsestate = () => {
        nameWithoutUseState = "Super admin"
    }

    const handleChangeNameWithUsestate = () => {
        setnameWithUseState("Reza Irfan Wijaya")
    }

    const handleAddCounter = () => {
        (counter === MAX) ? alert("cannot add counter, max is " + MAX) : setCounter(counter+1)
    }

    const handleResetCounter = ()=> {
        setCounter(0)
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <p>Name without use state : { nameWithoutUseState }</p>
            <p>Name with use state : { nameWithUseState }</p>
            <p>counter : { counter }</p>

            <button onClick={ ()=>handleChangeNameWithoutUsestate() }>
                Change Name Without useState
            </button>

            <button onClick={ ()=>handleChangeNameWithUsestate()}>
                Change Name useState
            </button>

            <button onClick={ ()=>handleAddCounter() }>
                Counter
            </button>

            <button onClick={ ()=>handleResetCounter() }>
                Reset Counter
            </button>

        </div>
     );
}
 
export default Home;