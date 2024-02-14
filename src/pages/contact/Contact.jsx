import { FaHouseDamage, FaPhone, FaFonticonsFi } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import "./Contact.scss"
const Contact = () => {
    return (
        <div className='Contact'>
            <div className="container">
                <div className="map cardShadow">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.77769368536!2d31.340866421407412!3d30.05946276120533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1707789367844!5m2!1sar!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="wrapperContact cardShadow">
                    <div className="left">
                        <p className="title">contact</p>
                        <div className="inps">
                            <input name="" required type="text" placeholder="name" />
                            <input name="" required type="email" placeholder="email" />
                            <input name="" required type="tell" placeholder="phone number" />
                            <textarea placeholder="commet"></textarea>
                        </div>
                        <button className="btn">send</button>
                    </div>
                    <div className="right">
                        <p className="title">get in touch with us</p>
                        <div>
                            <i><FaHouseDamage /></i>
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                        <div>
                            <i><FaPhone /></i>
                            <span>+123 456 789</span>
                        </div>
                        <div>
                            <i><MdAttachEmail /></i>
                            <span>fortest@gmail.com</span>
                        </div>
                        <div>
                            <i><FaFonticonsFi /></i>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact