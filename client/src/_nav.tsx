import React from 'react';
import { CNavItem } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer } from '@coreui/icons'; // Make sure this import is correct

// Define Badge and NavItem interfaces
interface Badge {
  color: string;
  text: string;
}

interface NavItem {
  component: React.ElementType;
  name: string;
  to?: string;
  icon?: React.ReactNode;
  badge?: Badge;
  items?: NavItem[];
  href?: string;
}

interface NavGroup extends NavItem {
  items: NavItem[];
}

const _nav: (NavItem | NavGroup)[] = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" size='lg' />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
];

export default _nav;
