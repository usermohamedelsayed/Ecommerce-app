import imgacc from "../../assaset/products/imgProduct18.jpg"
import imgcamera from "../../assaset/products/imgProduct19.jpg"
import imgheadphone from "../../assaset/products/imgProduct20.jpg"
import imghomeapp from "../../assaset/products/imgProduct21.jpg"
import imglaptop from "../../assaset/products/imgProduct22.jpg"
import imgwatch from "../../assaset/products/imgProduct23.jpg"
import imgtv from "../../assaset/products/imgProduct24.jpg"
import imgtab3 from "../../assaset/products/imgProduct25.jpg"
import imgspeaker from "../../assaset/products/imgProduct26.jpg"
let data = [
    {
        id: 1,
        img: imglaptop,
        title: "computers & Laptop",
        desc: "8 items",
    },
    {
        id: 2,
        img: imgcamera,
        title: "cameras& videos",
        desc: "3 items",
    },
    {
        id: 3,
        img: imgtab3,
        title: "mopiles & tablets",
        desc: "6 items",
    },
    {
        id: 4,
        img: imgheadphone,
        title: "headphones",
        desc: "6 items",
    },
    {
        id: 5,
        img: imgtv,
        title: "smart television",
        desc: "4 items",
    },
    {
        id: 6,
        img: imgacc,
        title: "accessories",
        desc: "10 items",
    },
    {
        id: 7,
        img: imgwatch,
        title: "smartwathes",
        desc: "8 items",
    },
    {
        id: 8,
        img: imgspeaker,
        title: "protable speakers",
        desc: "4 items",
    },
    {
        id: 9,
        img: imgacc,
        title: "music & gaming",
        desc: "6 items",
    },
    {
        id: 10,
        img: imghomeapp,
        title: "home appliances",
        desc: "9 items",
    },


]
const Wrapper2 = () => {
    return (
        <div className='Wrapper2 col-5'>
            {
                data.map(item => (
                    <div className="item" key={item.id}>
                        <div>
                            <p>{item.title}</p>
                            <span>{item.desc}</span>
                        </div>
                        <img src={item.img} alt={"img" + item.id} />
                    </div>
                ))
            }
        </div>
    )
}

export default Wrapper2