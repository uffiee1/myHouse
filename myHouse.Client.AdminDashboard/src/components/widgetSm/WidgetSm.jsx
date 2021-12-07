import "./widgetSm.css";

import ProfilePicture from "../../assets/profile1.png";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={ProfilePicture} alt="" className="widgetLgImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jhon Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={ProfilePicture} alt="" className="widgetLgImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jhon Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={ProfilePicture} alt="" className="widgetLgImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jhon Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={ProfilePicture} alt="" className="widgetLgImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jhon Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={ProfilePicture} alt="" className="widgetLgImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jhon Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
