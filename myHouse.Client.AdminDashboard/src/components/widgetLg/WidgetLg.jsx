import "./widgetLg.css";

import EstatePic from "../../assets/house1.jpeg";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Estates</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Price (€)</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={EstatePic} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jhon Doe</span>
          </td>
          <td className="widgetLgDate">15 Nov 2021</td>
          <td className="widgetLgAmount">€299.000</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={EstatePic} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jhon Doe</span>
          </td>
          <td className="widgetLgDate">12 Nov 2021</td>
          <td className="widgetLgAmount">€229.000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={EstatePic} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jhon Doe</span>
          </td>
          <td className="widgetLgDate">15 Nov 2021</td>
          <td className="widgetLgAmount">€499.000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={EstatePic} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jhon Doe</span>
          </td>
          <td className="widgetLgDate">15 Nov 2021</td>
          <td className="widgetLgAmount">€245.000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
