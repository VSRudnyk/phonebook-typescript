"use strict";(self.webpackChunkphonebook_typescript=self.webpackChunkphonebook_typescript||[]).push([[495],{9495:function(n,e,i){i.r(e),i.d(e,{default:function(){return Q}});var t,r,a,s,d,o,l,c,u,m,x,h=i(7762),p=i(9439),Z=i(5218),f=i(8402),g=i(2791),j=i(1413),b=i(4165),v=i(5861),y=i(9195),w=i(4695),P=i(6727),C=i(5527),k=i(4554),z=i(1889),S=i(2354),q=i(890),L=i(3736),A=i(168),F=i(7691),N=F.ZP.form(t||(t=(0,A.Z)(["\n  @media screen and (min-width: 780px) {\n    width: 450px;\n  }\n"]))),_=(F.ZP.h2(r||(r=(0,A.Z)(["\n  margin-bottom: 25px;\n"]))),i(3329)),R=function(n){var e,i,t=n.action,r=n.loading,a=P.Ry().shape({name:P.Z_().required(),number:P.Z_().required("This field is Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid")}),s=(0,y.cI)({resolver:(0,w.X)(a)}),d=s.register,o=s.handleSubmit,l=s.resetField,c=s.formState.errors,u=function(){var n=(0,v.Z)((0,b.Z)().mark((function n(e){return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(e);case 2:l("name"),l("number");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsx)(N,{onSubmit:o(u),children:(0,_.jsx)(C.Z,{elevation:3,sx:{width:"auto"},children:(0,_.jsxs)(k.Z,{sx:{width:"auto"},px:3,py:2,children:[(0,_.jsxs)(z.ZP,{children:[(0,_.jsxs)(z.ZP,{item:!0,xs:5,sm:5,children:[(0,_.jsx)(S.Z,(0,j.Z)((0,j.Z)({required:!0,id:"name",label:"Name",size:"small",fullWidth:!0,margin:"dense"},d("name")),{},{error:!!c.name})),(0,_.jsx)(q.Z,{variant:"inherit",color:"textSecondary",children:null===(e=c.name)||void 0===e?void 0:e.message})]}),(0,_.jsxs)(z.ZP,{item:!0,xs:5,sm:5,children:[(0,_.jsx)(S.Z,(0,j.Z)((0,j.Z)({required:!0,id:"number",label:"Number",size:"small",fullWidth:!0,margin:"dense"},d("number")),{},{error:!!c.number})),(0,_.jsx)(q.Z,{variant:"inherit",color:"textSecondary",children:null===(i=c.number)||void 0===i?void 0:i.message})]})]}),(0,_.jsx)(k.Z,{mt:1,children:(0,_.jsx)(L.Z,{variant:"contained",color:"primary",type:"submit",disabled:r,size:"small",children:"Add"})})]})})})},T=F.ZP.ul(a||(a=(0,A.Z)(["\n  padding-left: 0;\n  list-style: none;\n  margin-top: 25px;\n"]))),W=F.ZP.li(s||(s=(0,A.Z)(["\n  font-size: 16px;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n  }\n"]))),D=F.ZP.div(d||(d=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),G=F.ZP.div(o||(o=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n"]))),I=F.ZP.p(l||(l=(0,A.Z)(["\n  margin: 0;\n"]))),X=i(3867),B=function(n){var e=n.id,i=n.name,t=n.number,r=(0,X.Nt)(),a=(0,p.Z)(r,2),s=a[0],d=a[1].isLoading;return(0,_.jsx)(W,{children:(0,_.jsxs)(D,{children:[(0,_.jsxs)(G,{children:[(0,_.jsx)(I,{children:i}),(0,_.jsx)(I,{children:t})]}),(0,_.jsxs)(L.Z,{variant:"outlined",type:"button",disabled:d,size:"small",color:"primary",onClick:function(){return s(e)},children:[d&&(0,_.jsx)(f.s5,{width:"10"})," Delete"]})]})})},E=function(n){var e=n.items;return(0,_.jsx)(_.Fragment,{children:e&&(0,_.jsx)(T,{children:e.map((function(n){return(0,_.jsx)(B,(0,j.Z)({},n),n.id)}))})})},H=F.ZP.div(c||(c=(0,A.Z)([""]))),J=function(n){var e=n.value,i=n.onChange;return(0,_.jsx)(H,{children:(0,_.jsx)(S.Z,{id:"outlined-basic",label:"Find contact by name",variant:"outlined",onChange:function(n){return i(n.target.value)},value:e,autoComplete:"off",size:"small"})})},K=F.ZP.div(u||(u=(0,A.Z)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 25px;\n  padding-left: 10px;\n  padding-right: 10px;\n\n  @media screen and (min-width: 780px) {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n"]))),M=F.ZP.h1(m||(m=(0,A.Z)(["\n  margin-bottom: 26px;\n  @media screen and (max-width: 779px) {\n    text-align: center;\n  }\n"]))),O=F.ZP.h2(x||(x=(0,A.Z)(["\n  margin-top: 25px;\n  margin-bottom: 25px;\n"])));function Q(){var n=(0,g.useState)(""),e=(0,p.Z)(n,2),i=e[0],t=e[1],r=(0,X.pG)(""),a=r.data,s=r.isLoading,d=(0,X.Tn)(),o=(0,p.Z)(d,2),l=o[0],c=o[1].isLoading,u=function(){var n=i.toLowerCase();if(a)return a.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,_.jsx)(K,{children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(M,{children:"Phonebook"}),(0,_.jsx)(O,{children:"Add new contact"}),(0,_.jsx)(R,{action:function(n){var e,i=(0,h.Z)(a);try{for(i.s();!(e=i.n()).done;){if(e.value.name===n.name)return void Z.Am.error("".concat(n.name," is already in contacts."))}}catch(t){i.e(t)}finally{i.f()}l(n),Z.Am.success("Contact ".concat(n.name," has been added"))},loading:c}),(0,_.jsx)(O,{children:"Contacts"}),(0,_.jsx)(J,{value:i,onChange:function(n){t(n)}}),s?(0,_.jsx)(f.Nx,{color:"grey"}):(0,_.jsx)(E,{items:u})]})})}}}]);
//# sourceMappingURL=495.67a5fd02.chunk.js.map