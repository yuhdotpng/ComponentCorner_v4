import './Footer.css'

function Footer ({title, email, pNum, address}) {
    return (
        <div className = 'footer'>
            <h3>{title}</h3>
            <p>Email: {email}</p>
            <p>Phone: {pNum}</p>
            <p>Address: {address}</p>
        </div>
    )
}

export default Footer;