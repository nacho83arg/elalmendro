document.getElementById("menu").addEventListener("click",function(){
  
    document.getElementById("navega").classList.toggle("mostrar");
  });


  document.getElementById("lupa1").addEventListener("click", myFunction2);
function myFunction2() {
  let image = document.getElementById("lupa1");
  let texto = document.getElementById("texto_s1");

  if (image.getAttribute("src") === "icn/lupa.png") {
    image.setAttribute("src", "icn/lupa-menos.png");
    texto.classList.toggle("mostrar2");
  } else {
    image.setAttribute("src", "icn/lupa.png");
    texto.classList.toggle("mostrar2");
  }
}


document.getElementById("lupa2").addEventListener("click", myFunction3);
function myFunction3() {
  let image = document.getElementById("lupa2");
  let texto = document.getElementById("texto_s2");

  if (image.getAttribute("src") === "icn/lupa.png") {
    image.setAttribute("src", "icn/lupa-menos.png");
    texto.classList.toggle("mostrar2");
  } else {
    image.setAttribute("src", "icn/lupa.png");
    texto.classList.toggle("mostrar2");
  }
}

document.getElementById("lupa3").addEventListener("click", myFunction4);
function myFunction4() {
  let image = document.getElementById("lupa3");
  let texto = document.getElementById("texto_s3");

  if (image.getAttribute("src") === "icn/lupa.png") {
    image.setAttribute("src", "icn/lupa-menos.png");
    texto.classList.toggle("mostrar2");
  } else {
    image.setAttribute("src", "icn/lupa.png");
    texto.classList.toggle("mostrar2");
  }
}