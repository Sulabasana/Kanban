$(document).ready(function () {
    var fields = [
             { name: "id", type: "string" },
             { name: "status", map: "state", type: "string" },
             { name: "text", map: "label", type: "string" },
             { name: "tags", type: "string" },
             { name: "color", map: "hex", type: "string" },
             { name: "resourceId", type: "number" }
    ];
    var source =
     {
         localData: [
                  { id: "1", state: "new", label: "Digital Automation", tags: "automation, future", hex: "#5dc3f0", resourceId: 3 },
                  { id: "2", state: "work", label: "Lotus Script", tags: "NewJob", hex: "#f19b60", resourceId: 1 },
                  { id: "3", state: "new", label: "JavaScript", tags: "Language", hex: "#5dc3f0", resourceId: 3 },
                  { id: "4", state: "done", label: "Tickety!", tags: "Stupid task", hex: "#5dc3f0", resourceId: 4 },
                  { id: "5", state: "new", label: "Denon", tags: "Pleasure, money", hex: "#6bbd49" }
         ],
         dataType: "array",
         dataFields: fields
     };
    var dataAdapter = new $.jqx.dataAdapter(source);
    var resourcesAdapterFunc = function () {
        var resourcesSource =
        {
            localData: [
                  { id: 0, name: "No name", image: "img/5.jpg", common: true },
                  { id: 1, name: "Andrew Fuller", image: "img/5.jpg" },
                  { id: 2, name: "Janet Leverling", image: "img/5.jpg" },
                  { id: 3, name: "Steven Buchanan", image: "img/5.jpg" },
                  { id: 4, name: "Nancy Davolio", image: "img/5.jpg" },
                  { id: 5, name: "Michael Buchanan", image: "img/5.jpg" },
                  { id: 6, name: "Margaret Buchanan", image: "img/5.jpg" },
                  { id: 7, name: "Robert Buchanan", image: "img/5.jpg" },
                  { id: 8, name: "Laura Buchanan", image: "img/5.jpg" },
                  { id: 9, name: "Laura Buchanan", image: "img/5.jpg" }
            ],
            dataType: "array",
            // dataFields: [
            //      { name: "id", type: "number" },
            //      { name: "name", type: "string" },
            //      { name: "image", type: "string" },
            //      { name: "common", type: "boolean" }
            // ]
        };
        var resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }
    $('#kanban').jqxKanban({
        resources: resourcesAdapterFunc(),
        source: dataAdapter,
        columns: [
            { text: "Backlog", dataField: "new" },
            { text: "In Progress", dataField: "work" },
            { text: "Done", dataField: "done" }
        ]
    }); 
});