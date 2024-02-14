import { Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import "./Footer.scss"
let dataFooter = [
    {
        id: 1,
        title: "contact us",
        path: "/",
        links: [
            "dome store",
            "no 124 freedom, new york. 111 united states",
            "+123 456 789",
            "fortest@gmail.com",
        ]
    },
    {
        id: 2,
        title: "information",
        path: "/",
        links: [
            "privacy pollcy",
            "refund pollcy",
            "shopping pollcy",
            "termsof services",
            "blogs",
        ]
    },
    {
        id: 3,
        title: "account",
        path: "/",
        links: [
            "search",
            "about us",
            "faq",
            "contact",
            "size chart",
        ]
    },
    {
        id: 4,
        title: "quick links",
        path: "/",
        links: [
            "accessories",
            "laptops",
            "headphones",
            "smart watches",
            "tablets",
        ]
    },
]
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footerWrapper1">
                <div className="container">
                    <h3><IoIosSend />sign up for newsletter</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input required type="emali" placeholder="your email" />
                        <button className="btn">subscripe</button>
                    </form>
                </div>
            </div>
            <div className="line"></div>
            <div className="footerWrapper2">
                <div className="container">
                    {
                        dataFooter.map(item => (
                            <div key={item.id} className="box">
                                <p className="title">{item.title}</p>
                                <ul>{item.links.map(link => <Link to={item.path} key={Math.random()}>{link}</Link>)}</ul>
                            </div>
                        ))
                    }
                    <div className="box">
                        <div className="title">our app</div>
                        <Link to={"/"}>download our app and get extra 15% discount on your frist order..!</Link>
                        <div className="btns">
                            <button>
                                <i><FaGooglePlay /></i>
                                <div>
                                    <span>cet it on</span>
                                    <p>google play</p>
                                </div>
                            </button>
                            <button>
                                <i><FaApple /></i>
                                <div>
                                    <span>download on th</span>
                                    <p>app store</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer