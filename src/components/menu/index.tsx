import React, { useState } from 'react';
import { useLogout, useMenu } from "@refinedev/core";
import { EuiIcon, EuiSideNav, slugify } from '@elastic/eui';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  const { menuItems } = useMenu();
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);
  const [selectedItemName, setSelectedItem] = useState('Time stuff');

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const selectItem = (name: React.SetStateAction<string>) => {
    setSelectedItem(name);
  };

  const createItem = (name: string, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      id: slugify(name),
      name,
      isSelected: selectedItemName === name,
      onClick: () => selectItem(name),
      ...data,
    };
  };
  const mySideNav = menuItems.map((item) => {
    return createItem(item.label, {
      href: item.route,
    });
  });

  return (
    <EuiSideNav
      aria-label="side-nav"
      mobileTitle="Điều hướng"
      logo={<EuiIcon type="logoKibana" />}
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={mySideNav}
    />
  );
};