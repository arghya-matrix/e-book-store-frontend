import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [bgColor, setBgColor] = React.useState(() => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    const [prevBgColor, setPrevBgColor] = React.useState(bgColor);
    const navigate = useNavigate();

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const newBgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            setPrevBgColor(bgColor);
            setBgColor(newBgColor);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const handleClick = () => {
        navigate(`/Home`); // Navigate to details page
    };

    const login = () => {
        navigate('/login');
    };

    const signup = () => {
        navigate('/signup');
    };

    const goToCart = () => {
        navigate('/cart')
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{
                background: `linear-gradient(to right, #ff7e5f, ${prevBgColor}, ${bgColor})`,
                transition: 'background 1s ease-in-out', // Smooth transition
            }}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="/Home" data-toggle="tooltip" data-placement="bottom"
                    title="E-Book Store" onClick={() => handleClick()}
                >
                    <img
                        src="https://as1.ftcdn.net/v2/jpg/04/06/61/62/1000_F_406616245_nXBp828jA6hU1I6jQlhHfwSMCwlW5zHj.jpg" // Replace with the URL or local path of your logo
                        alt="Logo"
                        style={{
                            width: '50px', // Adjust the width as needed
                            marginRight: '10px', // Add some spacing between logo and brand name
                            borderRadius: '50%', // Optional: Round the corners of the logo
                        }}
                    />
                    <span
                        style={{
                            color: '#333', // Set a constant color for the text
                            textShadow: `1px 1px 2px rgba(0, 0, 0, 0.5)`,
                            fontSize: '1.2em', // Adjust the font size as needed
                            transition: 'color 1s ease-in-out', // Smooth text color transition
                        }}
                    >
                        E-Book Store
                    </span>
                </a>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="d-flex">
                        <button
                            className="btn btn-info mx-2"
                            type="button"
                            onClick={() => goToCart()}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                        <button
                            className="btn btn-primary me-2 stylish-btn"
                            type="button"
                            onClick={() => login()}
                        >
                            Login
                        </button>
                        <button
                            className="btn btn btn-success stylish-btn"
                            type="button"
                            onClick={() => signup()}
                        >
                            SignUp
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
