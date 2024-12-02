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
            {"Header": "No", "Name": "No", "Type": "Int", "Align": "Center", "Width":140, "CanEdit":1},  
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

function retrieve() {
    // 예시 데이터
    const exampleData = [
        {
            No: 1,
            requesterName: "John Doe",
            organization: "Company A",
            employeeNumber: "12345",
            officeNumber: "101",
            mobileNumber: "555-1234",
            requestDate: "2023-10-01",
            approverInfo: "Jane Smith",
            approverPosition: "Manager",
            usagePurpose: "Business Meeting",
            numberOfPassengers: "3",
            routeSetting: "Route A",
            remarks: "N/A",
            passengerContact: "555-5678",
            attachedDocuments: "Document1.pdf",
            cancellationReason: "N/A",
            usageCategory: "BusinessSupport",
            carType: "Sedan",
            mainDepartment: "Seoul",
            operationSection: "City",
            operationType: "RoundTrip",
            includeDriver: "Yes",
            progressStage: "Received",
            from: "2023-10-01",
            to: "2023-10-02"
        },
        {
            No: 2,
            requesterName: "Alice Brown",
            organization: "Company B",
            employeeNumber: "67890",
            officeNumber: "202",
            mobileNumber: "555-6789",
            requestDate: "2023-10-02",
            approverInfo: "Bob White",
            approverPosition: "Director",
            usagePurpose: "Client Visit",
            numberOfPassengers: "2",
            routeSetting: "Route B",
            remarks: "Urgent",
            passengerContact: "555-9876",
            attachedDocuments: "Document2.pdf",
            cancellationReason: "N/A",
            usageCategory: "ExternalActivity",
            carType: "Van",
            mainDepartment: "Pohang",
            operationSection: "Suburb",
            operationType: "OneWay",
            includeDriver: "No",
            progressStage: "AssignmentCompleted",
            from: "2023-10-02",
            to: "2023-10-03"
        },
        {
            No: 3,
            requesterName: "John Doe",
            organization: "Company C",
            employeeNumber: "54321",
            officeNumber: "303",
            mobileNumber: "555-4321",
            requestDate: "2023-10-03",
            approverInfo: "Eve Black",
            approverPosition: "Supervisor",
            usagePurpose: "Site Inspection",
            numberOfPassengers: "4",
            routeSetting: "Route C",
            remarks: "Check equipment",
            passengerContact: "555-6543",
            attachedDocuments: "Document3.pdf",
            cancellationReason: "N/A",
            usageCategory: "BusinessSupport",
            carType: "Truck",
            mainDepartment: "Gwangyang",
            operationSection: "City",
            operationType: "RoundTrip",
            includeDriver: "Yes",
            progressStage: "AssignmentCancelled",
            from: "2023-10-03",
            to: "2023-10-04"
        }
    ];
    rowData = exampleData;

    // 예시 데이터를 시트에 로드
    sheet.loadSearchData(exampleData);
}

// function retrieve(){
//     fetch("https://localhost:8088/carAssignments", {
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
//             if (row.period) {
//                 row.from = row.period.from;
//                 row.to = row.period.to;
//             }
//         });
//         sheet.loadSearchData(json)
//     }).catch(error => {
//         console.error("에러", error);
//     });
// }

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
function searchSingleResult(id){
    const searchId = parseInt(id, 10);

    const result = rowData.find(row => row.No === searchId);

    if (result) {
        sheet.loadSearchData([result]);
    } else {
        alert("해당 ID에 대한 결과가 없습니다.");
    }

    // $.ajax({
    //     url: `https://localhost:8088/carAssignments/`,
    //     method: 'GET',
    //     headers: {
    //         "Cache-Control": "no-cache",
    //         "Pragma": "no-cache",
    //         "Content-Type": "application/json"
    //     },
    //     success: function(result) {
    //         if (result) {
    //             sheet.loadSearchData([result]);
    //         } else {
    //             alert("해당 ID에 대한 결과가 없습니다.");
    //         }
    //     },
    //     error: function(xhr, status, error) {
    //         console.error("에러", error);
    //         alert("데이터를 가져오는 중 오류가 발생했습니다.");
    //     }
    // });
}

function searchMultipleResult(params) {
    // 모든 검색 조건이 비어있는지 확인
    const allEmpty = !params.requesterName && !params.employeeNumber && !params.approverPosition;

    if (allEmpty) {
        alert("검색할 내용을 입력하세요.");
        return;
    }

    // 여러 검색 조건을 기반으로 데이터를 필터링
    const results = rowData.filter(row => {
        const matchesRequesterName = params.requesterName ? row.requesterName.includes(params.requesterName) : true;
        const matchesEmployeeNumber = params.employeeNumber ? row.employeeNumber.includes(params.employeeNumber) : true;
        const matchesApproverPosition = params.approverPosition ? row.approverPosition.includes(params.approverPosition) : true;

        return matchesRequesterName && matchesEmployeeNumber && matchesApproverPosition;
    });

    if (results.length > 0) {
        sheet.loadSearchData(results);
    } else {
        alert("해당 조건에 대한 결과가 없습니다.");
    }

    // const queryParams = new URLSearchParams(params).toString();

    // $.ajax({
    //     url: `https://localhost:8088/carAssignments?${queryParams}`,
    //     method: 'GET',
    //     headers: {
    //         "Cache-Control": "no-cache",
    //         "Pragma": "no-cache",
    //         "Content-Type": "application/json"
    //     },
    //     success: function(results) {
    //         if (results.length > 0) {
    //             sheet.loadSearchData(results);
    //         } else {
    //             alert("해당 조건에 대한 결과가 없습니다.");
    //         }
    //     },
    //     error: function(xhr, status, error) {
    //         console.error("에러", error);
    //         alert("데이터를 가져오는 중 오류가 발생했습니다.");
    //     }
    // });
}