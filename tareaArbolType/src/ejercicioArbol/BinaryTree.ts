 
 import { BinaryNode } from "./BinaryNode";  //importamos la clase Nodo

export class BinaryTree {
    root  

    constructor() {
        this.root=null; 
    }

    estaVacio() {
        return this.root===null; 
    }


    insertar(dato: number) {
        let nodoNuevo = new BinaryNode(dato)
        if (this.estaVacio()) {
            this.root=nodoNuevo;
            return ;
        } else {
            let auxiliar : BinaryNode ;
            auxiliar = this.root;
            let padre : BinaryNode; 
            while (true) 
                {
                    padre = this.root;
                    if (dato < auxiliar.dato)
                        {
                            auxiliar= auxiliar.left;
                        }
                        if (auxiliar==null)
                        {
                            padre.left=nodoNuevo;
                            return;
                        }
                        else
                        {
                            auxiliar=auxiliar.right;
                        }
                        if (auxiliar==null)
                        {
                            padre.right=nodoNuevo;
                            return;
                        }
                }
        }
    }

    
    mostrarInOrden(nodo: BinaryNode) {
        if (nodo != null)
            {
                this.mostrarInOrden(nodo.left);
                console.log(nodo.dato);    
                this.mostrarInOrden(nodo.right);
            }
    }
    
    mostrarPreOrden(nodo: BinaryNode) {
        if (nodo != null)
            {
                console.log(nodo.dato); 
                this.mostrarPreOrden(nodo.left);   
                this.mostrarPreOrden(nodo.right);
            }
    }

    mostrarPostOrden(nodo: BinaryNode) {
        if (nodo != null)
            { 
                this.mostrarPostOrden(nodo.left);   
                this.mostrarPostOrden(nodo.right);
                console.log(nodo.dato);
            }
    }

    eliminarNodo() {
        if (this.root === null) {
            return; // No hay nodos en el árbol para eliminar
        }
        this.root = this.eliminarRecursivo(this.root);
    }


    eliminarRecursivo(nodoEntrada: BinaryNode): BinaryNode | null {
        if (nodoEntrada.left === null) {
            return nodoEntrada.right;  //primera condicion que  verifica si el nodo izquierdo esta vacio, de ser asi devuelve el derecho
        }
        nodoEntrada.left = this.eliminarRecursivo(nodoEntrada.left);   //llamamos a la función dentro de si misma
        return nodoEntrada;
    }


    eliminarHoja() {
        this.root = this.eliminarHojaRecursivo(this.root);
    }
    
    eliminarHojaRecursivo(nodo: BinaryNode | null): BinaryNode | null {
        if (nodo === null) {
            return nodo;
        }
        if (nodo.left === null && nodo.right === null) { //función que verifica si el nodo tiene "hijos o apuntadores", de no tener significa que es una hoja
            return null; // Eliminar el nodo hoja
        }
        nodo.left = this.eliminarHojaRecursivo(nodo.left);  //continuamos llamando a si misma la función hacía la ruta izquierda o derecha
        nodo.right = this.eliminarHojaRecursivo(nodo.right);
    
        return nodo;
    }
    


    public get _root () : any {
        return this.root;
    }
    

}