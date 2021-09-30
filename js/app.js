Vue.component('menuPpal', {
    props: ['nameFile'],
    template: 
        `<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Menú EduMaking</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a v-bind:class="[nameFile === 'Contactos Persona.html' || nameFile === 'Contactos - Empresa.html' ? 'nav-link dropdown-toggle active' :  'nav-link dropdown-toggle']" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Contacto
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="Contactos Persona.html">Personas</a></li>
                                <li><a class="dropdown-item" href="Contactos - Empresa.html">Empresas</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a v-bind:class="[nameFile === 'Instructor.html' ? 'nav-link active' :  'nav-link']" href="Instructor.html">Instructor</a>
                        </li>
                        <li class="nav-item">
                            <a v-bind:class="[nameFile === 'Curso.html' ? 'nav-link active' :  'nav-link']" href="Curso.html">Cursos</a>
                        </li>
                        <li class="nav-item">
                            <a v-bind:class="[nameFile === 'Inscripcion.html' ? 'nav-link active' :  'nav-link']" href="Inscripcion.html">Inscripción</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`,
    
    data: function(){
        return {
            Active:  false
        }
    }
});

var app = new Vue({
    el: '#menuPpal',
    components: {
        'menu-Ppal': menuPpal,
      }
});