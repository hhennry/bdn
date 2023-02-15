import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { CaretDown } from "phosphor-react";

import "/config/src/styles/global.css"

const VnP6GwGb = {
  Home: {
    title: "Início",
    href: "./",
    alt: "Página Inicial",
  },
  About: {
    title: "Institucional",
    href: "./institucional",
    alt: "Sobre a igreja",
  },
  Local: {
    title: "Endereços",
    href: "./localizacao",
    alt: "Veja os endereços de nossas igrejas e células",
  },
  Colabore: {
    title: "Colaborar",
    href: "./colabore",
    alt: "Contribuir para a Obra de Deus",
  },
  Contato: {
    title: "Contato",
    href: "./contato",
    alt: "Entrar em contato com nossa igreja",
  },
};

const MdA06Ci7 = {
  IG: {
    title: "Instituto Global",
    href: "./drops/ig",
    alt: "Instituto Global",
  },
  PB: {
    title: "Planet Bola",
    href: "./drops/pb",
    alt: "Planet Bola",
  },
  IC: {
    title: "Intime Culture",
    href: "./drops/ic",
    alt: "Intime Culture",
  },
  BRD: {
    title: "Bola Radio Worship",
    href: "./drops/brd",
    alt: "Bola Radio Worship",
  },
  BRE: {
    title: "Bola Radio Extreme",
    href: "./drops/bre",
    alt: "Bola Radio Extreme",
  },
  RCE: {
    title: "Recrie",
    href: "./drops/rce",
    alt: "Recrie",
  }
};


export function TBAcmI() {
  return (
    <header className="header">
      <a className="_TqyhEt" title="Igreja - Bola de Neve" href="/">
        <img
          src="/config/assets/bnd/02.png"
          alt="Logo da Igreja Bola de Neve"
        />
      </a>
      <nav className="_WQ8324">
        {Object.entries(VnP6GwGb).map(([key, value]) => {
          return (
            <a key={key} href={value.href} title={value.alt} target="_self">
              {value.title}
            </a>
          );
        })}
      </nav>
      <nav className="_UiIQWQ">
        <a className="_QPEcuo" title="Igreja online" href="/lives">
          Live
        </a>
        <Menu>
          <MenuButton className="_VSS0Dq" as="button">
            Projetos
            <CaretDown />
          </MenuButton>
          <MenuList className="_ZHvFEm">
            {Object.entries(MdA06Ci7).map(([key, value]) => {
              return (
                <MenuItem>
                  <a
                    key={key}
                    href={value.href}
                    title={value.alt}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value.title}
                  </a>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
}
