// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const personImg = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

// count
let count = 0;

// start event
window.addEventListener('DOMContentLoaded', ()=>{
  personImg.setAttribute('src', reviews[0]['img']);
  author.innerHTML = reviews[0]['name'];
  job.innerHTML = reviews[0]['job']
  info.innerHTML = reviews[0]['text']
})

// function 
const myFunc = (count)=>{
  personImg.setAttribute('src', reviews[count]['img']);
  author.innerHTML = reviews[count]['name'];
  job.innerHTML = reviews[count]['job']
  info.innerHTML = reviews[count]['text']
}

window.addEventListener('click', (el)=>{
  if(el.target.classList.contains('fa-chevron-left')){
    count--
    if(count < 0){
      count = 3
      myFunc(count)
    }else {
      myFunc(count)
    }
    
  }else if(el.target.classList.contains('fa-chevron-right')){
    count++
    if(count > 3){
      count = 0
      myFunc(count)
    }else{
      myFunc(count)
    }
    
  }else if(el.target.classList.contains('random-btn')){
    count = Math.floor(Math.random()*4)
    myFunc(count)
  }
});