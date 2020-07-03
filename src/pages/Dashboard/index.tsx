import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import {Title, Form,Repositories}  from './styles'


const Dashboard:React.FC  = ()=>{
  return (<>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
              <a href="teste">
                  <img src="https://avatars1.githubusercontent.com/u/45184516?s=460&u=916e53d8906a79d6c0205f2379563207c5abab7e&v=4" alt="Pablo Henrique"/>
                  <div>
                      <strong>pablohdev/myRepo</strong>
                      <p>Myrepo app in react native</p>
                  </div>
                  <FiChevronRight size={20}/>
              </a>
              <a href="teste">
                  <img src="https://avatars1.githubusercontent.com/u/45184516?s=460&u=916e53d8906a79d6c0205f2379563207c5abab7e&v=4" alt="Pablo Henrique"/>
                  <div>
                      <strong>pablohdev/myRepo</strong>
                      <p>Myrepo app in react native</p>
                  </div>
                  <FiChevronRight size={20}/>
              </a>
              <a href="teste">
                  <img src="https://avatars1.githubusercontent.com/u/45184516?s=460&u=916e53d8906a79d6c0205f2379563207c5abab7e&v=4" alt="Pablo Henrique"/>
                  <div>
                      <strong>pablohdev/myRepo</strong>
                      <p>Myrepo app in react native</p>
                  </div>
                  <FiChevronRight size={20}/>
              </a>
            </Repositories>
          </>
         );
}

export default Dashboard;