const Cart = ({ preparingMeals}) => {

    console.log(preparingMeals)
    return (
        <div className="card bg-base-100 w-96 shadow-xl ml-16 mb-4">
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
                                <td>
                                
                                </td>
                            </tr>
                        ))}
                    
                    </tbody>
            </table>
                )
            }
        </div>
    );
};

export default Cart;