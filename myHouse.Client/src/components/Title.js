const Title = (props) => {
    const { title, description, titleName } = props
    return (
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <div className="title-area text-center">
                    <h2 className="title">{title}</h2>
                    <h4 className="title-name">{titleName}</h4>
                    <p className="title-description">{description}</p>
                </div>
            </div>
        </div >
    )
}

export default Title