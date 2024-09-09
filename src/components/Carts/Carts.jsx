const Carts = ({cookings}) => {
    console.log(cookings)
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
                                <button className="btn bg-primary hover:bg-hover text-black text-lg px-5 py-2 font-bold rounded-full">Preparing</button>
                                </td>
                            </tr>
                        ))}
                    
                    </tbody>
                </table>
            )}

        </div>
</div>

    );
};

export default Carts;