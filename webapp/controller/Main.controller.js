sap.ui.define(
	["sap/ui/core/mvc/Controller",
	"crazy/utill/lifeSaver",
	"crazy/model/models"],
	function(Controller,lifeSaver,model){
	
	return Controller.extend("crazy.controller.Main",{
		//here we create global variable which hold our object
		//this global variable can use our view and controller file 
		// myFormatter:lifeSaver,
		core: sap.ui.getCore(),
		onInit: function () {
			var oJSONModel = model.createJSONModel();
			sap.ui.getCore().setModel(oJSONModel,"another");
			
			//create xml model
			var oXmlModel = model.createXMLModel();
			sap.ui.getCore().setModel(oXmlModel);
			
			//create resource model
			var oResourceModel = model.createResourceModel();
			sap.ui.getCore().setModel(oResourceModel,"i18n");
	
	},
	onExit: function(){
		
		
	},
	onBeforeRendering: function(){
		
	},
	onAfterRendering: function(){
		//dollar symbol means jquery
	$("#idTable").fadeOut(2000).fadeIn(4000);	
	},
	magicHappens: function(oEvent){
		var State = oEvent.getParameter("state");
		
		var oModel = this.core().getModel();
		var oModelS = this.core().getModel("another");
		
		this.core().setModel(oModel,"another");
		this.core().setModel(oModelS);
		
		var oTable = this.core().byId("idTable");
		
		if(State === true){
			oTable.bindRows("/empTab");
		}else{
			oTable.bindRows("/empTab/row");
		}
	},
	showMeMagic: function(){
		// step 1: get the model object
		var oModel = this.core().getModel();
		// step 2: change magic property value is true
		var currentState = oModel.getProperty("/empStr/magic");
		if(currentState === false){
			oModel.setProperty("/empStr/magic",true);
		}else{
			oModel.setProperty("/empStr/magic",false);
		}
	},

	rowSelected: function(oSelection){
		//get the path of selected element
		var sPath = oSelection.getParameter("rowContext").getPath();
		//this was pointing to the ui control object not the object of controller
		 var oSimpleForm = sap.ui.getCore().byId("idSimple");
		 oSimpleForm.bindElement(sPath);
		 var oModel = this.core.getModel();
		 oModel.setProperty("/empStr/magic", false);
	}
	});
}) ;





