FusionCharts.ready(function() {
    var myChart = new FusionCharts({
       type: "msspline",
       renderAt: "chartLandArea",
       width: "100%",
       height: "100%",
       dataFormat: "json",
       dataSource :{
           "chart": {
             "caption": "Land Area",
             "yaxisname": "Land Area in Hector",
             //"subcaption": "Year",
             "numdivlines": "3",
             "showvalues": "0",
             "legenditemfontsize": "15",
             "legenditemfontbold": "1",
             "exportEnabled": "1",
             "exportFormats": "PNG=Export as  Image|PDF=Export as PDF|XLS=Export Chart Data",
             "exportFileName": "Land_Area_Irrigated_NonIrrigated",
             "plottooltext": "$seriesName Area In $label : <b>$dataValue</b> Hector",
             "paletteColors" :"#13b245,#a83406",
             "theme": "fusion",
             "year" :"2018",
           },
           "categories": [
             {
               "category": [
                 {
                   "label": "January"
                 },
                 {
                   "label": "February"
                 },
                 {
                   "label": "March"
                 },
                 {
                   "label": "April"
                 },
                 {
                   "label": "May"
                 },
                 {
                   "label": "June"
                 },
                 {
                   "label": "July"
                 },
                 {
                   "label": "August"
                 },
                 {
                   "label": "September"
                 },
                 {
                   "label": "October"
                 },
                 {
                   "label": "November"
                 },
                 {
                   "label": "December"
                 }
               ]
             }
           ],
           "dataset": [
             {
               "seriesname": "Irrigated",
               "data": [
                 {
                   "value": "55"
                 },
                 {
                   "value": "45"
                 },
                 {
                   "value": "52"
                 },
                 {
                   "value": "29"
                 },
                 {
                   "value": "48"
                 },
                 {
                   "value": "28"
                 },
                 {
                   "value": "32"
                 }
               ]
             },
             {
               "seriesname": "Non-Irrigated",
               "data": [
                 {
                   "value": "50"
                 },
                 {
                   "value": "30"
                 },
                 {
                   "value": "49"
                 },
                 {
                   "value": "22"
                 },
                 {
                   "value": "43"
                 },
                 {
                   "value": "14"
                 },
                 {
                   "value": "31"
                 }
               ]
             }
           ]
         }
    }).render();

     var myChart = new FusionCharts({
       type: "pie2d",
       renderAt: "chartLandEnrolled",
       width: "100%",
       height: "100%",
       dataFormat: "json",
       dataSource :{
           "chart": {
             "caption": "Land Enrolled",
             "plottooltext": " $label <b>$percentValue</b> ",
             "showlegend": "1",
             "showpercentvalues": "1",
             //"decimals": "1",
             "legendposition": "bottom",
             "usedataplotcolorforlabels": "1",
             "exportEnabled": "1",
             "exportFormats": "PNG=Export as  Image|PDF=Export as PDF|XLS=Export Chart Data",
             "exportFileName": "Land_Area_Irrigated_NonIrrigated", 
             "paletteColors" :"#427f10,#bcb9b8",
             "theme": "fusion"
           },
           "data": [
             {
               "label": "Registred  Land",
               "value": "32647479"
             },
             {
               "label": "Unregistered Land",
               "value": "22100932"
             }
           ]
         }
    }).render();
     var myChart = new FusionCharts({
           type: "pie2d",
           renderAt: "chartLandIrrigationStatus",
           width: "100%",
           height: "100%",
           dataFormat: "json",
           dataSource: {
               "chart": {
                 "caption": "Land Irrigation Status",
                // "subcaption": "For all users in 2017",
                 "showpercentvalues": "1",
                 "aligncaptionwithcanvas": "0",
                 "captionpadding": "0",
                 "decimals": "1",
                 "exportEnabled": "1",
                 "exportFormats": "PNG=Export as  Image|PDF=Export as PDF|XLS=Export Chart Data",
                 "exportFileName": "Land_Area_Irrigated_NonIrrigated_Status",
                 "plottooltext": "<b>$label</b> : <b>$percentValue</b>",
                 "centerlabel": "# Users: $value",
                 "theme": "fusion",
                   "paletteColors" :"#5dc409,#c49e08",
               },
               "data": [
                 {
                   "label": "Irrigated Land",
                   "value": "1250"
                 },
                 {
                   "label": "Un-Irrigated Land",
                   "value": "3625"
                 }
               ]
             }
        }).render();
         var myChart = new FusionCharts({
           type: "pie2d",
           renderAt: "piechart03",
           width: "100%",
           height: "100%",
           dataFormat: "json",
           dataSource: {
               "chart": {
                 "caption": "Land Sown Status",
                 "subcaption": "",
                 "showpercentvalues": "1",
                 "defaultcenterlabel": "",
                 "aligncaptionwithcanvas": "0",
                 "captionpadding": "0",
                 "decimals": "1",
                 "exportEnabled": "1",
                 "exportFormats": "PNG=Export as  Image|PDF=Export as PDF|XLS=Export Chart Data",
                 "exportFileName": "Land_Area_Sown_Status",
                 "plottooltext": "<b>$label</b> : <b>$percentValue</b>",
                 "centerlabel": "# Users: $value",
                 "theme": "fusion",
                 "paletteColors" :"#285328,#cccccc",
               },
               "data": [
                 {
                   "label": "Approved",
                   "value": "3625"
                 },
                 {
                   "label": "Un-Approved",
                   "value": "1250"
                 }
               ]
             }
        }).render();
 });