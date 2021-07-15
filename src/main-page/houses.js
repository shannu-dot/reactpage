import './houses.css';
import { Link } from "react-router-dom";
import pic1 from '../images/277668.png';
import pic2 from '../images/277669.jpeg';
const Houses = () => {
    
    function myFunction() {
        alert("The form was submitted");
    }

    return (
        
      <div className="container">
  <div className="row">
    <div className="col-12">
		<table className="table table-image">
		  <thead>
		    <tr>
		      <th scope="col">Id</th>
		      <th scope="col">Image</th>
		      
              <th scope="col">Location</th>
		      <th scope="col">Description</th>
		    
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">1</th>
		      
			  <img src={pic1} className="house" alt="house" />
        <td>Kukatpally,hyderabad</td>
		      <td>A superb detached property on one of nicest place</td>
		     
		      
		    </tr>
		    <tr>
		      <th scope="row">2</th>
		      
			  <img src={pic2} className="house" alt="house"  />
		      <td>Banjara Hills,Ohio</td>
		      <td>A house is a single-unit residential building, which may range in complexity from a rudimentary hut to a complex structure of wood, masonry, concrete or other material, outfitted with plumbing, electrical, and heating, ventilation, and air conditioning systems.</td>
		      
		      
		    </tr>
		  </tbody>
		</table>   
</div>
</div>
<Link to="/">
<button onsubmit="myFunction()" >
  back 
</button>
</Link>
</div>
      );
}
 
export default Houses;