import React from 'react';
import { Link } from 'react-router-dom';
import "./BreadCrumbs.scss";
import PropTypes from "prop-types";

function BreadCrumbs({ breadCrumbLinks }) {
    const list = breadCrumbLinks.map((value, index) => {
        return <div key={index}>{!value.isActive && <Link key={index} className="link__style" to={value.linkHref}>
            {value.linkText} {">"}&nbsp;
        </Link>}
            {value?.isActive && <>  {value?.linkText}</>}
        </div>
    })

    return (
        <nav className="breadcrumbs">
            {list}

        </nav >
    )
}

export default BreadCrumbs;
BreadCrumbs.propTypes = {
    breadCrumbLinks: PropTypes.array.isRequired
}

