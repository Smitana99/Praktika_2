var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr__1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'растр<br />\
    <img src="styles/legend/_1_0.png" /> 325<br />\
    <img src="styles/legend/_1_1.png" /> 326<br />\
    <img src="styles/legend/_1_2.png" /> 328<br />\
    <img src="styles/legend/_1_3.png" /> 329<br />\
    <img src="styles/legend/_1_4.png" /> 330<br />\
    <img src="styles/legend/_1_5.png" /> 331<br />\
    <img src="styles/legend/_1_6.png" /> 332<br />\
    <img src="styles/legend/_1_7.png" /> 333<br />\
    <img src="styles/legend/_1_8.png" /> 334<br />\
    <img src="styles/legend/_1_9.png" /> 336<br />\
    <img src="styles/legend/_1_10.png" /> 337<br />\
    <img src="styles/legend/_1_11.png" /> 338<br />\
    <img src="styles/legend/_1_12.png" /> 339<br />\
    <img src="styles/legend/_1_13.png" /> 342<br />\
    <img src="styles/legend/_1_14.png" /> 343<br />\
    <img src="styles/legend/_1_15.png" /> 344<br />\
    <img src="styles/legend/_1_16.png" /> 346<br />\
    <img src="styles/legend/_1_17.png" /> 347<br />\
    <img src="styles/legend/_1_18.png" /> 348<br />\
    <img src="styles/legend/_1_19.png" /> 349<br />\
    <img src="styles/legend/_1_20.png" /> 351<br />\
    <img src="styles/legend/_1_21.png" /> 352<br />\
    <img src="styles/legend/_1_22.png" /> 353<br />\
    <img src="styles/legend/_1_23.png" /> 356<br />\
    <img src="styles/legend/_1_24.png" /> 363<br />\
    <img src="styles/legend/_1_25.png" /> 364<br />\
    <img src="styles/legend/_1_26.png" /> 365<br />\
    <img src="styles/legend/_1_27.png" /> 366<br />\
    <img src="styles/legend/_1_28.png" /> 370<br />\
    <img src="styles/legend/_1_29.png" /> 373<br />\
    <img src="styles/legend/_1_30.png" /> 375<br />\
    <img src="styles/legend/_1_31.png" /> 377<br />\
    <img src="styles/legend/_1_32.png" /> 380<br />\
    <img src="styles/legend/_1_33.png" /> 386<br />\
    <img src="styles/legend/_1_34.png" /> 387<br />\
    <img src="styles/legend/_1_35.png" /> 391<br />\
    <img src="styles/legend/_1_36.png" /> 396<br />\
    <img src="styles/legend/_1_37.png" /> 399<br />\
    <img src="styles/legend/_1_38.png" /> 401<br />\
    <img src="styles/legend/_1_39.png" /> 402<br />\
    <img src="styles/legend/_1_40.png" /> 407<br />\
    <img src="styles/legend/_1_41.png" /> 408<br />\
    <img src="styles/legend/_1_42.png" /> 409<br />\
    <img src="styles/legend/_1_43.png" /> 411<br />\
    <img src="styles/legend/_1_44.png" /> 414<br />\
    <img src="styles/legend/_1_45.png" /> 415<br />\
    <img src="styles/legend/_1_46.png" /> 417<br />\
    <img src="styles/legend/_1_47.png" /> 419<br />\
    <img src="styles/legend/_1_48.png" /> 424<br />\
    <img src="styles/legend/_1_49.png" /> 427<br />\
    <img src="styles/legend/_1_50.png" /> 429<br />\
    <img src="styles/legend/_1_51.png" /> 431<br />\
    <img src="styles/legend/_1_52.png" /> 436<br />\
    <img src="styles/legend/_1_53.png" /> 437<br />\
    <img src="styles/legend/_1_54.png" /> 440<br />\
    <img src="styles/legend/_1_55.png" /> 443<br />\
    <img src="styles/legend/_1_56.png" /> 446<br />\
    <img src="styles/legend/_1_57.png" /> 448<br />\
    <img src="styles/legend/_1_58.png" /> 449<br />\
    <img src="styles/legend/_1_59.png" /> 452<br />\
    <img src="styles/legend/_1_60.png" /> 453<br />\
    <img src="styles/legend/_1_61.png" /> 457<br />\
    <img src="styles/legend/_1_62.png" /> 462<br />\
    <img src="styles/legend/_1_63.png" /> 464<br />\
    <img src="styles/legend/_1_64.png" /> 465<br />\
    <img src="styles/legend/_1_65.png" /> 468<br />\
    <img src="styles/legend/_1_66.png" /> 470<br />\
    <img src="styles/legend/_1_67.png" /> 473<br />\
    <img src="styles/legend/_1_68.png" /> 474<br />\
    <img src="styles/legend/_1_69.png" /> 475<br />\
    <img src="styles/legend/_1_70.png" /> 476<br />\
    <img src="styles/legend/_1_71.png" /> 478<br />\
    <img src="styles/legend/_1_72.png" /> 481<br />\
    <img src="styles/legend/_1_73.png" /> 482<br />\
    <img src="styles/legend/_1_74.png" /> 483<br />\
    <img src="styles/legend/_1_75.png" /> 484<br />\
    <img src="styles/legend/_1_76.png" /> 486<br />\
    <img src="styles/legend/_1_77.png" /> 487<br />\
    <img src="styles/legend/_1_78.png" /> 488<br />\
    <img src="styles/legend/_1_79.png" /> 490<br />\
    <img src="styles/legend/_1_80.png" /> 492<br />\
    <img src="styles/legend/_1_81.png" /> 495<br />\
    <img src="styles/legend/_1_82.png" /> 497<br />\
    <img src="styles/legend/_1_83.png" /> 498<br />\
    <img src="styles/legend/_1_84.png" /> 501<br />\
    <img src="styles/legend/_1_85.png" /> 503<br />\
    <img src="styles/legend/_1_86.png" /> 504<br />\
    <img src="styles/legend/_1_87.png" /> 505<br />\
    <img src="styles/legend/_1_88.png" /> 506<br />\
    <img src="styles/legend/_1_89.png" /> 507<br />\
    <img src="styles/legend/_1_90.png" /> 512<br />\
    <img src="styles/legend/_1_91.png" /> 516<br />\
    <img src="styles/legend/_1_92.png" /> 517<br />\
    <img src="styles/legend/_1_93.png" /> 518<br />\
    <img src="styles/legend/_1_94.png" /> 519<br />\
    <img src="styles/legend/_1_95.png" /> 520<br />\
    <img src="styles/legend/_1_96.png" /> 522<br />\
    <img src="styles/legend/_1_97.png" /> 525<br />\
    <img src="styles/legend/_1_98.png" /> 527<br />\
    <img src="styles/legend/_1_99.png" /> 528<br />\
    <img src="styles/legend/_1_100.png" /> 530<br />\
    <img src="styles/legend/_1_101.png" /> 531<br />\
    <img src="styles/legend/_1_102.png" /> 533<br />\
    <img src="styles/legend/_1_103.png" /> 538<br />\
    <img src="styles/legend/_1_104.png" /> 539<br />\
    <img src="styles/legend/_1_105.png" /> 540<br />\
    <img src="styles/legend/_1_106.png" /> 544<br />\
    <img src="styles/legend/_1_107.png" /> 549<br />\
    <img src="styles/legend/_1_108.png" /> 552<br />\
    <img src="styles/legend/_1_109.png" /> 553<br />\
    <img src="styles/legend/_1_110.png" /> 554<br />\
    <img src="styles/legend/_1_111.png" /> 563<br />\
    <img src="styles/legend/_1_112.png" /> 565<br />\
    <img src="styles/legend/_1_113.png" /> 566<br />\
    <img src="styles/legend/_1_114.png" /> 569<br />\
    <img src="styles/legend/_1_115.png" /> 571<br />\
    <img src="styles/legend/_1_116.png" /> 573<br />\
    <img src="styles/legend/_1_117.png" /> 576<br />\
    <img src="styles/legend/_1_118.png" /> 578<br />\
    <img src="styles/legend/_1_119.png" /> 579<br />\
    <img src="styles/legend/_1_120.png" /> 581<br />\
    <img src="styles/legend/_1_121.png" /> 582<br />\
    <img src="styles/legend/_1_122.png" /> 583<br />\
    <img src="styles/legend/_1_123.png" /> 587<br />\
    <img src="styles/legend/_1_124.png" /> 589<br />\
    <img src="styles/legend/_1_125.png" /> 590<br />\
    <img src="styles/legend/_1_126.png" /> 592<br />\
    <img src="styles/legend/_1_127.png" /> 598<br />\
    <img src="styles/legend/_1_128.png" /> 599<br />\
    <img src="styles/legend/_1_129.png" /> 604<br />\
    <img src="styles/legend/_1_130.png" /> 608<br />\
    <img src="styles/legend/_1_131.png" /> 609<br />\
    <img src="styles/legend/_1_132.png" /> 612<br />\
    <img src="styles/legend/_1_133.png" /> 614<br />\
    <img src="styles/legend/_1_134.png" /> 617<br />\
    <img src="styles/legend/_1_135.png" /> 618<br />\
    <img src="styles/legend/_1_136.png" /> 619<br />\
    <img src="styles/legend/_1_137.png" /> 621<br />\
    <img src="styles/legend/_1_138.png" /> 622<br />\
    <img src="styles/legend/_1_139.png" /> 623<br />\
    <img src="styles/legend/_1_140.png" /> 625<br />\
    <img src="styles/legend/_1_141.png" /> 626<br />\
    <img src="styles/legend/_1_142.png" /> 628<br />\
    <img src="styles/legend/_1_143.png" /> 629<br />\
    <img src="styles/legend/_1_144.png" /> 631<br />\
    <img src="styles/legend/_1_145.png" /> 633<br />\
    <img src="styles/legend/_1_146.png" /> 637<br />\
    <img src="styles/legend/_1_147.png" /> 638<br />\
    <img src="styles/legend/_1_148.png" /> 642<br />\
    <img src="styles/legend/_1_149.png" /> 643<br />\
    <img src="styles/legend/_1_150.png" /> 645<br />\
    <img src="styles/legend/_1_151.png" /> 646<br />\
    <img src="styles/legend/_1_152.png" /> 651<br />\
    <img src="styles/legend/_1_153.png" /> 652<br />\
    <img src="styles/legend/_1_154.png" /> 654<br />\
    <img src="styles/legend/_1_155.png" /> 658<br />\
    <img src="styles/legend/_1_156.png" /> 661<br />\
    <img src="styles/legend/_1_157.png" /> 665<br />\
    <img src="styles/legend/_1_158.png" /> 668<br />\
    <img src="styles/legend/_1_159.png" /> 671<br />\
    <img src="styles/legend/_1_160.png" /> 674<br />\
    <img src="styles/legend/_1_161.png" /> 675<br />\
    <img src="styles/legend/_1_162.png" /> 679<br />\
    <img src="styles/legend/_1_163.png" /> 682<br />\
    <img src="styles/legend/_1_164.png" /> 685<br />\
    <img src="styles/legend/_1_165.png" /> 686<br />\
    <img src="styles/legend/_1_166.png" /> 687<br />\
    <img src="styles/legend/_1_167.png" /> 690<br />\
    <img src="styles/legend/_1_168.png" /> 691<br />\
    <img src="styles/legend/_1_169.png" /> 697<br />\
    <img src="styles/legend/_1_170.png" /> 701<br />\
    <img src="styles/legend/_1_171.png" /> 703<br />\
    <img src="styles/legend/_1_172.png" /> 710<br />\
    <img src="styles/legend/_1_173.png" /> 711<br />\
    <img src="styles/legend/_1_174.png" /> 715<br />\
    <img src="styles/legend/_1_175.png" /> 717<br />\
    <img src="styles/legend/_1_176.png" /> 721<br />\
    <img src="styles/legend/_1_177.png" /> 722<br />\
    <img src="styles/legend/_1_178.png" /> 725<br />\
    <img src="styles/legend/_1_179.png" /> 735<br />\
    <img src="styles/legend/_1_180.png" /> 750<br />\
    <img src="styles/legend/_1_181.png" /> 753<br />\
    <img src="styles/legend/_1_182.png" /> 756<br />\
    <img src="styles/legend/_1_183.png" /> 762<br />\
    <img src="styles/legend/_1_184.png" /> 764<br />\
    <img src="styles/legend/_1_185.png" /> 772<br />\
    <img src="styles/legend/_1_186.png" /> 777<br />\
    <img src="styles/legend/_1_187.png" /> 784<br />\
    <img src="styles/legend/_1_188.png" /> 785<br />\
    <img src="styles/legend/_1_189.png" /> 789<br />\
    <img src="styles/legend/_1_190.png" /> 795<br />\
    <img src="styles/legend/_1_191.png" /> 798<br />\
    <img src="styles/legend/_1_192.png" /> 801<br />\
    <img src="styles/legend/_1_193.png" /> 802<br />\
    <img src="styles/legend/_1_194.png" /> 812<br />\
    <img src="styles/legend/_1_195.png" /> 817<br />\
    <img src="styles/legend/_1_196.png" /> 825<br />\
    <img src="styles/legend/_1_197.png" /> 834<br />\
    <img src="styles/legend/_1_198.png" /> 857<br />\
    <img src="styles/legend/_1_199.png" /> 862<br />\
    <img src="styles/legend/_1_200.png" /> 864<br />\
    <img src="styles/legend/_1_201.png" /> 868<br />\
    <img src="styles/legend/_1_202.png" /> 870<br />\
    <img src="styles/legend/_1_203.png" /> 871<br />\
    <img src="styles/legend/_1_204.png" /> 873<br />\
    <img src="styles/legend/_1_205.png" /> 888<br />\
    <img src="styles/legend/_1_206.png" /> 903<br />\
    <img src="styles/legend/_1_207.png" /> 904<br />\
    <img src="styles/legend/_1_208.png" /> 905<br />\
    <img src="styles/legend/_1_209.png" /> 918<br />\
    <img src="styles/legend/_1_210.png" /> 922<br />\
    <img src="styles/legend/_1_211.png" /> 941<br />\
    <img src="styles/legend/_1_212.png" /> 952<br />\
    <img src="styles/legend/_1_213.png" /> 953<br />\
    <img src="styles/legend/_1_214.png" /> 954<br />\
    <img src="styles/legend/_1_215.png" /> 984<br />\
    <img src="styles/legend/_1_216.png" /> 992<br />\
    <img src="styles/legend/_1_217.png" /> 1003<br />\
    <img src="styles/legend/_1_218.png" /> 1011<br />\
    <img src="styles/legend/_1_219.png" /> 1012<br />\
    <img src="styles/legend/_1_220.png" /> 1045<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10169499.315214, 6949925.455996, 10179239.770659, 6960678.225719]
        })
    });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });
var format_house_4 = new ol.format.GeoJSON();
var features_house_4 = format_house_4.readFeatures(json_house_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_house_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_house_4.addFeatures(features_house_4);
var lyr_house_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_house_4, 
                style: style_house_4,
                popuplayertitle: 'house',
                interactive: true,
                title: '<img src="styles/legend/house_4.png" /> house'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_highway_3.setVisible(true);lyr_house_4.setVisible(true);lyr_highway_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr_lab1_2,lyr_highway_3,lyr_house_4,lyr_highway_5];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'bridge': 'bridge', 'highway': 'highway', 'layer': 'layer', 'surface': 'surface', 'foot': 'foot', 'handrail': 'handrail', 'incline': 'incline', 'ramp': 'ramp', 'access': 'access', 'bicycle': 'bicycle', 'lanes': 'lanes', 'name': 'name', 'railway': 'railway', 'smoothness': 'smoothness', 'oneway': 'oneway', 'old_ref': 'old_ref', 'ref': 'ref', 'depth': 'depth', 'ford': 'ford', 'footway': 'footway', 'service': 'service', 'description': 'description', });
lyr_house_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'building': 'building', 'address': 'address', });
lyr_highway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'access': 'access', 'barrier': 'barrier', 'material': 'material', 'power': 'power', 'tower:type': 'tower:type', 'railway': 'railway', 'bicycle': 'bicycle', 'foot': 'foot', 'motorcar': 'motorcar', 'name': 'name', 'name:ru': 'name:ru', 'crossing': 'crossing', 'bus': 'bus', 'public_transport': 'public_transport', 'bench': 'bench', 'ford': 'ford', });
lyr_lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_highway_3.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'bridge': 'TextEdit', 'highway': 'TextEdit', 'layer': 'TextEdit', 'surface': 'TextEdit', 'foot': 'TextEdit', 'handrail': 'TextEdit', 'incline': 'TextEdit', 'ramp': 'TextEdit', 'access': 'TextEdit', 'bicycle': 'TextEdit', 'lanes': 'TextEdit', 'name': 'TextEdit', 'railway': 'TextEdit', 'smoothness': 'TextEdit', 'oneway': 'TextEdit', 'old_ref': 'TextEdit', 'ref': 'TextEdit', 'depth': 'TextEdit', 'ford': 'TextEdit', 'footway': 'TextEdit', 'service': 'TextEdit', 'description': 'TextEdit', });
lyr_house_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr:city': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:street': 'TextEdit', 'building': 'TextEdit', 'address': '', });
lyr_highway_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'access': '', 'barrier': '', 'material': '', 'power': '', 'tower:type': '', 'railway': '', 'bicycle': '', 'foot': '', 'motorcar': '', 'name': '', 'name:ru': '', 'crossing': '', 'bus': '', 'public_transport': '', 'bench': '', 'ford': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'bridge': 'no label', 'highway': 'no label', 'layer': 'no label', 'surface': 'no label', 'foot': 'no label', 'handrail': 'no label', 'incline': 'no label', 'ramp': 'no label', 'access': 'no label', 'bicycle': 'no label', 'lanes': 'no label', 'name': 'no label', 'railway': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'old_ref': 'no label', 'ref': 'no label', 'depth': 'no label', 'ford': 'no label', 'footway': 'no label', 'service': 'no label', 'description': 'no label', });
lyr_house_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'addr:housenumber': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'building': 'no label', 'address': 'no label', });
lyr_highway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'access': 'no label', 'barrier': 'no label', 'material': 'no label', 'power': 'no label', 'tower:type': 'no label', 'railway': 'no label', 'bicycle': 'no label', 'foot': 'no label', 'motorcar': 'no label', 'name': 'no label', 'name:ru': 'no label', 'crossing': 'no label', 'bus': 'no label', 'public_transport': 'no label', 'bench': 'no label', 'ford': 'no label', });
lyr_highway_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});