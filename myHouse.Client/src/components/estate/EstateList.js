import EstateItem from "./EstateItem"
import Title from "../Title"

const EstateList = () => {
    const title = {
        text: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit ame"
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <EstateItem id="1" />
                    <EstateItem id="2" />
                    <EstateItem id="3" />
                    <EstateItem id="4" />
                    <EstateItem id="5" />
                    <EstateItem id="6" />
                </div>
            </div>
        </section>
    )

}

export default EstateList;