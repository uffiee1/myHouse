import "./estate.css";

import Chart from "../../components/chart/Chart";
import EstatePic from "../../assets/house1.jpeg";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { estateData } from "../../dummyData";

export default function Estate() {
  return (
    <div className="estate">
      <div className="estateTitleContainer">
        <Link to="/newEstate">
          <button className="estateAddButton">Create</button>
        </Link>
      </div>
      <div className="estateTop">
        <div className="estateTopLeft">
          <Chart data={estateData} dataKey="Views" title="Number of Views " />
        </div>
        <div className="estateTopRight">
          <div className="estateInfoTop">
            <img src={EstatePic} alt="" className="estateInfoImg" />

            <span className="estateName">huis.name</span>
          </div>
          <div className="estateInfoBottom">
            <div className="estateInfoItem">
              <span className="estateInfoKey">Id: </span>
              <span className="estateInfoValue">123</span>
            </div>
            <div className="estateInfoItem">
              <span className="estateInfoKey">Type: </span>
              <span className="estateInfoValue">Sale</span>
            </div>
            <div className="estateInfoItem">
              <span className="estateInfoKey">Active:</span>
              <span className="estateInfoValue">Yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="estateBottom">
        <form className="estateForm">
          <div className="estateFormLeft">
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
          <div className="estateFormRight">
            <div className="estateUpload">
              <img src={EstatePic} alt="" className="estateInfoImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="estateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
