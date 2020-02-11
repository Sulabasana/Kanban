$(document).ready(function (){
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

    let inputs = $('input')
    let arr = []
    // console.log(inputs)
    let but = $('#generate')
    
    but.click(function(event){
        inputs.each(function(){
            if($(this).val() === ""){
                // alert("Empty Fields!!");
                console.log('Click')
                event.preventDefault()
                return false
            }else{
                let value = $(this).val()
                arr.push(value)
                // console.log(arr)
                // console.log(arr.length)
                if(arr.length == 4){
                    let small1 = arr[0].toLowerCase()
                    arr[0]=small1
                    let capital1 = capitalizeFirstLetter(arr[1])
                    arr[1]=capital1
                    let capital2 = capitalizeFirstLetter(arr[2])
                    arr[2]=capital2
                    let small2 =arr[3].toLowerCase()
                    arr[3]=small2
                }
                if(arr.length >= 4){
                    addToObj()
                }
                 display()
                event.preventDefault()
            }
         
        })
           
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        console.log(arr)
        console.log(source.localData)
        // checkform(this)
        event.preventDefault()
        
        
        arr =[]
        inputs.each(function(){
            $(this).val('')
        })

    });

    //Set color according to severity
    // if(valuePair[4] =="high"){
    //     hex = '#000'
    // }else if(valuePair[4] =="medium"){
    //     hex ="#ea34"
    // }else{
    //     hex ="#0ee73e"
    // }
    if(arr[3] =="high"){
        hex = '#000'
    }else if(arr[3] =="medium"){
        hex ="#ea34"
    }else{
        hex ="#0ee73e"
    }
    //obj that will be added to Kanban
    // var obj = {
    //     'id': valuePair[0],
    //     'state': valuePair[1],
    //     'activity': valuePair[2],
    //     'tags': valuePair[3],
    //     'hex' : hex,
    //     'resourceID': valuePair[5],
    
    // }
    function addToObj(){
        obj = {
            'id': Math.floor(Math.random() * 10).toString(),
            'state': arr[0],
            'activity': arr[1],
            'tags': arr[2],
            'hex' : hex,
            'resourceID': Math.floor(Math.random() * 10).toString()
        
        }
        source.localData.push(obj)
    }
        
    

    
            // console.log("I am here")
        // $("form[name='registration']").validate({
        //     // Specify validation rules
        //     rules: {
        //     // The key name on the left side is the name attribute of an input field. Validation rules are defined on the right side
        //     status: "required",
        //     text: "required",
        //     tags: 'required',
        //     color: 'required',

        //     },
        //     // Specify validation error messages
        //     messages: {
        //     status: "Select between: new, work, done",
        //     text: "What are you working on",
        //     tags: "Tag related to the task",
        //     color: "Low, Medium, High"
        //     },
        //     // Make sure the form is submitted to the destination defined in the "action" attribute of the form when valid
        //     submitHandler: function(form) {
        //     form.submit();
        //     }
        // });
        // function checkform(form) {
        //     // get all the inputs within the submitted form
            
        //     for (var i = 0; i < inputs.length; i++) {
        //         console.log('Yej'+ i)
        //         // only validate the inputs that have the required attribute
        //         if(inputs[i].hasAttribute("required")){
        //             if(inputs[i].value == ""){
        //                 // found an empty field that is required
                        
        //                 alert("Please fill all required fields");
                        
        //                 return false;
        //             }else{
        //                 but.attr('disabled', false)
        //             }
        //         }
        //     }
        //     return true;
        // }
    
    

    //Adding new items to Kanban
    //let displayer = $('#displayer')
   
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