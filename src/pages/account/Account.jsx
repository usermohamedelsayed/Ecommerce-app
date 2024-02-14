import "./Account.scss"
const Account = ({ title, singIn }) => {
    return (
        <div className='Account'>
            <div className="container">
                <p className="title">{title}</p>
                <div className="inps">
                    {
                        singIn ? (
                            <>
                                <input name='' required type="text" placeholder='first name' />
                                <input name='' required type="text" placeholder='last name' />
                            </>
                        ) : ""
                    }
                    <input name='' required type="email" placeholder='email' />
                    <input name='' required type="password" placeholder='password' />
                    {!singIn ? <span className="forgotPass">forgot your password?</span> : ""}
                </div>
                <div className="btns">
                    {
                        singIn ? (
                            <button className='btn'>create</button>
                        ) : <button className='btn'>login</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Account