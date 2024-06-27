// import { useState } from "react";
// import { AgregarTarea } from "./component/AgregarTarea";

// const Item = ({ nombre, visto }) => {
//   return (
//     <li>
//       {nombre}
//       {visto ? "✅" : "⛔"}
//     </li>
//   );
// };

// export const ListadoApp = () => {
//   const addTask = () => {
//     setArreglo([...arreglo, { nombre: "nuevo", visto: false }]);
//   };

//   let listadoSecciones = [
//     { id: 0, nombre: "Instalaciones necesarias", visto: true },
//     { id: 1, nombre: "uso de vite", visto: true },
//     { id: 2, nombre: "componentes", visto: true },
//     { id: 3, nombre: "variables en JSX", visto: true },
//     { id: 4, nombre: "props", visto: true },
//     { id: 5, nombre: "eventos", visto: true },
//     { id: 6, nombre: "useState", visto: false },
//     { id: 7, nombre: "Redux", visto: false },
//     { id: 8, nombre: "customHooks", visto: false },
//   ];
//   const [arreglo, setArreglo] = useState(listadoSecciones);

//   const onAgregarTarea = (val) => {
//     let valor = val.trim();
//     if (val < 1) return;
//     const envio = {
//       id: arreglo.length,
//       nombre: val,
//       visto: false,
//     };
//     setArreglo([...arreglo, envio]);
//   };

//   return (
//     <>
//       <h1 className="titulo">Listado de temas del curso</h1>
//       <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
//       <ol>
//         {arreglo.map((item) => (
//           <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>
//         ))}
//       </ol>
//     </>
//   );
// };
