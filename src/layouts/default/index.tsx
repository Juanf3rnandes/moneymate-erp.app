import styles from "../styles/layoutDefault.module.scss";
import { FaRegBell } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography, Badge } from "@mui/material";
import logoImage from "../../../public/assets/imgs/Logo_do_MoneyMate.png";
import Image from "next/image";
import Link from "next/link";
import { User } from "@/auth";
interface DefaultLayoutProps {
  userName: string;
  left?: React.ReactNode;
}

export default function DefaultLayout({ userName, left }: DefaultLayoutProps) {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

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
                />
                <Typography variant="body1">{userName}</Typography>
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
