import "./product.css";

import Chart from "../../components/chart/Chart";
import EstatePic from "../../assets/house1.jpeg";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { productData } from "../../dummyData";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <Link to="/newEstate">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Views" title="Number of Views " />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={EstatePic} alt="" className="productInfoImg" />

            <span className="productName">huis.name</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id: </span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type: </span>
              <span className="productInfoValue">Sale</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Estate Name</label>
            <input type="text" placeholder="Huis" />
            <label>Type</label>
            <select name="Status" id="idStock">
              <option value="yes">Sale</option>
              <option value="no">Rent</option>
            </select>
            <select name="Status" id="idStock">
              <option value="0">Pending</option>
              <option value="1">Approved</option>
              <option value="2">Declined</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={EstatePic} alt="" className="productInfoImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
