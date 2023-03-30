import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Dropdown from "../DropDown";
import styles from "./SideNav.module.scss";

export interface SideNavProps {
  data: {
    id: string;
    name: string;
  }[];
}

const SideNav = ({ data }: SideNavProps) => {
  const router = useRouter();
  const handleClickDropDown = (id: string) => {
    if (id) {
      router.push(`/product/${id}`);
    }
  };
  return (
    <>
      <div className={styles["sidenav-mobile-menu"]}>
        <Dropdown
          label="Select a Category"
          onClick={handleClickDropDown}
          options={data?.map(({ id, name }) => ({ label: name, value: id }))}
        />
      </div>
      <div className={styles["sidenav-wrapper"]}>
        <aside className={styles["sidenav-container"]}>
          <nav>
            <ul>
              {data?.map(({ id, name }) => {
                const isActive = router.asPath === `/product/${id}`;
                return (
                  <li key={id}>
                    <Link
                      href={`/product/${id}`}
                      className={`${styles["sidenav-container--link-btn"]} ${
                        isActive
                          ? styles["sidenav-container--link-btn--active"]
                          : ""
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default SideNav;
