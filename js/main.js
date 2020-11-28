
//Start Animation
let btnMenu = document.getElementById('btn');
let imgHeader = document.getElementById('imgHeader');
let bgHeader = document.getElementById('bg');
let main = document.getElementById('main');
let h1 = document.getElementById('title_animation');
const animation = () =>{
    setInterval(() => {
        imgHeader.classList.remove('none');
        changeOfLanguage.classList.remove('none');
        btnMenu.classList.remove('none');
        bgHeader.classList.add('bgHeader');
        main.classList.remove('none');
        h1.classList.add('title_header_h1');
        h1.classList.remove('none');
        main.classList.add('mainAnimation');
    }, 3000);
}
animation();
//Start Animation
//btn menu
let navBarActivate = document.getElementById('navBarActivate');
let x = document.createElement('em');
let barras = document.getElementById('barras');
let menu = document.querySelectorAll('.ul_navbar a');

const clickMenu = () =>{
    menu.forEach(elemento =>{
        elemento.addEventListener('click', retractMenu);
    })
}

const activateMenu = () =>{
    x.classList.add('fas', 'fa-times');
    btnMenu.appendChild(x);
    btnMenu.removeChild(barras);
    navBarActivate.classList.remove('none');
}

const retractMenu = () =>{
    btnMenu.appendChild(barras);
    btnMenu.removeChild(x);
    navBarActivate.classList.add('none');
}
x.addEventListener('click', retractMenu);
barras.addEventListener('click', activateMenu);
clickMenu();
//btn menu


/* Change of language*/
const changeOfLanguage = document.getElementById('change');
const cambio = document.querySelector('.cambio');
const cambioDos = document.querySelector('.DontActive');
const aquiEmpieza = document.querySelector('.title_history');
const pHistoria = document.getElementById('pHistoria');
const purpose = document.getElementById('proposito');
const pProposito = document.getElementById('pProposito');
const pInspiración = document.getElementById('pInspiración');
const inspiracion = document.getElementById('inspiracion');
const conoceEquipo = document.getElementById('conoceEquipo');
const gestionTeam = document.getElementById('gestionTeam');
const finanzasTeam = document.getElementById('finanzasTeam');
const ourValue = document.getElementById('ourValue');
const bienComun = document.getElementById('bienComun');
const trabajoEnEquipo = document.getElementById('trabajoEnEquipo');
const actuarDistinto = document.getElementById('actuarDistinto');
const mejorSiempre = document.getElementById('mejorSiempre');
const nuetrasEmpresas = document.getElementById('nuetrasEmpresas');
const proClear = document.getElementById('proClear');
const insClear = document.getElementById('insClear');
const descClear = document.getElementById('descClear');
const proPuente = document.getElementById('proPuente');
const insPuente = document.getElementById('insPuente');
const descPuente = document.getElementById('descPuente');
const contcUs = document.getElementById('contcUs');
const menuHistoria = document.getElementById('menuHistoria');
const menuNosotros = document.getElementById('menuNosotros');
const menuValores = document.getElementById('menuValores');
const menuEMpresa = document.getElementById('menuEMpresa');
const menuContacto = document.getElementById('menuContacto');

changeOfLanguage.addEventListener('click', (e) =>{
    e.preventDefault();
    document.body.classList.toggle('language');
    //localStorage for Dark Mode
    if (document.body.classList.contains('language')) {
        localStorage.setItem('change-Of-Language', 'true');
        cambioDos.classList.add('DontActive');
        cambio.classList.remove('DontActive');
        h1.textContent = 'Queremos generar modelos de negocios ambiciosos, inspiradores, motivadores y que apunten a resolver problemas globales.';
        aquiEmpieza.textContent = 'Aquí empieza nuestra historia';
        pHistoria.textContent = 'Clear Group fue creado el año 2018 producto de la fusión de las empresas Clear People , fundada el año 2014 por Marcelo Solis Chapa y Puente Digital , fundada el año 2016 por Gonzalo Mahave Cáceres. Esto con el objetivo de administrar las empresas Clear People y Puente Digital, ambas con oferta de servicios en el mercado de las soluciones digitales, Gestión de Personas y Economías Creativas.';
        purpose.textContent = 'Propósito';
        pProposito.innerHTML = `Queremos generar modelos de <span>negocios</span> ambiciosos,
        <span>inspiradores, motivadores</span> y que apunten a resolver
        problemas globales, agreguen valor a personas y organizaciones.
        Todas nuestras iniciativas empresariales velan por cumplir nuestro
        marco valórico de la forma más rigurosa posible.`;
        pInspiración.textContent = 'Inspiración';
        inspiracion.innerHTML = `Nos encanta <span>aprender</span>, y los desafíos globales y
        empresariales nos permiten, <span>conocer</span>, comprender y
        compartir nuevas realidades y
        <span>abrir nuevos espacios de conocimiento</span>.`;
        conoceEquipo.textContent='Conoce al equipo de Clear Group';
        gestionTeam.textContent = 'Equipo Gestión de Personas';
        finanzasTeam.textContent = 'Equipo de Finanzas';
        ourValue.textContent = 'NUESTROS VALORES';
        bienComun.innerHTML = `<span>Bien Común:</span> Todas nuestras empresas tienen como foco
        impactar positivamente a la ciudadanía, los sistemas sociales,
        instituciones y medios socioeconómicos, teniendo presente además,
        las dinámicas propias del medio ambiente.`;
        trabajoEnEquipo.innerHTML = `<span>Trabajo en Equipo:</span> Todos los resultados de las
        iniciativas empresariales de Clear Group dependen del equipo de
        trabajo, el cual está compuesto por personas que comparten valores,
        propósitos, inspiraciones y objetivos.`;
        actuarDistinto.innerHTML = `<span>Actuar Distinto:</span> Valoramos el actuar de manera
        diferente y el proceso completo que implica, desde pensar, diseñar,
        proponer, hasta liderar y ponernos en acción.`;
        mejorSiempre.innerHTML = `<span>Siempre Mejor:</span> Cada una de las personas que integran el
        equipo de Clear Group buscan crecer día a día, desarrollándose
        personal y profesionalmente.`;
        nuetrasEmpresas.textContent = 'NUESTRAS EMPRESAS';
        proClear.innerHTML = ` <span>Propósito:</span> Contribuir a que las personas puedan
        encontrar amplios espacios de creatividad, desarrollo
        profesional y oportunidades de negocios en la industria de
        medios y entretenimientos, aprovechando su crecimiento global.`;
        insClear.innerHTML = `<span>Inspiración:</span> Ver a las personas felices
        utilizando el máximo de sus potenciales creativos y
        profesionales, creando valor para la industria, desarrollando
        soluciones de alto impacto desde Chile para el mundo`;
        descClear.innerHTML = `<span>Descripción:</span> Clear People es el mayor proveedor
        de talento para la industria de los Medios en Chile. Trabaja
        con más de 200 profesionales todos los meses atendiendo a
        los principales medios nacionales como TVN, Mega, CDF, EMOL,
        Canal13, entre otros.`;
        proPuente.innerHTML = `<span>Propósito:</span> Desarrolla soluciones digitales
        que permitan resolver el desafío que presenta la gestión
        de personas a las organizaciones en la consecución de sus
        metas y objetivos empresariales.`;
        insPuente.innerHTML = `<span>Inspiración:</span> Resolver desafíos
        organizacionales con soluciones innovadores que generen
        cambios disruptivos en la industria.`;
        descPuente.innerHTML = `<span>Descripción:</span> Puente Digital desde el año 2016
        ha funcionado como un laboratorio de desarrollo para
        tecnologías disruptivas. Desde su fusión con Clear Group a
        aplicado dichas tecnologías al mercado de la gestión de
        personas. Hoy se encuentra desarrollando nuevas soluciones
        y herramientas`;
        contcUs.textContent = 'CONTÁCTANOS';
        menuHistoria.textContent = 'HISTORIA';
        menuNosotros.textContent = 'NOSOTROS';
        menuValores.textContent = ' VALORES';
        menuEMpresa.textContent = 'EMPRESAS';
        menuContacto.textContent = 'CONTÁCTANOS'

        
    }else{
        localStorage.setItem('change-Of-Language', 'false');
        cambioDos.classList.remove('DontActive');
        cambio.classList.add('DontActive');
        h1.textContent = 'We want to create ambitious, inspiring and motivating business models that help to solve global problems.';
        aquiEmpieza.textContent = 'Our history begins here';
        pHistoria.textContent = 'Clear Group originated in the year 2018 from the merger of Clear People enterprises, which started back in 2014 founded by Marcelo Solis, and Puente Digital, founded in 2016 by Gonzalo Mahave. The objective of Clear Group was to manage both Clear People and Puente Digital operation, both offering services in the markets of digital solutions, people solutions and creative economies. ';
        purpose.textContent = 'Purpose';
        pProposito.innerHTML = `We want to create <span>negocios</span> ambitious,
        <span>inspiring and motivating business models</span> that 
        help resolve global problems and also add value to people and organizations. 
        All our entrepreneurial initiatives look after the rigorous fulfilment of our 
        value framework.`;
        pInspiración.textContent = 'Inspiration';
        inspiracion.innerHTML = `We are passionate about <span>learning</span>, Global and entrepreneurial challenges allow us to know, 
        understand, <span>and share new realities</span>, and unclose new comprehension domains.</span>.`;
        conoceEquipo.textContent='Meet Clear Group team';
        gestionTeam.textContent = 'Human Resources Team';
        finanzasTeam.textContent = 'Finance Team';
        ourValue.textContent = 'OUR VALUES';
        bienComun.innerHTML = `<span>Common Well-being:</span> All our companies are focused on positively impacting citizens, social systems, institutions and socioeconomic environments, also bearing in mind the dynamics of the environment.`;
        trabajoEnEquipo.innerHTML = `<span>Teamwork::</span> All the results of Clear Group's business initiatives rely on teamwork, which is a result of people who share values, purposes, inspirations and objectives.`;
        actuarDistinto.innerHTML = `<span>Act Differently::</span> We value acting differently and the entire process that it involves, from thinking, designing, proposing, to leading and taking action.`;
        mejorSiempre.innerHTML = `<span>Always better:</span> Each one of the Clear Group team members are seeking to grow on a day to day basis, developing themselves personally and professionally.`;
        nuetrasEmpresas.textContent = 'OUR COMPANIES';
        proClear.innerHTML = ` <span>Purpose::</span> To help people find open spaces for creativity, professional development and business opportunities in the media and entertainment industry, taking advantage of its global growth.`;
        insClear.innerHTML = `<span>Inspiration:</span>To see happy people using the maximum of their creative and professional potential, adding value for the industry and developing high-impact solutions from Chile to the world.`;
        descClear.innerHTML = `<span>Description:</span> Clear People is the largest provider of talent for the Media industry in Chile. It works with more than 200 professionals every month serving the principal national media such as TVN, Mega, CDF, EMOL, Canal13, among others.`;
        proPuente.innerHTML = `<span>Purpose:</span> To develop digital solutions that help organizations to address people management challenges, allowing them to achieve their business goals and objectives.`;
        insPuente.innerHTML = `<span>Inspiration:</span> To solve organizational challenges with innovative solutions that generate disruptive changes in the industry.`;
        descPuente.innerHTML = `<span>Description:</span> Since 2016 Puente Digital has operated as a development laboratory for disruptive technologies. From its merger with Clear Group, it has applied these technologies to the people management market. Currently, it is developing new solutions and tools`;
        contcUs.textContent = 'CONTACT US';
        menuHistoria.textContent = 'HISTORY';
        menuNosotros.textContent = 'US';
        menuValores.textContent = 'VALUES';
        menuEMpresa.textContent = 'COMPANIES';
        menuContacto.textContent = 'CONTACT US' 
    }
});



if (localStorage.getItem('change-Of-Language') === 'true') {
    document.body.classList.add('language');

}else{
    document.body.classList.remove('language');
}
/* Change of language*/


