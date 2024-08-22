import React from "react";

export type MenuType = {
  name: string;
  url: string;
  desc?: string | undefined | null;
  icon?: React.ReactNode;
};
