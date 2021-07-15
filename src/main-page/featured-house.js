import { Link } from "react-router-dom";
import pic from '../images/277667.png'
const FeaturedHouse =() => {
   
    return (
        <div>
            <div className="row featuredHouse">
                <h3 className="col-md-12 text-center">Featured House</h3>
            </div>

            
            <img src={pic} className="house" alt="house"  width="400" height="300"/>  
          <div align ="left">
          <p>  A house is a single-unit residential building, which may range in complexity from a rudimentary hut to a complex structure of wood, masonry, concrete or other material, outfitted with plumbing, electrical, and heating, ventilation, and air conditioning systems.</p>
        </div>
        <Link to="/houses">
        <button  type="button" className="btn btn-primary">More Houses</button>
        </Link></div>
    )
   
};

export default FeaturedHouse;
