 let list = document.getElementById('book-list');
 let row = document.createElement('tr');


 function Getlinks() {

     var str = document.getElementById("titleid1").value;


     var test = str.replace(/(\r\n|\n|\r)/gm, " ").replace(/\\/g, '').replace(/&amp;/g, "&");




     //console.log(test);

     let searchforArray = ["audio/mp4",'"audio":\[{"url":', "sd_src_no_ratelimit:", "1080p", "720p", "480p", "360p", 'video":\[{"url":', "sd_src:", "hd_src:"];






     // console.log(searchforArray.length); 

     let links = [];

     for (let i = 0; i < searchforArray.length; i++) {


         //console.log(searchforArray[i]);


         if (test.indexOf(searchforArray[i]) > -1) {

              console.log(searchforArray[i]);
             let splitted_array = test.split(searchforArray[i]);

              console.log(splitted_array.length);

             for (let k = 1; k < splitted_array.length; k++) {

                 if (splitted_array[k].indexOf("https") > -1) {

                     //console.log(splitted_array[k]);
                     //console.log(splitted_array[k].slice(0, 10));

                     let link = splitted_array[k].slice(splitted_array[k].indexOf("https"), splitted_array[k].indexOf("oe=") + 11);

                      console.log(link);

                     links.push({ type: searchforArray[i], link: link });



                 }

             }



         }




     }



     let uniqueLinks = links.filter((v, i, a) => a.findIndex(t => (t.type === v.type && t.link === v.link)) === i);

     //console.log(uniqueLinks);

     uniqueLinks.forEach(function(ul) {

         let row = document.createElement('tr');
         // Insert cols
         row.innerHTML = `
    
      <td><h4>${ul.type.toString()}</h4></td>
      <td><iframe src="${ul.link.toString()}" width="320" height="240"></iframe></td>
      `;
         list.appendChild(row);

     });








 }