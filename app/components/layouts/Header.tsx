"use client";
import { Navbar, Text } from "@nextui-org/react";
import { useState } from "react";

const links = [
  {
    name: "الرئيسية",
    link: "#home",
  },
  {
    name: "الخدمات",
    link: "#services",
  },
  {
    name: "التواصل",
    link: "#contact",
  },
];
export default function Header() {
  const [params, setparams] = useState("#home");

  return (
    <Navbar isBordered variant="sticky">
      {/* <Navbar.Toggle showIn="xs" /> */}
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit">
          محمد حنيش
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        variant="highlight-rounded"
      >
        {links.map((link) => (
          <Navbar.Link
            isActive={params === link.link ? true : false}
            onClick={() => setparams(link.link)}
            key={link.name}
            href={link.link}
            color={"text"}
            activeColor={"neutral"}
          >
            {link.name}
          </Navbar.Link>
        ))}
      </Navbar.Content>
    </Navbar>
  );
}
