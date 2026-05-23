import{c as f,W as d,z as _,r as l}from"./index-D9puGUag.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=f("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=f("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),n={hide_feed:!1,disable_posting:!1,disable_comments:!1,team_only_mode:!1,disable_team_chat:!1,private_profile:!1,disable_image_uploads:!1,disable_challenges_from_strangers:!1,locked_by_parent:!1};async function m(e){const{data:s,error:a}=await d.from("profiles").select("parental_controls").eq("user_id",e).maybeSingle();if(a)throw a;return{...n,...(s==null?void 0:s.parental_controls)||{}}}async function h(e,s){const{error:a}=await d.from("profiles").update({parental_controls:s}).eq("user_id",e);if(a)throw a}let t=null;const c=new Set;function b(e,s){t={userId:e,controls:s},c.forEach(a=>a(s))}function I(){const{user:e}=_(),[s,a]=l.useState(t&&e&&t.userId===e.id?t.controls:n),[u,o]=l.useState(!t||t.userId!==(e==null?void 0:e.id));return l.useEffect(()=>{if(!e){a(n),o(!1);return}t&&t.userId===e.id?(a(t.controls),o(!1)):m(e.id).then(r=>{t={userId:e.id,controls:r},a(r)}).catch(()=>a(n)).finally(()=>o(!1));const i=r=>a(r);return c.add(i),()=>{c.delete(i)}},[e]),{controls:s,loading:u}}export{y as B,n as D,g as I,m as g,b as n,h as s,I as u};
