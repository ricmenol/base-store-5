import{i as d}from"./chunk-G2J2T2QU-DCkEj1HJ.js";import{a5 as r,g as v,i as b,l as j,b as y,r as _,j as t,aB as S}from"./index-DkzW1lbC.js";import{D as P,c as C,a as L}from"./chunk-GE4APTT2-DwZqUMYj.js";var T=()=>{const{store:n,isPending:a,isError:o,error:c}=v({fields:"+supported_currencies"}),u=n==null?void 0:n.supported_currencies,{regions:e,isPending:i,isError:s,error:l}=b({fields:"id,name,currency_code",limit:999}),{price_preferences:m,isPending:f,isError:g,error:h}=j({}),p=!!u&&!!e&&!!m&&!a&&!i&&!f;if(s)throw l;if(o)throw c;if(g)throw h;return p?{regions:e,currencies:u,pricePreferences:m,isReady:p}:{regions:void 0,currencies:void 0,pricePreferences:void 0,isReady:!1}},R=L(),B=({currencies:n=[],regions:a=[],pricePreferences:o=[]})=>{const{t:c}=y();return _.useMemo(()=>[R.column({id:c("fields.title"),header:c("fields.title"),cell:e=>{const i=e.row.original;return d(i)?t.jsx(P.ReadonlyCell,{context:e,children:t.jsxs("div",{className:"flex h-full w-full items-center gap-x-2 overflow-hidden",children:[t.jsx(S,{src:i.thumbnail,size:"small"}),t.jsx("span",{className:"truncate",children:i.title})]})}):t.jsx(P.ReadonlyCell,{context:e,color:"normal",children:t.jsx("div",{className:"flex h-full w-full items-center gap-x-2 overflow-hidden",children:t.jsx("span",{className:"truncate",children:i.title})})})},disableHiding:!0}),...C({currencies:n.map(e=>e.currency_code),regions:a,pricePreferences:o,isReadyOnly:e=>{const i=e.row.original;return d(i)},getFieldName:(e,i)=>{var l;const s=e.row.original;return d(s)?null:(l=e.column.id)!=null&&l.startsWith("currency_prices")?`products.${s.product_id}.variants.${s.id}.currency_prices.${i}.amount`:`products.${s.product_id}.variants.${s.id}.region_prices.${i}.amount`},t:c})],[c,n,a,o])},x=r.object({id:r.string(),name:r.string()}),F=r.object({customer_group_id:r.array(x).nullish()}),w=r.object({amount:r.string().or(r.number()).optional()}),E=r.object({amount:r.string().or(r.number()).optional()}),D=r.object({currency_prices:r.record(w.optional()),region_prices:r.record(E.optional())}),$=r.record(D),M=r.record(r.object({variants:$})),G=r.object({amount:r.string().or(r.number()).optional(),id:r.string().nullish()}),N=r.object({amount:r.string().or(r.number()).optional(),id:r.string().nullish()}),U=r.record(r.object({currency_prices:r.record(G.optional()),region_prices:r.record(N.optional())})),O=r.record(r.object({variants:U}));export{M as P,F as a,B as b,O as c,T as u};
