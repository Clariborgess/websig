var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DistribuioEspacialdePessoasMenstruantes_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distribuição Espacial de Pessoas Menstruantes",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DistribuioEspacialdePessoasMenstruantes_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5866454.455080, -3848868.303700, -5796208.296326, -3733192.219870]
                            })
                        });
var format_LocalidadesdoMunicpiodoRioGrande_2 = new ol.format.GeoJSON();
var features_LocalidadesdoMunicpiodoRioGrande_2 = format_LocalidadesdoMunicpiodoRioGrande_2.readFeatures(json_LocalidadesdoMunicpiodoRioGrande_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesdoMunicpiodoRioGrande_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesdoMunicpiodoRioGrande_2.addFeatures(features_LocalidadesdoMunicpiodoRioGrande_2);
var lyr_LocalidadesdoMunicpiodoRioGrande_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalidadesdoMunicpiodoRioGrande_2, 
                style: style_LocalidadesdoMunicpiodoRioGrande_2,
                popuplayertitle: "Localidades do Município do Rio Grande",
                interactive: true,
                title: '<img src="styles/legend/LocalidadesdoMunicpiodoRioGrande_2.png" /> Localidades do Município do Rio Grande'
            });
var format_Farmcias_3 = new ol.format.GeoJSON();
var features_Farmcias_3 = format_Farmcias_3.readFeatures(json_Farmcias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Farmcias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Farmcias_3.addFeatures(features_Farmcias_3);
var lyr_Farmcias_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Farmcias_3, 
                style: style_Farmcias_3,
                popuplayertitle: "Farmácias",
                interactive: true,
                title: '<img src="styles/legend/Farmcias_3.png" /> Farmácias'
            });
var format_Mercados_4 = new ol.format.GeoJSON();
var features_Mercados_4 = format_Mercados_4.readFeatures(json_Mercados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mercados_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mercados_4.addFeatures(features_Mercados_4);
var lyr_Mercados_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mercados_4, 
                style: style_Mercados_4,
                popuplayertitle: "Mercados",
                interactive: true,
                title: '<img src="styles/legend/Mercados_4.png" /> Mercados'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DistribuioEspacialdePessoasMenstruantes_1.setVisible(true);lyr_LocalidadesdoMunicpiodoRioGrande_2.setVisible(true);lyr_Farmcias_3.setVisible(true);lyr_Mercados_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DistribuioEspacialdePessoasMenstruantes_1,lyr_LocalidadesdoMunicpiodoRioGrande_2,lyr_Farmcias_3,lyr_Mercados_4];
lyr_LocalidadesdoMunicpiodoRioGrande_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Incidencia': 'Incidencia', 'Cura': 'Cura', 'Abandono': 'Abandono', 'obito_TB': 'obito_TB', 'P_CURA': 'P_CURA', 'P_ABANDONO': 'P_ABANDONO', 'P_OBITO': 'P_OBITO', });
lyr_Farmcias_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'tipo': 'tipo', });
lyr_Mercados_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'objectid': 'objectid', 'tipo': 'tipo', 'nome_zona': 'nome_zona', 'zona': 'zona', 'localidade': 'localidade', 'incidencia': 'incidencia', 'cura': 'cura', 'abandono': 'abandono', 'obito_tb': 'obito_tb', 'p_cura': 'p_cura', 'p_abandono': 'p_abandono', 'p_obito': 'p_obito', 'area_km': 'area_km', 'alagamento': 'alagamento', });
lyr_LocalidadesdoMunicpiodoRioGrande_2.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'TIPO': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'Incidencia': 'Range', 'Cura': 'Range', 'Abandono': 'Range', 'obito_TB': 'Range', 'P_CURA': 'TextEdit', 'P_ABANDONO': 'TextEdit', 'P_OBITO': 'TextEdit', });
lyr_Farmcias_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'tipo': '', });
lyr_Mercados_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id': 'TextEdit', 'objectid': 'TextEdit', 'tipo': 'TextEdit', 'nome_zona': 'TextEdit', 'zona': 'TextEdit', 'localidade': 'TextEdit', 'incidencia': 'TextEdit', 'cura': 'TextEdit', 'abandono': 'TextEdit', 'obito_tb': 'TextEdit', 'p_cura': 'TextEdit', 'p_abandono': 'TextEdit', 'p_obito': 'TextEdit', 'area_km': 'TextEdit', 'alagamento': 'TextEdit', });
lyr_LocalidadesdoMunicpiodoRioGrande_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'TIPO': 'hidden field', 'Nome_Zona': 'hidden field', 'Zona': 'hidden field', 'Localidade': 'header label - always visible', 'Incidencia': 'hidden field', 'Cura': 'hidden field', 'Abandono': 'hidden field', 'obito_TB': 'hidden field', 'P_CURA': 'hidden field', 'P_ABANDONO': 'hidden field', 'P_OBITO': 'hidden field', });
lyr_Farmcias_3.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'tipo': 'header label - always visible', });
lyr_Mercados_4.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id': 'hidden field', 'objectid': 'hidden field', 'tipo': 'header label - always visible', 'nome_zona': 'hidden field', 'zona': 'hidden field', 'localidade': 'hidden field', 'incidencia': 'hidden field', 'cura': 'hidden field', 'abandono': 'hidden field', 'obito_tb': 'hidden field', 'p_cura': 'hidden field', 'p_abandono': 'hidden field', 'p_obito': 'hidden field', 'area_km': 'hidden field', 'alagamento': 'hidden field', });
lyr_Mercados_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});