const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = overlay.getElementsByTagName('li');

function navAnimation(toRemove,toAdd)
{
    
    for(let i=0;0<navItems.length;i++)
    {
        const el=document.getElementById(navItems[i].id);
        el.classList.replace(`slide-${toRemove}-${i+1}`,`slide-${toAdd}-${i+1}`);
    }
    
}
function toggleNav()
{
    menuBars.classList.toggle('change');
    // Toggle Menu
    overlay.classList.toggle('overlay-active') //overlay-active used as boolean

    if(overlay.classList.contains('overlay-active'))
    {
        
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');// (to remove, toadd)
        navAnimation('out','in')        // (to remove, toadd)
    }
    else
    {
        overlay.classList.replace('overlay-slide-right','overlay-slide-left') 
        navAnimation('in','out')
    }
}
// Event Listners
menuBars.addEventListener('click', toggleNav);
for (let i=0; i<navItems.length;i++)
{
    const el=document.getElementById(navItems[i].id);
    el.addEventListener('click',toggleNav)
}