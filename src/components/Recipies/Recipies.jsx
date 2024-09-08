import { useEffect, useState } from "react";
import Recipie from "../Recipie/Recipie";

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);

    useEffect(()=>{
        fetch('recipies.json')
        .then(res => res.json())
        .then(data => setRecipies(data))
    }, [])

    return (
        <div className="ml-12 ">
            <h1 className="text-large text-center font-bold mt-5">Our Recipies</h1>
            
            <div className="flex  justify-evenly gap-5 mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-5">
                    {
                        recipies.map((recipie) => <Recipie
                            key={recipie.id}
                            recipie={recipie}
                        ></Recipie>)
                    }
                </div>
                {/* cart when small device hidden*/}
                <div className="hidden sm:block">
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipies;