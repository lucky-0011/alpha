import{i as g,r as c,f as h,g as x,x as u}from"./index-6ZO6jKQK.js";import{n as d,c as w}from"./if-defined-D_715Pgs.js";import"./index-BPEnBOwp.js";import"./index-BwvL3oWg.js";import"./index-sJP39poa.js";const m=g`
  :host {
    display: block;
  }

  :host > button,
  :host > wui-flex {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var l=function(o,t,r,s){var n=arguments.length,e=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,r):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,r,s);else for(var p=o.length-1;p>=0;p--)(a=o[p])&&(e=(n<3?a(e):n>3?a(t,r,e):a(t,r))||e);return n>3&&e&&Object.defineProperty(t,r,e),e};let i=class extends x{constructor(){super(...arguments),this.text="",this.loading=!1}render(){return this.loading?u` <wui-flex alignItems="center" gap="xxs" padding="xs">
        <wui-shimmer width="24px" height="24px"></wui-shimmer>
        <wui-shimmer width="40px" height="20px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:u`
      <button>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:u`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};i.styles=[c,h,m];l([d()],i.prototype,"imageSrc",void 0);l([d()],i.prototype,"text",void 0);l([d({type:Boolean})],i.prototype,"loading",void 0);i=l([w("wui-token-button")],i);
