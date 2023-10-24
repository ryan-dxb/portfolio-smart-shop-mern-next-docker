import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="fixed bottom-0 left-64 right-0 min-h-[64px] h-16 flex items-center justify-center border-t">
      <div className="flex flex-col">
        <h3>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="
            "
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-500"
          >
            John Doe
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
