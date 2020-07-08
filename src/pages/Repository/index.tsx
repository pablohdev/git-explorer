import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, RepositorieInfo, Issues } from './style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'


interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositorieInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descricao do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1888</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>201</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>88</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositorieInfo>
      <Issues>
        <Link to='aaa'>
          <div>
            <strong>aaaaa</strong>
            <p>sssss</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
}

export default Repository;