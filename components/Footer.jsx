import React from 'react'

const Footer = () => {
    return (
        <div className="bg-black text-gray-400 text-center py-10">
            <p>&copy; {new Date().getFullYear()}, Cordemy. All rights reserved.</p>
        </div>
    )
}

export default Footer
