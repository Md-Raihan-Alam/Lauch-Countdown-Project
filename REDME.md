# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users will be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [TypeScript](https://www.typescriptlang.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

### What I learned

Some times I have to add custom css to tailwind for my needed and countdowon time calculation

To see how you can add code snippets, see below:

```Tailwind
@layer base{
    .gradientColor{
        background: rgb(25,26,36);
        background: linear-gradient(180deg, rgba(25,26,36,1) 50%, rgba(36,37,43,0.9755252442773985) 50%);
    }
```
```TypeScript
    const today=new Date().getTime();
    const remTime=finalTime-today;
    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMinute=60*1000;
    let d=Math.floor(remTime/oneDay);
    let h=Math.floor((remTime%oneDay)/oneHour);
    let m=Math.floor((remTime%oneHour)/oneMinute);
    let s=Math.floor((remTime%oneMinute)/1000);
```


### Continued development

Gonna target a api call type project next time


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Md-Raihan-Alam](https://www.frontendmentor.io/profile/Md-Raihan-Alam)
- Twitter - [@@MdRaiha48799193](https://twitter.com/MdRaiha48799193)
