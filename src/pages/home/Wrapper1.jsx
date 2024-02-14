import icon1 from "../../assaset/iconsImg/service.png"
import icon2 from "../../assaset/iconsImg/service-02.png"
import icon3 from "../../assaset/iconsImg/service-03.png"
import icon4 from "../../assaset/iconsImg/service-04.png"
import icon5 from "../../assaset/iconsImg/service-05.png"

let data = [
    {
        id: 1,
        icon: icon1,
        title: "free shipping",
        desc: "from all orders over $100"
    },
    {
        id: 2,
        icon: icon2,
        title: "daily suprise offers",
        desc: "save up to 20% off"
    },
    {
        id: 3,
        icon: icon3,
        title: "support 42/6",
        desc: "shop with an expert"
    },
    {
        id: 4,
        icon: icon4,
        title: "affordable price",
        desc: "get fectory direat price"
    },
    {
        id: 5,
        icon: icon5,
        title: "secure payments",
        desc: "100% protected payments"
    },
]

const Wrapper1 = () => {
    return (
        <div className='Wrapper1 col-5'>
            {
                data.map(item => (
                    <div key={item.id} className='item'>
                        <img src={item.icon} alt={"img" + item.id} />
                        <div>
                            <p>{item.title}</p>
                            <span>{item.desc}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Wrapper1