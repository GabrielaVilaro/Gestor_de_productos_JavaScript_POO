class Producto { //clase producto
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }

}

class Interfaz { //clase de la vista
    agregaProducto (producto1){
        const listaP = document.getElementById("productos-lista");
        const element = document.createElement("div");
        element.innerHTML = `

            <div class = "card text-center mb-4">
                <div class= "card-body">
                 <strong>Nombre del producto </strong>: ${producto1.nombre}
                 <strong>Precio del producto </strong>: ${producto1.precio}
                 <strong>Descripción del producto </strong>: ${producto1.descripcion}
                 <a href = "#" class = "btn btn-danger" name = "eliminar">Eliminar</a>
            </div>
                </div>        
        `;

        listaP.appendChild(element);
        this.resetForm();

    }

    resetForm() {
        document.getElementById("producto-form").reset();
    }

    eliminaProducto(element){

        if (element.name === "eliminar") {
            element.parentElement.parentElement.parentElement.remove();
            this.mensaje('Producto eliminado', 'danger');
        }

    }

    mensaje(message, cssClass){
        {
            const div = document.createElement('div');
            div.className = `alert alert-${cssClass} mt-2`;
            div.appendChild(document.createTextNode(message));
            const container = document.querySelector('.container');
            const app = document.querySelector('#app');
            container.insertBefore(div, app);
            setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 3000);//borrar en ese tiempo
        }
    }
    
    }

// Eventos en el DOM

document.getElementById('producto-form').addEventListener('submit', function(e){ //evento
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;

    const producto1 = new Producto (nombre, precio, descripcion);
    const inter = new Interfaz();

    if (nombre === '' || precio === '' || descripcion === '') {
        ui.showMessage('Ingrese valores para continuar', 'danger');
    }

    inter.agregaProducto(producto1);
    inter.mensaje('Producto añadido correctamente', 'success');
    inter.resetForm();
    e.preventDefault(); //impide que se refresque el formulario
    
});

document.getElementById('productos-lista').addEventListener('click', function(e){
    const inter = new Interfaz();
    inter.eliminaProducto(e.target);
    e.preventDefault();
});