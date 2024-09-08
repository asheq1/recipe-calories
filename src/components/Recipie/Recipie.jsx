import PropTypes from 'prop-types';
import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa6";

const Recipie = ({recipie}) => {
    console.log(recipie)
    const {id, mealName, cooking, calories, 
        ingredients, mealImage} = recipie;
    
    return (
            <div className="card bg-base-100 w-96 shadow-xl ml-12">
                <figure className="px-4 pt-4">
                    <img
                    src={mealImage}
                    alt="Shoes"
                    className="rounded-xl w-72 h-48" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{mealName}</h2>
                    <p className='font-bold'>Ingridients:</p>
                        <ol className='ml-4'>
                            {
                                ingredients.slice(0, 5).map((ingredient, idx) => (
                                    <li key={idx}>{idx + 1}. {ingredient}</li>
                                ))
                            }
                        </ol>
                    <hr />
                    <div className='flex '>
                        <p className='flex items-center'><CiTimer /> <span className='ml-2'>{cooking}</span> minutes</p>
                        <p className='flex items-center'><FaFire /><span className='ml-2'> {calories}</span> calories</p>
                    </div>
                    <div className="card-actions mt-2">
                    <button className="btn bg-primary hover:bg-hover text-black text-lg px-5 py-2 font-bold rounded-full">Went to cook</button>
                    </div>
                </div>
            </div>
    );
};

Recipie.propTypes = {
    recipie: PropTypes.object.isRequired,

}

export default Recipie;