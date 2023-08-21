import{a}from"./axios.4a70c6fc.js";const o=await a.get("http://localhost:3003/login",{withCredentials:!0}).then(t=>t.data).catch(t=>{});o.mas||(window.location.href="/");
