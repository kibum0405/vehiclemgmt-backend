let rowData = [];
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
            {"Header": "No", "Name": "No", "Type": "Int", "Align": "Center", "Width":140, "CanEdit":0},
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
       ],
        Events: {
            onClick: function(evtParam) {
                if (evtParam.col === "requesterName") {
                    console.log("requesterName clicked", evtParam);
                    // 클릭된 행의 원본 데이터를 가져옵니다.
                    var originalRowData = rowData.find(item => item.No === evtParam.row.No);
                    var requesterNames = originalRowData.requesterName;
                    var detailData = [];
        
                    // requesterName이 배열인 경우, 각 요소를 개별 행으로 추가합니다.
                    if (Array.isArray(requesterNames)) {
                        requesterNames.forEach(function(name) {
                            detailData.push({ "requesterName": name });
                        });
                    } else {
                        detailData.push({ "requesterName": requesterNames });
                    }
        
                    // detailSheet를 업데이트합니다.
                    detailSheet.loadSearchData(detailData);
                }
            }
        }
   };

   var detailSheetOptions = {
        "Cfg": {
            "SearchMode": 2,
            "HeaderMerge": 3,
            "MessageWidth": 300,
        },
        Cols:[
            {"Header": "requesterName", "Name": "requesterName", "Type": "Text", "Align": "Center", "Width":140, "CanEdit":0}
        ]
    };

   IBSheet.create({
       id:"sheet",
       el:"sheet_DIV",
       options: OPT
   });

   IBSheet.create({
    id:"detailSheet",
    el:"detailSheet_DIV",
    options: detailSheetOptions
});
});

function retrieve(){
    const exampleData = [
        {
            "No": 1,
            "requesterName": ['John Doe', 'B', 'C'],
            "organization": "Tech Corp",
            "employeeNumber": "E12345",
            "officeNumber": "123-456-7890",
            "mobileNumber": "987-654-3210",
            "requestDate": "2023-10-01",
            "approverInfo": "Jane Smith",
            "approverPosition": "Manager",
            "usagePurpose": "Client Meeting",
            "numberOfPassengers": "3",
            "routeSetting": "Office to Client Site",
            "remarks": "N/A",
            "passengerContact": "john.doe@techcorp.com",
            "attachedDocuments": "N/A",
            "cancellationReason": "N/A",
            "usageCategory": "BusinessSupport",
            "carType": "Sedan",
            "mainDepartment": "Seoul",
            "operationSection": "City",
            "operationType": "RoundTrip",
            "includeDriver": "Yes",
            "progressStage": "Received",
            "from": "2023-10-01",
            "to": "2023-10-01"
        },
        {
            "No": 2,
            "requesterName": "Alice Brown",
            "organization": "Health Inc",
            "employeeNumber": "E67890",
            "officeNumber": "321-654-0987",
            "mobileNumber": "123-456-7890",
            "requestDate": "2023-10-02",
            "approverInfo": "Bob White",
            "approverPosition": "Director",
            "usagePurpose": "Site Visit",
            "numberOfPassengers": "2",
            "routeSetting": "Headquarters to Site",
            "remarks": "Bring safety gear",
            "passengerContact": "alice.brown@healthinc.com",
            "attachedDocuments": "Safety Protocol.pdf",
            "cancellationReason": "N/A",
            "usageCategory": "ExternalActivity",
            "carType": "Van",
            "mainDepartment": "Pohang",
            "operationSection": "Suburb",
            "operationType": "OneWay",
            "includeDriver": "No",
            "progressStage": "AssignmentCompleted",
            "from": "2023-10-02",
            "to": "2023-10-02"
        },
        {
            "No": 3,
            "requesterName": "Charlie Green",
            "organization": "Finance Group",
            "employeeNumber": "E54321",
            "officeNumber": "456-789-0123",
            "mobileNumber": "321-654-9870",
            "requestDate": "2023-10-03",
            "approverInfo": "Diana Prince",
            "approverPosition": "Supervisor",
            "usagePurpose": "Conference",
            "numberOfPassengers": "4",
            "routeSetting": "Office to Conference Center",
            "remarks": "N/A",
            "passengerContact": "charlie.green@financegroup.com",
            "attachedDocuments": "Conference Agenda.pdf",
            "cancellationReason": "N/A",
            "usageCategory": "BusinessSupport",
            "carType": "Truck",
            "mainDepartment": "Gwangyang",
            "operationSection": "City",
            "operationType": "RoundTrip",
            "includeDriver": "Yes",
            "progressStage": "AssignmentCancelled",
            "from": "2023-10-03",
            "to": "2023-10-03"
        }
    ];
    const displayData = exampleData.map(item => {
        return {
            ...item,
            requesterName: Array.isArray(item.requesterName) ? item.requesterName[0] : item.requesterName
        };
    });
    rowData = exampleData; 
    sheet.loadSearchData(displayData);
    
//     fetch("/carAssignments", {
//         method: 'GET',
//         headers: {
//             "Cache-Control": "no-cache",
//             "Pragma": "no-cache",
//             "Content-Type": "application/json"
//         }
//     }).then(res => {
//         return res.json();
//     }).then(json => {
//         json.forEach(row => {
//             row.No = row.id
        
//                 if (row.Period) {
//                     row.from = row.Period.from;
// row.to = row.Period.to
//                 }
                
//         });
//         rowData = json;
//         sheet.loadSearchData(json)
//     }).catch(error => {
//         console.error("에러", error);
//     });
}

function addData(){
   sheet.addRow();
}

function deleteData(){
    sheet.deleteRow(sheet.getFocusedRow());
}
function save(data){
    var rows = data;
    rows.id = rows.No
    delete rows.No

    $.ajax({
        url: "/carAssignments",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(rows)
    });
    retrieve();

}
function save2(data){
    var rows = data;
    rows.forEach(row => {
        rows.id = rows.No
        delete rows.No
    
                if (row.from && row.to) {
                    row.Period = {
                        from: row.from,
                        to: row.to
                    };
                    delete row.from;
                    delete row.to
                }
                
    });
    rowData = rows;

    for(var i=0; i<rows.length;i++){
        if(rows[i].id.includes("AR")){
            rows[i].id = rows[i].id.replace(/AR/g, "");
        }
        switch(rows[i].STATUS){
            case "Added":
                var saveRow = rows[i];
                $.ajax({
                    url: "/carAssignments",
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
                    url: `/carAssignments/${id}`,
                    method: "PATCH",
                    contentType: "application/json",
                    data: JSON.stringify(changedData)
                });
                break;
            case "Deleted":
                var id = rows[i].seq;
                $.ajax({
                    url: `/carAssignments/${id}`,
                    method: "DELETE",
                });
                break;
        }     
    }           
}
function searchResult(params) {
    const allEmpty = !params.requesterName &&!params.employeeNumber &&!params.approverPosition ;
    
    if (allEmpty) {
        alert("검색할 내용을 입력하세요.");
        return;
    }
    const queryParams = new URLSearchParams(params).toString();

    $.ajax({
        url: `https://localhost:8088/carAssignments?${queryParams}`,
        method: 'GET',
        headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Content-Type": "application/json"
        },
        success: function(results) {
            if (results.length > 0) {
                sheet.loadSearchData(results);
            } else {
                alert("해당 조건에 대한 결과가 없습니다.");
            }
        },
        error: function(xhr, status, error) {
            console.error("에러", error);
            alert("데이터를 가져오는 중 오류가 발생했습니다.");
        }
    });
}
