// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Konfigurationstext festlegen:",generalSettings:{tabTitle:"Allgemeine Einstellungen",measurementUnitLabel:"Ma\u00dfeinheit",currencyLabel:"Ma\u00dfsymbol",roundCostLabel:"Kosten runden",projectOutputSettings:"Einstellungen f\u00fcr die Projektausgabe",typeOfProjectAreaLabel:"Projektbereichstyp",bufferDistanceLabel:"Pufferabstand",roundCostValues:{twoDecimalPoint:"Zwei Dezimaltrennzeichen",nearestWholeNumber:"N\u00e4chste ganze Zahl",nearestTen:"N\u00e4chste Zehnerstelle",
nearestHundred:"N\u00e4chste Hunderterstelle",nearestThousand:"N\u00e4chste Tausenderstelle",nearestTenThousands:"N\u00e4chste Zehntausenderstelle"},projectAreaType:{outline:"Umrisslinie",buffer:"Puffer"},errorMessages:{currency:"Ung\u00fcltige W\u00e4hrungseinheit",bufferDistance:"Ung\u00fcltige Pufferentfernung",outOfRangebufferDistance:"Der Wert muss gr\u00f6\u00dfer als 0 und kleiner oder gleich 100 sein."}},projectSettings:{tabTitle:"Projekteinstellungen",costingGeometrySectionTitle:"Geographie f\u00fcr Kostenberechnung definieren (optional)",
costingGeometrySectionNote:"Hinweis: Durch die Konfiguration dieses Layers kann der Benutzer Kostengleichungen von Feature-Vorlagen basierend auf Geographien festlegen.",projectTableSectionTitle:"Die M\u00f6glichkeit, Projekteinstellungen zu speichern/laden (optional)",projectTableSectionNote:"Hinweis: Durch die Konfiguration aller Tabellen und Layer kann der Benutzer Projekte zur sp\u00e4teren Verwendung speichern/laden.",costingGeometryLayerLabel:"Geometrie-Layer f\u00fcr Kostenanalyse",fieldLabelGeography:"Feld f\u00fcr Geographiebeschriftung",
projectAssetsTableLabel:"Tabelle f\u00fcr Projekt-Assets",projectMultiplierTableLabel:"Tabelle f\u00fcr zus\u00e4tzliche Kosten des Projektmultiplikators",projectLayerLabel:"Projekt-Layer",configureFieldsLabel:"Felder konfigurieren",fieldDescriptionHeaderTitle:"Feldbeschreibung",layerFieldsHeaderTitle:"Layer-Feld",selectLabel:"Ausw\u00e4hlen",errorMessages:{duplicateLayerSelection:"${layerName} ist bereits ausgew\u00e4hlt",invalidConfiguration:"W\u00e4hlen Sie ${fieldsString} aus."},costingGeometryHelp:"\x3cp\x3eEs werden Polygon-Layer mit folgenden Bedingungen angezeigt: \x3cbr/\x3e \x3cli\x3e\tDer Layer muss \u00fcber \u00e2\u20ac\u0153Abfrage\u00e2\u20ac-Funktion verf\u00fcgen\x3c/li\x3e\x3cli\x3e\tDer Layer muss ein GlobalID-Feld aufweisen\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eZeichenfolgen- und numerische Felder des ausgew\u00e4hlten \u00e2\u20ac\u0153Geometrie-Layers f\u00fcr Kostenberechnung\u20ac\u009dwerden in der Dropdown-Liste \u00e2\u20ac\u0153Feld f\u00fcr Geographiebeschriftung\u00e2\u20ac\u009d angezeigt.\x3c/p\x3e",projectAssetsTableHelp:'\x3cp\x3eEs werden Tabellen mit den folgenden Bedingungen angezeigt: \x3cbr/\x3e \x3cli\x3eDie Tabelle muss \u00fcber Bearbeitungsfunktionen, d.\u00a0h. \u00e2\u20ac\u0153Erstellen\u00e2\u20ac\u009d, \u00e2\u20ac\u0153L\u00f6schen\u00e2\u20ac\u009d und \u00e2\u20ac\u0153Aktualisieren\u00e2\u20ac,\u009d verf\u00fcgen\x3c/li\x3e    \x3cli\x3eDie Tabelle muss sechs Felder aufweisen, deren Name und Datentyp genau \u00fcbereinstimmen:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (Feld vom Typ "GUID")\x3c/li\x3e\x3cli\x3e\tCostEquation (Feld vom Typ "Zeichenfolge")\x3c/li\x3e\x3cli\x3e\tSzenario (Feld vom Typ "Zeichenfolge")\x3c/li\x3e\x3cli\x3e\tTemplateName (Feld vom Typ "Zeichenfolge")\x3c/li\x3e\x3cli\x3e    GeographyGUID (Feld vom Typ "GUID")\x3c/li\x3e\x3cli\x3e\tProjectGUID (Feld vom Typ "GUID")\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e',
projectMultiplierTableHelp:'\x3cp\x3eEs werden Tabellen mit den folgenden Bedingungen angezeigt: \x3cbr/\x3e \x3cli\x3eDie Tabelle muss \u00fcber Bearbeitungsfunktionen, d.\u00a0h. \u00e2\u20ac\u0153Erstellen\u00e2\u20ac\u009d, \u00e2\u20ac\u0153L\u00f6schen\u00e2\u20ac\u009d und \u00e2\u20ac\u0153Aktualisieren\u00e2\u20ac, verf\u00fcgen\u009d\x3c/li\x3e    \x3cli\x3eDie Tabelle muss f\u00fcnf Felder aufweisen, deren Name und Datentyp genau \u00fcbereinstimmen:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tBeschreibung (Feld vom Typ "Zeichenfolge")\x3c/li\x3e\x3cli\x3e\tTyp (Feld vom Typ "Zeichenfolge")\x3c/li\x3e\x3cli\x3e\tWert (Feld vom Typ "Float" oder "Double")\x3c/li\x3e\x3cli\x3e\tKostenindex (Feld vom Typ "Integer")\x3c/li\x3e\x3cli\x3e   \tProjectGUID (Feld vom Typ "GUID"))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e',
projectLayerHelp:'\x3cp\x3eEs werden Polygon-Layer mit den folgenden Bedingungen angezeigt: \x3cbr/\x3e \x3cli\x3eDer Layer muss \u00fcber Bearbeitungsfunktionen, d.\u00a0h. \u00e2\u20ac\u0153Erstellen\u00e2\u20ac\u009d, \u00e2\u20ac\u0153L\u00f6schen\u00e2\u20ac\u009d und \u00e2\u20ac\u0153Aktualisieren\u20ac\u009d, verf\u00fcgen\x3c/li\x3e    \x3cli\x3eDer Layer muss f\u00fcnf Felder aufweisen, deren Name und Datentyp genau \u00fcbereinstimmen:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (Feld vom Typ "Zeichenfolge")\x3c/li\x3e\x3cli\x3eBeschreibung (Feld vom Typ "Zeichenfolge")\x3c/li\x3e\x3cli\x3eTotalassetcost (Feld vom Typ "Float" oder "Double")\x3c/li\x3e\x3cli\x3eGrossprojectcost (Feld vom Typ "Float" oder "Double")\x3c/li\x3e\x3cli\x3eGlobalID (Feld vom Typ "GlobalID")\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e',
pointLayerCentroidLabel:"Schwerpunkt des Punkt-Layers",selectRelatedPointLayerDefaultOption:"Ausw\u00e4hlen",pointLayerHintText:"\x3cp\x3ePunkt-Layer mit den folgenden Bedingungen werden angezeigt: \x3cbr/\x3e \x3cli\x3e\tLayer muss das Feld 'Projectid' (Typ 'GUID') aufweisen\x3c/li\x3e\x3cli\x3e\tLayer muss die Bearbeitungsfunktionen 'Erstellen', 'L\u00f6schen' und 'Aktualisieren' aufweisen\x3c/li\x3e\x3c/p\x3e"},layerSettings:{tabTitle:"Layer-Einstellungen",layerNameHeaderTitle:"Layer-Name",layerNameHeaderTooltip:"Layer-Liste in der Karte",
EditableLayerHeaderTitle:"Editierbar",EditableLayerHeaderTooltip:'Layer und zugeh\u00f6rige Vorlagen in das Widget "Kostenanalyse" einbeziehen',SelectableLayerHeaderTitle:"Ausw\u00e4hlbar",SelectableLayerHeaderTooltip:"Anhand der Geometrie des Features kann ein neues Kostenelement erstellt werden.",fieldPickerHeaderTitle:"Projekt-ID (optional)",fieldPickerHeaderTooltip:'Optionales Feld (vom Typ "Zeichenfolge") zum Speichern der Projekt-ID in',selectLabel:"Ausw\u00e4hlen",noAssetLayersAvailable:"In der ausgew\u00e4hlten Webkarte wurde kein Asset-Layer gefunden.",
disableEditableCheckboxTooltip:"Dieser Layer weist keine Bearbeitungsfunktionen auf.",missingCapabilitiesMsg:"In diesem Layer fehlen die folgenden Funktionen:",missingGlobalIdMsg:"Dieser Layer verf\u00fcgt \u00fcber kein GlobalId-Feld.",create:"Erstellen",update:"Aktualisieren","delete":"L\u00f6schen",attributeSettingHeaderTitle:"Attributeinstellungen",addFieldLabelTitle:"Attribute hinzuf\u00fcgen",layerAttributesHeaderTitle:"Layer-Attribute",projectLayerAttributesHeaderTitle:"Projekt-Layer-Attribute",
attributeSettingsPopupTitle:"Layer-Attributeinstellungen"},costingInfo:{tabTitle:"Informationen zur Kostenberechnung",proposedMainsLabel:"Vorgeschlagene Startseiten",addCostingTemplateLabel:"Kostenberechnungsvorlage hinzuf\u00fcgen",manageScenariosTitle:"Szenarien verwalten",featureTemplateTitle:"Feature-Vorlage",costEquationTitle:"Kostengleichung",geographyTitle:"Geographie",scenarioTitle:"Szenario",actionTitle:"Aktionen",scenarioNameLabel:"Szenarioname",addBtnLabel:"Hinzuf\u00fcgen",srNoLabel:"Anzahl",
deleteLabel:"L\u00f6schen",duplicateScenarioName:"Doppelter Szenarioname",hintText:"\x3cdiv\x3eHinweis: Verwenden Sie die folgenden Schl\u00fcsselw\u00f6rter\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Verwendet die Gesamtzahl der Assets desselben Typs in einer Geographie\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Verwendet die L\u00e4nge f\u00fcr Linien-Assets und die Fl\u00e4che f\u00fcr Polygon-Assets\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Verwendet die Gesamtl\u00e4nge f\u00fcr Linien-Assets und die Gesamtfl\u00e4che f\u00fcr Polygon-Assets desselben Typs in einer Geographie\x3c/li\x3e\x3c/ul\x3eSie k\u00f6nnen beispielsweise die folgenden Funktionen verwenden:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eBearbeiten Sie die Kostengleichung je nach Projektanforderung.",
noneValue:"Kein(e)",requiredCostEquation:"Ung\u00fcltige Kostengleichung f\u00fcr ${layerName} : ${templateName}",duplicateTemplateMessage:"Doppelter Vorlageneintrag f\u00fcr ${layerName} : ${templateName} vorhanden",defaultEquationRequired:"Standardgleichung ist f\u00fcr ${layerName} : ${templateName} erforderlich",validCostEquationMessage:"Geben Sie eine g\u00fcltige Kostengleichung ein.",costEquationHelpText:"Bearbeiten Sie die Kostengleichung je nach Projektanforderung.",scenarioHelpText:"W\u00e4hlen Sie das Szenario je nach Projektanforderung aus.",
copyRowTitle:"Zeile kopieren",noTemplateAvailable:"F\u00fcgen Sie mindestens eine Vorlage f\u00fcr ${layerName} hinzu.",manageScenarioLabel:"Szenario verwalten",noLayerMessage:"Geben Sie mindestens einen Layer in ${tabName} ein.",noEditableLayersAvailable:"Der/die Layer muss/m\u00fcssen auf der Registerkarte f\u00fcr Layer-Einstellungen als editierbar aktiviert werden.",updateProjectCostCheckboxLabel:"Projektgleichungen aktualisieren",updateProjectCostEquationHint:"Hinweis: Dadurch k\u00f6nnen Kostengleichungen von Objekten, die vorhandenen Projekten bereits hinzugef\u00fcgt wurden, mit den neuen, nachfolgend definierten Gleichungen auf Grundlage von Feature-Vorlage, Geographie und Szenario aktualisiert werden. Wird die Kombination nicht gefunden, wird die standardm\u00e4\u00dfige Kostengleichung festgelegt, d. h. f\u00fcr Geographie und Szenario der Wert 'Keine'. Wenn die Feature-Vorlage entfernt wurde, werden die Kosten auf 0 festgelegt."},
statisticsSettings:{tabTitle:"Zus\u00e4tzliche Einstellungen",addStatisticsLabel:"Statistiken hinzuf\u00fcgen",fieldNameTitle:"Feld",statisticsTitle:"Etikett",addNewStatisticsText:"Neue Statistiken hinzuf\u00fcgen",deleteStatisticsText:"Statistiken l\u00f6schen",moveStatisticsUpText:"Statistiken nach oben verschieben",moveStatisticsDownText:"Statistiken nach unten verschieben",selectDeselectAllTitle:"Alles ausw\u00e4hlen"},projectCostSettings:{addProjectCostLabel:"Zus\u00e4tzliche Projektkosten hinzuf\u00fcgen",
additionalCostValueColumnHeader:"Wert",invalidProjectCostMessage:"Ung\u00fcltiger Eintrag f\u00fcr Projektkosten",additionalCostLabelColumnHeader:"Beschriftung",additionalCostTypeColumnHeader:"Typ"},statisticsType:{countLabel:"Anzahl",averageLabel:"Durchschnitt",maxLabel:"Maximum",minLabel:"Minimum",summationLabel:"Summe",areaLabel:"Fl\u00e4che",lengthLabel:"L\u00e4nge"},_localized:{}}});