import DashboardsTab from '../DashboardsTab';
import AquariumTab from '../AquariumTab';
import ControlsTab from '../ControlsTab';
import { Icons } from '../../theme';

export const tabs = [
  { name: 'Dashboards', component: DashboardsTab, icon: Icons.dashboardTabBar },
  { name: 'Início', component: AquariumTab, icon: Icons.homeTabBar },
  { name: 'Controles', component: ControlsTab, icon: Icons.controlTabBar },
]
