const t={btnStart:document.querySelector(" [data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null,n=!1;t.btnStart.addEventListener("click",(function(){if(n)return;n=!0,e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("click")}),1e3)})),t.btnStop.addEventListener("click",(function(){if(!n)return;n=!1,clearInterval(e),console.log("stop")}));
//# sourceMappingURL=01-color-switcher.768fd1ae.js.map
