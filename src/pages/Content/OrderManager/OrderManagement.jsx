import { HomeFilled, MenuFoldOutlined, RightOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import TableOrderManagement from './TableOrderManagement'

export default function OrderManagement() {
  return (
    <div>
        <div className="home_body">
        <h2>Sản Phẩm</h2>
        <span>Sản phẩm</span>
      </div>
      <div className="home_bodyheader">
        <HomeFilled />
        <NavLink>Trang chủ</NavLink>
        <RightOutlined />
        <NavLink>Sản phẩm</NavLink>
        <RightOutlined />
        <NavLink>Quản lý đơn hàng</NavLink>
      </div>
      <div className='order_manager'>
        <MenuFoldOutlined/>
        <span>Quản lí đơn hàng</span>
        <Divider/>
        <div>
            <TableOrderManagement/>
        </div>
      </div>
    </div>
  )
}
