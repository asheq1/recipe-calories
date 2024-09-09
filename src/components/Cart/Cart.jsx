import PropTypes from 'prop-types';

const Cart = ({ preparingMeals}) => {

    return (
        <div className="card bg-base-100 w-96 shadow-xl ml-8 mb-4">
            {
                preparingMeals.length > 0 && (
                    <table className="min-w-full mt-2 bg-white border border-gray-300 px-4">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparingMeals.map((item, idx) => (
                            <tr key={idx}>
                            
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.mealName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.cooking} minutes</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.calories} calories</td>
                                
                            </tr>
                        ))}
                        <tr>
                            <td></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total Time={preparingMeals.reduce((acc, item) => acc + item.cooking, 0)} Min</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total Calories={preparingMeals.reduce((acc, item) => acc + item.calories, 0)} Cal</td>
                        </tr>
                    </tbody>
            </table>
                )
            }
        </div>
    );
};

Cart.propTypes = {
    preparingMeals: PropTypes.object.isRequired
}

export default Cart;