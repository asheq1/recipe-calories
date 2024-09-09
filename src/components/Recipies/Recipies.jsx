import { useEffect, useState } from "react";
import Recipie from "../Recipie/Recipie";
import Carts from "../Carts/Carts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);
    const [cookings, setCookings] = useState([]);

    useEffect(() => {
        fetch('recipies.json')
            .then(res => res.json())
            .then(data => setRecipies(data));
    }, []);

    const handleCooking = (cook) => {
        const isAlreadyInCart = cookings.some((recipe) => recipe.id === cook.id);
        if (!isAlreadyInCart) {
            setCookings([...cookings, cook]);
            // toast.success(`${cook.mealName} is added`)
        } else {
            toast.error(`${cook.mealName} is already in the cart`)
        }
    };

    return (
        <div className="ml-12">
            <h1 className="text-large text-center font-bold mt-5">Our Recipes</h1>

            <div className="flex justify-evenly gap-5 mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-5">
                    {
                        recipies.map((recipie) => <Recipie
                            key={recipie.id}
                            recipie={recipie}
                            handleCooking={handleCooking}
                        />)
                    }
                </div>

                {/* Cart - Hidden on small devices */}
                <div className="hidden sm:block ">
                    <Carts
                       cookings={cookings}
                       
                    />

                </div>
            </div>
            {/* toast container display  */}
            <ToastContainer />
        </div>
    );
};

export default Recipies;