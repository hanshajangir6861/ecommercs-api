import react, {useContext, userContext} from "react";
import { Link } from "react-router-dom";
import {ecomContext} from "./App";

function CategoryRibbon(){
const {allCategory,filterCategory} = 
useContext (ecomContext)

return(
<div className="category-wrapper">
<ul>
{allCategory.map(()=>{
return(

<li>
    <Link to="#" onClick={(e) => filterCategory (e,Category.name)}></Link>
</li>

)
})}



</ul>

</div>




)



}
