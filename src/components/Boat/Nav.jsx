import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  NavBox,
  NavItem,
  NavUl,
  NavLi,
  SelectNav,
} from "../style/BoatStyle";

export default function Nav(props) {
  const [activeClass, setActiveClass] = useState(0);

  const locations = [
    { value: "1", name: "진해" },
    { value: "2", name: "삼천포" },
    { value: "3", name: "여수" },
    { value: "4", name: "기타" },
  ];

  const methods = [
    { value: "1", name: "선상" },
    { value: "2", name: "도보" },
    { value: "3", name: "기타" },
  ];

  const setMethods = (val, idx, e) => {
    setActiveClass(idx);
    props.setNav(val);
  };

  const setSelect = (e) => {
    props.setLocation(e.target.value);
  };

  return (
    <>
      <NavBox>
        {methods.map((value, index) => (
          <div key={index}>
            <NavItem
              style={activeClass === index ? SelectNav : null}
              key={index}
              onClick={() => {
                setMethods(value.value, index);
              }}
            >
              {value.name}
            </NavItem>
          </div>
        ))}
      </NavBox>
      <Select onChange={setSelect}>
        {locations.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );
}
