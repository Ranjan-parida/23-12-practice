sap.ui.define(
	["sap/ui/model/json/JSONModel",
	"sap/ui/model/xml/XMLModel",
	"sap/ui/model/resource/ResourceModel"],
	function (JSONModel , XMLModel  , ResourceModel) {
		return {
			createJSONModel: function () {
				// step 1: define a new model obeject.
				var oModel = new JSONModel();
				// step 2: set or load the data.
				oModel.loadData("model/LocalFolder/Employee.json");
				// step 3: set the model to the applcation label.
				// sap.ui.getCore().setModel(oModel);
				return oModel;
			},
			createXMLModel: function () {
           var oModelXml = new XMLModel();
           oModelXml.loadData("model/LocalFolder/myxml.Xml"); 
           return oModelXml;		
			},
			createResourceModel: function () {
				var oResourceModel = new ResourceModel({
					bundleUrl : "i18n/i18n.properties"
				});
				return oResourceModel;

			}
		};
	});