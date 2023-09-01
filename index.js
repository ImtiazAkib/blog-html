
const dataload = async () =>{

    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const contents = data.data
 
    displayContens(contents);

}

    const displayContens = contents =>{

        //example
        const arr1 = [24.6,23.7,18.9,76.5];
        
  arr1.push()
        function arrSort(arr) {
            arr.sort((a,b)=>b-a);
            // arr.reverse();
            return arr;
        }
  
        console.log(arrSort(arr1));
        //------------------------------

        const maincontainer =  document.getElementById('main-container');
        const notFound =  document.getElementById('not-found');

        maincontainer.textContent ='';
        notFound.textContent = '';

        if(contents.length==0){
            const div = document.createElement('div');
            div.classList = `flex flex-col justify-center items-center gap-6`
            div.innerHTML=`<figure><img src="./icon.png" alt="icon" /></figure>
            <p>Oops!! Sorry, There is no content here</p>`
            notFound.appendChild(div)
        }
     
         contents.forEach(content => {
            //  console.log(content);
          const hours = parseFloat(content.others.posted_date)/3600;
          const sec= parseFloat(content.others.posted_date)%3600;
          const min= sec/60;
     
             // console.log(content.others.posted_date);
             const div = document.createElement('div');
             div.classList = `card w-72 bg-base-100 shadow-xl`;
             div.innerHTML = `
             <figure class='relative'><img src="${content.thumbnail}" alt="Shoes" />${hours ? `<p class='absolute bottom-0 right-0'>${Math.ceil(hours)}hours ${Math.ceil(min)}minutes</p>`:`<p></p>`}</figure>
             
             
     
        <div class="flex">
     
        <div>
        <div class="class card w-10 bg-base-100 shadow-xl pt-20"> 
        <div class="avatar">
            <div class=" rounded-full   ">
              <img src="${content.authors[0].profile_picture
              }" />
            </div>
          </div>
         
     
        </div>
     
             <div class="card-body">
               <h2 class="card-title">${content.title}</h2>
               <p>${content.authors[0]
                 .profile_name}</p>
               <p>${content.others.views
               } views</p>
             </div>
     
             </div>
             `
             maincontainer.appendChild(div);
         });
     
     
       }
          
 

  const buttonload = async () =>{

    const ress = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const btn = await ress.json();
    const btns = btn.data
    // console.log(btns)
    displaybtn(btns);
  }

  const displaybtn= btns =>{
    const btncontainer = document.getElementById('btns-container');

    btns.forEach(button => {

      const buTton = document.createElement('button');
      buTton.innerHTML = `
      <button  class="bg-zinc-300 text-black px-4 py-1 rounded-lg hover:bg-red-500" onclick="handleData(${button.category_id})">${button.category}</button>   
            `
            
            btncontainer.appendChild(buTton); 

      
    });

  }

  const handleData =async id =>{
    
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
   const contents = data.data;
    displayContens(contents);
    
  }

  buttonload()
dataload();