import React, { useState} from 'react'
import { Link } from '@reach/router'

function ResponsiveNavigation ({ navLinks, background, hoverBackground, linkColor, logo}) {
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    const [navOpen, setNavOpen] = useState(false)
    console.log(navLinks, hoverBackground, linkColor, logo)
    return (
        <nav
            class="responsive-toolbar"
            style={{ background }}> 
            <ul 
                style={{ background }}
                className={ navOpen ? 'active': ''}
                >
                <figure className="image-logo" onClick={ () => {setNavOpen(!navOpen) }}>
                    <img src={logo} height="40px" width="40px" alt="logo-nav-toggler" />
                </figure>
                {navLinks.map((link, index) =>
                <li
                    key={ index }
                    onMouseEnter={ () => setHoverIndex(index) }
                    onMouseLeave={ () => setHoverIndex(-1) }
                    style={{ background: hoverIndex === index ? (hoverBackground || '#999') :'' }}
                >
                    <Link
                        to={link.path}
                        style={{ color: linkColor}}
                    >
                            { link.text }
                            <i class={link.icon} />
                    </Link>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation;