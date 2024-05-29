
export const ButtonComponent = ({
    buttonName, 
    onClick
}) => {
    return <div className="app-button-container">
    <button className="app-button-component" onClick={onClick}> {buttonName} </button> </div>
}