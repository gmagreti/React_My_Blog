import React from "react"

import { Github } from "styled-icons/boxicons-logos"
import { Twitter } from "styled-icons/boxicons-logos"
import { Youtube } from "styled-icons/boxicons-logos"
import { Unsplash } from "styled-icons/boxicons-logos"
import { Instagram } from "styled-icons/boxicons-logos"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Github />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Twitter />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Youtube />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Unsplash />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o Topo">
        <Instagram />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
