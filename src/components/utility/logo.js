import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../settings';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              <i className={siteConfig.siteIcon} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">Bukit Vista</Link>
        </h3>
      )}
    </div>
  );
};
