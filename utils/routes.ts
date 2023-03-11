import AssessmentIcon from "@/assets/Assessment";
import DashboardIcon from "@/assets/DashboardIcon";
import FinanceIcon from "@/assets/FinanceIcon";
import InstitutionIcon from "@/assets/InsitutionIcon";
import LearningIcon from "@/assets/LearningIcon";
import NotificationIcon from "@/assets/NotificationIcon";
import SupportIcon from "@/assets/SupportIcon";

export const FRONTEND_URLS = {
  dashboard: "/users/dashboard",
  institutions: "/users/institutions",
  learning: "/users/learning",
  assessment: "/users/assessments",
  finance: "/users/finance",
  notifications: "/users/notifications",
  support: "/users/support",
};

export const SideBarRoutes = [
  {
    name: "Dashboard",
    route: "#", // because no design was given for this
    icon: DashboardIcon,
  },
  {
    name: "Institutions",
    route: "#", // because no design was given for this
    icon: InstitutionIcon,
  },
  {
    name: "Learning",
    route: "#", // because no design was given for this
    icon: LearningIcon,
  },
  {
    name: "Assessment",
    route: FRONTEND_URLS.assessment,
    icon: AssessmentIcon,
    active: true, // because it is a dummy route
  },
  {
    name: "Finance",
    route: "#", // because no design was given for this
    icon: FinanceIcon,
  },
  {
    name: "Notifications",
    route: "#", // because no design was given for this
    icon: NotificationIcon,
  },
  {
    name: "Support",
    route: "#", // because no design was given for this
    icon: SupportIcon,
  },
];
