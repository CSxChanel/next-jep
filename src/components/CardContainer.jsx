const CardContainer = ({ children }) => {
    return (
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {children}
        </div>
    );
}

export default CardContainer