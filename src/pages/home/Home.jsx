import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <nav className="home-nav">
                <Link to='/add'>
                    Go to Add page
                </Link>
                <Link to='/list'>
                    Go to List page
                </Link>
            </nav>
        </div>
    )
}

export default Home;