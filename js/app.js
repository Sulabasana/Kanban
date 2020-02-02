$(document).ready(function () {
    var fields = [
             { name: "id", type: "string" },
             { name: "status", map: "state", type: "string" },
             { name: "text", map: "activity", type: "string" },
             { name: "tags", type: "string" },
             { name: "color", map: "hex", type: "string" },
             { name: "resourceId", type: "number" }
    ];
            
     
    //Test purpose    
    var valuePair = ['1','new', 'Create Bot', 'Future', 'high', '3']


    //Set color according to severity
    if(valuePair[4] =="high"){
        hex = '#000'
    }else if(valuePair[4] =="medium"){
        hex ="#ea34"
    }else{
        hex ="#0ee73e"
    }
    //obj that will be added to Kanban
    var obj = {
        'id': valuePair[0],
        'state': valuePair[1],
        'activity': valuePair[2],
        'tags': valuePair[3],
        'hex' : hex,
        'resourceID': valuePair[5],
    
    }

    //Adding new items to Kanban
    //let displayer = $('#displayer')
    let inputs = $('input')
    let arr = []
    // console.log(inputs)
    let but = $('#generate')
    but.click(function(event){
        inputs.each(function(){
            let value = $(this).val()
            arr.push(value)
            
        })
        let small = arr[2].toLowerCase()
        arr[2]=small
        console.log(small)
        console.log(arr)
        source.localData.push(obj)
        console.log(source.localData)
        display()
             
        event.preventDefault()
    });
    //Data for Kanban
    var source =
     {
         localData: [
                  { id: "1", state: "new", activity: "Digital Automation", tags: "automation, future", hex: "#5dc3f0", resourceId: 3 },
                  { id: "2", state: "work", activity: "Lotus Script", tags: "NewJob", hex: "#f19b60", resourceId: 1 },
                  { id: "3", state: "new", activity: "JavaScript", tags: "Language", hex: "#5dc3f0", resourceId: 3 },
                  { id: "4", state: "done", activity: "Tickety!", tags: "Stupid task", hex: "#5dc3f0", resourceId: 4 },
                  { id: "5", state: "new", activity: "Denon", tags: "Pleasure, money", hex: "#6bbd49" },
                  { id: "6", state: "work", activity: "wasting time", tags:"wasting time", hex: "red"}
                
         ],
         dataType: "array",
         dataFields: fields
     };
     //display data in Kanban
    function display(){ 
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
                dataFields: [
                    { name: "id", type: "number" },
                    { name: "name", type: "string" },
                    { name: "image", type: "string" },
                    { name: "common", type: "boolean" }
                ]
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
    }
 
    // displayer.text(source.localData) 
});