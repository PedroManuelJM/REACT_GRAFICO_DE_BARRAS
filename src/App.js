import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title , CategoryScale, LinearScale,BarElement} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { LocalData } from './dataLocal';
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

function App() {

const [lista, setLista] = useState([]);  
const [paises, setPaises]=useState([]);
const [esperanza, setEsperanza]=useState([]);


const data = {
    datasets: [
    {
        label: 'MÁXIMA EDAD DE VIDA',
        data: esperanza,
        backgroundColor:'rgba(0,255,0,1)',
        borderColor:'black',
        borderWidth:1,
        hoverBackgroundColor:'rgba(0,255,0,2)',
        hoverBorderColor:'#FF0000',
    },
  ],
  labels:paises, 
}

const opciones={

  elements: {
    bar: {
      borderWidth: 2,
    },
  },
    responsive:true,
    plugins: {
        title: {
          display: true,
          text: 'ESPERANZA DE VIDA',
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'PAÍS',
            color: '#911',
            font: {
              family: 'Comic Sans MS',
              size: 50,
              weight: 'bold',
              lineHeight: 1.2,
            },
            padding: {top: 20, left: 0, right: 0, bottom: 0}
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'MÁXIMA EDAD',
            color: '#191',
            font: {
              family: 'Times',
              size: 30,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: {top: 30, left: 0, right: 0, bottom: 0}
          }
        }
      }
}

useEffect(()=> {
   setLista(LocalData)
   //console.log(lista)

   let paises= [], esperanza=[];
   lista.map(elemento => {
   paises.push(elemento.pais)
   esperanza.push(elemento.esperanza)
   });
   setPaises(paises);
   setEsperanza(esperanza);

}, [lista])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
       
        <Bar data={data} options={opciones} />

        </div>
      </div>
    </div>
  );
}

export default App;
