import { BinaryTree } from "./ejercicioArbol/BinaryTree"; //importamos la clase para hacer instancias en este modulo


let arbol1 = new BinaryTree(); 

arbol1.insertar(5);
arbol1.insertar(7);
arbol1.insertar(5);
arbol1.insertar(8);
arbol1.insertar(1);

arbol1.mostrarInOrden(arbol1.root())
