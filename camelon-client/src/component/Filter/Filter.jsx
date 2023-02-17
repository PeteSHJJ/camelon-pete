import React, { useState, useEffect } from "react";
import "./Filter.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { districts } from "../../store/data/districts";
import { change_current_location } from "../../store/Reducer";

function Filter() {
  const dispatch = useDispatch();

  const { provinces } = useSelector((state) => state.data);
  const { districts } = useSelector((state) => state.data);
  const { subdistricts } = useSelector((state) => state.data);
  

  const [districtList, setDistrictList] = useState([]);
  const [subdistrictList, setSubdistrictList] = useState([]);
  const [subdistrictId, setSubdistrictId] = useState();

  const [userLatLong, setUserLatLong] = useState();

  

  const getDistrictList = (province_id) => {
    const districts_list = districts.filter(
      (district) => district.province_id == province_id
    );
    setDistrictList(districts_list);
  };

  const getSubdistrictList = (district_id) => {
    const subdistrict_list = subdistricts.filter(
      (subdistrict) => subdistrict.district_id == district_id
    );
    setSubdistrictList(subdistrict_list);
  };

  const getLatLong = (id) => {
    let position = subdistrictList.find((subdistrict) => subdistrict.id == id);

    const user_current_location = {
      latitude: position.latitude,
      longitude: position.longitude,
    };
    dispatch(change_current_location(user_current_location));
  };

  return (
    <>
      <div className="filter-container">
        <select
          onChange={(e) => {
            getDistrictList(e.target.value);
          }}
        >
          <option value="" disabled selected>
            จังหวัด
          </option>
          {provinces.map((val, key) => {
            return <option value={val.id}>{val.name_in_thai}</option>;
          })}
        </select>
        <select
          onChange={(e) => {
            getSubdistrictList(e.target.value);
          }}
        >
          <option value="" disabled selected>
            อำเภอ/เขต
          </option>
          {districtList.map((val, key) => {
            return <option value={val.id}>{val.name_in_thai}</option>;
          })}
        </select>
        <select
          onChange={(e) => {
            setSubdistrictId(e.target.value);
          }}
        >
          <option value="" disabled selected>
            เเขวง/ตำบล
          </option>
          {subdistrictList.map((val, key) => {
            return <option value={val.id}>{val.name_in_thai}</option>;
          })}
        </select>
        <select>
          <option value="" disabled selected>
            ช่วงเวลา
          </option>
        </select>
        <select>
          <option value="" disabled selected>
            ประเภทของอาชญากรรม
          </option>
        </select>
        <button
          type="submit"
          onClick={() => {
            getLatLong(subdistrictId);
          }}
        >
          ค้นหา
        </button>
      </div>
    </>
  );
}

export default Filter;
