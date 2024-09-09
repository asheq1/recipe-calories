import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from '../Cart/Cart';
import PropTypes from 'prop-types';

const Carts = ({cookings}) => {
    const [preparingMeals, setPreparingMeals] = useState([]);

    console.log(cookings)
    
    const handelPreparing = (meal) => {
        const isPreparing = preparingMeals.some(item => item.id === meal.id)
        if(!isPreparing){
            setPreparingMeals([...preparingMeals, meal])
        } else{
            toast.error(`${meal.mealName} is already in the cart`)
        }

    }

    return (
    <div className="card bg-base-100 shadow-xl ">
        <div className="card-body">
            <h2 className="font-bold text-center text-mid">
                {cookings.length > 0 ? `Went to cook: 0${cookings.length}` : 'Your cooking item is empty'}
            </h2>
            <hr />

            {/* Conditional Table Rendering */}
            {cookings.length > 0 && (
                <table className="min-w-full mt-2 bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cookings.map((item, idx) => (
                            <tr key={idx}>
                            
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.mealName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.cooking} minutes</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.calories} calories</td>
                                <td>
                                <button 
                                    onClick={()=>handelPreparing(item)}
                                    className="btn bg-primary hover:bg-hover text-black text-lg px-5 py-2 font-bold rounded-full">Preparing</button>
                                </td>
                            </tr>
                        ))}
                    
                    </tbody>
                </table>
            )}

        </div>
        <Cart preparingMeals={preparingMeals} />
        <ToastContainer />
    </div>
    );
};

Carts.propTypes = {
    cookings: PropTypes.object.isRequired
}

export default Carts;