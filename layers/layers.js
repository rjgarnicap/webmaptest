var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Quakes_1 = new ol.format.GeoJSON();
var features_Quakes_1 = format_Quakes_1.readFeatures(json_Quakes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quakes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quakes_1.addFeatures(features_Quakes_1);
var lyr_Quakes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quakes_1, 
                style: style_Quakes_1,
                popuplayertitle: "Quakes",
                interactive: true,
    title: 'Quakes<br />\
    <img src="styles/legend/Quakes_1_0.png" /> 5 - 5.49<br />\
    <img src="styles/legend/Quakes_1_1.png" /> 5.49 - 5.99<br />\
    <img src="styles/legend/Quakes_1_2.png" /> 5.99 - 6.49<br />\
    <img src="styles/legend/Quakes_1_3.png" /> 6.49 - 6.99<br />\
    <img src="styles/legend/Quakes_1_4.png" /> 6.99 - 7.7<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Quakes_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Quakes_1];
lyr_Quakes_1.set('fieldAliases', {'ID': 'ID', 'FechaUTC': 'FechaUTC', 'HoraUTC': 'HoraUTC', 'Magnitud': 'Magnitud', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Profundida': 'Profundida', 'Referencia': 'Referencia', 'Fechalocal': 'Fechalocal', 'Horalocal': 'Horalocal', 'Checking': 'Checking', });
lyr_Quakes_1.set('fieldImages', {'ID': 'TextEdit', 'FechaUTC': 'TextEdit', 'HoraUTC': 'TextEdit', 'Magnitud': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Profundida': 'TextEdit', 'Referencia': 'TextEdit', 'Fechalocal': 'TextEdit', 'Horalocal': 'TextEdit', 'Checking': '', });
lyr_Quakes_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'FechaUTC': 'inline label - visible with data', 'HoraUTC': 'hidden field', 'Magnitud': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Profundida': 'inline label - visible with data', 'Referencia': 'hidden field', 'Fechalocal': 'hidden field', 'Horalocal': 'hidden field', 'Checking': 'hidden field', });
lyr_Quakes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});