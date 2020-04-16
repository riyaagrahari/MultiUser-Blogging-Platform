import React from 'react'
import { Link } from '@reach/router'
function ResponsiveNavigation ({ navLinks, background, hoverBackground, linkColor, logo}) {
    // const [hoverIndex, setHoverIndex ] = useState(-1)
    // const [navOpen, setNavOpen] = useState(false)
    console.log(navLinks, hoverBackground, linkColor, logo)
    return (
        <nav
            class="responsive-toolbar"
            style={{ background }}> 
            <ul style={{ background }}>
                {navLinks.map(link =>
                <li>
                    <Link
                        to={link.path}
                        style={{ color: linkColor}}
                        >
                            { link.text }
                            <i class={link.icon} />
                    </Link>
                </li>
                ) }
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation;