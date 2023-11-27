const app=angular.module("myapp",[])

        app.controller("mycontroller", function($scope, $window){
            
            $scope.itemList=[{ name:"131 C . Handle  - small - 1/2''" , price:"35.40"},
                { name:"132 C . Handle  - Big - 1/2''" , price:"35.90"},
                { name:"205 Chromium Handle -3/8'' (sangada)" , price:"35.40"},		
                { name:"213   Sander Shaft-Small	" , price:"53.100"},		
                { name:"214   Sander Shaft-Big	" , price:"194.730"},		
                { name:"217   Sander Bearing Housing M.S" , price:"100.400"},			
                { name:"347  13 PCB-Circul saw Lever Shaft" , price:"140.220"},			
                { name:"352  13 PCB-CI-C.S.Idle Pully" , price:"171.740"},	
                { name:"391   Clutch Handle With Stud	" , price:"46.460"},		
                { name:"412 Pillar Chromiam Handle - 1/2''	" , price:"50.70"},		
                { name:"470   24''-Til MS Washer 8'' ODX10mm	" , price:"324.940"},    		
                { name:"568  13''PCB-DGM Gear Shaft			" , price:"74.800"},
                { name:"591  13''PCB-ECCN GEARING PIN		" , price:"163.300"},	
                { name:"598   New Mould Brass Stud 3/4X4.3/8	" , price:"40.200"},		
                { name:"599   New Mould Tilting Screw Nut Set" , price:"80.320"},			
                { name:"606  13PCB-Cluch Spring Stopper		" , price:"17.840"},	
                { name:"661   Chain Mort. Handle Bar Adaptar	" , price:"205.000"},		
                { name:"668   Chain Mort. Cross Mov. Screw/Nut" , price:"158.700"},			
                { name:"670   New Mould Choras Stud 1''		" , price:"29.840"},	
                { name:"680  13PCB-Gearing Pully Eccentric Pin" , price:"197.440"},			
                { name:"686   Chain Mort. Gear Main Spindle	" , price:"97.400"},		
                { name:"699   Chain Mort. Pinion Shaft		" , price:"79.000"},	
                { name:"728  NEW MOULDING MAIN SHAF			" , price:""},
                { name:"729  NEW HEAVY MOULD BRASS SHAFT		" , price:""},	
                { name:"772  NEW -D-MOULDING MAIN SHAFT		" , price:""},	
                { name:"773  NEW HEAVY D-SIDE MO. BRASS SHAFT" , price:""},			
                { name:"781   Chain Mort. Grinding At.Adaptor" , price:"71.600"},			
                { name:"782   Chain Mort. Chain Stud			" , price:"22.880"},
                { name:"799   Chain Mort. Worm Shaft			" , price:"109.700"},
                { name:"993   Chain Mort. Roller Pin			" , price:"25.640"},
                { name:"1068  Chain Mort. 1Inch Chorasiya" , price:"30.180"},			
                { name:"1153  Sanghada 1Inch Choras x 2.5'' L" , price:"40.010"},			
                { name:"1162  Lathe/Sanghada-H-19mm Roundx8''L" , price:"45.080"},			
                { name:"1318  12''TT-MS Coller for Guide Roller" , price:"31.160"},			
                { name:"1382  HSM-Meter Guage T Flat - MS 		" , price:""},	
                { name:"1437  HSM-4'' MS Handle For Folding Pin	" , price:"59.450"},				
                { name:"1534 New Chain Slotted Pin			" , price:"61.000"},
                { name:"1539 New Chain Cross Mov.Screw/Nut	" , price:"186.470"},		
                { name:"1540 New Chain Wheel Boss Shaft		" , price:"53.720"},	
                { name:"1541 New Chain Pinion Shaft			" , price:"61.640"},
                { name:"1576 NCM-Wood Clamping Ms Sqare 50x55x70" , price:"123.340"},			
                { name:"1585  NCM-Table Locing Ms Pin" , price:"83.370"},			
                { name:"1588  NCM- Table Up/Down Screw" , price:"331.760"},			
                { name:"1589  NCM-Table Up/Down Screw Nut-Ms" , price:"50.340"},			
                { name:"1598  NCM-Spring Hing Stud" , price:"73.400"},			
                { name:"1609  NCM-T Flat U/D Gear Shaft" , price:"87.380"},			
                { name:"1610 NCM-MS Spacer For Motor Shaft" , price:"26.800"},			
                { name:"1615 NCM -T-Bolt For Stopper Flat" , price:"14.850"},			
                { name:"1640 Chain Mort1''Choras Oil Bowl3.75L-3/8" , price:"43.000"},			
                { name:"1653 CMA- Horizontal Shat ( EN-8)" , price:"191.910"},			
                { name:"1654 CMA -Vertical Shat" , price:"245.500"},			
                { name:"1655 CMA -Vertical Shaft Sleeve" , price:"172.040"},			
                { name:"1656 CMA - Allu. Housing Support Collar" , price:"26.100"},			
                { name:"1657 CMA - Bearing Cover -9.5mm Thickness" , price:"71.890"},			
                { name:"1658 CMA - Bearing Cover -8mm Thickness" , price:"66.930"},			
                { name:"1788 N.Chain Scale 1'' Choras-3.2/4''" , price:"35.560"},			
                { name:"1812 Cup Grind 1'' Choras Stud-Clamp 13H" , price:"36.800"},			
                { name:"1813 Cup Grind 1'' Choras StudMachi 3/4H" , price:"36.800"},			
                { name:"2011 New Drill 34T Gear Shaft" , price:"80.600"},			
                { name:"2012 New Drill 64T Gear Shaft" , price:"72.200"},			
                { name:"2063 NCM -MS Collar For Motor - KW" , price:"27.480"},			
                { name:"2064 NCM-Motor Up/Down Lever Shaft" , price:"186.000"},			
                { name:"2068 NCM- Spring stud-15mmX 225mm Long" , price:"38.480"},			
                { name:"2071 NCM-Spring Stud -15mmx280mm Long" , price:"44.600"},			
                { name:"2078 NCM -Body Sliding Screw" , price:"81.700"},			
                { name:"2079 NCM-Body Sliding Screw Nut- Ms" , price:"44.120"},			
                { name:"2330 Max 20'' Combined Pawdi Stud" , price:"59.640"},			
                { name:"2606 PS Drill Small Handle 3/8'' x 3/4''" , price:"30.180"},			
                { name:"2643  24''EBS-Tilting Brecket Eccentric Stud" , price:"39.560"},			
                { name:"2644  24''EBS-Upper Blade Guide Pin" , price:"53.030"},			
                { name:"2648  24''EBS Wheel Up/Down Screw" , price:"349.100"},			
                { name:"2717 Chain Mort. Grind Housing Shaft" , price:"83.800"},			
                { name:"2718 Chain Mort. Grind. Eccentric Shaft" , price:"53.480"},			
                { name:"2719 Chain Mort. Eccentric Bottom Pin-KW" , price:"69.520"},			
                { name:"2941  12''EBS-Wheel Up/Down SCREW" , price:"167.000"},			
                { name:"2942  12''EBS-Wheel Up-Down Screw M.S Nut" , price:"35.710"},			
                { name:"2994 Max 18'' BS Chand Locking" , price:"34.640"},			
                { name:"3036 24HC -Surfacer Table U/D" , price:"39.700"},			
                { name:"3045 24HC-Scale MOUNTING Sqare 1/2''" , price:"24.110"},			
                { name:"3048 24HC-Sur, Table Slide Lock Pin" , price:"75.040"},			
                { name:"3167 13SP-Eccenric Rod -48mm" , price:"785.300"},			
                { name:"3168  13SP-Eccenric Rod-35mm	" , price:"548.300"},		
                { name:"3169  13SP-Eccentric Rod-48mm" , price:"942.320"},			
                { name:"3170  18SP-Eccentric Rod-35mm" , price:"645.800"},			
                { name:"3324  NT-Work Piece Stopper Rod-Small" , price:"50.070"},			
                { name:"3372 13SP- Eccent Rod 48mm" , price:"785.300"},			
                { name:"3373 13SP- Eccent Rod 35mm" , price:"548.300"},			
                { name:"3415 18SP- Eccent Rod 48mm" , price:"942.320"},			
                { name:"3416 18SP- Eccent Rod 35mm" , price:"645.800"},			
                { name:"3478 12Inch TT-Gearing Pin Washer" , price:"24.400"},			
                { name:"3484  12TT-Cl Side Frame - Small" , price:"25.460"},			
                { name:"3485 12TT -Wood Guide Bearing Pin" , price:"26.520"},			
                { name:"3486  12TT - Wood Guide Spring Coller" , price:"102.360"},			
                { name:"3487  12TT - Wood Guide Spring Coller" , price:"16.420"},			
                { name:"3488  12TT -Wood Guide Eccentric Coller" , price:"21.970"},			
                { name:"3700 14'' Tilt Arbour M.Plate Stud-1''Px13" , price:"115.000"},			
                { name:"3917 18-Band Saw Drive Sthaf/Nut Set" , price:"422.150"},			
                { name:"3918 18-Band Saw Idler Shaft/ Nut Set" , price:"279.450"},			
                { name:"3919 18- Band Saw Idler Shaft" , price:"138.800"},			
                { name:"3926 18'' Band Saw Screw Nut	" , price:"29.000"},		
                { name:"3947 12'' Band Saw Drive SHAFT" , price:"205.510"},			
                { name:"3948 12'' Band Saw Idler Shaft" , price:"116.700"},			
                { name:"3951 12'' Band Saw Screw" , price:"79.400"},			
                { name:"3956 18'' Band Saw Screw Nut" , price:"35.400"},			
                { name:"3958 18'' Band Saw Shaft Check Nut" , price:"22.500"},			
                { name:"3959 12'' Band Saw Shaft Check Nut" , price:"18.300"},			
                { name:"3971 BS Eccentric Pin for Guid" , price:"29.400"},			
                { name:"6069 H.Grid.Motro Plate Stud 3/4'' Choras" , price:"21.080"},			
                { name:"6070 H.Grind. 1/2'' Round Stud" , price:"32.200"},			
                { name:"6851 New Chain Wheel Boss Shaft-New" , price:"97.400"},			
                { name:"7338 H. Grind Handle 3/4'' x 2.25'' L" , price:"31.720"},			
                { name:"7442  LCM-Body Slide Handle Sq.Brak	" , price:"60.920"},		
                { name:"7460 LCM-Grind Att. Adaptor-5/8'' H	" , price:"59.600"},		
                { name:"7468  18-Bansdsaw Screw Guide" , price:"--"},			
                { name:"9160  CL-Chromium Handle 3/8Inch" , price:"36.300"},			
                { name:"9178 CL-Acrelic Cover Sq. Pipe Pin" , price:"17.880"},			
                { name:"9183 CL-Cutter Rest.Bkt.Base Coller" , price:"160.350"},			
                { name:"9186 CL-Cutter Rest.Bkt.Pin" , price:"42.480"},			
                { name:"9462 18'' EBS-Tilting Bracket eccentric Stud" , price:"27.960"},			
                { name:"9463 18'' EBS-Wheel Up-Down Screw" , price:"225.400"},			
                { name:"9464 18'' EBS-Wheel Up-Down ScrewMS Nut" , price:"56.120"},			
                { name:"9470 18'' EBS-Tilting Fix Bracket Fitting Stud" , price:"--"},			
                { name:"9473 18'' EBS-Upper Blade Guide Pin" , price:"37.640"},			
                { name:"9494 18'' EBS-Blade Grind. Atte.Shaft" , price:"81.770"},			
                { name:"9528 12'' DT-Brass Spring Hex Pin	" , price:"34.440"},		
                { name:"9529 12'' DT-Hex Pin Fitting Flat" , price:"--"},			
                { name:"9530 12'' DT-Brass Spring Stud" , price:"32.640"},			
                { name:"9534 12'' DT-''T'' Table Up/Down Shaft" , price:"61.840"},			
                { name:"9541 12DT-Sur. Table Up/Down Pin" , price:"20.520"},			
                { name:"9542 Sur. Table Screw Flat (38X6X75mm)" , price:"25.680"},			
                { name:"9632 CL- Sprocket Locking Collar	" , price:"7.280"},		
                { name:"9634 CL- Cutter HING Shaft	" , price:"210.530"},		
                { name:"9674 CL- Up-Down Screw Lock Nut" , price:"59.380"},			
                { name:"9696 CL- Motor Setting Sq Nut" , price:"17.600"},			
                { name:"9697 CL- Motor Setting Sq Stud" , price:"16.600"},			
                { name:"20235  CMN-BODY UP/DOWN SHAFT" , price:"142.100"},			
                { name:"20309 RT -Main Shaft Collar - 40mm" , price:"95.920"},			
                { name:"20310 RT -Main Shaft Collar - 23mm" , price:"68.700"},						
                { name:"20311 RT - Main Shaft Collar - 17mm" , price:"52.140"}, 						
                { name:"20312 RT - Main Shaft Collar - 10mm	" , price:"45.580"},		
                { name:"20313 RT - Main Shaft Collar - 5mm	" , price:"39.840"},					
                { name:"20314 RT -Main Shaft Cuter Side " , price:"46.480"},					
                { name:"20319 RT - Brg. Housg. Hinge Shaft" , price:"23.840"}, 			
                { name:"20321 RT - Brg. Housg. Hinge Sleeve" , price:"275.840"},			
                { name:"20324 RT -Brg. Housg. Brg. Cover -72" , price:"231.020"},			
                { name:"20329 RT - Motor Hinge Bkt Washer" , price:"211.180"},			
                { name:"20347 RT-SIide Adjust Shaft -MS " , price:"74.560"},			
                { name:"20351 RT-Slide Adjust Screw Collar" , price:"18.840"},			
                { name:"20352 RT-SIide Adjust Screw Collar" , price:"18.840"},			
                { name:"20353 RT-Slide Adjust Screw Sleeve " , price:"43.960"},			
                { name:"20368 RT- Top Slide Tilting Bkt. Rod" , price:"91.840"},			
                { name:"20375 RT-Miter Gauge Rod - MS" , price:"95.800"}, 			
                { name:"20378 RT-Top Table Tilting Sleeve" , price:"67.920"},			
                { name:"20379 RT-Top Table Tilting Sleeve" , price:"50.240"},			
                { name:"20386  RT-Motor Bkt.Hinge Rod-Ms	" , price:"69.720"},		
                { name:"20427 RT - Slide Adjust screw handae" , price:"302.320"},			
                { name:"20535  18DT- I nfeed Table U/D Handle Ms" , price:"210.880"},			
                { name:"20557  18dt-t-Table Up/Down Shaft-Ms	" , price:"305.310"},		
                { name:"20560  18Dt-T-Table Up/Down Locking Flat" , price:"44.080"},			
                { name:"20600  18DT-Ratchate Roll Cover Support" , price:"310.210"},			
                { name:"20616.  24HT-Brass Spring Tension Stud-Ms" , price:"65.810"},			
                { name:"20662  18DT-T-Table Up/Down Shaft-Ms	" , price:"344.290"},		
                { name:"20672  24DT-Ratchate Roll Cover Support" , price:"332.100"},			
                { name:"20681  DT-Top Big Cover Handle-Ms	" , price:"149.660"},		
                { name:"20692  18DT-Chain Bearing Cellar-Ms	" , price:""},		
                { name:"20702  18HTP-T-TABLE mounting Plate-Ms" , price:"216.380"},			
                { name:"20712  18''HTP-T-Table Up/Down Shaft-Ms" , price:"96.610"},			
                { name:"20797. 18HTP-Handle coller -Ms" , price:"58.300"},			
                { name:"20826  18''HCP-Infeed Table Up/Down Handle" , price:"172.220"},			
                { name:"20830  18''HCP-Table Up/Down Rod Bracket N" , price:"37.840"},			
                { name:"20831  18''HCP-Top Table Reasting Pin-MS	" , price:"21.660"},		
                { name:"20833  18HCP-Table LOCKING Rod Collar	" , price:"56.630"},		
                { name:"20838  18HCP-T able Lock Small Flat Coller" , price:"15.120"},			
                { name:"20867  18HCP-Gearing Cluch Hanle-Ms		" , price:"91.870"},	
                { name:"20868  18HCP-Gearing Cluch Handle Pin-Ms	" , price:"46.140"},		
                { name:"20919  18HCP-Ripfence Locking L-Type Rod	" , price:"157.250"},		
                { name:"20920  18HSP-Ripfence Locking Eccentric collar" , price:"33.830"},			
                { name:"20921  HSP-Ripfence Rod Coller -Ms			" , price:"18.840"},
                { name:"21023. ARB - Sq Pin For Pressur Chain Wheel	" , price:"66.840"},		
                { name:"21041. ARB -Wood  Guide Pressur Roller Ms	" , price:"103.760"},		
                { name:"21061. ARB -Auto Feed Hinge Pin For Fork	" , price:"44.920"},		
                { name:"21063. ARB-Auto Feed Sleeve For Spring-Ms" , price:"69.985"},			
                { name:"21131  CMA-Beval Gear Tight Washer-Ms	" , price:"11.230"},		
                { name:"21145. ARB -TOP Cover Stopper Pin - Ms	" , price:"35.680"},		
                { name:"21160 CMH-Cross Movement Screw Nut-Ms" , price:"172.650"},			
                { name:"21165 CMH-Sleeve for motor shaft		" , price:"41.710"},	
                { name:"21198  MCM-Wood Guide Squere-1/2''x125-ms" , price:"27.500"},			
                { name:"21239 HVS - Table Locking Stud MS		" , price:"84.160"},	
                { name:"21511 HSM-TOP Bracket Tight Hanle (1/2''bsw thre)" , price:"39.42"},			
                { name:"21525  13''PCB-C.S.Idler Brg.Pully DISTANCE	" , price:"27.420"},		
                { name:"21853 HCM-Gear Shaft MS			" , price:"81.080"},
                { name:"21855 HCM Body U/D Shaft MS		" , price:"143.080"},	
                { name:"21960 18HTP-T-Table U/D Rod MS	" , price:"281.680"},		
                { name:"22805. 12DT-Ratchet Roll Cover Sup.Rod Ms" , price:"290.430"},			
                { name:"22808.  12DT-T-Table U/D Shaft - Ms		" , price:"269.150"},	
                { name:"23015. FSM -Table U/D Eccentric Rod" , price:"606.720"},			
                { name:"23017  FSM-Auto Feed Housing Collar-MS" , price:"33.760"},			
                { name:"23054  FSM-Chine Tight Stopper Round-Ms" , price:"51.000"},			
                { name:"23205  HM-Wood Tight Brecket Shaft-MS	" , price:"169.960"},             
                { name:"23225  HS-Big Shaft Without Disc.-MS	" , price:"288.900"},		
                { name:"23226  HS-Big Shaft For Disc.-MS	" , price:"323.940"},		
                { name:"23227  HS-Small Shaft -MS	" , price:"174.200"},		
                { name:"23260  HS-Bearing Housing -MS	" , price:"158.130"},		
                { name:"23261  HS-Samll Shaft-MS	" , price:"133.350"},		
                { name:"23262  HS-Big Shaft -MS	" , price:"358.980"},		
                { name:"23268  HS-Bearing Housing. RH Side -MS	" , price:"140.500"},	           
                { name:"24218  OVS- Rubber Roll Stand Stud-Ms(cromium)" , price:"52.66"},			
                { name:"24411  24DS -Belt Guide Brg Cover -Ms" , price:"49.160"},			
                { name:"24516  18'' EBS-Guide Ber Locking Handle-MS" , price:"56.06"},			
                { name:"24517  24'' EBS-Guide Ber Locking Handle-MS" , price:"70.90"},			
                { name:"27631  CP-50T Eccentric Bearing Pin" , price:"76.020"},			
                { name:"30717  THM-TOP Cutter Up/Down Screw Fitting " , price:"57.200"},			
                { name:"30745 E.Spindle Gear Shaft - MS" , price:"61.600"},			
                { name:"20637 24HT-36T-Helical Gear Dist	" , price:"46.200"}	];	



            $scope.previewList=[]

            $scope.addItem=function(item){

                var quantity = prompt("Enter Quantity");
                if(quantity > 0)
                {
                    item.qty = quantity;
                    $scope.previewList.push(item)
                }
                    
            }

            $scope.copyItem=function(item){
                var dummy=document.createElement("textarea")
                document.body.appendChild(dummy);
                dummy.value=item;
                dummy.select();
                $window.document.execCommand("copy")
                document.body.removeChild(dummy);
            }

            $scope.$watchCollection('previewList', function () {
                // Calculate the sum whenever the previewList changes
                $scope.sum = 0;
                for (var i = 0; i < $scope.previewList.length; i++) {

                    $scope.sum += parseFloat($scope.previewList[i].price * $scope.previewList[i].qty);
                }
                $scope.without_gst_amount = $scope.sum;
                $scope.temp_sum = ($scope.sum * 18)/100;
                $scope.sum = $scope.sum + $scope.temp_sum;
                $scope.sum = $scope.sum.toFixed(2);
                $scope.sumInWords = numberToWords(Math.floor($scope.sum));
            });

            $scope.copyToClipboard = function () {
                const textarea = document.createElement('textarea');
                textarea.value = $scope.sumInWords;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert("Copied")
            }
        
            
        })
// -----------------------------------------------------------------------------

function numberToWords(num) {
    if (num < 0)
        return false;
    const single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (num === 0) return 'Zero';

    function translate(n) {
        let word = '';
        if (n < 10) {
            word = single_digit[n] + ' ';
        } else if (n < 20) {
            word = double_digit[n - 10] + ' ';
        } else if (n < 100) {
            const rem = translate(n % 10);
            word = below_hundred[Math.trunc((n - n % 10) / 10) - 2] + ' ' + rem;
        } else if (n < 1000) {
            word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100);
        } else if (n < 1000000) {
            word = translate(parseInt(n / 1000)).trim() + ' Thousand ' + translate(n % 1000);
        } else if (n < 1000000000) {
            word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000);
        } else {
            word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000);
        }
        return word;
    }

    const result = translate(num);
    return result.trim() + ' only.';
}

// ------------------------------------------------------------------------------

async function generateExcel() {
            
    const templateUrl = 'Invoice.xlsx';
    const response = await fetch(templateUrl);
    const templateBlob = await response.blob();

    // Create a new workbook from the template
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(templateBlob);

    // Access the worksheet where you want to populate data
    const worksheet = workbook.getWorksheet('Invoice');

    const invoceNumber = document.getElementById("invoice_no").value
    var inumber = 'Invoice No:  G / '+invoceNumber+' / 2023-24.';
    worksheet.getCell('A13').value = inumber;

    const invoceDate = document.getElementById("invoice_date").value
    var dateParts = invoceDate.split('-');
    var year = dateParts[0];
    var month = dateParts[1];
    var day = dateParts[2];
    var formattedDate = day + '/' + month + '/' + year;

    var idate = 'Invoice date:  '+formattedDate+'.'
    var suppDate = 'Date of Supply:  '+formattedDate+'.'
    worksheet.getCell('A14').value = idate;
    worksheet.getCell('I15').value = suppDate;

    const dcNo = document.getElementById("dcNo").value
    var dcNoo = 'D.C.NO:- '+dcNo
    worksheet.getCell('A15').value = dcNoo;

    const unitnoo = document.getElementById("unitno").value
    var nameunit= 'Name: JAI INDUSTRIES '+unitnoo;
    worksheet.getCell('A19').value = nameunit;

    var rowIndex = 27; // Initialize the starting row index

    for (var i = 0; i < angular.element(document.querySelector('[ng-controller="mycontroller"]')).scope().previewList.length; i++) {
        
        var cellAddress = 'B' + rowIndex;
        var cellAddressRate = 'M' + rowIndex;
        var cellAddressqty = 'J' + rowIndex;
        var Finalrate = 'O' + rowIndex;
        var hsnnooo = 'I' + rowIndex;
        var nodigit = 'A' + rowIndex;

        worksheet.getCell(cellAddress).value = angular.element(document.querySelector('[ng-controller="mycontroller"]')).scope().previewList[i].name;

        worksheet.getCell(cellAddressRate).value = angular.element(document.querySelector('[ng-controller="mycontroller"]')).scope().previewList[i].price;

        worksheet.getCell(cellAddressqty).value = angular.element(document.querySelector('[ng-controller="mycontroller"]')).scope().previewList[i].qty;

        worksheet.getCell(Finalrate).value = (angular.element(document.querySelector('[ng-controller="mycontroller"]')).scope().previewList[i].qty)*(angular.element(document.querySelector('[ng-controller="mycontroller"]')).scope().previewList[i].price);
        
        worksheet.getCell(hsnnooo).value = "84669200";

        worksheet.getCell(nodigit).value = count;
        count++;
        rowIndex++;
          
      }
    
    

    // workbook.xlsx.writeBuffer().then(function (buffer) {
    //   const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    //   saveAs(blob, 'invoice.xlsx');
    // });
    // Get the value entered by the user in the input field
    const customFileName = document.getElementById('dwnname').value;
    const defaultFileName = 'invoice.xlsx';
    const fileName = customFileName.trim() !== '' ? customFileName : defaultFileName;

    workbook.xlsx.writeBuffer().then(function (buffer) {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, fileName);
    });

  }

//   -------------------------------------------------------------------

// var sumval = angular.element(document.querySelector('[ng-controller="mycontroller"]')).scope().previewList;

// var sum =0;

// for (var i = 0; i < angular.element(document.querySelector('[ng-controller="mycontroller"]')).scope().previewList.length; i++){

// }


        

        
