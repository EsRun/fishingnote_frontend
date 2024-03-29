import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MiddleContainer = styled.div`
  margin-top: 20px;
  border-radius: 5px;
`;

// MiddleContent
export const MiddleBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-size: 1.6rem;
`;

export const Li = styled.li`
  margin-bottom: 60px;
  padding: 20px;
  width: 315px;
  height: 320px;
  //background-color: #d0deeb;
  border: 3px solid #ccc;
  border-radius: 5px;
  color: #4a4a4a;
  &:hover {
    border-color: #78b5f3;
  }
`;

export const TitleLine = styled.div`
  padding-bottom: 5px;
  border-bottom: 3px solid #ccc;
`;

export const BoxLine = styled.div`
  margin: 20px 0;
  padding: 10px;
  display: flex;
  height: 60%;
  flex-direction: column;
  border: 3px solid #ccc;
  border-radius: 5px;
`;

// Nav
export const BoxStyle = {
  padding: "10px 30px",
  border: "3px solid #ccc",
  "border-radius": "5px",
};

export const NavUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  font-size: 1.6rem;
`;

export const NavLi = styled.li`
  // width: ${(props) => props.width};
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    //border-bottom: 5px solid skyblue;

    background-color: #1e9eff;
    a {
      color: #fff;
    }
  }

  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  cursor: pointer;
`;

export const NavItem = styled.span`
  padding: 20px 30px;
  color: #959595;
  &:hover {
    color: #000;
    font-weight: 600;
    border-bottom: 5px solid #78b5f3;
  }
`;

export const Select = styled.select`
  ${BoxStyle}
  font-size: 1.6rem;
`;

export const SelectNav = {
  //color: " #0043ff",
  color: "#000",
  fontWeight: "600",
  borderBottom: "5px solid #78b5f3",
};

export const SelectItem = {
  borderColor: "#78b5f3",
};
