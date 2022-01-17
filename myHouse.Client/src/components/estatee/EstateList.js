import EstateItem from "./EstateItem"
import Title from "../Title"

const EstateList = () => {
    const title = {
        text: "Nieuwste Huizen",
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} />
                <div className="row">
                    <EstateItem id="1" />
                </div>
                <div className="row">
                    <EstateItem id="2" />
                </div>
                <div className="row">
                    <EstateItem id="3" />
                </div>
                <div className="row">
                    <EstateItem id="4" />
                </div>
                <div className="row">
                    <EstateItem id="5" />
                </div>
                <div className="row">
                    <EstateItem id="6" />
                </div>
            </div>
        </section>
    )

}

export default EstateList;