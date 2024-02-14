import { ArticleOurStore, AsideOurStore } from "../../component"
import "./OurStore.scss"

const OurStore = () => {
    return (
        <div className='OurStore'>
            <div className="container wrappers">
                <AsideOurStore />
                <ArticleOurStore />
            </div>
        </div>
    )
}

export default OurStore