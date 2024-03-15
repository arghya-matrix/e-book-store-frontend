import React, { useState, useEffect } from 'react';
import Box from './box';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://192.168.1.98:5000/popularity', {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            setProducts(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
            // If an error occurs, set static data
            setProducts([
                [
                    '0439136350',
                    'Harry Potter and the Prisoner of Azkaban (Book 3)',
                    'J. K. Rowling',
                    1999,
                    'Scholastic',
                    'http://images.amazon.com/images/P/0439136350.01.THUMBZZZ.jpg',
                    'http://images.amazon.com/images/P/0439136350.01.MZZZZZZZ.jpg',
                    'http://images.amazon.com/images/P/0439136350.01.LZZZZZZZ.jpg',
                ],
                [
                    '0439136350',
                    'Harry Potter and the Prisoner of Azkaban (Book 3)',
                    'J. K. Rowling',
                    1999,
                    'Scholastic',
                    'http://images.amazon.com/images/P/0439136350.01.THUMBZZZ.jpg',
                    'http://images.amazon.com/images/P/0439136350.01.MZZZZZZZ.jpg',
                    'http://images.amazon.com/images/P/0439136350.01.LZZZZZZZ.jpg',
                ],
                [
                    '0439139597',
                    'Harry Potter and the Goblet of Fire (Book 4)',
                    'J. K. Rowling',
                    2000,
                    'Scholastic',
                    'http://images.amazon.com/images/P/0439139597.01.THUMBZZZ.jpg',
                    'http://images.amazon.com/images/P/0439139597.01.MZZZZZZZ.jpg',
                    'http://images.amazon.com/images/P/0439139597.01.LZZZZZZZ.jpg',
                ],
                [
                    '0590353403',
                    "Harry Potter and the Sorcerer's Stone (Book 1)",
                    'J. K. Rowling',
                    1998,
                    'Scholastic',
                    'http://images.amazon.com/images/P/0590353403.01.THUMBZZZ.jpg',
                    'http://images.amazon.com/images/P/0590353403.01.MZZZZZZZ.jpg',
                    'http://images.amazon.com/images/P/0590353403.01.LZZZZZZZ.jpg',
                ],
                [
                    '043935806X',
                    'Harry Potter and the Order of the Phoenix (Book 5)',
                    'J. K. Rowling',
                    2003,
                    'Scholastic',
                    'http://images.amazon.com/images/P/043935806X.01.THUMBZZZ.jpg',
                    'http://images.amazon.com/images/P/043935806X.01.MZZZZZZZ.jpg',
                    'http://images.amazon.com/images/P/043935806X.01.LZZZZZZZ.jpg',
                ]
                // Add other static data as needed
            ]);
        }
    };

    const handleClick = (productId) => {
        navigate(`/details/${productId}`); // Navigate to details page
    };

    return (
        <div className="container">
            <div className="row row-cols-md-4">
                {products.map((product, index) => (
                    <div className="col mb-3" key={product[0]}>
                        <div className="d-flex flex-column h-100">
                            <Box className="image-box border border-dark flex-grow-1">
                                <img
                                    src={product[7] || 'https://www.kasandbox.org/programming-images/avatars/purple-pi.png'}
                                    alt={product[1] || 'Book title'}
                                    className="img-fluid"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Box className="border border-primary">
                                <h2>{product[1]}</h2>
                                <p>Written by: {product[2] || 'Writer'}</p>
                                <p>Publisher: {product[4] || 'Publisher'}</p>
                                <button className="btn btn-secondary text-center" onClick={() => handleClick(product[1])}>
                                    Details
                                </button>
                            </Box>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
