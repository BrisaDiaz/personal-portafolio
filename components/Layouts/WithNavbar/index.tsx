import React from "react";
import MenuNav from "@/components/MenuNav";

import { useRouter } from "next/router";
import styles from "./index.module.css";
export default function WithNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [isRouteChanging, setIsRouteChanging] = React.useState(false);

  React.useEffect(() => {
    const focusableElements =
      'a,button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    router.events.on("routeChangeStart", () => {
      setIsRouteChanging(true);
    });
    router.events.on("routeChangeComplete", () => {
      setIsRouteChanging(false);
      const main = document.querySelector("main");
      if (!main) return;
      const firstFocusableElement = main.querySelectorAll(
        focusableElements
      )[0] as HTMLButtonElement;

      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    });
    return () => {
      setIsRouteChanging(false); // This worked for me
    };
  }, [router.events]);
  const [menuState, setMenuState] = React.useState<{
    isOpen: boolean;
    activeLink: string;
  }>({
    isOpen: false,
    activeLink: "aboutMe",
  });

  const handleNavigation = (href: string) => {
    setMenuState({
      isOpen: false,
      activeLink: href,
    });
  };
  const handleOpenMenu = () => {
    setMenuState({
      ...menuState,
      isOpen: true,
    });
  };
  const handleCloseMenu = () => {
    setMenuState({
      ...menuState,
      isOpen: false,
    });
  };
  const MENU_LINKS = [
    { title: "About Me", href: "/" },
    { title: "Tech Stack", href: "/#technologies" },
    { title: "Projects", href: "/#projects" },
    { title: "Contact", href: "/#contact" },
  ];
  return (
    <>
      {isRouteChanging && (
        <div
          className={styles["progress-bar"]}
          aria-label="loading page"
          role="alert"
          aria-live="assertive"
        >
          <div className={styles["progress-bar-value"]}></div>
        </div>
      )}
      <MenuBtn onClick={handleOpenMenu} />

      <MenuNav
        isOpen={menuState.isOpen}
        links={MENU_LINKS}
        onClose={handleCloseMenu}
        onNavigate={handleNavigation}
      />
      {children}
    </>
  );
}

function MenuBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      aria-label="open menu"
      title="open menu"
      className={styles["menu-btn"]}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="emoji"
        viewBox="0 0 72 72"
        width={35}
        height={35}
      >
        <g id="color">
          <path
            fill="#d0cfce"
            d="m38.41 11.95h-4.821c-7.25 0-13.18 4.932-13.18 12.18v23.74c0 7.25 5.932 12.18 13.18 12.18h4.821c7.25 0 13.18-4.932 13.18-12.18v-23.74c-1.24e-4 -7.25-5.932-12.18-13.18-12.18z"
          />
          <path
            fill="#3f3f3f"
            d="m36.15 17.93h-0.3082c-1.407 0-2.558 1.151-2.558 2.558v7.94c0 1.407 1.151 2.558 2.558 2.558h0.3082c1.407 0 2.558-1.151 2.558-2.558v-7.94c0-1.407-1.151-2.558-2.558-2.558z"
          />
          <path
            fill="#9b9b9a"
            d="m34.79 12.79c3.959 1.699 7.723 4.137 8.161 10.3 0.5077 7.135-2.133 20.5-2.982 27.28-0.5935 4.745-2.94 6.942-6.056 9.432-1.571 1.256 6.889 1.102 10.37-0.9338 2.989-1.747 5.885-4.747 5.921-3.798l0.4224-33.75s-1.225-9.075-11.2-9.078c0 0-10.01-0.5155-4.635 0.5512z"
          />
        </g>
        <g id="hair" />
        <g id="skin" />
        <g id="skin-shadow" />
        <g id="line">
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="m36.26 31.12h-0.5181c-1.37 0-2.49-1.115-2.49-2.478v-8.126c0-1.363 1.121-2.478 2.49-2.478h0.5181c1.37 0 2.49 1.115 2.49 2.478v8.126c0 1.363-1.121 2.478-2.49 2.478z"
          />
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="m39.61 60.05h-7.215c-6.475 0-11.77-5.263-11.77-11.7v-24.71c0-6.432 5.298-11.7 11.77-11.7h7.215c6.475 0 11.77 5.263 11.77 11.7v24.71c0 6.432-5.298 11.7-11.77 11.7z"
          />
        </g>
      </svg>
    </button>
  );
}
