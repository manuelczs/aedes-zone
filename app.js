var express = require('express');
var app = express();
var path = require('path');
var URL_CSV = 'http://datos.salud.gob.ar/dataset/ceaa8e87-297e-4348-84b8-5c643e172500/resource/318834df-656d-4e71-9e87-195ebd96a0f8/download/informacion-publica-dengue-zika-nacional-hasta-20180821v2.csv';
//var request = require('requestaavar csv = require('csvtojson');
var http = require('http')
var fs = require('fs');
var path = require('path');
var csvjson = require('csvjson');
var bodyParser = require('body-parser');


app.use(express.static('./public'));

var request = http.get(URL_CSV, function(response) {
    if (response.statusCode === 200) {
        var file = fs.createWriteStream("./file-csv.csv");
        response.pipe(file);
    }
    // Add timeout.
    request.setTimeout(12000, function () {
        request.abort();
    });
});

var options = {
  delimiter: ',',
  quote: '"'
};

var file_data = fs.readFileSync('./file-csv.csv', { encoding: 'utf8' });
var json_result = csvjson.toObject(file_data, options);
var data = JSON.stringify(json_result);
fs.writeFileSync('./final-json.in', data);
var jsontData = JSON.parse(fs.readFileSync('./final-json.in', 'utf8'));


// Functions

var isIn = (nombre, arr) => {
    return(arr.some(function(elem){ return elem.provincia == nombre}));
}

var getProvince = (prov, jss) => {
    let provinces = [];
    for(let i = 0; i<jss.length; i++) {

        var num_de_casos = parseInt(jss[i].cantidad_casos);
        if(!isIn(jss[i].provincia_nombre, provinces)){
        	let enf = jss[i].evento_nombre;
            provinces.push({
            	provincia: jss[i].provincia_nombre,
            	enfermedad: enf,
            	numero_de_casos: num_de_casos
            });

        } else
        {
			var provincia = provinces.find(function(elem) { return elem.provincia ==jss[i].provincia_nombre });
			
			provincia.numero_de_casos += num_de_casos;
        }


    }
    return provinces
}



var provincia = getProvince('', jsontData);


//Routes

const router = express.Router();

router.get('/provinces', async (req, res) => {
    console.log("entro");
  res.status(200).json(provincia);
});

router.get('/provinces/:nombre', async (req, res) => {
    var nombreProv = req.params.nombre;
  res.status(200).json(provincia.find(function(elem){ return elem.provincia == nombreProv}));
});


app.use(router);



app.listen(3000, () => {
	console.log("listen in localhost:3000");
})