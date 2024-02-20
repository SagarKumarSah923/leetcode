import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import AssessmentSharpIcon from "@mui/icons-material/AssessmentSharp";
import logo from "./gfg_logo.png";


import { Avatar } from "@mui/material";

const Header = () => {
  const [showDialog, setShowDialog] = useState(false);
  const interviewLinkRef = useRef(null);

  const InterviewHandleClick = () => {
    setShowDialog(!showDialog);
  };

  return (
    <Fragment>
      <div className="header-container">
        <div className="left-header">
          <div className="header-menu">
            <Link to="/explore">
              <img src={logo} className="logo" />
            </Link>
            <Link to="/explore">
              <div className="menu-1">Explore</div>
            </Link>
            <Link to="/problems">
              <div className="menu-1">Problems</div>
            </Link>
            <Link to="/contest">
              <div className="menu-1">Contest</div>
            </Link>
            <Link to="/discussion">
              <div className="menu-1">Discussion</div>
            </Link>
            <div
              className="menu-1"
              onClick={InterviewHandleClick}
              ref={interviewLinkRef}
            >
              Interview
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1.5em"
              fill="currentColor"
              className="ml-1 h-[14px] w-[14px]"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            {showDialog && (
              <div className="interview-dialog">
                <div className="header-menu">
                  <ManageAccountsSharpIcon />
                  <option value="">Assessment</option>
                </div>
                <div className="header-menu">
                  <AssessmentSharpIcon />
                  <option value="">Assessment</option>
                </div>
              </div>
            )}
            <Link to="/store">
              <div className="menu-1">Store</div>
            </Link>
          </div>
        </div>
        <div className="right-header">
            <div className="right-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="hover:text-text-primary dark:hover:text-text-primary "><path fillRule="evenodd" clipRule="evenodd" d="M16.403 10.891C16.5768 12.8986 17.0682 14.5303 17.7963 15.8174C17.8182 15.8563 17.8403 15.8945 17.8623 15.9322H6.13771C6.15975 15.8945 6.18177 15.8563 6.20374 15.8174C7.12442 14.1898 7.66667 12.0111 7.66667 9.21794C7.66667 7.21279 9.16139 5.52994 11.1553 5.15365C11.2695 4.39084 11.556 3.68438 11.9739 3.07513C8.496 3.08878 5.66667 5.82552 5.66667 9.21794C5.66667 11.6748 5.20893 13.5139 4.46294 14.8327C4.0464 15.5691 3.66114 15.9613 3.45925 16.091C2.61971 16.6307 3.00196 17.9322 4.00001 17.9322H20C20.9981 17.9322 21.3803 16.6307 20.5408 16.091C20.3389 15.9613 19.9536 15.5691 19.5371 14.8327C18.9112 13.7263 18.4882 12.2536 18.3682 10.3571C17.7723 10.661 17.1073 10.8489 16.403 10.891ZM14.3096 18.9368C13.8363 18.6522 13.2219 18.805 12.9372 19.2783C12.7485 19.5919 12.3915 19.7902 12 19.7902C11.6085 19.7902 11.2515 19.5919 11.0628 19.2783C10.7781 18.805 10.1637 18.6522 9.69045 18.9368C9.2172 19.2215 9.06434 19.836 9.34903 20.3092C9.90245 21.2292 10.9125 21.7902 12 21.7902C13.0875 21.7902 14.0976 21.2292 14.651 20.3092C14.9357 19.836 14.7828 19.2215 14.3096 18.9368Z"></path><circle cx="16.1" cy="5.89999" r="3" fill="#F63636"></circle></svg>
            </div>
            <div className="right-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="1em" height="1em" fill="currentColor" className="h-[20px] w-[20px] hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"><path fillRule="evenodd" d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z" clipRule="evenodd"></path></svg>
            </div>
            <Link to="/register">
            <div className="right-menu avatar" style={{ marginTop: "-18px" }}>
               <Avatar />
            </div>
            </Link>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default Header;
