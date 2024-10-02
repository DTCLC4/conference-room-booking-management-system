import CIcon from '@coreui/icons-react'
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logo } from '../assets/brand/logo'
import { sygnet } from '../assets/brand/sygnet'
// import { AppSidebarNav } from './AppSidebarNav'
// import navigation from '../_nav'
import { set } from '../appSlice'
const AppSidebar = () => {
  const dispatch = useDispatch()
  const unFoldable = useSelector((state) => state.app.sidebarUnFoldable)
  const sidebarShow = useSelector((state) => state.app.sidebarShow)
  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unFoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(set({ sidebarShow: visible }))
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(set({ sidebarShow: false }))}
        />
      </CSidebarHeader>
      {/* <AppSidebarNav items={navigation} /> */}
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler onClick={() => dispatch(set({ sidebarUnFoldable: !unFoldable }))} />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
