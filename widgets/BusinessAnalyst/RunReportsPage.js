// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BusinessAnalyst/RunReportsPage.html":'\x3cdiv\x3e\r\n\t\x3cdiv style\x3d"width: 350 px; height: 150px"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"runReportTabContainer" style\x3d"width: 100%; height: 155px;"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"infographicsContentPane" title\x3d"${nls.infographics}" style\x3d"overflow-y: hidden"\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t\t\x3cdiv style\x3d"height: 40px;" data-dojo-attach-point\x3d"infographicDropDownContainer"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cbr /\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-btn runReportButton jimu-state-disabled" data-dojo-attach-point\x3d"runInfographicBtn" data-dojo-attach-event\x3d"onclick:runInfographic"\x3e${nls.runInfographic}\x3c/div\x3e\r\n\t\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"reportsContentPane" title\x3d"${nls.reports}" style\x3d"overflow-y: hidden"\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t\t\x3cdiv style\x3d"height: 40px;" data-dojo-attach-point\x3d"reportFilteringSelectDropDownContainer"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cbr /\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-btn runReportButton jimu-state-disabled" data-dojo-attach-point\x3d"runReportBtn" data-dojo-attach-event\x3d"onclick:runReport"\x3e${nls.runReport}\x3c/div\x3e\r\n\t\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cbr\x3e\r\n\t\x3cdiv class\x3d"jimu-btn jimu-btn-vacation" data-dojo-attach-point\x3d"backBtn" data-dojo-attach-event\x3d"onclick:backOnClick"\x3e${nls.back}\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/dom-construct dojo/dom-style dojo/query dojo/when dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin esri/dijit/geoenrichment/SelectableTree esri/dijit/geoenrichment/ReportPlayer/ReportPlayer esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes esri/dijit/geoenrichment/ReportPlayer/PlayerThemes esri/dijit/geoenrichment/ReportPlayer/DataProviderGE esri/dijit/geoenrichment/ReportPlayer/PlayerCommands esri/dijit/geoenrichment/_WizardPage esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ReportTemplateTypes ./utils/GEUtil ./utils/ReportUtil ./esriAnalystX/widgets/Selects/FilteringSelectTree dojo/text!./RunReportsPage.html jimu/dijit/TabContainer3 jimu/utils".split(" "),
function(f,r,e,l,F,G,g,t,u,v,h,w,x,n,y,k,z,A,p,q,m,B,C,D){return r([u,t,z,v],{templateString:B,infographicsTabHidden:!1,reportsTabHidden:!1,_infograpicReports:null,_configForLightTheme:[{name:"DashboardTheme",style:"light"}],postCreate:function(){this.inherited(arguments);this.tab=new C({tabs:[{title:this.nls.infographics,content:this.infographicsContentPane},{title:this.nls.reports,content:this.reportsContentPane}],selected:this.nls.infographics});this.tab.placeAt(this.runReportTabContainer);this.tab.startup()},
startup:function(){this.inherited(arguments)},loadReportsInfographicsForCountry:function(b){var a=this;g(q.getAvailableClassicReports(b,this.config),function(b){a.filteredReportDropDown?a.filteredReportDropDown.set("tree",new h(b)):(a.filteredReportDropDown=new m({name:"filteredReportSelect",tree:new h(b),defaultExpand:{esriReports:!0},placeHolder:a.nls.selectReport,onChange:function(b){a._enableDisableButton(a.runReportBtn,b)}},a.reportFilteringSelectDropDownContainer),a.filteredReportDropDown.startup());
a.reportsTabHidden=a.config.reportsDisabled||!a._areReportsAvailable(b)});g(q.getAvailableInfographicReports(b,this.config),function(b){a.infographicDropDown?a.infographicDropDown.set("tree",new h(b)):(a.infographicDropDown=new m({name:"filteredInfographicReportSelect",tree:new h(b),defaultExpand:{esriReports:!0},placeHolder:a.nls.selectTemplate,onChange:function(b){a._enableDisableButton(a.runInfographicBtn,b)}},a.infographicDropDownContainer),a.infographicDropDown.startup());a.infographicsTabHidden=
a.config.infographicsDisabled||!a._areReportsAvailable(b);a._infograpicReports=b})},_areReportsAvailable:function(b){if(0==b.length)return!1;var a=!1;f.forEach(b,function(b){0<b.children.length&&(a=!0)});return a},refresh:function(){this._hideOrShowTabs()},_hideOrShowTabs:function(){this.infographicsTabHidden&&(this.tab.removeTab(this.nls.infographics),this.tab.selectTab(this.nls.reports));this.reportsTabHidden&&(this.tab.removeTab(this.nls.reports),this.tab.selectTab(this.nls.infographics))},runInfographic:function(){if(!e.contains(this.runInfographicBtn,
"jimu-state-disabled")){var b=this,a=this.infographicDropDown.get("value");this.reportPlayer&&this.reportPlayer.destroy();this.playerDiv&&l.destroy(this.playerDiv);this.playerDiv=l.create("div",null,document.body);var c=new y;c.registerCommand(k.PDF);c.registerCommand(k.IMAGE);c.registerCommand(k.PRINT);c.registerCommand(k.DYNAMIC_HTML);var E=D.isMobileUa();this.reportPlayer=(new w({isSlidesView:E?!0:!1,theme:this._useLightTheme()?n.LIGHT:n.DARK,dataProvider:c,resizeMode:x.FIT_WINDOW,showCloseButton:!0,
config:{esriDijitCssUrl:"https://js.arcgis.com/3.29/dijit/themes/claro/claro.css",esriCssUrl:"https://js.arcgis.com/3.29/esri/css/esri.css",playerSourceRootUrl:"https://js.arcgis.com/3.29/"},onClose:function(){b.reportPlayer.destroy();l.destroy(b.playerDiv)}})).placeAt(this.playerDiv);var d=!0,c=new m({name:"filteredInfographicReportSelect",tree:new h(this._infograpicReports),defaultExpand:{esriReports:!0},placeHolder:b.nls.selectTemplate,value:a,onChange:function(a){d?d=!1:(b.infographicDropDown.set("value",
a),g(a))}});this._useLightTheme()||e.add(this.reportPlayer.playerToolbar.domNode,"jimu-main-background");c.startup();c.set("value",a);this.reportPlayer.playerToolbar.addInfographicsSelect(c);var g=function(a){var c=[];if(b.wizard.selectedPoint.long)f.forEach(b.wizard.selectedPoint.tradeAreas,function(a){var b={};b.name=a.name;b.shortName=a.shortName;b.feature=a.graphic;c.push(b)});else if(b.wizard.selectedPolygon.geometry){var c=[],d={};d.name=b.wizard.selectedPolygon.locationName;d.shortName=b.wizard.selectedPolygon.locationName;
d.feature=b.wizard.selectedPolygon.feature;c.push(d)}b.reportPlayer.playReport({portalUrl:portalUrl,countryID:b.wizard.selectedCountryID,reportID:a,analysisAreas:c})};g(a)}},_useLightTheme:function(){var b=!1,a=self.getAppConfig();f.forEach(this._configForLightTheme,function(c){a&&a.theme&&a.theme.name==c.name&&a.theme.styles&&0<a.theme.styles.length&&f.forEach(a.theme.styles,function(a){a==c.style&&(b=!0)})});a&&a.theme&&a.theme.customStyles&&a.theme.customStyles.mainBackgroundColor&&"#FFFFFF"==
a.theme.customStyles.mainBackgroundColor.toUpperCase()&&(b=!0);return b},runReport:function(){if(!e.contains(this.runReportBtn,"jimu-state-disabled")){e.add(this.runReportBtn,"jimu-state-disabled");this.shelter.show();var b=this;this.wizard.selectedPoint.long?this.runReportForPoint().then(function(){b.shelter.hide();e.remove(b.runReportBtn,"jimu-state-disabled")}).otherwise(function(){b.shelter.hide();e.remove(b.runReportBtn,"jimu-state-disabled")}):this.wizard.selectedPolygon.geometry&&this.runReportForPolygon().then(function(){b.shelter.hide();
e.remove(b.runReportBtn,"jimu-state-disabled")}).otherwise(function(){b.shelter.hide();e.remove(b.runReportBtn,"jimu-state-disabled")})}},_enableDisableButton:function(b,a){"string"==typeof a&&"None"!=a?e.remove(b,"jimu-state-disabled"):e.add(b,"jimu-state-disabled")},runReportForPoint:function(){var b=this,a={studyAreas:[]},c={featureSet:{fields:[{name:"OBJECTID",alias:"Object ID",type:"esriFieldTypeOID"},{name:"STORE_ID",alias:"STORE_ID",type:"esriFieldTypeString",length:1,nullable:!0},{name:"STORE_LONG",
alias:"STORE_LONG",type:"esriFieldTypeDouble"},{name:"STORE_LAT",alias:"STORE_LAT",type:"esriFieldTypeDouble"},{name:"AREA_DESC",alias:"AREA_DESC",type:"esriFieldTypeString",length:7,nullable:!0},{name:"AREA_DESC2",alias:"AREA_DESC2",type:"esriFieldTypeString",length:19,nullable:!0}],spatialReference:this.map.spatialReference.toJson(),geometryType:"esriGeometryPolygon",features:[]}};f.forEach(this.wizard.selectedPoint.tradeAreas,function(a){var d={};d.geometry=a.graphic.geometry;d.attributes=a.graphic.attributes;
d.attributes||(d.attributes={});d.attributes.OBJECTID=1;d.attributes.STORE_ID="1";d.attributes.STORE_LONG=b.wizard.selectedPoint.long;d.attributes.STORE_LAT=b.wizard.selectedPoint.lat;d.attributes.AREA_DESC=a.AREA_DESC;d.attributes.AREA_DESC2=a.AREA_DESC2;c.featureSet.features.push(d)});a.studyAreas.push(c);this.filteredReportDropDown.getSelectedItem().reportType!=A.STANDARD&&(a.areadesc2=this.wizard.selectedPoint.areadesc2);a.locationName=this.wizard.selectedPoint.locationName;a.lat=this.wizard.selectedPoint.lat;
a.long=this.wizard.selectedPoint.long;a.sourceCountry=this.wizard.selectedCountryID;a.report=this.filteredReportDropDown.getSelectedItem().item?this.filteredReportDropDown.getSelectedItem().item:this.filteredReportDropDown.getSelectedItem().value;a.reportDownloadName=this.filteredReportDropDown.getSelectedItem().label;return p.createReport(a)},runReportForPolygon:function(){var b={studyAreas:[]};b.studyAreas.push({geometry:this.wizard.selectedPolygon.geometry});b.locationName=this.wizard.selectedPolygon.locationName;
b.sourceCountry=this.wizard.selectedCountryID;b.report=this.filteredReportDropDown.getSelectedItem().item?this.filteredReportDropDown.getSelectedItem().item:this.filteredReportDropDown.getSelectedItem().value;b.reportDownloadName=this.filteredReportDropDown.getSelectedItem().label;return p.createReport(b)},backOnClick:function(){this.onBack()}})});