import React from 'react';
import {MdDone} from 'react-icons/md'
// import { Container } from './styles';

export default function Footer() {
  let ano = new Date().getFullYear();
    return (
    <>
    <div className="text-center">

        Adtech &copy; {ano} - Todos os direitos reservados <MdDone/>
    </div>
    </>
  );
}
