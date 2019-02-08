import React, { Component } from "react";
import Back from "../../components/block/back";
import {
  Main,
  Header,
  Nome,
  HeaderBox,
  Sobre,
  Nav,
  NavBox,
  Contaniner
} from "./style";

import Geral from "../../components/curriculo/geral";
import Experiencia from "../../components/curriculo/experiencia";
import Educacao from "../../components/curriculo/educacao";
import Habilidade from "../../components/curriculo/habilidade";

export default class Curriculo extends Component {
  state = {
    loaded: false,
    getOut: false,
    curriculoItem: 0,
    nav: [
      { id: 0, name: "Geral", component: Geral, active: true },
      { id: 1, name: "Experiências", component: Experiencia, active: false },
      { id: 2, name: "Educações", component: Educacao, active: false },
      { id: 3, name: "habilidades", component: Habilidade, active: false }
    ]
  };

  activeItem = id => {
    const nav = this.state.nav.filter(item => {
      item.active = false;
      if (item.id === id) {
        item.active = true;
      }
      return item;
    });
    this.setState({ nav, getOut: false });
  };

  removeContent = id => {
    this.setState({ getOut: true });
    setTimeout(() => {
      this.activeItem(id);
    }, 250);
  };

  getContent = () => {
    return this.state.nav.filter(item => {
      return item.active;
    })[0].component;
  };

  render() {
    const { history } = this.props;
    const Content = this.getContent();

    return (
      <Main>
        <Back to="/" history={history} />
        <Header backgroundImage="http://hdqwalls.com/wallpapers/iron-fist-artwork-19.jpg?">
          <HeaderBox>
            <Nome>Teste</Nome>
            <Sobre>
              Trained in ways of martial arts at K'un-Lun, Danny Rand becomes
              the Immortal Iron Fist and uses his incredible abilities to defend
              others.
            </Sobre>
          </HeaderBox>
        </Header>
        <NavBox>
          <Nav>
            {this.state.nav.map(({ id, active, name }) => (
              <li className={active ? "active" : ""} key={id}>
                <a onClick={() => this.removeContent(id)}>{name}</a>
              </li>
            ))}
          </Nav>
        </NavBox>
        <Contaniner className={this.state.getOut && "out"}>
          <Content />
        </Contaniner>
      </Main>
    );
  }
}
