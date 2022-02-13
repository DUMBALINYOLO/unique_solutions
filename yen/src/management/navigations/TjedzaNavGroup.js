import React from "react";
import TjedzaNavCollapse from "./TjedzaNavCollapse";
import TjedzaNavItem from './TjedzaNavItem';
import TjedzaNavLink from "./TjedzaNavLink";
import ListSubheader  from "@mui/material/ListSubheader";

const TjedzaNavGroup = props => {
  const { item } = props;

  return (
    <>
      <ListSubheader>{item.title}</ListSubheader>

      {item.children && (
        <React.Fragment>
          {item.children.map(item => (
            <React.Fragment key={item.id}>
              {item.type === "group" && <NavGroup item={item} />}

              {item.type === "collapse" && <TjedzaNavCollapse item={item} />}

              {item.type === "item" && <TjedzaNavItem item={item} />}

              {item.type === "link" && <TjedzaNavLink item={item} />}
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </>
  );
};

const NavGroup = React.memo(TjedzaNavGroup);

export default NavGroup;
