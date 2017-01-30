function LeerExcel(callback){
    gruposMat = [];
    alasql('SELECT * FROM XLSX("MateriasLCC.xlsx",{headers:true})',[],function(data){
        //console.log(data);
        //parrafo = document.getElementById('tablita');
        for (var i = 0; i < data.length; i++) {
            //parrafo.innerHTML = parrafo.innerHTML + "<tr><td>" + data[i].materia + "</td><td>"+data[i].nombremateria + "</td></tr>";
            datosMat = {
              numero: data[i].materia,
              nombre: data[i].nombremateria,
              creditos: data[i].creditos,
              semestre: data[i].semmat,
              eje: data[i].eje
            };
            gruposMat.push(datosMat);
        };
        callback();
    })
    var datosin = {materias: gruposMat};
    //callback();
    return datosin;
};

function extraerDatos(){
  var daterinos = LeerExcel(function(){
    console.log("Datos extraidos!");
  });
  return daterinos;
}
/*
{nombre: "Calculo Diferencial e Integral I",
                x: 50,
                y: 50,
                creditos: 8,
                mat_requiere: [null],
                mat_abre: [2], tipo: 1, semestre: 1},
*/
