import{aZ as J,a_ as I,i as B,g as E,x as c,r as ee,l as L,a$ as f,m as q,R as ie,a6 as re,j as oe,k as ne,W as se}from"./index-6ZO6jKQK.js";import{U as H,n as p,c as Y,o as K,r as N}from"./if-defined-D_715Pgs.js";import"./index-sJP39poa.js";import"./index-B_cyY1fP.js";import"./index-BPEnBOwp.js";import"./index-BwvL3oWg.js";var S={exports:{}},ae=S.exports,Q;function ue(){return Q||(Q=1,function(e,t){(function(i,o){e.exports=o()})(ae,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var o=["th","st","nd","rd"],n=i%100;return"["+i+(o[(n-20)%10]||o[n]||o[0])+"]"}}})}(S)),S.exports}var le=ue();const ce=J(le);var F={exports:{}},de=F.exports,X;function pe(){return X||(X=1,function(e,t){(function(i,o){e.exports=o()})(de,function(){return function(i,o,n){i=i||{};var r=o.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(u,d,h,x){return r.fromToBase(u,d,h,x)}n.en.relativeTime=s,r.fromToBase=function(u,d,h,x,y){for(var m,D,R,k=h.$locale().relativeTime||s,U=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],te=U.length,O=0;O<te;O+=1){var $=U[O];$.d&&(m=x?n(u).diff(h,$.d,!0):h.diff(u,$.d,!0));var A=(i.rounding||Math.round)(Math.abs(m));if(R=m>0,A<=$.r||!$.r){A<=1&&O>0&&($=U[O-1]);var V=k[$.l];y&&(A=y(""+A)),D=typeof V=="string"?V.replace("%d",A):V(A,d,$.l,R);break}}if(d)return D;var W=R?k.future:k.past;return typeof W=="function"?W(D):W.replace("%s",D)},r.to=function(u,d){return a(u,d,this,!0)},r.from=function(u,d){return a(u,d,this)};var l=function(u){return u.$u?n.utc():n()};r.toNow=function(u){return this.to(l(this),u)},r.fromNow=function(u){return this.from(l(this),u)}}})}(F)),F.exports}var he=pe();const me=J(he);var j={exports:{}},ge=j.exports,Z;function fe(){return Z||(Z=1,function(e,t){(function(i,o){e.exports=o()})(ge,function(){return function(i,o,n){n.updateLocale=function(r,s){var a=n.Ls[r];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})}(j)),j.exports}var we=fe();const xe=J(we);I.extend(me);I.extend(xe);const ye={...ce,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},ve=["January","February","March","April","May","June","July","August","September","October","November","December"];I.locale("en-web3-modal",ye);const z={getMonthNameByIndex(e){return ve[e]},getYear(e=new Date().toISOString()){return I(e).year()},getRelativeDateFromNow(e){return I(e).locale("en-web3-modal").fromNow(!0)},formatDate(e,t="DD MMM"){return I(e).format(t)}},be=3,$e=["receive","deposit","borrow","claim"],Te=["withdraw","repay","burn"],C={getTransactionGroupTitle(e,t){const i=z.getYear(),o=z.getMonthNameByIndex(t);return e===i?o:`${o} ${e}`},getTransactionImages(e){const[t,i]=e,o=!!t&&(e==null?void 0:e.every(s=>!!s.nft_info)),n=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!o?[this.getTransactionImage(i),this.getTransactionImage(t)]:n?e.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:C.getTransactionTransferTokenType(e),url:C.getTransactionImageURL(e)}},getTransactionImageURL(e){var n,r,s,a,l;let t;const i=!!(e!=null&&e.nft_info),o=!!(e!=null&&e.fungible_info);return e&&i?t=(s=(r=(n=e==null?void 0:e.nft_info)==null?void 0:n.content)==null?void 0:r.preview)==null?void 0:s.url:e&&o&&(t=(l=(a=e==null?void 0:e.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),t},getTransactionTransferTokenType(e){if(e!=null&&e.fungible_info)return"FUNGIBLE";if(e!=null&&e.nft_info)return"NFT"},getTransactionDescriptions(e){var h,x,y;const t=(h=e==null?void 0:e.metadata)==null?void 0:h.operationType,i=e==null?void 0:e.transfers,o=((x=e==null?void 0:e.transfers)==null?void 0:x.length)>0,n=((y=e==null?void 0:e.transfers)==null?void 0:y.length)>1,r=o&&(i==null?void 0:i.every(m=>!!(m!=null&&m.fungible_info))),[s,a]=i;let l=this.getTransferDescription(s),u=this.getTransferDescription(a);if(!o)return(t==="send"||t==="receive")&&r?(l=H.getTruncateString({string:e==null?void 0:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),u=H.getTruncateString({string:e==null?void 0:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,u]):[e.metadata.status];if(n)return i.map(m=>this.getTransferDescription(m)).reverse();let d="";return $e.includes(t)?d="+":Te.includes(t)&&(d="-"),l=d.concat(l),[l]},getTransferDescription(e){var i;let t="";return e&&(e!=null&&e.nft_info?t=((i=e==null?void 0:e.nft_info)==null?void 0:i.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var o;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(o=e==null?void 0:e.fungible_info)==null?void 0:o.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(be):null}};var G;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(G||(G={}));const _e=B`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var T=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let v=class extends E{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,i]=this.images,o=(t==null?void 0:t.type)==="NFT",n=i!=null&&i.url?i.type==="NFT":o,r=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${s};
    `,c`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,i]=this.images,o=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||i!=null&&i.url)?c`<div class="swap-images-container">
        ${t!=null&&t.url?c`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${i!=null&&i.url?c`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?c`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:o==="NFT"?c`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:c`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",i;return i=this.getIcon(),this.status&&(t=this.getStatusColor()),i?c`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${i}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};v.styles=[_e];T([p()],v.prototype,"type",void 0);T([p()],v.prototype,"status",void 0);T([p()],v.prototype,"direction",void 0);T([p({type:Boolean})],v.prototype,"onlyDirectionIcon",void 0);T([p({type:Array})],v.prototype,"images",void 0);T([p({type:Object})],v.prototype,"secondImage",void 0);v=T([Y("wui-transaction-visual")],v);const De=B`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var w=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let g=class extends E{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return c`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${K(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${K(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${G[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[0];return t?c`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[1];return t?c`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};g.styles=[ee,De];w([p()],g.prototype,"type",void 0);w([p({type:Array})],g.prototype,"descriptions",void 0);w([p()],g.prototype,"date",void 0);w([p({type:Boolean})],g.prototype,"onlyDirectionIcon",void 0);w([p()],g.prototype,"status",void 0);w([p()],g.prototype,"direction",void 0);w([p({type:Array})],g.prototype,"images",void 0);w([p({type:Array})],g.prototype,"price",void 0);w([p({type:Array})],g.prototype,"amount",void 0);w([p({type:Array})],g.prototype,"symbol",void 0);g=w([Y("wui-transaction-list-item")],g);const Ae=B`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Ce=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let P=class extends E{render(){return c`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};P.styles=[ee,Ae];P=Ce([Y("wui-transaction-list-item-loader")],P);const Ie=B`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var _=function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const M="last-transaction",Re=7;let b=class extends E{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=L.state.activeCaipAddress,this.transactionsByYear=f.state.transactionsByYear,this.loading=f.state.loading,this.empty=f.state.empty,this.next=f.state.next,f.clearCursor(),this.unsubscribe.push(L.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(f.resetTransactions(),f.fetchTransactions(t)),this.caipAddress=t}),L.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),f.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){f.resetTransactions(),this.caipAddress&&f.fetchTransactions(q.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const o=parseInt(i,10),n=new Array(12).fill(null).map((r,s)=>{var u;const a=C.getTransactionGroupTitle(o,s),l=(u=this.transactionsByYear[o])==null?void 0:u[s];return{groupTitle:a,transactions:l}}).filter(({transactions:r})=>r).reverse();return n.map(({groupTitle:r,transactions:s},a)=>{const l=a===n.length-1;return s?c`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${l?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${r}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(s,l)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,i){const{date:o,descriptions:n,direction:r,isAllNFT:s,images:a,status:l,transfers:u,type:d}=this.getTransactionListItemProps(t),h=(u==null?void 0:u.length)>1;return(u==null?void 0:u.length)===2&&!s?c`
        <wui-transaction-list-item
          date=${o}
          .direction=${r}
          id=${i&&this.next?M:""}
          status=${l}
          type=${d}
          .images=${a}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `:h?u.map((y,m)=>{const D=C.getTransferDescription(y),R=i&&m===u.length-1;return c` <wui-transaction-list-item
          date=${o}
          direction=${y.direction}
          id=${R&&this.next?M:""}
          status=${l}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[a[m]]}
          .descriptions=${[D]}
        ></wui-transaction-list-item>`}):c`
      <wui-transaction-list-item
        date=${o}
        .direction=${r}
        id=${i&&this.next?M:""}
        status=${l}
        type=${d}
        .images=${a}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `}templateTransactions(t,i){return t.map((o,n)=>{const r=i&&n===t.length-1;return c`${this.templateRenderTransaction(o,r)}`})}emptyStateActivity(){return c`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return c`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?c`${this.emptyStateAccount()}`:c`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(Re).fill(c` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){ie.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=re.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(f.fetchTransactions(q.getPlainAddress(this.caipAddress)),oe.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:q.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:ne(L.state.activeChain)===se.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,o,n;(i=this.paginationObserver)==null||i.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(`#${M}`);t&&((n=this.paginationObserver)==null||n.observe(t))}getTransactionListItemProps(t){var l,u,d,h,x;const i=z.formatDate((l=t==null?void 0:t.metadata)==null?void 0:l.minedAt),o=C.getTransactionDescriptions(t),n=t==null?void 0:t.transfers,r=(u=t==null?void 0:t.transfers)==null?void 0:u[0],s=!!r&&((d=t==null?void 0:t.transfers)==null?void 0:d.every(y=>!!y.nft_info)),a=C.getTransactionImages(n);return{date:i,direction:r==null?void 0:r.direction,descriptions:o,isAllNFT:s,images:a,status:(h=t.metadata)==null?void 0:h.status,transfers:n,type:(x=t.metadata)==null?void 0:x.operationType}}};b.styles=Ie;_([p()],b.prototype,"page",void 0);_([N()],b.prototype,"caipAddress",void 0);_([N()],b.prototype,"transactionsByYear",void 0);_([N()],b.prototype,"loading",void 0);_([N()],b.prototype,"empty",void 0);_([N()],b.prototype,"next",void 0);b=_([Y("w3m-activity-list")],b);
