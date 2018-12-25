import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="text-center w-100">
        <h1 className="home-title mb-5">Oh! We've got a 404 error!</h1>
        <p>The requested page wasn't found. <Link to="/" className="link">Go back to home page.</Link></p>
    </div>
)

export default NotFound;