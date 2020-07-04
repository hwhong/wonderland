import React from "react";
import styles from "./sidebar.module.css";

export interface SidebarProps {
  // List of Sidebar Titles to render
  titles: string[];

  onTitleClick: (i: number) => void;
}

export function Sidebar(props: SidebarProps) {
  return <div> </div>;
}
