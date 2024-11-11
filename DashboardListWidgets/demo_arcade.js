
function statusFunc(status){
    if(status=="Complete"){
      return "green"
    }else if(status=="Incomplete"){
      return "red"
    }else{
      return "gray"
    }
  }
  
  function maintNeededFunc(maint){
    IIF(maint=="Yes", "block", "none")
  }
  
  function cardHeightFunc(maint){
    IIF(maint=="Yes", "8em", "5.1em")
  }
  
  function inspectionCountFunc(insps){
    IIF(IsEmpty(insps) || insps==0, "none", "block")
  }
  
  return {
    textColor: '',
    backgroundColor: '',
    separatorColor:'',
    selectionColor: '',
    selectionTextColor: '',
    attributes: {
      statusColor: statusFunc($datapoint.CleaningStatus),
      maintNeeded: maintNeededFunc($datapoint.MaintenanceNeeded),
      cardHeight: cardHeightFunc($datapoint.MaintenanceNeeded),
      inspCount: inspectionCountFunc($datapoint.TotalInspections)
    }
  }
