import{j as e,B as c,r as o,C as i}from"./index-nuUwxHU0.js";import{C as x}from"./ChevronUpIcon-W8C228SY.js";const u=[{name:"Ativo",current:!1},{name:"Concluinte",current:!1},{name:"Formando",current:!1},{name:"Concluído",current:!1},{name:"Cancelado",current:!1},{name:"Não cadastrado",current:!1},{name:"Cadastrado",current:!1},{name:"Trancado",current:!1}],p=()=>e.jsx("div",{className:"flex flex-row gap-3 w-10/12  flex-wrap",children:u.map((a,r)=>e.jsx(c,{extratags:"!rounded-full px-6 focus:bg-secundaria",children:a.name},r))}),g=()=>{const[a,r]=o.useState(!1),[d,n]=o.useState(null),l=s=>{n(s)};return e.jsxs("div",{className:"relative inline-block text-left",children:[e.jsx("div",{onClick:()=>r(s=>!s),children:e.jsxs(c,{children:["Selecionar colunas",a?e.jsx(x,{className:"h-4"}):e.jsx(i,{className:"h-4"})]})}),a&&e.jsx("div",{className:"absolute z-10 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg text-sm",children:u.map((s,t)=>e.jsx("div",{className:"px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100",onClick:()=>l(s),children:s.name},t))})]})};function f(a){const{children:r,extratags:d}=a,n="bg-secundaria hover:bg-seccundaria border-gray-300 text-gray-950",[l,s]=o.useState(!1),t=`flex items-center py-2 pr-6 pl-2 border-2 rounded-full cursor-pointer text-sm transition 
        ease-in-out delay-50 active:scale-95 duration-100 shadow-md select-none ${l?n:"bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-950 hover:bg-gray-200"} ${d}`,m=()=>{s(!l)};return e.jsx("div",{children:e.jsxs("label",{className:t,children:[e.jsx("input",{type:"checkbox",className:"checked:text-gray-950 checked:bg-gray-950 rounded-full cursor-pointer mr-2 select-none focus:outline-none focus:ring-offset-0 focus:ring-0",onChange:m,checked:l}),r]})})}const h=[{name:"Pessoais",current:!1},{name:"Contato",current:!1},{name:"Forma de ingresso",current:!1},{name:"Período de Ingresso",current:!1},{name:"Última movimentação",current:!1}],j=()=>e.jsx("div",{className:"flex flex-row gap-3 w-10/12  flex-wrap",children:h.map((a,r)=>e.jsx(f,{extratags:"!rounded-full px-6 focus:bg-secundaria",children:a.name},r))}),v=()=>{const[a,r]=o.useState(!1),[d,n]=o.useState(null),l=s=>{n(s)};return e.jsxs("div",{className:"relative inline-block text-left",children:[e.jsx("div",{onClick:()=>r(s=>!s),children:e.jsxs(c,{children:["Selecionar colunas",a?e.jsx(x,{className:"h-4"}):e.jsx(i,{className:"h-4"})]})}),a&&e.jsx("div",{className:"absolute z-10 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg text-sm",children:h.map((s,t)=>e.jsx("div",{className:"px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100",onClick:()=>l(s),children:s.name},t))})]})},N=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container shadow py-6 flex flex-col items-start p-6 gap-4 bg-white",id:"filtros",children:[e.jsxs("div",{className:"justify-start flex flex-row gap-6 content-start items-start flex-wrap pb-6",children:[e.jsxs("div",{className:"flex gap-2 flex-col self-end flex-wrap",children:[e.jsx("label",{className:"input-group-text active:scale-105",htmlFor:"inputGroupSelect01",children:"Curso: "}),e.jsxs("select",{className:"flex gap-12 border w-64 outline-none rounded p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md",id:"inputGroupSelect01",children:[e.jsx("option",{selected:!0,className:"bg-white p-1",children:"Todos os cursos"}),e.jsx("option",{value:"1",className:"bg-white p-1",children:"One"}),e.jsx("option",{value:"2",className:"bg-white p-1",children:"Two"}),e.jsx("option",{value:"3",className:"bg-white p-1",children:"Three"})]})]}),e.jsxs("div",{className:"flex gap-2 flex-col self-end flex-wrap",children:[e.jsx("label",{className:"input-group-text active:scale-105",htmlFor:"inputGroupSelect02",children:"Mês de análise: "}),e.jsxs("select",{className:"border outline-none rounded w-64 p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md",id:"inputGroupSelect02",children:[e.jsx("option",{selected:!0,className:"",children:"10/2023"}),e.jsx("option",{value:"1",children:"One"}),e.jsx("option",{value:"2",children:"Two"}),e.jsx("option",{value:"3",children:"Three"})]})]}),e.jsxs("div",{className:"flex gap-2 flex-col self-end flex-wrap",children:[e.jsx("label",{className:"input-group-text active:scale-105",htmlFor:"inputGroupSelect03",children:"Função: "}),e.jsxs("select",{className:"border outline-none rounded w-64 p-2 text-sm hover:bg-gray-100 cursor-pointer shadow-md",id:"inputGroupSelect03",children:[e.jsx("option",{selected:!0,className:"",children:"Professor"}),e.jsx("option",{value:"1",children:"One"}),e.jsx("option",{value:"2",children:"Two"}),e.jsx("option",{value:"3",children:"Three"})]})]})]}),e.jsxs("div",{className:"flex gap-2 flex-col flex-wrap pb-6",children:[e.jsx("div",{children:" Situação:"}),e.jsx("div",{className:"md:hidden",children:e.jsx(g,{})}),e.jsx("div",{className:"hidden md:block",children:e.jsx(p,{})})]}),e.jsxs("div",{className:"flex gap-2 flex-col flex-wrap",children:[e.jsx("div",{children:" Obter dados:"}),e.jsx("div",{className:"md:hidden",children:e.jsx(v,{})}),e.jsx("div",{className:"hidden md:block",children:e.jsx(j,{})})]}),e.jsx("div",{className:" align-middle justify-center flex pt-6 ",children:e.jsx(c,{color:"bg-terciaria bg-opacity-90 active:bg-opacity-70 border-none hover:bg-opacity-100 text-white",children:" Filtrar"})})]})});export{N as default};
