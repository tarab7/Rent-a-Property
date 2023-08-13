import React, { useEffect, useState } from 'react'
import data from '../data'
import Card from './Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CancelIcon from '@mui/icons-material/Cancel';

const Home = () => {

  //To set current date as minimum in Date Filter
  var dtToday = new Date();
  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10)
    month = '0' + month.toString();
  if (day < 10)
    day = '0' + day.toString();
  var maxDate = year + '-' + month + '-' + day;

  //Store Original data 
  const [properties, setProperties] = useState(data);
  //Store data after Filtering (initially all data)
  const [filteredData, setFilteredData] = useState(data);
  //let filteredData = properties;


  //Filter variables
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);
  const [type, setType] = useState("");
  const [priceIndex, setPriceIndex] = useState(-1);

  //Price range array
  const range = [{ min: 0, max: 499 }, { min: 500, max: 1000 }, { min: 1000, max: 2000 }, { min: 2000, max: 3000 }, { min: 3000, max: 5000 }, { min: 5001, max: Number.MAX_VALUE }]

  /*
  useEffect(()=>{
    applyFilter();
  }, [location, date, type, priceIndex])
  */

  useEffect(()=>{

    //Filter Function
    const applyFilter = () => {

      let filter1;
      let filter2;
      let filter3;
      let filter4;

      const result = properties.filter((item) => {
  
        //Setting all Filter conditions
        filter1 = location === "" ? (!null) : (item.address.toLowerCase().indexOf(location.toLowerCase()) !== -1);
        filter2 = date === null ? (!null) : (new Date(date) >= new Date(item.available));
        filter3 = priceIndex === -1 ? (!null) : (range[priceIndex].min <= item.rent && range[priceIndex].max >= item.rent);
        filter4 = type === "" ? (!null) : item.type === type;
  
        return (filter1 && filter2 && filter3 && filter4);
      })

      setFilteredData(result);    //Saved filter data

    }
    applyFilter();

  }, [location, date, type, priceIndex]);
  
//Find all Listings here
  return (
    <div className='home'>
      <div className='homeheader'>
        <h1>Find all Listings here
          <span> ({filteredData.length})</span>
        </h1>
      </div>


      <div className='filter'>

        <div className='item'>    {/*Filter Item 1*/}

          <span>
            <LocationOnIcon style={{ color: "#5B9A8B" }} className="icon"/>
            Location
          </span>

          <div className="FilterInput">
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

            {location !== "" && <span className="clrIcon" onClick={() => { setLocation("")}}>
              <CancelIcon style={{ height: "15px", width: "15px" }} />
            </span>}

          </div>
        </div>

        <div className='item'>      {/*Filter Item 2*/}
          <span>
            <CalendarMonthIcon style={{ color: "#5B9A8B" }} className="icon"/>
            Move In
          </span>

          <div className="FilterInput">
            <input type="date" className='dateInput' value={(date === null) ? "" : date} min={maxDate} onChange={(e) => setDate(e.target.value)} />

            {date !== null && <span className="clrIcon" onClick={() => { setDate(null)}}>
              <CancelIcon style={{ height: "15px", width: "15px" }} />
            </span>}

          </div>

        </div>

        <div className='item'>      {/*Filter Item 3*/}
          <span>
            <LocalOfferIcon style={{ color: "#5B9A8B" }} className="icon"/>
            Price Range
          </span>

          <div className="FilterInput">
            <select name="price" value={priceIndex.toString()} onChange={(e) => setPriceIndex(Number(e.target.value))}>
              <option value="-1" defaultValue={true} disabled={true} >Choose</option>
              <option value="0">Less than $500</option>
              <option value="1">$500 - $1000</option>
              <option value="2">$1000 - $2000</option>
              <option value="3">$2000 - $3000</option>
              <option value="4">$3000 - $5000</option>
              <option value="5">More than $5000</option>
            </select>

            {priceIndex !== -1 &&
              <span className="clrIcon" onClick={() => { setPriceIndex(-1)}}>
                <CancelIcon style={{ height: "15px", width: "15px" }} />
              </span>}
          </div>
        </div>


        <div className='item'>        {/*Filter Item 4*/}
          <span>
            <FormatListBulletedIcon style={{ color: "#5B9A8B" }} className="icon"/>
            Property Type
          </span>

          <div className="FilterInput">
            <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="" defaultValue={true} disabled={true} >Choose</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              <option value="Villa">Villa</option>
              <option value="Farmhouse">Farmhouse</option>
              <option value="Commercial">Commercial</option>
            </select>

            {type !== "" && <span className="clrIcon" onClick={() => {setType("")}}>
              <CancelIcon style={{ height: "15px", width: "15px" }} />
            </span>}

          </div>

        </div>

      </div>


      {/*Show Results*/}

      <div className='cards'>

        {filteredData.length==0?
            <h2 className='notfound'>
              No properties found with these filters.
            </h2>
        :
          filteredData.map((item, index) => {
            return (
              <Card item={item} key={item.key} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Home
