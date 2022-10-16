

// import { useState } from "react";
import { Menu, Button } from "antd";


import Link from "next/link";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";


function Sidenav({ color }) {

  const route = useRouter()

  const onClick = (e) => {
    route.push(e.key)
  };
 

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Dashboard', 'home', <MailOutlined />),
    getItem('Profile', 'profile',<AppstoreOutlined />),
    getItem('Table', 'tables', <SettingOutlined />),

    getItem('Auth', 'auth', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];

  const page = 'dashboard'

  return (
    <>
      <div className="brand">
        <img src={'/img/logo.png'} alt="" />
        <span>Dashboard</span>
      </div>
      <hr />

      <Menu theme="light"
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />

    </>
  );
}

export default Sidenav;
