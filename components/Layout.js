import React, {useState} from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = (props) => {
    const [isopen, setIsOpen] = useState(true)

    const toggle = () => {
        setIsOpen(!isopen)
    }

    return (
        <div>
            <Menu toggle={toggle} />
            
            {props.children}
            <Sidebar isopen={isopen} toggle={toggle} />
            <Footer />
        </div>
    )
}

export default Layout;
