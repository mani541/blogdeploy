(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GuQN:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),n=(t("f3/d"),t("0mN4"),t("Wbzz")),c=t("9eSz"),i=t.n(c),d=function(e){var a=e.article;return r.a.createElement(n.Link,{to:"/article/"+a.node.slug,className:"uk-link-reset"},r.a.createElement("div",{className:"uk-card uk-card-muted"},r.a.createElement("div",{className:"uk-card-media-top"},r.a.createElement(i.a,{fixed:a.node.image.childImageSharp.fixed,imgStyle:{position:"static"}})),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("p",{id:"category",className:"uk-text-uppercase"},a.node.category.name),r.a.createElement("p",{id:"title",className:"uk-text-large"},a.node.title),r.a.createElement("div",null,r.a.createElement("hr",{className:"uk-divider-small"}),r.a.createElement("div",{className:"uk-grid-small uk-flex-left","data-uk-grid":"true"},r.a.createElement("div",null,a.node.user.image&&r.a.createElement(i.a,{fixed:a.node.user.image.childImageSharp.fixed,imgStyle:{position:"static",borderRadius:"50%"}})),r.a.createElement("div",{className:"uk-width-expand"},r.a.createElement("p",{className:"uk-margin-remove-bottom"},a.node.user.username)))))))};a.a=function(e){var a=e.articles,t=Math.ceil(a.length/5),l=a.slice(0,t),n=a.slice(t,a.length);return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-child-width-1-2@s","data-uk-grid":"true"},r.a.createElement("div",null,l.map((function(e,a){return r.a.createElement(d,{article:e,key:"article__left__"+e.node.slug})}))),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-child-width-1-2@m uk-grid-match","data-uk-grid":!0},n.map((function(e,a){return r.a.createElement(d,{article:e,key:"article__right__"+e.node.slug})}))))))}},Mdw5:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return d}));t("f3/d");var l=t("q1tI"),r=t.n(l),n=t("GuQN"),c=t("Bl7J"),i=t("vrFN"),d="1521545137";a.default=function(e){var a=e.data,t=a.articles.edges,l=a.category.name;return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:l+" - Strapi Gatsby Blog Starter",description:l+" on my blog"}),r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-large"},r.a.createElement("h1",null,l),r.a.createElement(n.a,{articles:t}))))}}}]);
//# sourceMappingURL=component---src-templates-category-js-e5f7d206122b41596ed4.js.map