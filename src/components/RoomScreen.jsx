import React from 'react';
import {useNavigate} from 'react-router-dom';

const RoomScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1 className="text-3xl text-white font-bold"> Please select your room</h1>
            <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <button className="bg-white p-4 font-semibold rounded shadow" onClick={() => navigate("/books-quiz")}>Books</button>
                    <button className="bg-white p-4 font-semibold rounded shadow" onClick={() => navigate("/science-quiz")}>Science</button>
                    <button className="bg-white p-4 font-semibold rounded shadow" onClick={() => navigate("/entertainment-quiz")}>Entertainment</button>
                    <button className="bg-white p-4 font-semibold rounded shadow" onClick={() => navigate("/sports-quiz")}>Sports</button>
                </div>
            </div>
        </div>
    )
}

export default RoomScreen
