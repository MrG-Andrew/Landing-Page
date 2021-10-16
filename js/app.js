//declaring variables
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll("section");
//helper functions
function anchorEvent(anchor){
  anchor.preventDefault();
  const a = document.querySelector(this.getAttribute('href'));
  a.scrollIntoView({behavior: 'smooth'});
};

function aTag(anchor){
  anchor.addEventListener('click',anchorEvent);
};
//adding the section id and nav-data as list items in the ul tag
for (i of sections){
  const list = document.createElement('li');
  const content = i.dataset.nav;
  const id = i.id;
  list.innerHTML = `<a class= 'menu__link' href= '#${id}'>${content}</a>`;
  navList.append(list);
};

function sectionInView (sec){
  let secPos = sec.getBoundingClientRect();
  return (secPos.top >= 0 && secPos.left >= 0 &&
          secPos.bottom/2 <= (window.innerHeight || document.documentElement.clientHeight) &&
          secPos.right <= (window.innerWidth || document.documentElement.clientWidth)
);}


function activeSecWhileScrolling() {
  for (i of sections) {
    if (sectionInView(i)){
      if (!(i.classList.contains('your-active-class'))){
        i.classList.add('your-active-class');
      }
    }else {
      i.classList.remove('your-active-class');
    }
  }
}
//smooth scrolling with the helper functions
document.querySelectorAll('a[href^="#"]').forEach(aTag);
//highlighting the active section while scrolling
document.addEventListener('scroll',activeSecWhileScrolling);
//return page to top when refreshing
history.scrollRestoration = 'manual';
