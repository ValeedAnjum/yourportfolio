# [YourPortfolio](https://valeedanjum.github.io/yourportfolio/)


[YourPortfolio](https://valeedanjum.github.io/yourportfolio/) is a readymade react portfolio template that could be used to develop portfolio sites in minutes just changing values of config.js.

## Preview

[![YourPortfolio Preview](https://raw.githubusercontent.com/ValeedAnjum/yourportfolio/master/public/img/yourportfolio.png)](https://valeedanjum.github.io/yourportfolio/)
**[View Live Preview](https://valeedanjum.github.io/yourportfolio/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ValeedAnjum/yourportfolio/blob/master/LICENSE)

# How To Use

You can change the whole look of the template just changing values in src/config/config.js

## Values


```bash
export const configuration = {
    Navbar:{
        NavbarTitle:'Valeed Anjum',
        NabarOptions:['portfolio','about','contact']
    },
    Masthead:{
        MastheadTitle:'Valeed Anjum Siddiqui',
        Labels:['seo expert','react developer','freelancer']
    },
    Portfolio:{
        PortfolioTitle:'my work',
        PortfolioItems:[
            {image:'img/portfolio/cabin.png',name:'cabin',des:'des cabin'},
            {image:'img/portfolio/cake.png',name:'cake',des:'des cake'},
            {image:'img/portfolio/circus.png',name:'circus',des:'des circus'},
            {image:'img/portfolio/game.png',name:'game',des:'des game'},
            {image:'img/portfolio/safe.png',name:'safe',des:'des safe'},
            {image:'img/portfolio/submarine.png',name:'submaribe',des:'des submaribe'},
        ]
    },
    About:{
        AboutTitle:'About ok',
        AboutMe1Sec:`Freelancer is a free bootstrap theme created by Start Bootstrap. 
        The download includes the complete source files including HTML, CSS, and JavaScript as 
        well as optional SASS stylesheets for easy customization.`,
        AboutMe2Sec:`You can create your own custom avatar for the masthead, change the icon in the dividers,
        and add your email address to the contact form to make it fully functional!`,
        ButtonName:'Download !',
        ButtonIconFontAwesome:'fas fa-download mr-2',
        ButtonSite:'https://github.com/ValeedAnjum/yourportfolio'
    },
    Footer:{
        section1:{
            title:'Location',
            address1:'Siddiqui House',
            address2:'Mohalla Gharibabad'
        },
        section2:{
            title:'Around the Web',
            facebook:'https://web.facebook.com/valeed.anjum.1',
            twitter:'https://twitter.com/ValeedAnjum2',
            dribbble:'https://www.linkedin.com',
            linkedin:'https://dribbble.com'
        },
        section3:{
            title:'yourportfolio',
            description:'YOURPORTFOLIO is free to use, MIT licensed theme created by Valeed Anjum.'
        }
    }
}
```

## Usage

```python

git clone https://github.com/ValeedAnjum/yourportfolio.git
run "npm install" command in project directory
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
