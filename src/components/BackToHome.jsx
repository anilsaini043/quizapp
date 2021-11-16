import {useNavigate} from 'react-router-dom';
const BackToHome = (props)=> {
    const navigate = useNavigate();
    return <>
        <h1 className="text-3xl text-white font-bold">Game ended! Your score is:{props.score}</h1>
        <button className="bg-white p-4 mt-5 font-semibold rounded shadow" onClick={() => navigate("/")}>Back To Home</button>
    </>
}

export default BackToHome;