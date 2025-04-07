import Category from "./Category/Category";
import Price from "./Price/price";
import Colors from "./Colors/Colors";
import "./sidebar.css"
import { FaCartPlus } from "react-icons/fa";

const Sidebar = ({handleRadioChange})=>{
    console.log(handleRadioChange)
    return (
        <>
        <section className="sidebar">
            <div className="logo-container">    
                <FaCartPlus size={40}/>
            </div>
        <Category handleRadioChange={handleRadioChange} />
        <Price handleRadioChange={handleRadioChange}/>
        <Colors handleRadioChange={handleRadioChange}/>
        </section>
        </>
    )
}

export default Sidebar;