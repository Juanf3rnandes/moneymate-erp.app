import styles from "../styles/layoutDefault.module.scss";
import { FaRegBell } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography, Badge, Menu, MenuItem } from "@mui/material";
import logoImage from "../../../public/assets/imgs/Logo_do_MoneyMate.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/auth";

interface DefaultLayoutProps {
  userName: string;
  left?: React.ReactNode;
}

export default function DefaultLayout({ userName, left }: DefaultLayoutProps) {
  const { authOff } = useAuth();

  function stringAvatar(name: string) {
    if (!name) {
      return {
        children: "",
      };
    }

    const nameParts = name.split(" ");
    const initials =
      nameParts.length >= 2
        ? `${nameParts[0][0]}${nameParts[1][0]}`
        : nameParts[0][0];

    return {
      children: initials,
    };
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header_container}>
          <nav className={styles.nav_menu}>
            <div className={styles.items_container}>
              <Link href="/">
                <Image
                  src={logoImage}
                  alt="logo money mate"
                  height={50}
                  width={150}
                />
              </Link>
            </div>
            <div className={styles.menu_container}></div>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
            >
              <Badge badgeContent={2} color="primary">
                <FaRegBell size={20} />
              </Badge>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Avatar
                  src=""
                  {...stringAvatar(userName)}
                  sx={{
                    height: 30,
                    width: 30,
                  }}
                  onClick={handleClick}
                />
                <Typography variant="body1">{userName}</Typography>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={authOff}>Logout</MenuItem>
                </Menu>
              </Stack>
            </Stack>
          </nav>
        </header>
        {left && <div className={styles.left_container}>{left}</div>}
        <div className={styles.content_container}>
          {/* Main content goes here */}
        </div>
      </div>
    </>
  );
}
