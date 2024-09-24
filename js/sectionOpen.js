document.getElementById("donate-open-btn")
.addEventListener('click',function(){
ShowSectionById ("donate-section");
document.getElementById('history-open-btn').classList.remove('bg-lime-400');
document.getElementById('donate-open-btn').classList.add('bg-lime-400');

})

document.getElementById("history-open-btn")
.addEventListener('click',function(){
    ShowSectionById ("history-section");
  document.getElementById('donate-open-btn').classList.remove('bg-lime-400');
  document.getElementById('history-open-btn').classList.add('bg-lime-400');
  if(history.length <= 0){
    document.getElementById("empty-text-history").innerText = "You do not any donation ";
  } else{
    document.getElementById("empty-text-history").innerText = "";
  }
  
})
document.getElementById("blog-open-btn")
.addEventListener('click',function(){
    window.location.href = "/blog.html";

})
