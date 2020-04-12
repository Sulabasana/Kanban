$(document).ready(function (){
    let save = $('#save')
    // save.click(function(){
    //     goPython()
    // });
    // function goPython(){
    //     $.ajax({
    //         url: "python/save.py",
    //         context: document.body
    //     }).done(function() {
    //      alert('finished python script');;
    //     });
    // }
    save.click(function(){
        $.ajax({
             url: "C:\Users\Piotrek\Documents\GitHub\Kanban\python\save.py",
            success: function(response) {
                // here you do whatever you want with the response variable
                console.log("działa!")
            }
         });
       
       });
 // var source =
    // {
    //     localData: [
    //             { id: "1", state: "new", activity: "Digital Automation", tags: "automation, future", hex: "#5dc3f0", resourceId: 3 },
    //             { id: "2", state: "work", activity: "Lotus Script", tags: "NewJob", hex: "#f19b60", resourceId: 1 },
    //             { id: "3", state: "new", activity: "JavaScript", tags: "Language", hex: "#5dc3f0", resourceId: 3 },
    //             { id: "4", state: "done", activity: "Tickety!", tags: "Stupid task", hex: "#5dc3f0", resourceId: 4 },
    //             { id: "5", state: "new", activity: "Denon", tags: "Pleasure, money", hex: "#6bbd49" },
    //             { id: "6", state: "work", activity: "wasting time", tags:"wasting time", hex: "red"}
            
    //     ],
    //     dataType: "array",
    //     dataFields: fields
    // };
})
   