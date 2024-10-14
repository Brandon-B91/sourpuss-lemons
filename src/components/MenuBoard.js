import React from "react";
import { graphql, StaticQuery } from "gatsby";

const lemonadeBoard = {
  background: "var(--sitePink)",
  color: "var(--siteYellow)",
  border: "4px solid var(--siteYellow)",
  padding: "1rem",
  borderRadius: ".5rem",
};

const li = {
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  fontSize: "var(--fontMd)",
  width: "90%",
};

const menuH2 = {
  fontSize: "var(--fontLg)",
  textAlign: "center",
  color: "var(--black)",
  margin: "0",
};

const h2 = {
  fontSize: "var(--fontLg)",
  textAlign: "center",
  marginBottom: "0",
};

const styleP = {
  display: "inline-block",
  fontSize: "var(--fontMd)",
  fontFamily: "var(--mainFont)",
  transform: "translateY(-1rem) rotate(-30deg)",
  marginBottom: "0",
  color: "var(--black",
};

const bold = {
  color: "var(--black)",
  fontWeight: "600",
  fontSize: "var(--fontSm)",
};

const hr = {
  width: "80%",
  margin: "0 auto",
  borderBottom: "2px solid var(--black)",
};

const addFlavors = {
  padding: "0",
  width: "90%",
};

const addFlavorsLi = {
  textTransform: "uppercase",
  paddingLeft: "3rem",
};

const addFlavorsTitle = {
  fontSize: "var(--fontMd)",
  display: "flex",
  alignItems: "center",
};

const spanSm = {
  fontSize: ".75rem",
  marginTop: "-1rem",
  color: "var(--siteYellow)",
  position: "absolute",
  top: "1rem",
};

const spanBlack = {
  color: "var(--black)",
  position: "relative",
};

const MenuBoard = () => (
  <StaticQuery
    query={flavorsList}
    render={(data) => {
      const flavor = data.allContentfulLemondadeTable.edges;
      return (
        <div className="row m-0 mt-5 mb-5 menu-board">
          <p style={menuH2}>Check out our menu!</p>
          <div className="col-sm-12" style={lemonadeBoard}>
            <p style={h2}>
              Fresh <span style={styleP}>Shaken</span> Lemonade
            </p>
            <p className="text-center mb-0" style={bold}>
              32.OZ
            </p>
            <div style={hr} />
            <ul>
              <li style={li}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 47.5 47.5"
                  viewBox="0 0 47.5 47.5"
                  id="lemon"
                  width="2rem"
                  height="2rem"
                >
                  <defs>
                    <clipPath id="a">
                      <path d="M0 38h38V0H0v38Z"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                  >
                    <path
                      fill="#5c913b"
                      d="M0 0c6.48 1.275 8.453-1.265 11.655-.084 3.202 1.181.093-2.82-.745-3.508-.84-.689-8.14-4.809-11.306-3.298C-3.563-5.379-3.58-.705 0 0"
                      transform="translate(12.405 33.661)"
                    ></path>
                    <path
                      fill="#77b255"
                      d="M0 0a1 1 0 0 0-.801.4c-.687.916-1.308 1.955-1.965 3.056-2.268 3.795-4.839 8.098-11.452 9.568a1 1 0 1 0 .434 1.952C-6.33 13.32-3.402 8.419-1.049 4.481-.419 3.427.175 2.432.799 1.6A1 1 0 0 0 0 0"
                      transform="translate(16.001 21)"
                    ></path>
                    <path
                      fill="#FDE674"
                      d="M0 0c.002.017-.003.028-.003.043C2.771 5.378 2.645 15.156-3.349 21.15c-5.8 5.8-13.679 5.821-18.767 4.067-1.578-.614-2.916-.066-3.815-.965-.881-.881-.351-2.719-.714-3.819-3.169-5.202-3.405-13.025 2.687-19.117 4.962-4.962 10.438-6.841 19.98-4.852.002.002.005.001.008.002 1.149.218 2.95-.524 3.567.094C.683-2.355-.094-1.083 0 0"
                      transform="translate(35.3 5.466)"
                    ></path>
                    <path
                      fill="#77b255"
                      d="M0 0s-4.27.59-6.857-4.599c-2.588-5.188.582-9.124.289-12.652-.293-3.531 1.566-1.265 2.621.445S.283-11.912.991-7.537C1.699-3.163.922-1.081 0 0"
                      transform="translate(9.208 30.418)"
                    ></path>
                  </g>
                </svg>
                <div className="ms-2 mt-2 d-flex justify-content-between w-100">
                  Lemonade <span style={spanBlack}>$5</span>
                </div>
              </li>
              <li style={li}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 47.5 47.5"
                  viewBox="0 0 47.5 47.5"
                  id="lime"
                  width="2rem"
                  height="2rem"
                >
                  <defs>
                    <clipPath id="a">
                      <path d="M0 38h38V0H0v38Z"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                  >
                    <path
                      fill="#5c913b"
                      d="M0 0c6.48 1.275 8.453-1.265 11.655-.084 3.202 1.181.093-2.82-.745-3.508-.84-.689-8.14-4.809-11.306-3.298C-3.563-5.379-3.58-.705 0 0"
                      transform="translate(12.405 33.661)"
                    ></path>
                    <path
                      fill="#77b255"
                      d="M0 0a1 1 0 0 0-.801.4c-.687.916-1.308 1.955-1.965 3.056-2.268 3.795-4.839 8.098-11.452 9.568a1 1 0 1 0 .434 1.952C-6.33 13.32-3.402 8.419-1.049 4.481-.419 3.427.175 2.432.799 1.6A1 1 0 0 0 0 0"
                      transform="translate(16.001 21)"
                    ></path>
                    <path
                      fill="#3d6006"
                      d="M0 0c.002.017-.003.028-.003.043C2.771 5.378 2.645 15.156-3.349 21.15c-5.8 5.8-13.679 5.821-18.767 4.067-1.578-.614-2.916-.066-3.815-.965-.881-.881-.351-2.719-.714-3.819-3.169-5.202-3.405-13.025 2.687-19.117 4.962-4.962 10.438-6.841 19.98-4.852.002.002.005.001.008.002 1.149.218 2.95-.524 3.567.094C.683-2.355-.094-1.083 0 0"
                      transform="translate(35.3 5.466)"
                    ></path>
                    <path
                      fill="#77b255"
                      d="M0 0s-4.27.59-6.857-4.599c-2.588-5.188.582-9.124.289-12.652-.293-3.531 1.566-1.265 2.621.445S.283-11.912.991-7.537C1.699-3.163.922-1.081 0 0"
                      transform="translate(9.208 30.418)"
                    ></path>
                  </g>
                </svg>
                <div className="ms-2 mt-2 d-flex justify-content-between w-100">
                  Limeade <span style={spanBlack}>$5</span>
                </div>
              </li>
              <li style={li}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 47.5 47.5"
                  viewBox="0 0 47.5 47.5"
                  id="lemon"
                  width="2rem"
                  height="2rem"
                >
                  <defs>
                    <clipPath id="a">
                      <path d="M0 38h38V0H0v38Z"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                  >
                    <path
                      fill="#5c913b"
                      d="M0 0c6.48 1.275 8.453-1.265 11.655-.084 3.202 1.181.093-2.82-.745-3.508-.84-.689-8.14-4.809-11.306-3.298C-3.563-5.379-3.58-.705 0 0"
                      transform="translate(12.405 33.661)"
                    ></path>
                    <path
                      fill="#77b255"
                      d="M0 0a1 1 0 0 0-.801.4c-.687.916-1.308 1.955-1.965 3.056-2.268 3.795-4.839 8.098-11.452 9.568a1 1 0 1 0 .434 1.952C-6.33 13.32-3.402 8.419-1.049 4.481-.419 3.427.175 2.432.799 1.6A1 1 0 0 0 0 0"
                      transform="translate(16.001 21)"
                    ></path>
                    <path
                      fill="#FDE674"
                      d="M0 0c.002.017-.003.028-.003.043C2.771 5.378 2.645 15.156-3.349 21.15c-5.8 5.8-13.679 5.821-18.767 4.067-1.578-.614-2.916-.066-3.815-.965-.881-.881-.351-2.719-.714-3.819-3.169-5.202-3.405-13.025 2.687-19.117 4.962-4.962 10.438-6.841 19.98-4.852.002.002.005.001.008.002 1.149.218 2.95-.524 3.567.094C.683-2.355-.094-1.083 0 0"
                      transform="translate(35.3 5.466)"
                    ></path>
                    <path
                      fill="#77b255"
                      d="M0 0s-4.27.59-6.857-4.599c-2.588-5.188.582-9.124.289-12.652-.293-3.531 1.566-1.265 2.621.445S.283-11.912.991-7.537C1.699-3.163.922-1.081 0 0"
                      transform="translate(9.208 30.418)"
                    ></path>
                  </g>
                </svg>
                <div className="ms-2 mt-2 d-flex justify-content-between w-100">
                  Arnold Palmer<span style={spanBlack}>$6</span>
                </div>
              </li>
              <li style={li}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 47.5 47.5"
                  viewBox="0 0 47.5 47.5"
                  id="lemon"
                  width="2rem"
                  height="2rem"
                >
                  <defs>
                    <clipPath id="a">
                      <path d="M0 38h38V0H0v38Z"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                  >
                    <path
                      fill="#5c913b"
                      d="M0 0c6.48 1.275 8.453-1.265 11.655-.084 3.202 1.181.093-2.82-.745-3.508-.84-.689-8.14-4.809-11.306-3.298C-3.563-5.379-3.58-.705 0 0"
                      transform="translate(12.405 33.661)"
                    ></path>
                    <path
                      fill="#77b255"
                      d="M0 0a1 1 0 0 0-.801.4c-.687.916-1.308 1.955-1.965 3.056-2.268 3.795-4.839 8.098-11.452 9.568a1 1 0 1 0 .434 1.952C-6.33 13.32-3.402 8.419-1.049 4.481-.419 3.427.175 2.432.799 1.6A1 1 0 0 0 0 0"
                      transform="translate(16.001 21)"
                    ></path>
                    <path
                      fill="#FDE674"
                      d="M0 0c.002.017-.003.028-.003.043C2.771 5.378 2.645 15.156-3.349 21.15c-5.8 5.8-13.679 5.821-18.767 4.067-1.578-.614-2.916-.066-3.815-.965-.881-.881-.351-2.719-.714-3.819-3.169-5.202-3.405-13.025 2.687-19.117 4.962-4.962 10.438-6.841 19.98-4.852.002.002.005.001.008.002 1.149.218 2.95-.524 3.567.094C.683-2.355-.094-1.083 0 0"
                      transform="translate(35.3 5.466)"
                    ></path>
                    <path
                      fill="#77b255"
                      d="M0 0s-4.27.59-6.857-4.599c-2.588-5.188.582-9.124.289-12.652-.293-3.531 1.566-1.265 2.621.445S.283-11.912.991-7.537C1.699-3.163.922-1.081 0 0"
                      transform="translate(9.208 30.418)"
                    ></path>
                  </g>
                </svg>
                <div className="ms-2 mt-2 d-flex justify-content-between w-100">
                  Lotus energy drink<span style={spanBlack}>$7</span>
                </div>
              </li>
              <div style={hr}></div>
              <ul style={addFlavors}>
                <div style={addFlavorsTitle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 47.5 47.5"
                    viewBox="0 0 47.5 47.5"
                    id="lemon"
                    width="2rem"
                    height="2rem"
                  >
                    <defs>
                      <clipPath id="a">
                        <path d="M0 38h38V0H0v38Z"></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.25 0 0 -1.25 0 47.5)"
                    >
                      <path
                        fill="#5c913b"
                        d="M0 0c6.48 1.275 8.453-1.265 11.655-.084 3.202 1.181.093-2.82-.745-3.508-.84-.689-8.14-4.809-11.306-3.298C-3.563-5.379-3.58-.705 0 0"
                        transform="translate(12.405 33.661)"
                      ></path>
                      <path
                        fill="#77b255"
                        d="M0 0a1 1 0 0 0-.801.4c-.687.916-1.308 1.955-1.965 3.056-2.268 3.795-4.839 8.098-11.452 9.568a1 1 0 1 0 .434 1.952C-6.33 13.32-3.402 8.419-1.049 4.481-.419 3.427.175 2.432.799 1.6A1 1 0 0 0 0 0"
                        transform="translate(16.001 21)"
                      ></path>
                      <path
                        fill="#FDE674"
                        d="M0 0c.002.017-.003.028-.003.043C2.771 5.378 2.645 15.156-3.349 21.15c-5.8 5.8-13.679 5.821-18.767 4.067-1.578-.614-2.916-.066-3.815-.965-.881-.881-.351-2.719-.714-3.819-3.169-5.202-3.405-13.025 2.687-19.117 4.962-4.962 10.438-6.841 19.98-4.852.002.002.005.001.008.002 1.149.218 2.95-.524 3.567.094C.683-2.355-.094-1.083 0 0"
                        transform="translate(35.3 5.466)"
                      ></path>
                      <path
                        fill="#77b255"
                        d="M0 0s-4.27.59-6.857-4.599c-2.588-5.188.582-9.124.289-12.652-.293-3.531 1.566-1.265 2.621.445S.283-11.912.991-7.537C1.699-3.163.922-1.081 0 0"
                        transform="translate(9.208 30.418)"
                      ></path>
                    </g>
                  </svg>
                  <div className="ms-2 mt-2 text-uppercase d-flex justify-content-between w-100">
                    Add Flavor{" "}
                    <span style={spanBlack}>
                      $1 <span style={spanSm}>each </span>
                    </span>
                  </div>
                </div>
                {flavor.map(({ node }, i) => (
                  <li key={i} style={addFlavorsLi}>{node.flavorsMenu}</li>
                ))}
              </ul>
            </ul>
            <div className="container">
              <div>
                <span>*Sugar Free</span> Strawberry, Rapsberry, Blackberry &
                mango.
              </div>
              <div>*Stevia sugar substitute available upon request.</div>
              <div>*Half and no sugar options available upon on request.</div>
            </div>
          </div>
        </div>
      );
    }}
  />
);

const flavorsList = graphql`
  query {
    allContentfulLemondadeTable {
      edges {
        node {
          id
          flavorsMenu
        }
      }
    }
  }
`;

export default MenuBoard;
