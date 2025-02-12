import React from 'react'
import App from "../App"
import Bitcoin from "../components/Bitcoin"

const Theme = () => {
    const link = document.getElementById('links')
    const desc = document.getElementById('description')

    link.addEventListener('click', () => {
        desc.style.display = 'block'
    })
}

export default Theme