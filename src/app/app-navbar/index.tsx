interface AppNavbarProps {
  userInfo: { name: string; photo: string };
  logo: string;
  colorAvatarText?: string;
  onOpenNotifications?: () => void;
}
