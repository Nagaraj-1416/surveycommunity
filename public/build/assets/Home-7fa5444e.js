import{W as i,r as m,j as s,a as d}from"./app-38961b87.js";import{C as n}from"./CustomizedHtmlSelect-5c02a309.js";import{a as g}from"./AuthenticatedLayout-e3120d00.js";import"./ApplicationLogo-c486d3f4.js";const x=({auth:t,communityPostCategoryOptions:a,communityPosts:u})=>{const{data:e,setData:o,post:r}=i({selectedCategory:""});m.useEffect(()=>{console.log(e),(e==null?void 0:e.selectedCategory)!==""&&r(route("communitypost.listbycategory"))},[e==null?void 0:e.selectedCategory]);const c=l=>{o("selectedCategory",l)};return s.jsxs(g,{user:t.user,children:[s.jsx(d,{title:"Community Post"}),s.jsx("div",{className:"justify-center items-center h-screen",children:s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[s.jsx("div",{className:"p-4",children:s.jsx("img",{src:"uploads/save4.jpg",alt:"Image 1",className:"w-full h-96"})}),s.jsx("div",{className:"p-4 md:mr-10 lg:mt-48",children:s.jsx(n,{options:a,placeHolder:"Select Category",onChange:c,selectedCategory:e==null?void 0:e.AuthenticatedLayoutselectedCategory,viewState:!0})}),s.jsx("div",{className:"p-4",children:s.jsx("img",{src:"uploads/save5.jpg",alt:"Image 1",className:"w-full h-96"})})]})})]})};export{x as default};