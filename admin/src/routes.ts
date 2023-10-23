import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoCreateOutline, IoHomeOutline } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { AiOutlineTags } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";

export const useRoutes = () => {
  const pathname = usePathname();

  const dashboardRoutes = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        active: pathname === "/",
        subRoutes: [
          {
            label: "Dashboard",
            href: "/",
            active: pathname === "/",
            icon: IoHomeOutline,
          },
        ],
      },
      {
        label: "Posts",
        href: "/posts",
        active: pathname === "/posts",
        subRoutes: [
          {
            label: "All Posts",
            href: "/posts",
            active: pathname === "/posts",
            icon: BsPostcard,
          },
          {
            label: "Add New",
            href: "/posts/add",
            active: pathname === "/posts/add",
            icon: IoCreateOutline,
          },
        ],
      },
      {
        label: "Categories",
        href: "/categories",
        active: pathname === "/categories",
        subRoutes: [
          {
            label: "All Categories",
            href: "/categories",
            active: pathname === "/categories",
            icon: BiCategoryAlt,
          },
          {
            label: "Add New",
            href: "/categories/add",
            active: pathname === "/categories/add",
            icon: IoCreateOutline,
          },
        ],
      },
      {
        label: "Tags",
        href: "/tags",
        active: pathname === "/tags",
        subRoutes: [
          {
            label: "All Tags",
            href: "/tags",
            active: pathname === "/tags",
            icon: AiOutlineTags,
          },
          {
            label: "Add New",
            href: "/tags/add",
            active: pathname === "/tags/add",
            icon: IoCreateOutline,
          },
        ],
      },
    ],
    [pathname]
  );

  return { dashboardRoutes };
};

export default useRoutes;
