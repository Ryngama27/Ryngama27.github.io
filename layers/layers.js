var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_0.png" /> Balokang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_1.png" /> Bangunsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_2.png" /> Banjar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_3.png" /> Bantarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_4.png" /> Batulawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_5.png" /> Binangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_6.png" /> Bojongkantong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_7.png" /> Cibeureum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_8.png" /> Cimaragas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_9.png" /> Cintaratu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_10.png" /> Cisaga<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_11.png" /> Hegarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_12.png" /> Kalapasawit<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_13.png" /> Karangkamulyan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_14.png" /> Karangpanimba<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_15.png" /> Karyamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_16.png" /> Kertahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_17.png" /> Kujangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_18.png" /> Kutawaringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_19.png" /> Langensari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_20.png" /> Madura<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_21.png" /> Mekarharja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_22.png" /> Mekarmukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_23.png" /> Mekarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_24.png" /> Muktisari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_25.png" /> Mulyasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_26.png" /> Neglasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_27.png" /> Panulisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_28.png" /> Panulisan Barat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_29.png" /> Panulisan Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_30.png" /> Pasirnagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_31.png" /> Pataruman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_32.png" /> Puloerang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_33.png" /> Purwaharja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_34.png" /> Raharja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_35.png" /> Raksabaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_36.png" /> Rejasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_37.png" /> Sidamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_38.png" /> Situbatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_39.png" /> Sukajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_40.png" /> Tambakreja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_41.png" /> Waringinsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_42.png" /> <br />'
        });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'inline label', 'FCODE': 'inline label', 'LUASWH': 'inline label', 'UUPP': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'KDEBPS': 'inline label', 'KDEPUM': 'inline label', 'KDCBPS': 'inline label', 'KDCPUM': 'inline label', 'KDBBPS': 'inline label', 'KDBPUM': 'inline label', 'WADMKD': 'inline label', 'WIADKD': 'inline label', 'WADMKC': 'inline label', 'WIADKC': 'inline label', 'WADMKK': 'inline label', 'WIADKK': 'inline label', 'WADMPR': 'inline label', 'WIADPR': 'inline label', 'TIPADM': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});