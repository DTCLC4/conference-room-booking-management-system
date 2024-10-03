import CIcon from '@coreui/icons-react'
import { CCloseButton, CSidebar, CSidebarBrand, CSidebarFooter, CSidebarHeader, CSidebarToggler } from '@coreui/react'
import React from 'react'
import { logo } from '../assets/brand/logo.ts'
import { sygnet } from '../assets/brand/sygnet.ts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store.ts'
import { set } from '../appSlice.ts'

// sidebar nav config
import navigation from '../_nav.tsx'
import { SidebarNav } from './SidebarNav'

const Sidebar: React.FC = () => {

  const dispatch = useDispatch();
  const sidebarShow = useSelector((state: RootState) => state.app.sidebarShow)
  const unFoldable = useSelector((state: RootState) => state.app.sidebarUnFoldable)

  return (
    <CSidebar
      className='border-end'
      colorScheme='dark'
      position='fixed'
      unfoldable={unFoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(set({ sidebarShow: visible }))
      }}>
      <CSidebarHeader className='border-bottom'>
        <CSidebarBrand href='/'>
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(set({ sidebarShow: false }))}
        />
      </CSidebarHeader>
      <SidebarNav items={navigation} />
      <CSidebarFooter className='border-top d-none d-lg-flex'>
        <CSidebarToggler onClick={() => dispatch(set({ sidebarUnFoldable: !unFoldable }))} />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(Sidebar)
