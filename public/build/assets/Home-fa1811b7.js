import{W as i,r as m,j as e,a as d}from"./app-1c6321e0.js";import{C as g}from"./CustomizedHtmlSelect-48e2cf1f.js";import{a as n}from"./AuthenticatedLayout-40014222.js";import"./ApplicationLogo-ba8eb19d.js";const y=({auth:t,communityPostCategoryOptions:a,communityPosts:p})=>{const{data:s,setData:l,post:c}=i({selectedCategory:""});m.useEffect(()=>{console.log(s),(s==null?void 0:s.selectedCategory)!==""&&c(route("communitypost.listbycategory"))},[s==null?void 0:s.selectedCategory]);const o=r=>{l("selectedCategory",r)};return e.jsxs(n,{user:t.user,children:[e.jsx(d,{title:"Community Post"}),e.jsxs("div",{className:"justify-center items-center h-screen",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsx("div",{className:"p-4",children:e.jsx("img",{src:"uploads/save4.jpg",alt:"Image 1",className:"w-full h-96"})}),e.jsx("div",{className:"p-4 md:mr-10 lg:mt-48",children:e.jsx(g,{options:a,placeHolder:"Select Category",onChange:o,selectedCategory:s==null?void 0:s.AuthenticatedLayoutselectedCategory,viewState:!0})}),e.jsx("div",{className:"p-4",children:e.jsx("img",{src:"uploads/save5.jpg",alt:"Image 1",className:"w-full h-96"})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsx("h1",{children:"Gello"}),e.jsx("div",{className:"p-4",children:e.jsx("img",{src:"uploads/homeicon1.png",alt:"Image 1",className:"w-full h-96"})})]})]})]})};export{y as default};