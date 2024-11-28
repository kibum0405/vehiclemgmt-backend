$(document).ready(function(){
    var OPT = {
        "Cfg": {
            "SearchMode": 2,
            "HeaderMerge": 3,
            "MessageWidth": 300,
        },
        "Def": {
            "Row": {
            "CanFormula": true
            }
        },
        Cols:[
            {"Header": "requesterName", "Name": "requesterName", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "organization", "Name": "organization", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "employeeNumber", "Name": "employeeNumber", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "officeNumber", "Name": "officeNumber", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "mobileNumber", "Name": "mobileNumber", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "requestDate", "Name": "requestDate", "Type": "Date","Format": "yyyy-MM-dd", "EmptyValue": "날짜를 입력해주세요", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "approverInfo", "Name": "approverInfo", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "approverPosition", "Name": "approverPosition", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "usagePurpose", "Name": "usagePurpose", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "numberOfPassengers", "Name": "numberOfPassengers", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "routeSetting", "Name": "routeSetting", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "remarks", "Name": "remarks", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "passengerContact", "Name": "passengerContact", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "attachedDocuments", "Name": "attachedDocuments", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "cancellationReason", "Name": "cancellationReason", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "usageCategory", "Name": "usageCategory", "Type": "Enum", "Enum": "|BusinessSupport|ExternalActivity", "EnumKeys": "|BusinessSupport|ExternalActivity", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "carType", "Name": "carType", "Type": "Enum", "Enum": "|Sedan|Van|Truck", "EnumKeys": "|Sedan|Van|Truck", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "mainDepartment", "Name": "mainDepartment", "Type": "Enum", "Enum": "|Seoul|Pohang|Gwangyang", "EnumKeys": "|Seoul|Pohang|Gwangyang", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "operationSection", "Name": "operationSection", "Type": "Enum", "Enum": "|City|Suburb", "EnumKeys": "|City|Suburb", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "operationType", "Name": "operationType", "Type": "Enum", "Enum": "|OneWay|RoundTrip", "EnumKeys": "|OneWay|RoundTrip", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "includeDriver", "Name": "includeDriver", "Type": "Enum", "Enum": "|Yes|No", "EnumKeys": "|Yes|No", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": "progressStage", "Name": "progressStage", "Type": "Enum", "Enum": "|All|Received|Rejected|AssignmentCompleted|AssignmentCancelled", "EnumKeys": "|All|Received|Rejected|AssignmentCompleted|AssignmentCancelled", "Align": "Center", "Width":140, "CanEdit":1},  
            {"Header": ["Period", "from"], "Name": "from", "Type": "Date", "Format": "yyyy-MM-dd", "EmptyValue": "날짜를 입력해주세요", "Width": 140},
            {"Header": ["Period", "to"], "Name": "to", "Type": "Date", "Format": "yyyy-MM-dd", "EmptyValue": "날짜를 입력해주세요", "Width": 140}
       ]
   };

   IBSheet.create({
       id:"sheet",
       el:"sheet_DIV",
       options:OPT
   });
});

function retrieve(){
    fetch("https://localhost:8088/carAssignments", {
        method: 'GET',
        headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Content-Type": "application/json"
        }
    }).then(res => {
        return res.json();
    }).then(json => {
        json.forEach(row => {
            if (row.period) {
                row.from = row.period.from;
                row.to = row.period.to;
            }
        });
        sheet.loadSearchData(json)
    }).catch(error => {
        console.error("에러", error);
    });
}

function addData(){
   sheet.addRow();
}

function deleteData(){
    sheet.deleteRow(sheet.getFocusedRow());
}

function save(){
    var rows = sheet.getSaveJson()?.data;

    rows.forEach(row => {
        if (row.from && row.to) {
            row.period = {
                from: row.from,
                to: row.to
            };
            delete row.from;
            delete row.to;
        }
    });

    for(var i=0; i<rows.length;i++){
        rows[i].id = i
        switch(rows[i].STATUS){
            case "Added":
                var saveRow = rows[i];
                $.ajax({
                    url: "http://localhost:8088/carAssignments",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(saveRow)
                });
                break;
            case "Changed":
                var rowObj = sheet.getRowById(rows[i].id);
                var changedData = JSON.parse(sheet.getChangedData(rowObj))["Changes"][0];
                var id = rows[i].seq;
                $.ajax({
                    url: `http://localhost:8088/carAssignments/${id}`,
                    method: "PATCH",
                    contentType: "application/json",
                    data: JSON.stringify(changedData)
                });
                break;
            case "Deleted":
                var id = rows[i].seq;
                $.ajax({
                    url: `http://localhost:8088/carAssignments/${id}`,
                    method: "DELETE",
                });
                break;
        }     
    }           
}
function submitRegisterDrivingLog(data){
    const registrationId = data.registrationId;
    fetch(`http://localhost:8088/vehiclePerformances/registerDrivingLog/${registrationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert(error);
    });

    
}