// Array
const frameworks = [
    {
        name:"8 JULIO 1992", 
        description:"NACE EL ALMENDRO. Basándonos en la Declaración de los Derechos del Niño, iniciamos nuestra tarea brindando contención y apoyo  a las familias, que experimentaban situaciones de riesgo y vulnerabilidad. Un gran porcentaje de niños, jóvenes y adultos afectados por el consumo provienen de  familias disfuncionales, en las cuales el alcohol y la droga provocan la expulsión de muchos de ellos a la calle. Fuimos una de las primeras instituciones en capacitar a operadores de calle para que aprendieran a profundizar la contención, orientación y derivación  a centros de día, y así encauzar sus vidas y reinsertarse socialmente."
    },
    {
        name:"1999", 
        description:"CURSOS Y CHARLAS. Se comienzan a realizar capacitaciones en diferentes instituciones educativas, dirigidas a directivos, docentes, alumnos y padres. Se brindan cursos, talleres y charlas"
    },
    {
        name:"2003", 
        description:"SE AMPLIA EL OBJETO SOCIAL. Debido al agravamiento de consumo de sustancias psicoactivas aumenta la violencia doméstica, social, y la trata de personas. Se comienza a trabajar con tratamientos terapéuticos y técnicas nuevas para curar heridas traumáticas por consecuencia de abuso, maltrato, negligencia, ataques de pánico, fobias, duelos y adicciones."
    },
    {
        name:"2005", 
        description:"Se comienza a dictar el “Curso Intensivo sobre Adicciones”, de 10 encuentros"
    },
    {
        name:"12 ENERO 2008", 
        description:"ABRIMOS EL HOGAR DE DIA. El objetivo principal es recibir, contener, educar, alimentar y promover niños y jóvenes de 14 a 21 años, derivados de juzgados de menores, Gobierno de la Ciudad de Buenos Aires, niños en situación de calle, institucionalizados, parroquias, villas de emergencia, etc."
    },
    {
        name:"8 DE JULIO DE 2012", 
        description:"CUMPLIMOS 20 AÑOS. La enorme gratitud de haber logrado celebrar estos veinte años junto a la comunidad, nos incentiva a generar nuevos proyectos para seguir siendo referentes y poder responder a todas aquellas personas que se acercan a nuestra Institución para mejorar su calidad de vida."
    },
    {
        name:"8 DE JULIO DE 2017", 
        description:"CUMPLIMOS 25 AÑOS. El 8 de Julio celebramos nuestro aniversario con una gran cena show, donde participaron más de trescientas cincuenta personas. En esa cena se presentaron los avances de la Institución, entre ellos la apertura del Hospital de Día y del Hospital de Noche, ampliación de los tratamientos de distintas problemáticas familiares y sociales, dictado de Cursos Intensivos de Prevención y Tratamiento de Adicciones en el interior del país, y también los proyectos futuros a ser desarrollados."
    },
    {
        name:"8 DE JULIO DE 2022", 
        description:"CUMPLIMOS 3O AÑOS"
    },
]

// render html
var html = "";
frameworks.forEach(e=>{
    html +="<div class='child'><div class='content'><h4>"+e.name+"</h4><p>"+e.description+"</p></div> </div>"
})
timeline.innerHTML = html

// ANIMACION TIMELINE

var _items = document.querySelectorAll(".child")
_items.forEach(element =>{
    if(element.offsetTop < 300)
        element.classList.add('_show')
})

window.addEventListener("scroll",e=>{
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elem=>{
        if(elem.offsetTop - window.innerHeight/2 < scroll){
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        }else{
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }

    })
})