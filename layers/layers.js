var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_completo_1 = new ol.format.GeoJSON();
var features_completo_1 = format_completo_1.readFeatures(json_completo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_completo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_completo_1.addFeatures(features_completo_1);
var lyr_completo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_completo_1, 
                style: style_completo_1,
                interactive: true,
    title: 'completo<br />\
    <img src="styles/legend/completo_1_0.png" /> MX1<br />\
    <img src="styles/legend/completo_1_1.png" /> MX2<br />\
    <img src="styles/legend/completo_1_2.png" /> MX4<br />\
    <img src="styles/legend/completo_1_3.png" /> SPMX1<br />\
    <img src="styles/legend/completo_1_4.png" /> <br />'
        });
var format_stations_2_2 = new ol.format.GeoJSON();
var features_stations_2_2 = format_stations_2_2.readFeatures(json_stations_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stations_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_2_2.addFeatures(features_stations_2_2);
var lyr_stations_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stations_2_2, 
                style: style_stations_2_2,
                interactive: false,
                title: '<img src="styles/legend/stations_2_2.png" /> stations_2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_completo_1.setVisible(true);lyr_stations_2_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_completo_1,lyr_stations_2_2];
lyr_completo_1.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'station_name': 'station_name', 'numero_guias': 'numero_guias', });
lyr_stations_2_2.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'station_name': 'station_name', 'numero_guias': 'numero_guias', });
lyr_completo_1.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'station_name': 'TextEdit', 'numero_guias': 'Range', });
lyr_stations_2_2.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'station_name': 'TextEdit', 'numero_guias': 'Range', });
lyr_completo_1.set('fieldLabels', {'locality': 'header label', 'zonificacion': 'header label', 'station_code': 'header label', 'station_name': 'header label', 'numero_guias': 'header label', });
lyr_stations_2_2.set('fieldLabels', {'locality': 'no label', 'zonificacion': 'no label', 'station_code': 'no label', 'station_name': 'no label', 'numero_guias': 'no label', });
lyr_stations_2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});